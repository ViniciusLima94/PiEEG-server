"""
Classifier for the EEG signals
Subscribes to the acquisition loop and predicts state of button based on EEG
signals using a pre-trained ML model.
"""

import asyncio
import joblib
import json
import logging
import time
import numpy as np
from collections import deque
from pathlib import Path

logger = logging.getLogger("pieeg.classifier")

MODEL_DIR = Path(__file__).parent.parent / "model"


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
        self._model_ready = False

        # ── load model files ──────────────────────────────────────────
        missing = [
            f
            for f in ["eeg_rf_model.joblib", "eeg_scaler.joblib", "eeg_rf_params.json"]
            if not (MODEL_DIR / f).exists()
        ]
        if missing:
            logger.error("Missing model files in %s: %s", MODEL_DIR, missing)
            logger.error("Run the training notebook first and copy outputs to model/")
            return

        try:
            self._clf = joblib.load(MODEL_DIR / "eeg_rf_model.joblib")
            self._scaler = joblib.load(MODEL_DIR / "eeg_scaler.joblib")

            with open(MODEL_DIR / "eeg_rf_params.json") as f:
                self._p = json.load(f)

            self._T = self._p["T"]

            # rolling buffer — holds exactly the last T raw channel frames
            self._buffer = deque(maxlen=self._T)

            self._model_ready = True
            logger.info(
                "Model loaded — T=%d samples, channels=%d, CV_AUC=%.4f",
                self._T,
                self._p["n_channels"],
                self._p["best_cv_auc"],
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

            prob = self._predict_from_buffer()
            self.probs.append({"prob": prob, "true": button})

            logger.debug(
                "frame=%d  P(open)=%.3f  true=%d",
                self._frames_read,
                prob,
                button,
            )

    # ── private ───────────────────────────────────────────────────────────
    def _predict_from_buffer(self) -> float:
        """
        Build one causal window from the rolling buffer and return
        P(eyes open) for the next sample.

        Returns
        -------
        float : probability in [0, 1]
        """
        # buffer holds T frames of shape (C,) → stack to (T, C)
        X_raw = np.stack(self._buffer, axis=0).astype(np.float32)
        X_scaled = self._scaler.transform(X_raw)  # (T, C)
        X_win = X_scaled.flatten()[np.newaxis, :]  # (1, C*T)
        prob = float(self._clf.predict_proba(X_win)[0, 1])
        return prob
