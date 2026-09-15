---
title: "PredictionMarketTrader/openthomas"
content_type: "repo"
engine: "v2"
category: "Agent Framework"
tech_stack: ["Python", "LLM (Anthropic, OpenAI-compatible, local models)", "SQLite", "NWS (National Weather Service) data", "Polymarket API", "Kalshi API", "GDELT + Google News (for news retrieval)", "Fractional Kelly Criterion (risk sizing)", "Platt scaling (calibration)"]
quality_score: 9
rag_relevance: 7
deployment_complexity: "Medium"
tags: ["autonomous trading", "weather prediction markets", "LLM forecasting", "risk management", "deterministic agent"]
source: "https://github.com/PredictionMarketTrader/openthomas"
stars: 1
language: "Python"
last_updated: "2026-07-12T05:50:14Z"
discovered_at: "2026-07-12T05:56:17Z"
evaluated_by: "mistral-small-latest"
---

## Summary
OpenThomas is an autonomous AI agent that trades weather prediction markets on platforms like Kalshi and Polymarket. It combines multi-model weather forecasting, learned station biases, LLM adjustments, and a deterministic risk engine to execute disciplined trading strategies with paper and live modes.

## Key Features
- Multi-model weather forecasting consensus with per-station bias correction learned from hindcasts
- Deterministic risk engine enforcing fractional Kelly sizing, drawdown limits, and exposure caps
- LLM ensemble forecasting with market-prior blending and Platt calibration for improved accuracy
- Cross-platform arbitrage scanning between Polymarket and Kalshi
- Full audit trail with SQLite journaling, post-settlement reflection, and playbook-based learning

## Why It Matters for RAG Builders
OpenThomas demonstrates how deterministic risk management and calibration layers can transform unreliable LLM forecasts into profitable trading strategies, offering a blueprint for disciplined AI agent design in high-stakes prediction markets.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### LLM (Anthropic, OpenAI-compatible, local models)
Automated review identified **LLM (Anthropic, OpenAI-compatible, local models)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### NWS (National Weather Service) data
Automated review identified **NWS (National Weather Service) data** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Polymarket API
Automated review identified **Polymarket API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Kalshi API
Automated review identified **Kalshi API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### GDELT + Google News (for news retrieval)
Automated review identified **GDELT + Google News (for news retrieval)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Fractional Kelly Criterion (risk sizing)
Automated review identified **Fractional Kelly Criterion (risk sizing)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Platt scaling (calibration)
Automated review identified **Platt scaling (calibration)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
