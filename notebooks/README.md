# PiEEG Jupyter Notebooks

Ready-to-run notebooks that show how to work with PiEEG data in Python.

## Notebooks

| # | Notebook | Description |
|---|----------|-------------|
| 1 | `01_load_and_plot_session.ipynb` | Load a recorded CSV session, visualize all 16 channels, zoom and scroll |
| 2 | `02_detect_blinks.ipynb` | Detect eye-blink artifacts on frontal channels using a simple threshold |
| 3 | `03_bandpower_and_alpha.ipynb` | Compute band powers (δ θ α β γ) with Welch's method, detect alpha bursts |
| 4 | `04_export_features_for_ml.ipynb` | Extract windowed features and export a tidy CSV ready for scikit-learn |

## Quick start

```bash
# Install dependencies (from the notebooks/ folder)
pip install -r requirements.txt

# Start the PiEEG server in mock mode (no hardware needed)
pieeg-server --mock

# Open any notebook
jupyter lab
```

## Requirements

- Python 3.10+
- A running PiEEG server (`pieeg-server --mock` works fine for testing)
- Or a previously recorded `.csv` session in `../recordings/`
