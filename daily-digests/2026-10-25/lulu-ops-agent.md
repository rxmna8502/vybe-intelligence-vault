---
title: "Pearlluo/lulu-ops-agent"
content_type: "repo"
engine: "v2"
category: "Orchestrator"
tech_stack: ["Python", "Azure Blob Storage", "Microsoft Fabric Lakehouse", "DuckDB", "SQLGlot", "Streamlit", "Claude MCP", "Entra ID (Azure AD)", "GitHub Actions", "Parquet", "YAML"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "High"
tags: ["Governed AI", "MCP Gateway", "Workforce Operations", "SQL Security Chain", "Azure Data Lake"]
source: "https://github.com/Pearlluo/lulu-ops-agent"
stars: 0
language: "Python"
last_updated: "2026-08-03T02:51:06Z"
discovered_at: "2026-08-03T02:54:23Z"
evaluated_by: "mistral-small-latest"
---

## Summary
LuLu is a production-grade AI operations platform for workforce management in labour-hire and mining-services businesses. It securely exposes ~61 governed tools over a bronze-silver-gold Parquet lake via a remote MCP gateway, enforcing a three-layer security chain (policy engine, SQL validator, output guard) to prevent free-form SQL and ensure role-based access control.

## Key Features
- Three-layer security chain (policy engine, SQL validator, output guard) enforcing role-based access and preventing free-form SQL
- Remote MCP gateway with Entra ID OAuth for secure client authentication and dynamic tool catalogues
- Governed writes and actions with dry-run, confirmation, and full audit trails
- Parallel data pipelines (Azure Blob + Microsoft Fabric) with daily parity gates and CI/CD synchronization
- RAG knowledge tool and capability registry for company automations and business rules indexing

## Why It Matters for RAG Builders
LuLu demonstrates a production-hardened security model for AI agents, ensuring safe, governed access to internal systems without exposing raw data or allowing arbitrary queries.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Azure Blob Storage
Automated review identified **Azure Blob Storage** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Microsoft Fabric Lakehouse
Automated review identified **Microsoft Fabric Lakehouse** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### DuckDB
Automated review identified **DuckDB** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLGlot
Automated review identified **SQLGlot** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Streamlit
Automated review identified **Streamlit** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Claude MCP
Automated review identified **Claude MCP** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Entra ID (Azure AD)
Automated review identified **Entra ID (Azure AD)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### GitHub Actions
Automated review identified **GitHub Actions** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Parquet
Automated review identified **Parquet** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### YAML
Automated review identified **YAML** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
