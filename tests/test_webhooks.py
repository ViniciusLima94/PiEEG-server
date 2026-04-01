"""
Tests for the webhook engine — rule CRUD, trigger evaluation, persistence.
"""

import asyncio
import json
import time
from pathlib import Path
from unittest.mock import AsyncMock, MagicMock, patch

import numpy as np
import pytest

from pieeg_server.webhooks import (
    WebhookEngine,
    WebhookRule,
    _band_power,
    _compute_psd,
    _freqs,
    BANDS,
    FFT_SIZE,
    SAMPLE_RATE,
)


# ── Fixtures ───────────────────────────────────────────────────────────────

@pytest.fixture
def tmp_rules(tmp_path):
    return tmp_path / "webhooks.json"


@pytest.fixture
def mock_acq():
    """Minimal acquisition mock with subscribe/unsubscribe."""
    acq = MagicMock()
    acq.subscribe.return_value = asyncio.Queue(maxsize=2048)
    acq.unsubscribe = MagicMock()
    return acq


@pytest.fixture
def engine(mock_acq, tmp_rules):
    return WebhookEngine(mock_acq, num_channels=16, rules_path=tmp_rules)


# ── WebhookRule unit tests ─────────────────────────────────────────────────

class TestWebhookRule:
    def test_default_id_generated(self):
        r = WebhookRule(name="test")
        assert r.id
        assert len(r.id) == 8

    def test_roundtrip_dict(self):
        r = WebhookRule(name="Alpha Alert", trigger_type="band_power_above",
                        params={"band": "alpha", "threshold": 10},
                        url="https://example.com/hook", cooldown=5)
        d = r.to_dict()
        assert d["name"] == "Alpha Alert"
        assert d["trigger_type"] == "band_power_above"
        r2 = WebhookRule.from_dict(d)
        assert r2.id == r.id
        assert r2.name == r.name
        assert r2.params == r.params
        assert r2.url == r.url

    def test_from_dict_ignores_unknown_keys(self):
        d = {"name": "test", "unknown_field": True}
        r = WebhookRule.from_dict(d)
        assert r.name == "test"


# ── Rule CRUD ──────────────────────────────────────────────────────────────

class TestRuleCRUD:
    def test_create_and_list(self, engine):
        result = engine.create_rule({
            "name": "Test1",
            "trigger_type": "band_power_above",
            "params": {"band": "alpha", "threshold": 15},
            "url": "https://example.com",
            "cooldown": 10,
        })
        assert result["name"] == "Test1"
        assert result["id"]
        rules = engine.list_rules()
        assert len(rules) == 1
        assert rules[0]["id"] == result["id"]

    def test_update(self, engine):
        r = engine.create_rule({"name": "Rule1", "url": "https://a.com"})
        updated = engine.update_rule(r["id"], {"name": "Updated"})
        assert updated["name"] == "Updated"
        assert updated["url"] == "https://a.com"

    def test_update_nonexistent(self, engine):
        assert engine.update_rule("nope", {"name": "x"}) is None

    def test_delete(self, engine):
        r = engine.create_rule({"name": "ToDelete"})
        assert engine.delete_rule(r["id"]) is True
        assert len(engine.list_rules()) == 0

    def test_delete_nonexistent(self, engine):
        assert engine.delete_rule("nope") is False

    def test_get_rule(self, engine):
        r = engine.create_rule({"name": "Find me"})
        found = engine.get_rule(r["id"])
        assert found["name"] == "Find me"

    def test_get_rule_nonexistent(self, engine):
        assert engine.get_rule("nope") is None


# ── Persistence ────────────────────────────────────────────────────────────

class TestPersistence:
    def test_save_and_reload(self, mock_acq, tmp_rules):
        eng1 = WebhookEngine(mock_acq, rules_path=tmp_rules)
        eng1.create_rule({"name": "Persistent", "url": "https://a.com"})
        assert tmp_rules.exists()

        eng2 = WebhookEngine(mock_acq, rules_path=tmp_rules)
        rules = eng2.list_rules()
        assert len(rules) == 1
        assert rules[0]["name"] == "Persistent"

    def test_corrupt_file_fallback(self, mock_acq, tmp_rules):
        tmp_rules.write_text("NOT JSON")
        eng = WebhookEngine(mock_acq, rules_path=tmp_rules)
        assert len(eng.list_rules()) == 0


# ── FFT / band power helpers ──────────────────────────────────────────────

class TestFFTHelpers:
    def test_compute_psd_shape(self):
        samples = np.random.randn(FFT_SIZE)
        psd = _compute_psd(samples)
        assert psd.shape == (FFT_SIZE // 2 + 1,)

    def test_band_power_nonnegative(self):
        psd = np.abs(np.random.randn(FFT_SIZE // 2 + 1))
        for band in BANDS:
            assert _band_power(psd, band) >= 0

    def test_alpha_peak_detectable(self):
        """Pure 10 Hz sine should have strong alpha band power."""
        t = np.arange(FFT_SIZE) / SAMPLE_RATE
        sine = 50 * np.sin(2 * np.pi * 10 * t)
        psd = _compute_psd(sine)
        alpha_power = _band_power(psd, "alpha")
        delta_power = _band_power(psd, "delta")
        assert alpha_power > delta_power * 5  # alpha dominates


# ── Trigger evaluation ─────────────────────────────────────────────────────

class TestTriggerEvaluation:
    def _make_powers(self, alpha=10.0, beta=5.0, theta=3.0):
        """Helper: build band_powers and amplitudes dicts for 16 channels."""
        bp = {}
        amps = {}
        for ch in range(16):
            bp[ch] = {"delta": 2.0, "theta": theta, "alpha": alpha,
                      "beta": beta, "gamma": 1.0}
            amps[ch] = 80.0
        return bp, amps

    def test_band_power_above_triggers(self, engine):
        rule = WebhookRule(trigger_type="band_power_above",
                           params={"band": "alpha", "channel": 0, "threshold": 8})
        bp, amps = self._make_powers(alpha=12.0)
        triggered, val = engine._evaluate_rule(rule, bp, amps)
        assert triggered
        assert val == 12.0

    def test_band_power_above_no_trigger(self, engine):
        rule = WebhookRule(trigger_type="band_power_above",
                           params={"band": "alpha", "channel": 0, "threshold": 20})
        bp, amps = self._make_powers(alpha=12.0)
        triggered, _ = engine._evaluate_rule(rule, bp, amps)
        assert not triggered

    def test_band_power_below(self, engine):
        rule = WebhookRule(trigger_type="band_power_below",
                           params={"band": "beta", "channel": 0, "threshold": 10})
        bp, amps = self._make_powers(beta=5.0)
        triggered, val = engine._evaluate_rule(rule, bp, amps)
        assert triggered
        assert val == 5.0

    def test_amplitude_above(self, engine):
        rule = WebhookRule(trigger_type="amplitude_above",
                           params={"channel": 0, "threshold": 50})
        bp, amps = self._make_powers()
        triggered, val = engine._evaluate_rule(rule, bp, amps)
        assert triggered
        assert val == 80.0

    def test_amplitude_below(self, engine):
        rule = WebhookRule(trigger_type="amplitude_below",
                           params={"channel": 0, "threshold": 100})
        bp, amps = self._make_powers()
        triggered, val = engine._evaluate_rule(rule, bp, amps)
        assert triggered

    def test_band_ratio_above(self, engine):
        rule = WebhookRule(trigger_type="band_ratio_above",
                           params={"numerator": "alpha", "denominator": "theta",
                                   "channel": 0, "threshold": 2.0})
        bp, amps = self._make_powers(alpha=10.0, theta=3.0)
        triggered, val = engine._evaluate_rule(rule, bp, amps)
        assert triggered
        assert abs(val - 10.0 / 3.0) < 0.01

    def test_band_ratio_below(self, engine):
        rule = WebhookRule(trigger_type="band_ratio_below",
                           params={"numerator": "theta", "denominator": "alpha",
                                   "channel": 0, "threshold": 0.5})
        bp, amps = self._make_powers(alpha=10.0, theta=3.0)
        triggered, val = engine._evaluate_rule(rule, bp, amps)
        assert triggered
        assert val < 0.5

    def test_avg_channel(self, engine):
        rule = WebhookRule(trigger_type="band_power_above",
                           params={"band": "alpha", "channel": "avg", "threshold": 5})
        bp, amps = self._make_powers(alpha=10.0)
        triggered, val = engine._evaluate_rule(rule, bp, amps)
        assert triggered
        assert val == 10.0  # all channels have alpha=10

    def test_ratio_zero_denominator(self, engine):
        rule = WebhookRule(trigger_type="band_ratio_above",
                           params={"numerator": "alpha", "denominator": "gamma",
                                   "channel": 0, "threshold": 1})
        bp, amps = self._make_powers()
        bp[0]["gamma"] = 0.0
        triggered, val = engine._evaluate_rule(rule, bp, amps)
        assert not triggered
        assert val == 0.0


# ── HTTP delivery ──────────────────────────────────────────────────────────

class TestHTTPDelivery:
    def test_render_default_body(self, engine):
        rule = WebhookRule(name="Test", trigger_type="band_power_above",
                           params={"threshold": 10, "channel": 0})
        body = engine._render_body(rule, 15.5)
        data = json.loads(body)
        assert data["event"] == "band_power_above"
        assert data["value"] == 15.5
        assert data["rule"] == "Test"

    def test_render_custom_template(self, engine):
        rule = WebhookRule(name="Test", trigger_type="amplitude_above",
                           params={"threshold": 100, "channel": 3},
                           body_template='{"alert":"$trigger_type","ch":$channel,"v":$value}')
        body = engine._render_body(rule, 120.0)
        data = json.loads(body)
        assert data["alert"] == "amplitude_above"
        assert data["ch"] == "3"
        assert data["v"] == "120.0"

    @patch("pieeg_server.webhooks.urlopen")
    def test_fire_http_sends_post(self, mock_urlopen, engine):
        mock_resp = MagicMock()
        mock_resp.status = 200
        mock_resp.__enter__ = MagicMock(return_value=mock_resp)
        mock_resp.__exit__ = MagicMock(return_value=False)
        mock_urlopen.return_value = mock_resp

        rule = WebhookRule(name="Test", url="https://example.com/hook",
                           trigger_type="band_power_above",
                           params={"threshold": 10})
        engine._fire_http(rule, 15.0)
        mock_urlopen.assert_called_once()
        req = mock_urlopen.call_args[0][0]
        assert req.full_url == "https://example.com/hook"
        assert req.method == "POST"

    @patch("pieeg_server.webhooks.urlopen", side_effect=Exception("timeout"))
    def test_fire_http_handles_failure(self, mock_urlopen, engine):
        rule = WebhookRule(name="Test", url="https://fail.com",
                           trigger_type="band_power_above", params={})
        # Should not raise
        engine._fire_http(rule, 10.0)


# ── Engine cleanup ─────────────────────────────────────────────────────────

class TestCleanup:
    def test_stop_unsubscribes(self, engine, mock_acq):
        engine.stop()
        mock_acq.unsubscribe.assert_called_once()
