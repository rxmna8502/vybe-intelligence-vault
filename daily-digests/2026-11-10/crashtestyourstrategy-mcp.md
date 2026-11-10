---
title: "fnobbe/crashtestyourstrategy-mcp"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Model Context Protocol (MCP)", "HTTP/Streamable Transport", "JSON Schema", "REST API", "Python (implied by MCP server implementation)"]
quality_score: 8
rag_relevance: 9
deployment_complexity: "Low"
tags: ["MCP server", "portfolio stress testing", "trading strategy diagnostics", "risk assessment", "regime analysis"]
source: "https://github.com/fnobbe/crashtestyourstrategy-mcp"
stars: 0
language: "None"
last_updated: "2026-08-01T08:48:45Z"
discovered_at: "2026-08-01T09:06:44Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A remote Model Context Protocol (MCP) server providing diagnostic tools for portfolio and trading-strategy stress testing. It evaluates strategies against failure modes like hedge breaks, sequence-of-returns risk, and regime blind spots without offering advisory or suitability claims.

## Key Features
- Multi-asset portfolio stress testing across predefined regimes (baseline, risk-off, rate-shock)
- Hedge-break detection and drawdown distribution analysis
- Regime outlook modeling with out-of-sample validation (BULL/SIDEWAYS/BEAR/CRISIS probabilities)
- Backtest integrity checks including deflated Sharpe ratio and crisis regime coverage
- Descriptive response contract with grounding summaries, revision signals, and methodological limitations

## Why It Matters for RAG Builders
It provides critical risk diagnostics for AI-driven portfolio and trading strategies, enabling robust validation against real-world failure modes without requiring proprietary data or complex setup.

## Tech Stack Deep Dive
### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HTTP/Streamable Transport
Automated review identified **HTTP/Streamable Transport** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSON Schema
Automated review identified **JSON Schema** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### REST API
Automated review identified **REST API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Python (implied by MCP server implementation)
Automated review identified **Python (implied by MCP server implementation)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
