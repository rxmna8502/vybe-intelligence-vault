---
title: "cyanheads/imf-mcp-server"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["TypeScript", "Bun", "Model Context Protocol (MCP)", "SDMX 3.0", "DuckDB", "Node.js", "Docker"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Medium"
tags: ["IMF data", "SDMX 3.0", "MCP server", "macroeconomic analytics", "data integration"]
source: "https://github.com/cyanheads/imf-mcp-server"
stars: 1
language: "TypeScript"
last_updated: "2026-07-11T17:43:20Z"
discovered_at: "2026-07-11T17:54:59Z"
evaluated_by: "mistral-small-latest"
---

## Summary
The @cyanheads/imf-mcp-server provides a Model Context Protocol (MCP) interface to query the International Monetary Fund's (IMF) SDMX 3.0 macroeconomic data, offering access to hundreds of dataflows across 190 countries, including WEO projections, BOP, CPI, exchange rates, and national accounts via STDIO or Streamable HTTP.

## Key Features
- Five MCP tools for querying IMF SDMX 3.0 dataflows, including listing databases, fetching metadata, and querying datasets with time-range filtering
- DuckDB-backed DataCanvas for SQL analytics over large multi-country result sets, supporting aggregations and cross-country comparisons
- Type-safe SDMX 3.0 client with dimension/codelist parsing, DSD validation, and human-readable code resolution
- Public hosted server and self-hosting options via STDIO, Streamable HTTP, or Docker with no API key required
- Structured logging, pluggable auth, and OpenTelemetry tracing for observability and integration flexibility

## Why It Matters for RAG Builders
It enables AI agents to seamlessly integrate high-quality, standardized IMF macroeconomic data into RAG pipelines for financial, economic, or policy analysis.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Bun
Automated review identified **Bun** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SDMX 3.0
Automated review identified **SDMX 3.0** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### DuckDB
Automated review identified **DuckDB** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
