---
title: BadmonLano/perps
content_type: repo
engine: v2
category: daily-digests/2026-10-31
tech_stack:
- Python
- Solana
- Jupiter Perps
- Pyth Oracle
- FastAPI (implied by HTTPX)
- Telegram Bot API
- Ollama (optional)
- Grok (optional)
- dotenv
- Solders
- AnchorPy
quality_score: 9
rag_relevance: 8
deployment_complexity: Medium
tags:
- perpetuals trading
- Solana
- AI agent integration
- risk management
- paper trading
source: https://github.com/BadmonLano/perps
stars: 1
language: Python
last_updated: '2026-10-27T23:22:25Z'
discovered_at: '2026-10-28T00:02:28Z'
evaluated_by: mistral-small-latest
---

## Summary
Perps is a Solana perpetuals trading system for Jupiter Perps (SOL, BTC, ETH) that integrates with an AI agent to execute trades on behalf of a human owner. The bot reads market data, writes packets for the agent to process, and executes signals while enforcing hard gates and risk controls.

## Key Features
- Paper trading mode with simulated fills and no wallet required by default
- Hard gates for leverage, collateral, and price validation to prevent unauthorized trades
- Packet-based communication between the bot and AI agent for market data and signals
- Autopsy system for post-trade analysis and learning feedback to the agent
- Owner command support via Telegram or file drops for manual overrides

## Why It Matters for RAG Builders
Perps enables AI agents to safely execute leveraged perpetuals trades on Solana while enforcing strict risk controls, making it essential for RAG builders integrating trading automation.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Solana
Automated review identified **Solana** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Jupiter Perps
Automated review identified **Jupiter Perps** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Pyth Oracle
Automated review identified **Pyth Oracle** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastAPI (implied by HTTPX)
Automated review identified **FastAPI (implied by HTTPX)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Telegram Bot API
Automated review identified **Telegram Bot API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Ollama (optional)
Automated review identified **Ollama (optional)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Grok (optional)
Automated review identified **Grok (optional)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### dotenv
Automated review identified **dotenv** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Solders
Automated review identified **Solders** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### AnchorPy
Automated review identified **AnchorPy** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
