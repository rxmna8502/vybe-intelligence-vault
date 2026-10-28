---
title: "datacharter/datacharter"
content_type: "repo"
engine: "v2"
category: "Orchestrator"
tech_stack: ["Python", "DuckDB", "FastAPI", "React", "Vite", "Monaco Editor", "Vega-Lite", "Model Context Protocol (MCP)", "Open Data Contract Standard", "Ollama", "SQLite", "PostgreSQL", "MySQL", "Snowflake", "BigQuery"]
quality_score: 9
rag_relevance: 10
deployment_complexity: "Medium"
tags: ["data governance", "agent access control", "federated querying", "PII masking", "audit logging"]
source: "https://github.com/datacharter/datacharter"
stars: 1
language: "Python"
last_updated: "2026-08-01T19:14:42Z"
discovered_at: "2026-08-01T19:19:13Z"
evaluated_by: "mistral-small-latest"
---

## Summary
DataCharter is a local, federated data explorer that enables governed, regulated agentic data access for AI models. It allows querying diverse data sources locally while enforcing fine-grained access controls, PII masking, and audit trails to ensure data security and compliance.

## Key Features
- Local federation of diverse data sources (CSV, Parquet, SQL databases, cloud warehouses) with pushdown optimization for efficient querying.
- Fine-grained access control for AI agents, including PII masking, column-level permissions, and governed data contracts via `charter.yaml`.
- Tamper-evident audit logging of all agent data access with dual attribution, masked-column tracking, and evidence export for compliance.
- Built-in agent evaluation and data quality checks, including canary tripwires for detecting data leaks and drift detection in CI.
- Local-first architecture with optional fully local LLM support (Ollama) and MCP server integration for agent tooling.

## Why It Matters for RAG Builders
DataCharter ensures AI agents only access approved, non-sensitive data while providing auditable, reproducible interactions, making it essential for secure and compliant RAG deployments.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### DuckDB
Automated review identified **DuckDB** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastAPI
Automated review identified **FastAPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### React
Automated review identified **React** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Vite
Automated review identified **Vite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Monaco Editor
Automated review identified **Monaco Editor** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Vega-Lite
Automated review identified **Vega-Lite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Open Data Contract Standard
Automated review identified **Open Data Contract Standard** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Ollama
Automated review identified **Ollama** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PostgreSQL
Automated review identified **PostgreSQL** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MySQL
Automated review identified **MySQL** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Snowflake
Automated review identified **Snowflake** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### BigQuery
Automated review identified **BigQuery** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
