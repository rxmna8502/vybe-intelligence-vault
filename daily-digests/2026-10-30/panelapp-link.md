---
title: "berntpopp/panelapp-link"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Python 3.12+", "FastAPI", "MCP (Model Context Protocol)", "Streamable HTTP", "REST API", "In-memory TTL caching", "Docker", "CI/CD (GitHub Actions)"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Medium"
tags: ["MCP server", "gene panels", "PanelApp", "multi-region aggregation", "clinical data"]
source: "https://github.com/berntpopp/panelapp-link"
stars: 0
language: "Python"
last_updated: "2026-07-19T17:48:04Z"
discovered_at: "2026-07-19T17:59:11Z"
evaluated_by: "mistral-small-latest"
---

## Summary
panelapp-link is an MCP server that provides a unified interface to query and aggregate gene-panel data from Genomics England PanelApp (UK) and PanelApp Australia. It simplifies complex queries like gene-panel membership, cross-region panel comparisons, and live API caching for AI agents and clinical research workflows.

## Key Features
- Unified query interface for two separate PanelApp APIs (UK and Australia) with cross-region aggregation
- In-memory TTL caching (6 hours) to reduce upstream API rate-limiting and improve response times
- Supports gene-level and panel-level queries, including batch operations and confidence filtering
- Provides advanced aggregations like gene-panel membership, cross-region gene presence, and panel comparisons
- Designed for AI agents with MCP tooling and standardized response modes (minimal, compact, standard, full)

## Why It Matters for RAG Builders
It simplifies access to critical gene-panel data from two major sources into a single, agent-friendly interface, enabling AI systems to efficiently ground clinical and research queries without manual reconciliation.

## Tech Stack Deep Dive
### Python 3.12+
Automated review identified **Python 3.12+** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastAPI
Automated review identified **FastAPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Streamable HTTP
Automated review identified **Streamable HTTP** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### REST API
Automated review identified **REST API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### In-memory TTL caching
Automated review identified **In-memory TTL caching** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CI/CD (GitHub Actions)
Automated review identified **CI/CD (GitHub Actions)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
