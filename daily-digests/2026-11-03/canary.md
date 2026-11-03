---
title: "osauer/canary"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Go", "MCP (Model Context Protocol)", "CLI", "Interactive Brokers API", "JSON", "YAML (for configuration)"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Medium"
tags: ["Interactive Brokers", "MCP Server", "Portfolio Analytics", "Market Regime", "Risk Management"]
source: "https://github.com/osauer/canary"
stars: 5
language: "Go"
last_updated: "2026-08-04T10:33:36Z"
discovered_at: "2026-08-04T10:40:50Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Canary is a local MCP server and CLI tool that bridges Interactive Brokers (IBKR) TWS or IB Gateway to provide structured market and account data for AI assistants, terminals, and risk management workflows. It enables read-only access to portfolio analytics, market regime analysis, and trading insights without requiring hosted services or additional runtimes.

## Key Features
- Read-only access to IBKR account data (positions, P&L, Greeks, margin, etc.) via CLI or MCP server
- Real-time market regime analysis (VIX, dealer gamma, breadth, stress testing)
- Local watchlist management with enriched quote monitoring and market-event flags
- Position sizing and risk assessment tools (fixed-fractional sizing, stress testing)
- Integration with AI assistants (Claude Desktop, Cursor, Continue, Zed) via MCP protocol

## Why It Matters for RAG Builders
Canary provides critical real-time market and portfolio context for RAG systems by exposing structured IBKR data through a local MCP server, enabling AI assistants to perform risk-aware analysis without exposing sensitive account data to external services.

## Tech Stack Deep Dive
### Go
Automated review identified **Go** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CLI
Automated review identified **CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Interactive Brokers API
Automated review identified **Interactive Brokers API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSON
Automated review identified **JSON** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### YAML (for configuration)
Automated review identified **YAML (for configuration)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
