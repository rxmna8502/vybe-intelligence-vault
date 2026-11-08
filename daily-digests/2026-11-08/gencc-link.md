---
title: "berntpopp/gencc-link"
content_type: "repo"
engine: "v2"
category: "Agent Framework"
tech_stack: ["Python 3.12+", "SQLite + FTS5", "FastAPI", "MCP (Model Context Protocol)", "Docker", "GitHub Actions (CI/CD)"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Medium"
tags: ["MCP server", "gene-disease curation", "consensus classification", "conflict detection", "GenCC dataset"]
source: "https://github.com/berntpopp/gencc-link"
stars: 0
language: "Python"
last_updated: "2026-07-19T19:10:46Z"
discovered_at: "2026-07-19T19:13:33Z"
evaluated_by: "mistral-small-latest"
---

## Summary
gencc-link is an MCP (Model Context Protocol) server that provides a local, queryable interface to the Gene Curation Coalition (GenCC) dataset, which lacks a live API. It precomputes consensus classifications and conflict detection for gene-disease pairs, enabling efficient, offline queries without rate limits or bulk download overhead.

## Key Features
- Local SQLite database with precomputed consensus classifications and conflict flags for gene-disease pairs
- Conditional data refresh to avoid rate limits and minimize bandwidth usage (ETag/Last-Modified support)
- Comprehensive toolset for querying genes, diseases, and curations with validated filters and response modes
- Supports both HTTP and stdio MCP transports for integration with agents like Claude
- Built-in diagnostics, provenance tracking, and OMIM licensing compliance

## Why It Matters for RAG Builders
It enables AI agents to efficiently query and reason over gene-disease validity data without hitting rate limits or requiring real-time API access, making it essential for RAG systems in genomics.

## Tech Stack Deep Dive
### Python 3.12+
Automated review identified **Python 3.12+** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite + FTS5
Automated review identified **SQLite + FTS5** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastAPI
Automated review identified **FastAPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### GitHub Actions (CI/CD)
Automated review identified **GitHub Actions (CI/CD)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
