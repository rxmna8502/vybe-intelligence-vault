---
title: "cyanheads/socrata-mcp-server"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["TypeScript", "Bun", "Model Context Protocol (MCP)", "Socrata SODA API", "DuckDB", "Zod", "Node.js"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Medium"
tags: ["open data", "Socrata", "MCP server", "SoQL", "DuckDB"]
source: "https://github.com/cyanheads/socrata-mcp-server"
stars: 1
language: "TypeScript"
last_updated: "2026-07-10T22:57:07Z"
discovered_at: "2026-07-10T23:08:37Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A Model Context Protocol (MCP) server that enables agents to search, query, and analyze government open-data portals (Socrata SODA API) via tools, resources, and prompts. Supports STDIO and Streamable HTTP transports with optional DuckDB-powered analytical SQL for large datasets.

## Key Features
- Six MCP tools for full Socrata workflow: portal discovery, dataset search, schema inspection, SoQL querying, and DuckDB-powered analytical SQL over large result sets
- Discovery API integration with curated 40-portal catalog and live dataset counts (cached ~24h)
- DataCanvas spillover for large query results, enabling SQL analysis via DuckDB without additional setup
- Structured error handling, recovery hints, and agent-friendly output (e.g., assembled SoQL strings, column type context)
- Pluggable auth, storage backends, and transport types (stdio/HTTP) with Docker and npm installation support

## Why It Matters for RAG Builders
It provides a standardized MCP interface to access and analyze government open datasets, enabling AI agents to integrate real-world data seamlessly into RAG workflows.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Bun
Automated review identified **Bun** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Socrata SODA API
Automated review identified **Socrata SODA API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### DuckDB
Automated review identified **DuckDB** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Zod
Automated review identified **Zod** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
