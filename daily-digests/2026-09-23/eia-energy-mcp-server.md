---
title: "cyanheads/eia-energy-mcp-server"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["TypeScript", "Bun", "Model Context Protocol (MCP)", "DuckDB (DataCanvas)", "Fuse.js (fuzzy search)", "Docker", "npm"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Medium"
tags: ["EIA API", "energy data", "MCP server", "data retrieval", "vectorized queries"]
source: "https://github.com/cyanheads/eia-energy-mcp-server"
stars: 2
language: "TypeScript"
last_updated: "2026-08-06T03:14:35Z"
discovered_at: "2026-08-06T03:18:44Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A Model Context Protocol (MCP) server that provides a standardized interface to query and browse the U.S. Energy Information Administration (EIA) API v2. It enables structured access to electricity, petroleum, natural gas, coal, and other energy datasets via 7 specialized tools, supporting both STDIO and Streamable HTTP transports.

## Key Features
- 7 specialized tools for browsing, describing, searching, and querying EIA datasets with natural language support
- In-process caching of route metadata and facet values to minimize API calls and improve performance
- DataCanvas (DuckDB) integration for handling large result sets with SQL querying capabilities
- Supports both STDIO and Streamable HTTP transports for flexible deployment
- Built on @cyanheads/mcp-ts-core for modularity, error handling, and pluggable authentication/storage backends

## Why It Matters for RAG Builders
It provides a standardized, efficient interface to the EIA API, enabling AI systems to retrieve structured energy data for RAG applications without direct API integration complexity.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Bun
Automated review identified **Bun** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### DuckDB (DataCanvas)
Automated review identified **DuckDB (DataCanvas)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Fuse.js (fuzzy search)
Automated review identified **Fuse.js (fuzzy search)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

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
