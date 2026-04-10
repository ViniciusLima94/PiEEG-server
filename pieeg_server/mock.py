"""
Mock hardware for testing without a Raspberry Pi.

Generates realistic-looking synthetic EEG signals:
- Alpha rhythm (10 Hz) with varying amplitude
- Background noise
- Occasional blink artifacts

Use with: pieeg-server --mock
"""

import math
import random
import time

NUM_CHANNELS = 16
SAMPLE_RATE = 250

# ADS1299 channel register addresses (mirrors hardware.py)
CH1SET = 0x05
CH2SET = 0x06
CH3SET = 0x07
CH4SET = 0x08
CH5SET = 0x09
CH6SET = 0x0A
CH7SET = 0x0B
CH8SET = 0x0C
CH_REGS = (CH1SET, CH2SET, CH3SET, CH4SET, CH5SET, CH6SET, CH7SET, CH8SET)


class MockHardware:
    """Drop-in replacement for PiEEGHardware that generates synthetic data."""

    CH_REGS = CH_REGS

    def __init__(self, num_channels: int = NUM_CHANNELS):
        self._num_channels = num_channels
        self._start_time = None
        self._sample_index = 0
        # Per-channel random parameters for variety
        self._alpha_amp = [random.uniform(15, 50) for _ in range(self._num_channels)]
        self._alpha_freq = [random.uniform(9, 11) for _ in range(self._num_channels)]
        self._alpha_phase = [random.uniform(0, 2 * math.pi) for _ in range(self._num_channels)]
        self._noise_amp = [random.uniform(5, 20) for _ in range(self._num_channels)]
        # Spike config (mirrors PiEEGHardware interface)
        self._spike_threshold = 5000
        self._spike_reset_after = 50
        # Register state (shadow copy)
        self._register_state: dict[int, int] = {}
        # Input mode: "normal" or "shorted"
        self._input_mode = "normal"

    @property
    def num_channels(self) -> int:
        return self._num_channels

    @property
    def spike_threshold(self) -> int:
        return self._spike_threshold

    @spike_threshold.setter
    def spike_threshold(self, value: int):
        self._spike_threshold = max(0, int(value))

    @property
    def spike_reset_after(self) -> int:
        return self._spike_reset_after

    @spike_reset_after.setter
    def spike_reset_after(self, value: int):
        self._spike_reset_after = max(1, int(value))

    def open(self):
        self._start_time = time.time()
        self._sample_index = 0
        self._pending_spikes = 0

    def close(self):
        pass

    def inject_spike(self, count: int = 1):
        """Queue synthetic spike(s) into upcoming samples."""
        self._pending_spikes += max(1, int(count))

    def read_sample(self):
        t = self._sample_index / SAMPLE_RATE
        self._sample_index += 1

        # Inject a large spike across all channels if requested
        if self._pending_spikes > 0:
            self._pending_spikes -= 1
            amplitude = random.uniform(800, 1500)
            sign = random.choice([-1, 1])
            return [round(sign * amplitude + random.gauss(0, 5), 2)
                    for _ in range(self._num_channels)]

        # Shorted-input mode: flat noise ±2 µV
        if self._input_mode == "shorted":
            return [round(random.gauss(0, 1.0), 2)
                    for _ in range(self._num_channels)]

        channels = []
        for ch in range(self._num_channels):
            # Alpha oscillation (8-12 Hz)
            alpha = self._alpha_amp[ch] * math.sin(
                2 * math.pi * self._alpha_freq[ch] * t + self._alpha_phase[ch]
            )
            # Slow drift (0.5 Hz)
            drift = 10 * math.sin(2 * math.pi * 0.5 * t + ch)
            # Gaussian-ish noise
            noise = self._noise_amp[ch] * (random.gauss(0, 1))
            # Occasional blink artifact on frontal channels (ch 0-3)
            blink = 0.0
            if ch < 4 and random.random() < 0.002:
                blink = random.uniform(100, 300)

            channels.append(round(alpha + drift + noise + blink, 2))

        return channels

    def __enter__(self):
        self.open()
        return self

    def __exit__(self, *exc):
        self.close()

    # --- register configuration (mirrors PiEEGHardware) ---

    def configure_registers(self, reg_map: dict[int, int]):
        """Store shadow state and switch mock data mode if CHnSET changes."""
        self._register_state.update(reg_map)
        # Check if all channel regs are set to shorted (0x01)
        ch_values = [self._register_state.get(r) for r in self.CH_REGS if r in self._register_state]
        if ch_values and all(v == 0x01 for v in ch_values):
            self._input_mode = "shorted"
        elif ch_values and all(v == 0x00 for v in ch_values):
            self._input_mode = "normal"

    def set_input_short(self):
        """Switch mock data to flat noise (±2 µV random)."""
        reg_map = {reg: 0x01 for reg in self.CH_REGS}
        self.configure_registers(reg_map)

    def set_input_normal(self):
        """Restore synthetic alpha+noise."""
        reg_map = {reg: 0x00 for reg in self.CH_REGS}
        self.configure_registers(reg_map)

    @property
    def register_state(self) -> dict[int, int]:
        """Return a copy of the shadow register state."""
        return dict(self._register_state)
