---
title: "berntpopp/pubtator-link"
content_type: "repo"
engine: "v2"
category: "Orchestrator"
tech_stack: ["Python 3.12+", "FastAPI", "PostgreSQL", "pgvector", "MCP (Model Context Protocol)", "Streamable HTTP", "Docker", "uv (package manager)", "GitHub Actions (CI/CD)"]
quality_score: 9
rag_relevance: 9
deployment_complexity: "Medium"
tags: ["biomedical literature", "PubMed", "entity annotation", "RAG optimization", "evidence retrieval"]
source: "https://github.com/berntpopp/pubtator-link"
stars: 0
language: "Python"
last_updated: "2026-07-15T16:13:43Z"
discovered_at: "2026-07-15T16:21:17Z"
evaluated_by: "mistral-small-latest"
---

## Summary
pubtator-link is an MCP (Streamable HTTP) server that provides a rate-limited, compact, and citable interface to NCBI's PubTator3 biomedical literature API. It enables efficient literature review workflows by returning structured passages instead of raw BioC documents and supports durable review indexing with Postgres/pgvector for evidence retrieval and auditing.

## Key Features
- Compact, citable passage retrieval from PubMed/PMC literature instead of raw BioC documents
- Rate-limited client to respect PubTator3 API constraints (3 requests/second)
- Durable review indexing with Postgres/pgvector for persistent evidence storage and auditing
- MCP server integration for seamless AI agent workflows
- Support for entity and relation extraction (genes, diseases, chemicals, variants, etc.)

## Why It Matters for RAG Builders
It streamlines biomedical literature retrieval for RAG systems by providing compact, citable passages and durable indexing, reducing context waste and enabling efficient evidence-based AI workflows.

## Tech Stack Deep Dive
### Python 3.12+
Automated review identified **Python 3.12+** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastAPI
Automated review identified **FastAPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PostgreSQL
Automated review identified **PostgreSQL** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### pgvector
Automated review identified **pgvector** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Streamable HTTP
Automated review identified **Streamable HTTP** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### uv (package manager)
Automated review identified **uv (package manager)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### GitHub Actions (CI/CD)
Automated review identified **GitHub Actions (CI/CD)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
