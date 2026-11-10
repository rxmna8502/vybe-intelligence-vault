---
title: "glassity/focus-mcp"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Python", "DuckDB", "Model Context Protocol (MCP)", "Parquet", "Docker", "AWS S3", "Google Cloud Storage (GCS)", "BigQuery"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Medium"
tags: ["FOCUS", "FinOps", "Cloud Cost Analysis", "MCP Server", "Parquet Query Engine"]
source: "https://github.com/glassity/focus-mcp"
stars: 11
language: "Python"
last_updated: "2026-08-06T15:12:56Z"
discovered_at: "2026-08-06T15:19:19Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A Model Context Protocol (MCP) server that enables AI assistants like Claude to query cloud cost data using the FOCUS (FinOps Open Cost & Usage Specification) standard. It connects directly to Parquet-formatted FOCUS exports from AWS, Azure, or GCP, allowing natural language queries about cloud spending without requiring a data warehouse.

## Key Features
- Direct querying of FOCUS-standardized cloud billing data in Parquet format without a data warehouse
- Pre-bundled 130+ curated queries (FOCUS v1.0, v1.1, v1.2) with citations to official FOCUS use-case catalog
- Supports AWS, Azure, and GCP FOCUS exports via local files, S3, or GCS
- Eight MCP tools for data inspection, query execution, and schema exploration
- Docker and local deployment options with configurable authentication for cloud storage

## Why It Matters for RAG Builders
It bridges the gap between raw cloud billing data and AI assistants, enabling natural language queries about cloud costs without requiring complex SQL or data warehouse setup.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### DuckDB
Automated review identified **DuckDB** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Parquet
Automated review identified **Parquet** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### AWS S3
Automated review identified **AWS S3** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Google Cloud Storage (GCS)
Automated review identified **Google Cloud Storage (GCS)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### BigQuery
Automated review identified **BigQuery** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
