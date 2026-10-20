---
title: "pgen0x/meteora-dlmm-trading-bot"
content_type: "repo"
engine: "v2"
category: "Orchestrator"
tech_stack: ["Go", "Python", "Node.js", "Solana", "Redis", "Meteora DLMM API", "Hermes AI Agent Framework", "Jupiter Token Audit", "DexScreener"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Medium"
tags: ["Solana", "Liquidity Pools", "AI Trading", "DLMM", "Automated LP Management"]
source: "https://github.com/pgen0x/meteora-dlmm-trading-bot"
stars: 2
language: "Python"
last_updated: "2026-07-17T12:07:34Z"
discovered_at: "2026-07-17T12:08:45Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A Go-based daemon that continuously monitors Meteora DLMM pools on Solana, screens them through layered risk gates, and batches vetted trading signals for AI agents like Hermes to evaluate and deploy. It automates LP position management with stop-loss, trailing take-profit, and exit strategies.

## Key Features
- Continuous pool discovery via Meteora’s public API with no API keys required
- Batch signaling with HMAC-signed webhooks for AI agent evaluation
- Three screening modes (casual, multiday, turnover) with independent risk thresholds
- Layered risk gates including TVL, fee/TVL, market cap, organic score, and Jupiter audit checks
- Automated exit management with stop-loss, trailing take-profit, and position cooldowns

## Why It Matters for RAG Builders
It provides a critical signal preprocessing and orchestration layer for AI trading agents, enabling them to make informed decisions on high-quality Solana DLMM pools without manual screening or risk of stale data.

## Tech Stack Deep Dive
### Go
Automated review identified **Go** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Solana
Automated review identified **Solana** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Redis
Automated review identified **Redis** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Meteora DLMM API
Automated review identified **Meteora DLMM API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Hermes AI Agent Framework
Automated review identified **Hermes AI Agent Framework** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Jupiter Token Audit
Automated review identified **Jupiter Token Audit** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### DexScreener
Automated review identified **DexScreener** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
