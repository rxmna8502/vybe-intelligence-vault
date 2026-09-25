---
title: "cyanheads/bls-labor-mcp-server"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["TypeScript", "Bun", "Model Context Protocol (MCP)", "DuckDB", "SQLite", "Zod", "Docker"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Medium"
tags: ["BLS data", "economic indicators", "MCP server", "time-series analysis", "data retrieval"]
source: "https://github.com/cyanheads/bls-labor-mcp-server"
stars: 1
language: "TypeScript"
last_updated: "2026-07-17T08:03:34Z"
discovered_at: "2026-07-17T08:07:49Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A Model Context Protocol (MCP) server that provides US Bureau of Labor Statistics (BLS) data access via tools for fetching CPI, unemployment, wages, JOLTS, and other economic indicators. Supports both STDIO and Streamable HTTP transports with optional DataCanvas SQL analysis for large datasets.

## Key Features
- Seven specialized tools for BLS data access (surveys, SeriesID resolution, historical data, latest values)
- Offline series catalog search with LABSTAT flat files to avoid API quota consumption
- Optional DataCanvas SQL analysis for large multi-series datasets with DuckDB backend
- Supports both STDIO and Streamable HTTP transports with Docker and npm deployment options
- Period-over-period calculations and quota tracking for BLS API v2 integration

## Why It Matters for RAG Builders
This server provides structured, programmatic access to critical US labor and economic data, enabling RAG systems to enrich responses with authoritative, up-to-date statistics without manual data scraping or API integration overhead.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Bun
Automated review identified **Bun** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### DuckDB
Automated review identified **DuckDB** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Zod
Automated review identified **Zod** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
