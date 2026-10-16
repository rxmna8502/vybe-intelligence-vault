---
title: "rootSunc/ashare-lake"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Python", "Parquet", "DuckDB", "Polars", "TDX (\u901a\u8fbe\u4fe1)", "Apache License 2.0", "GitHub Actions", "MCP (Model Context Protocol)", "CLI Tools"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Medium"
tags: ["A-share data", "point-in-time data", "financial research", "survivorship bias-free", "local data lake"]
source: "https://github.com/rootSunc/ashare-lake"
stars: 78
language: "Python"
last_updated: "2026-08-02T22:55:23Z"
discovered_at: "2026-08-02T22:56:07Z"
evaluated_by: "mistral-small-latest"
---

## Summary
ashare-lake is a locally updatable A-share research lake that provides daily historical and point-in-time (PIT) financial data for Chinese stocks. It aggregates multi-source data into a curated Parquet lake with row-level lineage, enabling survivorship-bias-free research and AI agent integration.

## Key Features
- 39 curated datasets covering equities, futures, fundamentals, valuation, and macro indicators with row-level lineage
- Daily incremental updates with local storage to avoid API dependency and survivorship bias
- Point-in-time (PIT) data access for accurate historical analysis without look-ahead bias
- Integration with AI agents via MCP (6 tools) for natural language querying of financial data
- Supports complex queries like historical PE percentiles, IC calculations, and delisting event analysis

## Why It Matters for RAG Builders
It provides a locally maintainable, survivorship-bias-free A-share data lake essential for accurate RAG-based financial research and AI agent decision-making.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Parquet
Automated review identified **Parquet** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### DuckDB
Automated review identified **DuckDB** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Polars
Automated review identified **Polars** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### TDX (通达信)
Automated review identified **TDX (通达信)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Apache License 2.0
Automated review identified **Apache License 2.0** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### GitHub Actions
Automated review identified **GitHub Actions** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CLI Tools
Automated review identified **CLI Tools** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
