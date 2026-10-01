---
title: "cyanheads/eurostat-mcp-server"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["TypeScript", "Bun", "Model Context Protocol (MCP)", "DuckDB", "JSON-stat 2.0", "Docker", "npm"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Medium"
tags: ["Eurostat", "MCP server", "statistical data", "NUTS regional data", "dataframe analytics"]
source: "https://github.com/cyanheads/eurostat-mcp-server"
stars: 4
language: "TypeScript"
last_updated: "2026-08-04T10:34:17Z"
discovered_at: "2026-08-04T10:40:12Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A Model Context Protocol (MCP) server that enables search, query, and analysis of Eurostat statistical datasets (economy, demography, trade, health, NUTS regional data) via STDIO or HTTP. Provides 7 tools for dataset discovery, metadata retrieval, and data extraction with optional DuckDB-based dataframe canvas for SQL analytics.

## Key Features
- Search and browse 8,933+ Eurostat datasets with structured metadata and themes
- Query datasets with dimension filters, time ranges, and NUTS geo-level support
- Optional DuckDB dataframe canvas for SQL-based analytics on staged query results
- TTL-bounded in-memory cache for Eurostat catalogue with async-response detection
- Pluggable architecture with support for multiple storage backends and authentication methods

## Why It Matters for RAG Builders
Provides a standardized MCP interface to access and analyze Eurostat's vast statistical datasets, enabling AI agents to retrieve structured economic, demographic, and regional data for RAG applications.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Bun
Automated review identified **Bun** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### DuckDB
Automated review identified **DuckDB** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSON-stat 2.0
Automated review identified **JSON-stat 2.0** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### npm
Automated review identified **npm** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
