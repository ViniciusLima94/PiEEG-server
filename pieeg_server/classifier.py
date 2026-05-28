"""
Classifier for the EEG signals
Subscribes to the acquisition loop and predicts state of button based on EEG
signals using a pre-trained ML model.
"""

import os
import joblib
import json
import logging
import time
import asyncio
import numpy as np
from collections import deque
from pathlib import Path

logger = logging.getLogger("pieeg.classifier")

# Prefer an explicit env var, then fall back to cwd/model
MODEL_DIR = Path(os.environ.get("PIEEG_MODEL_DIR") or Path.cwd() / "model")


class Classifier:
    """Load classifier and make a rolling causal prediction from EEG frames."""

    def __init__(
        self,
        acquisition,
        num_channels: int = 16,
        duration: float | None = None,
    ):
        """
        Parameters
        ----------
        acquisition  : AcquisitionLoop
        num_channels : expected number of EEG channels per frame
        duration     : max recording duration in seconds (None = run forever)
        """
        self._acq = acquisition
        self._queue = acquisition.subscribe(maxsize=4096)
        self._num_channels = num_channels
        self._duration = duration
        self._start_time = None  # set in run() at first iteration
        self._frames_read = 0
        self.probs = []
        self._on_predict = None
        self._model_ready = False

        # ── load model files ──────────────────────────────────────────
        missing = [
            f
            for f in ["eeg_rf_calibrated.joblib", "eeg_rf_params.json"]
            if not (MODEL_DIR / f).exists()
        ]
        if missing:
            logger.error("Missing model files in %s: %s", MODEL_DIR, missing)
            logger.error("Run the training notebook first and copy outputs to model/")
            return

        try:
            self._clf = joblib.load(MODEL_DIR / "eeg_rf_calibrated.joblib")

            with open(MODEL_DIR / "eeg_rf_params.json") as f:
                self._p = json.load(f)

            self._T = self._p["T"]
            self._thresh = self._p.get("best_thresh", 0.5)

            # rolling buffer — holds exactly the last T raw channel frames
            self._buffer = deque(maxlen=self._T)

            self._model_ready = True
            logger.info(
                "Model loaded — T=%d samples, channels=%d, CV_AUC=%.4f, thresh=%.3f",
                self._T,
                self._p["n_channels"],
                self._p["best_cv_auc"],
                self._thresh,
            )

        except json.JSONDecodeError as e:
            logger.error("eeg_rf_params.json is corrupted: %s", e)
        except Exception as e:
            logger.error("Unexpected error loading model: %s: %s", type(e).__name__, e)

    # ── public ────────────────────────────────────────────────────────────
    async def run(self):
        """Consume frames from the acquisition queue and predict continuously."""
        if not self._model_ready:
            logger.error("Model not loaded — classifier will not run.")
            return

        self._start_time = time.time()

        while True:
            # duration limit
            if (
                self._duration is not None
                and time.time() - self._start_time >= self._duration
            ):
                logger.info("Duration limit reached, stopping classifier.")
                break

            frame = await self._queue.get()
            channels = frame.get("channels", [])
            button = frame.get("button", 0)

            self._buffer.append(channels)
            self._frames_read += 1

            # only predict once the buffer is full (first T frames)
            if len(self._buffer) < self._T:
                continue

            # Run prediction in a thread to avoid blocking the main event loop
            prob = await asyncio.get_event_loop().run_in_executor(None, self._predict_from_buffer)
            self.probs.append({"prob": prob, "true": button})

            if self._on_predict is not None:
                await self._on_predict(prob)

            logger.debug(
                "frame=%d  P(open)=%.3f  true=%d",
                self._frames_read,
                prob,
                button,
            )

    @property
    def thresh(self) -> float:
        """Optimal decision threshold (Youden's J from training CV)."""
        return self._thresh

    # ── private ───────────────────────────────────────────────────────────
    def _predict_from_buffer(self) -> float:
        """
        Build one causal window from the rolling buffer and return
        P(eyes open) for the next sample.

        Normalisation: per-window z-score per channel — same as training.
        No global scaler needed; this is stateless and session-agnostic.

        Returns
        -------
        float : calibrated probability in [0, 1]
        """
        # buffer holds T frames of shape (C,) → stack to (T, C)
        X_raw = np.stack(self._buffer, axis=0).astype(np.float32)
        mu = X_raw.mean(axis=0, keepdims=True)
        sd = X_raw.std(axis=0, keepdims=True) + 1e-8
        X_win = ((X_raw - mu) / sd).flatten()[np.newaxis, :]  # (1, C*T)
        prob = float(self._clf.predict_proba(X_win)[0, 1])
        return prob
