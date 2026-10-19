---
title: "yodablocks/signal-pipeline"
content_type: "repo"
engine: "v2"
category: "Orchestrator"
tech_stack: ["Python", "ClickHouse", "SQLite", "Dune Analytics", "Twitter/X API", "Polymarket", "Deribit Options Flow", "Hyperliquid", "Lighter (Robinhood Chain)", "Median Absolute Deviation (MAD)", "CLI", "dotenv"]
quality_score: 9
rag_relevance: 9
deployment_complexity: "Medium"
tags: ["crypto signals", "AI agent pipeline", "trust tier model", "anomaly detection", "directional scoring"]
source: "https://github.com/yodablocks/signal-pipeline"
stars: 0
language: "Python"
last_updated: "2026-07-11T13:11:36Z"
discovered_at: "2026-07-11T13:14:19Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A source-agnostic signal ingestion, ranking, and scoring pipeline for crypto AI agents that fetches, validates, and ranks market signals from multiple tiers (chain-native, indexed, social) before assembling a token-budgeted JSON payload for LLM consumption. It includes a trust tier model, MAD-based anomaly detection, and a directional scoring model with equal weights.

## Key Features
- Multi-tier signal ingestion with explicit trust weighting (chain-native, indexed, social)
- MAD-based anomaly detection for robust outlier handling
- Token-budget-aware ranking and assembly for LLM consumption
- Directional scoring model with confluence-based confidence calculation
- Modular architecture with canonical SignalEvent dataclass and source-agnostic design

## Why It Matters for RAG Builders
It provides a robust, trust-weighted signal pipeline for crypto AI agents, ensuring reliable directional scoring while mitigating manipulation risks through tiered trust models and anomaly detection.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### ClickHouse
Automated review identified **ClickHouse** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Dune Analytics
Automated review identified **Dune Analytics** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Twitter/X API
Automated review identified **Twitter/X API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Polymarket
Automated review identified **Polymarket** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Deribit Options Flow
Automated review identified **Deribit Options Flow** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Hyperliquid
Automated review identified **Hyperliquid** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Lighter (Robinhood Chain)
Automated review identified **Lighter (Robinhood Chain)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Median Absolute Deviation (MAD)
Automated review identified **Median Absolute Deviation (MAD)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CLI
Automated review identified **CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### dotenv
Automated review identified **dotenv** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
