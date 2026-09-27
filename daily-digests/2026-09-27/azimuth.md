---
title: "pgen0x/azimuth"
content_type: "repo"
engine: "v2"
category: "Orchestrator"
tech_stack: ["Go", "Python", "Node.js", "Solana", "Meteora DLMM", "Uniswap v3/v4", "Redis", "Hermes AI Agent", "Telegram API"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Medium"
tags: ["concentrated-liquidity", "pool screening", "AI trading agents", "Solana", "Uniswap"]
source: "https://github.com/pgen0x/azimuth"
stars: 2
language: "Python"
last_updated: "2026-08-01T16:59:03Z"
discovered_at: "2026-08-06T06:31:57Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Azimuth is a Go-based daemon that continuously monitors and screens concentrated-liquidity pools across Meteora DLMM on Solana and Uniswap v3/v4 on Robinhood Chain, providing vetted batch signals to AI trading agents like Hermes for automated deployment and exit management.

## Key Features
- Continuous pool discovery with real-time screening (not polling snapshots)
- Batch signaling to AI agents with HMAC-signed webhooks for ranked candidate selection
- Multi-mode screening (casual, multiday, turnover, pulse) with configurable thresholds and budgets
- Layered risk gates including TVL, fee/TVL, market cap, holder count, organic score, and token safety checks
- Exit management with automated stop-loss, trailing take-profit, and health-based close decisions

## Why It Matters for RAG Builders
Azimuth provides a critical layer of real-time, vetted pool signals for AI trading agents, enabling smarter and more profitable automated liquidity provisioning in concentrated-liquidity markets.

## Tech Stack Deep Dive
### Go
Automated review identified **Go** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Solana
Automated review identified **Solana** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Meteora DLMM
Automated review identified **Meteora DLMM** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Uniswap v3/v4
Automated review identified **Uniswap v3/v4** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Redis
Automated review identified **Redis** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Hermes AI Agent
Automated review identified **Hermes AI Agent** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Telegram API
Automated review identified **Telegram API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
