---
title: "partymola/monzo-mcp"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Python", "MCP (Model Context Protocol)", "OAuth 2.0", "SQLite", "Monzo API", "uv (package manager)", "FastAPI (implicit via MCP)"]
quality_score: 9
rag_relevance: 7
deployment_complexity: "Medium"
tags: ["banking API", "OAuth", "transaction caching", "spending analysis", "MCP server"]
source: "https://github.com/partymola/monzo-mcp"
stars: 1
language: "Python"
last_updated: "2026-07-11T23:41:58Z"
discovered_at: "2026-07-11T23:54:03Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A Model Context Protocol (MCP) server providing read-only access to the Monzo banking API with OAuth authentication, local transaction caching, and spending analysis tools for AI agents like Claude Code.

## Key Features
- Full OAuth 2.0 authentication with automatic token refresh, avoiding manual bearer token management
- Local SQLite transaction cache that preserves data beyond Monzo's 90-day SCA window
- 7 read-only MCP tools for accounts, balances, pots, transactions, and spending analysis
- Auto-sync on demand for cached data, reducing manual API calls
- Spending analysis with category breakdowns, top merchants, and month-over-month comparisons

## Why It Matters for RAG Builders
It enables AI agents to securely and efficiently access real-time banking data for financial analysis, budgeting, and transaction insights without write permissions or manual token management.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OAuth 2.0
Automated review identified **OAuth 2.0** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Monzo API
Automated review identified **Monzo API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### uv (package manager)
Automated review identified **uv (package manager)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastAPI (implicit via MCP)
Automated review identified **FastAPI (implicit via MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
