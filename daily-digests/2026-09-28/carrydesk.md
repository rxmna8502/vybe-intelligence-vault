---
title: "pelazas/carrydesk"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Python", "FastAPI", "Hyperliquid API", "x402 (USDC payment protocol)", "Base (Ethereum L2)", "uv (Python package manager)", "uvicorn (ASGI server)", "pytest (testing)"]
quality_score: 8
rag_relevance: 7
deployment_complexity: "Medium"
tags: ["funding-carry", "perpetual futures", "Hyperliquid", "market-neutral", "USDC payments"]
source: "https://github.com/pelazas/carrydesk"
stars: 0
language: "Python"
last_updated: "2026-08-02T14:58:04Z"
discovered_at: "2026-08-02T15:02:54Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Carrydesk provides cross-sectional funding-carry rankings for Hyperliquid perpetual futures, published hourly as an API. It ranks liquid perps by trailing 14-day mean funding, enabling users to identify structural risk premiums for long/short strategies, with free and paid endpoints.

## Key Features
- Hourly updated rankings of Hyperliquid perpetuals by trailing 14-day mean funding
- Free and paid API endpoints with USDC-based paywall (x402 protocol)
- MCP server integration for AI agents (Claude MCP)
- Detailed spread metrics (mean, trimmed, median) to avoid illiquidity bias
- Local development mode with open paywall for testing

## Why It Matters for RAG Builders
Carrydesk provides real-time structural risk premium data for perpetual futures, enabling AI-driven trading strategies to identify mispriced funding rates with minimal overhead.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastAPI
Automated review identified **FastAPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Hyperliquid API
Automated review identified **Hyperliquid API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### x402 (USDC payment protocol)
Automated review identified **x402 (USDC payment protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Base (Ethereum L2)
Automated review identified **Base (Ethereum L2)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### uv (Python package manager)
Automated review identified **uv (Python package manager)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### uvicorn (ASGI server)
Automated review identified **uvicorn (ASGI server)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### pytest (testing)
Automated review identified **pytest (testing)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
