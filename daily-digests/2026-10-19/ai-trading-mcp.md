---
title: "backtest-kit/ai-trading-mcp"
content_type: "repo"
engine: "v2"
category: "Orchestrator"
tech_stack: ["TypeScript", "Node.js", "MCP (Model Context Protocol)", "GramJS (Telegram scraper)", "Binance API (ccxt)", "Backtest-Kit (trading engine)", "Express.js (HTTP bridge)", "Docker (optional deployment)"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Medium"
tags: ["AI trading", "MCP server", "Telegram integration", "risk-managed execution", "paper/live trading"]
source: "https://github.com/backtest-kit/ai-trading-mcp"
stars: 1
language: "TypeScript"
last_updated: "2026-08-09T15:30:49Z"
discovered_at: "2026-08-09T15:35:08Z"
evaluated_by: "mistral-small-latest"
---

## Summary
An AI-driven news-trading system that integrates a Telegram channel feed (text and chart screenshots) into an MCP server, enabling Claude or other MCP clients to execute trades via three guarded tools: get_status, open_position, and close_position. The engine handles all trading logic, risk management, and validation, while the agent acts solely as a signal source.

## Key Features
- Telegram feed ingestion with chart screenshots as MCP image blocks for real-time signal processing
- Three guarded MCP tools (get_status, open_position, close_position) with strict engine-side validation and risk management
- Audit trail for every byte the model sees, including Telegram posts and images, stored as markdown for provenance
- Battle-hardened Binance spot broker adapter with OCO order handling and atomic trade execution to avoid common pitfalls
- Dual-process architecture: MCP server (stdio) and trading engine (HTTP bridge) for separation of concerns and scalability

## Why It Matters for RAG Builders
It provides a robust, production-ready framework for integrating real-time news signals into automated trading workflows while ensuring strict risk controls and auditability, critical for RAG/AI stack builders.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### GramJS (Telegram scraper)
Automated review identified **GramJS (Telegram scraper)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Binance API (ccxt)
Automated review identified **Binance API (ccxt)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Backtest-Kit (trading engine)
Automated review identified **Backtest-Kit (trading engine)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Express.js (HTTP bridge)
Automated review identified **Express.js (HTTP bridge)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker (optional deployment)
Automated review identified **Docker (optional deployment)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
