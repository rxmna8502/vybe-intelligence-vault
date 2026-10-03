---
title: "anup-shesh/garmin-local-mcp"
content_type: "repo"
engine: "v2"
category: "Agent Framework"
tech_stack: ["Python", "MCP (Model Context Protocol)", "SQLite", "Garmin Connect API", "FIT file format", "TOML", "uv (package manager)"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Medium"
tags: ["Garmin data", "local-first", "MCP server", "offline analysis", "data warehouse"]
source: "https://github.com/anup-shesh/garmin-local-mcp"
stars: 3
language: "Python"
last_updated: "2026-08-04T00:07:48Z"
discovered_at: "2026-08-04T00:11:54Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A local-first MCP server for Garmin data that syncs once and enables offline analysis-grade queries. It stores immutable raw snapshots and a SQLite warehouse, providing compact, server-side computed responses for trends, correlations, and anomalies without relying on Garmin's API.

## Key Features
- Incremental sync into local raw JSON snapshots and SQLite warehouse for offline resilience
- Server-side analysis with compact columnar responses (typically <2 KB) for trends, correlations, and anomalies
- Zero-auth fallback via FIT file import for offline data ingestion
- 12 curated tools for composable queries (e.g., `correlate`, `baselines`, `anomalies`)
- Resumable sync with rate-limiting and data quality flags for sparse or provisional Garmin data

## Why It Matters for RAG Builders
It enables RAG builders to integrate Garmin health data with offline resilience and compact, analysis-ready responses, reducing API dependency and context flooding while preserving data ownership.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Garmin Connect API
Automated review identified **Garmin Connect API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FIT file format
Automated review identified **FIT file format** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### TOML
Automated review identified **TOML** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### uv (package manager)
Automated review identified **uv (package manager)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
