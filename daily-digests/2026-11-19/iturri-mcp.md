---
title: "iturri-ai/iturri-mcp"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["MCP (Model Context Protocol)", "HTTP/JSON-RPC", "USDC (on-chain payments)", "SHA-256 checksumming", "Data verification pipelines"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Low"
tags: ["market data", "verified history", "AI agents", "trading bots", "data quality"]
source: "https://github.com/iturri-ai/iturri-mcp"
stars: 0
language: "None"
last_updated: "2026-07-13T02:31:53Z"
discovered_at: "2026-07-13T02:34:25Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Iturri MCP server provides a hosted, verified market data library for AI agents and trading bots, offering clean, traceable crypto and US-equity historical data with per-bar quality flags. It includes 11 tools for data retrieval, feature extraction, and backtest validation via a streamable HTTP MCP endpoint.

## Key Features
- 120+ liquid symbols with traceable, verified historical data (crypto since 2015, US stocks/ETFs since 2016)
- Per-bar quality flags (verified, raw, reconciled, etc.) for reliable data filtering and backtest validation
- 11 MCP tools including `get_bars`, `get_features`, `validate_backtest_data`, and `describe_catalog`
- x402 USDC on-chain payments for agent-friendly, gasless settlements with no accounts or API keys required
- T+1 fresh data with 99.8%+ verified bars for crypto, backed by cross-venue audits

## Why It Matters for RAG Builders
Iturri ensures AI agents and trading bots use clean, traceable market data with built-in quality validation, eliminating silent data patches and enabling reliable backtesting and real-time decision-making.

## Tech Stack Deep Dive
### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HTTP/JSON-RPC
Automated review identified **HTTP/JSON-RPC** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### USDC (on-chain payments)
Automated review identified **USDC (on-chain payments)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SHA-256 checksumming
Automated review identified **SHA-256 checksumming** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Data verification pipelines
Automated review identified **Data verification pipelines** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
