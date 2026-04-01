"""
Webhook engine for PiEEG: evaluates trigger rules against live EEG data
and fires HTTP callbacks when conditions are met.

Runs as an async task on the server, subscribing to the acquisition queue.
Rules are persisted to a JSON file on disk.
"""

import asyncio
import json
import logging
import time
import uuid
from concurrent.futures import ThreadPoolExecutor
from pathlib import Path
from string import Template
from urllib.request import Request, urlopen

import numpy as np
from scipy import signal as sp_signal

logger = logging.getLogger("pieeg.webhooks")

SAMPLE_RATE = 250
FFT_SIZE = 256  # ~1 s window at 250 Hz
EVAL_INTERVAL = 1.0  # evaluate rules every N seconds

# Frequency bands (Hz)
BANDS = {
    "delta": (0.5, 4.0),
    "theta": (4.0, 8.0),
    "alpha": (8.0, 13.0),
    "beta": (13.0, 30.0),
    "gamma": (30.0, 45.0),
}

TRIGGER_TYPES = [
    "band_power_above",
    "band_power_below",
    "amplitude_above",
    "amplitude_below",
    "band_ratio_above",
    "band_ratio_below",
]

DEFAULT_RULES_PATH = Path("webhooks.json")

# Hanning window (precomputed)
_hanning = np.hanning(FFT_SIZE).astype(np.float64)
_freqs = np.fft.rfftfreq(FFT_SIZE, d=1.0 / SAMPLE_RATE)


def _band_power(psd: np.ndarray, band: str) -> float:
    """Compute power in a frequency band from one-sided PSD."""
    lo, hi = BANDS[band]
    mask = (_freqs >= lo) & (_freqs <= hi)
    if not np.any(mask):
        return 0.0
    return float(np.mean(psd[mask]))


def _compute_psd(samples: np.ndarray) -> np.ndarray:
    """Compute one-sided PSD (µV²/Hz) from a 1-D array of FFT_SIZE samples."""
    windowed = samples * _hanning
    spectrum = np.fft.rfft(windowed)
    psd = (np.abs(spectrum) ** 2) / (SAMPLE_RATE * FFT_SIZE)
    psd[1:-1] *= 2  # double non-DC, non-Nyquist
    return psd


class WebhookRule:
    """A single webhook trigger rule."""

    __slots__ = (
        "id", "name", "enabled", "trigger_type", "params",
        "url", "method", "headers", "body_template",
        "cooldown", "last_fired", "fire_count",
    )

    def __init__(self, *, id: str | None = None, name: str = "",
                 enabled: bool = True, trigger_type: str = "band_power_above",
                 params: dict | None = None,
                 url: str = "", method: str = "POST",
                 headers: dict | None = None, body_template: str = "",
                 cooldown: float = 10.0, last_fired: float = 0.0,
                 fire_count: int = 0):
        self.id = id or str(uuid.uuid4())[:8]
        self.name = name
        self.enabled = enabled
        self.trigger_type = trigger_type
        self.params = params or {}
        self.url = url
        self.method = method
        self.headers = headers or {}
        self.body_template = body_template
        self.cooldown = cooldown
        self.last_fired = last_fired
        self.fire_count = fire_count

    def to_dict(self) -> dict:
        return {
            "id": self.id,
            "name": self.name,
            "enabled": self.enabled,
            "trigger_type": self.trigger_type,
            "params": self.params,
            "url": self.url,
            "method": self.method,
            "headers": self.headers,
            "body_template": self.body_template,
            "cooldown": self.cooldown,
            "last_fired": self.last_fired,
            "fire_count": self.fire_count,
        }

    @classmethod
    def from_dict(cls, d: dict) -> "WebhookRule":
        return cls(**{k: v for k, v in d.items() if k in cls.__slots__})


class WebhookEngine:
    """
    Evaluates webhook rules against live EEG data and fires HTTP callbacks.

    Subscribes to the acquisition queue, maintains a per-channel ring buffer,
    runs FFT every ~1 s, and evaluates all enabled rules.
    """

    def __init__(self, acquisition, num_channels: int = 16,
                 rules_path: Path | str = DEFAULT_RULES_PATH,
                 notify_callback=None):
        self._acq = acquisition
        self._num_channels = num_channels
        self._rules_path = Path(rules_path)
        self._rules: list[WebhookRule] = []
        self._notify = notify_callback  # async fn(event_dict)

        # Ring buffer: (num_channels, FFT_SIZE)
        self._buf = np.zeros((num_channels, FFT_SIZE), dtype=np.float64)
        self._write_idx = 0
        self._samples_in_buf = 0

        # HTTP executor (bounded to avoid runaway threads)
        self._http_pool = ThreadPoolExecutor(max_workers=2,
                                             thread_name_prefix="webhook-http")
        self._queue = acquisition.subscribe()
        self._load_rules()

    # ── Rule CRUD ──────────────────────────────────────────────

    def list_rules(self) -> list[dict]:
        return [r.to_dict() for r in self._rules]

    def get_rule(self, rule_id: str) -> dict | None:
        for r in self._rules:
            if r.id == rule_id:
                return r.to_dict()
        return None

    def create_rule(self, data: dict) -> dict:
        data.pop("id", None)
        data.pop("last_fired", None)
        data.pop("fire_count", None)
        rule = WebhookRule(**data)
        self._rules.append(rule)
        self._save_rules()
        logger.info("Rule created: %s (%s)", rule.name, rule.id)
        return rule.to_dict()

    def update_rule(self, rule_id: str, data: dict) -> dict | None:
        for r in self._rules:
            if r.id == rule_id:
                for key in ("name", "enabled", "trigger_type", "params",
                            "url", "method", "headers", "body_template",
                            "cooldown"):
                    if key in data:
                        setattr(r, key, data[key])
                self._save_rules()
                logger.info("Rule updated: %s (%s)", r.name, r.id)
                return r.to_dict()
        return None

    def delete_rule(self, rule_id: str) -> bool:
        for i, r in enumerate(self._rules):
            if r.id == rule_id:
                self._rules.pop(i)
                self._save_rules()
                logger.info("Rule deleted: %s", rule_id)
                return True
        return False

    # ── Persistence ────────────────────────────────────────────

    def _load_rules(self):
        if self._rules_path.exists():
            try:
                data = json.loads(self._rules_path.read_text())
                self._rules = [WebhookRule.from_dict(d) for d in data]
                logger.info("Loaded %d webhook rules from %s",
                            len(self._rules), self._rules_path)
            except Exception as e:
                logger.warning("Failed to load webhook rules: %s", e)
                self._rules = []
        else:
            self._rules = []

    def _save_rules(self):
        try:
            self._rules_path.write_text(
                json.dumps([r.to_dict() for r in self._rules], indent=2)
            )
        except Exception as e:
            logger.warning("Failed to save webhook rules: %s", e)

    # ── Main loop ──────────────────────────────────────────────

    async def run(self):
        """Main async loop: ingest frames, periodically evaluate rules."""
        loop = asyncio.get_event_loop()
        last_eval = 0.0

        while True:
            frame = await self._queue.get()
            channels = frame["channels"]

            # Write into ring buffer
            idx = self._write_idx % FFT_SIZE
            for ch in range(min(len(channels), self._num_channels)):
                self._buf[ch, idx] = channels[ch]
            self._write_idx += 1
            self._samples_in_buf = min(self._samples_in_buf + 1, FFT_SIZE)

            # Evaluate rules every EVAL_INTERVAL seconds
            now = time.monotonic()
            if now - last_eval < EVAL_INTERVAL:
                continue
            last_eval = now

            if self._samples_in_buf < FFT_SIZE:
                continue  # not enough data yet

            # Compute band powers for all channels
            band_powers = {}  # {ch: {band: power}}
            amplitudes = {}  # {ch: max_abs_amplitude}
            for ch in range(self._num_channels):
                # Extract ordered window from ring buffer
                start = self._write_idx % FFT_SIZE
                ordered = np.roll(self._buf[ch], -start)
                psd = _compute_psd(ordered)
                bp = {band: _band_power(psd, band) for band in BANDS}
                band_powers[ch] = bp
                amplitudes[ch] = float(np.max(np.abs(ordered)))

            # Evaluate each rule
            for rule in self._rules:
                if not rule.enabled:
                    continue
                if now - rule.last_fired < rule.cooldown:
                    continue

                triggered, value = self._evaluate_rule(
                    rule, band_powers, amplitudes
                )
                if triggered:
                    rule.last_fired = now
                    rule.fire_count += 1
                    self._save_rules()

                    event = {
                        "webhook_event": {
                            "rule_id": rule.id,
                            "rule_name": rule.name,
                            "trigger_type": rule.trigger_type,
                            "value": round(value, 4),
                            "threshold": rule.params.get("threshold", 0),
                            "ts": time.time(),
                        }
                    }
                    logger.info("Webhook fired: %s (value=%.2f)", rule.name, value)

                    # Notify dashboard
                    if self._notify:
                        try:
                            await self._notify(event)
                        except Exception:
                            pass

                    # Fire HTTP in background thread
                    if rule.url:
                        loop.run_in_executor(
                            self._http_pool,
                            self._fire_http, rule, value
                        )

    # ── Rule evaluation ────────────────────────────────────────

    def _evaluate_rule(self, rule: WebhookRule,
                       band_powers: dict, amplitudes: dict) -> tuple[bool, float]:
        """Returns (triggered: bool, measured_value: float)."""
        tt = rule.trigger_type
        p = rule.params
        ch = p.get("channel", 0)
        threshold = p.get("threshold", 0.0)

        if tt == "band_power_above":
            band = p.get("band", "alpha")
            val = self._get_band_value(band_powers, band, ch)
            return val > threshold, val

        elif tt == "band_power_below":
            band = p.get("band", "alpha")
            val = self._get_band_value(band_powers, band, ch)
            return val < threshold, val

        elif tt == "amplitude_above":
            val = self._get_amplitude(amplitudes, ch)
            return val > threshold, val

        elif tt == "amplitude_below":
            val = self._get_amplitude(amplitudes, ch)
            return val < threshold, val

        elif tt == "band_ratio_above":
            num_band = p.get("numerator", "alpha")
            den_band = p.get("denominator", "theta")
            val = self._get_ratio(band_powers, num_band, den_band, ch)
            return val > threshold, val

        elif tt == "band_ratio_below":
            num_band = p.get("numerator", "alpha")
            den_band = p.get("denominator", "theta")
            val = self._get_ratio(band_powers, num_band, den_band, ch)
            return val < threshold, val

        return False, 0.0

    def _get_band_value(self, band_powers: dict, band: str, ch) -> float:
        if ch == "avg":
            vals = [band_powers[c].get(band, 0)
                    for c in range(self._num_channels)]
            return sum(vals) / len(vals) if vals else 0.0
        return band_powers.get(int(ch), {}).get(band, 0.0)

    def _get_amplitude(self, amplitudes: dict, ch) -> float:
        if ch == "avg":
            vals = [amplitudes.get(c, 0) for c in range(self._num_channels)]
            return sum(vals) / len(vals) if vals else 0.0
        return amplitudes.get(int(ch), 0.0)

    def _get_ratio(self, band_powers: dict, num: str, den: str, ch) -> float:
        num_val = self._get_band_value(band_powers, num, ch)
        den_val = self._get_band_value(band_powers, den, ch)
        if den_val < 1e-9:
            return 0.0
        return num_val / den_val

    # ── HTTP delivery ──────────────────────────────────────────

    def _fire_http(self, rule: WebhookRule, value: float):
        """Send webhook HTTP request (runs in thread pool)."""
        try:
            body = self._render_body(rule, value)
            req = Request(
                rule.url,
                data=body.encode("utf-8") if body else None,
                method=rule.method,
            )
            req.add_header("Content-Type", "application/json")
            req.add_header("User-Agent", "PiEEG-Webhook/1.0")
            for k, v in rule.headers.items():
                req.add_header(k, v)
            with urlopen(req, timeout=10) as resp:
                logger.debug("Webhook %s → %d", rule.url, resp.status)
        except Exception as e:
            logger.warning("Webhook delivery failed (%s): %s", rule.url, e)

    def _render_body(self, rule: WebhookRule, value: float) -> str:
        """Render the body template with trigger variables."""
        if rule.body_template:
            tpl = Template(rule.body_template)
            return tpl.safe_substitute(
                trigger_type=rule.trigger_type,
                rule_name=rule.name,
                value=round(value, 4),
                threshold=rule.params.get("threshold", 0),
                channel=rule.params.get("channel", 0),
                band=rule.params.get("band", ""),
                ts=time.time(),
            )
        # Default JSON body
        return json.dumps({
            "event": rule.trigger_type,
            "rule": rule.name,
            "value": round(value, 4),
            "threshold": rule.params.get("threshold", 0),
            "channel": rule.params.get("channel", 0),
            "timestamp": time.time(),
        })

    # ── Test ───────────────────────────────────────────────────

    async def test_rule(self, rule_id: str) -> dict:
        """Fire a test webhook for a rule (ignores cooldown)."""
        for r in self._rules:
            if r.id == rule_id:
                loop = asyncio.get_event_loop()
                await loop.run_in_executor(
                    self._http_pool, self._fire_http, r, 0.0
                )
                return {"ok": True, "rule_id": rule_id}
        return {"ok": False, "error": "rule_not_found"}

    def stop(self):
        """Cleanup."""
        self._http_pool.shutdown(wait=False)
        self._acq.unsubscribe(self._queue)
