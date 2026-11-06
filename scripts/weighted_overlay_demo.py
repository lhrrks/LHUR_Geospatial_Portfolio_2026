#!/usr/bin/env python3
"""Synthetic multi-criteria weighted overlay example — NOT a real fire-risk model.

Reproduces the 20-cell example used by demos/risk.html without third-party
libraries. Produces CSV suitable for inspecting in spreadsheets or Python.
Usage: python scripts/weighted_overlay_demo.py --output example_scores.csv
"""
from __future__ import annotations

import argparse
import csv
from pathlib import Path

FACTORS = ("dryness", "landcover", "proximity", "slope")
DEFAULT_WEIGHTS = {"dryness": 35, "landcover": 30, "proximity": 20, "slope": 15}


def synthetic_cells():
    """Twenty deterministic fake factor vectors; not georeferenced."""
    for i in range(20):
        yield {
            "cell_id": i + 1,
            "dryness": ((i * 19 + 23) % 91 + 6) / 100,
            "landcover": ((i * 31 + 46) % 88 + 8) / 100,
            "proximity": ((i * 43 + 17) % 91 + 5) / 100,
            "slope": ((i * 37 + 34) % 83 + 10) / 100,
        }


def normalize_weights(weights: dict[str, float]) -> dict[str, float]:
    total = sum(weights.values())
    if any(v < 0 for v in weights.values()) or total <= 0:
        raise ValueError("All weights must be non-negative and their sum must be positive")
    if set(weights) != set(FACTORS):
        raise ValueError(f"Weights must contain exactly: {FACTORS}")
    return {factor: weights[factor] / total for factor in FACTORS}


def classify(score: float) -> str:
    return "low" if score < 0.35 else "medium" if score < 0.65 else "high"


def score_cells(weights: dict[str, float]):
    w = normalize_weights(weights)
    for cell in synthetic_cells():
        index = sum(cell[f] * w[f] for f in FACTORS)
        yield {**cell, "weighted_index": round(index, 6), "risk_class": classify(index)}


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--output", type=Path, default=Path("example_scores.csv"))
    for factor, default in DEFAULT_WEIGHTS.items():
        parser.add_argument(f"--{factor}", type=float, default=default)
    args = parser.parse_args()
    weights = {f: getattr(args, f) for f in FACTORS}
    rows = list(score_cells(weights))
    args.output.parent.mkdir(parents=True, exist_ok=True)
    with args.output.open("w", newline="", encoding="utf-8") as f:
        writer = csv.DictWriter(f, fieldnames=["cell_id", *FACTORS, "weighted_index", "risk_class"])
        writer.writeheader()
        writer.writerows(rows)
    print(f"Created {args.output}: {len(rows)} simulated, non-georeferenced cells")
    print(f"Average index: {sum(r['weighted_index'] for r in rows)/len(rows):.4f}")
    print("DISCLAIMER: demo data only; not a validated risk map or machine-learning model.")


if __name__ == "__main__":
    main()
