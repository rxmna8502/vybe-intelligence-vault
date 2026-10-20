---
title: "berntpopp/orphanet-link"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Python 3.12+", "SQLite", "FTS5 (Full-Text Search)", "Model Context Protocol (MCP)", "Docker", "GitHub Actions (CI/CD)", "uv (dependency manager)"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Medium"
tags: ["rare-disease", "MCP server", "Orphanet", "biomedical data", "knowledge indexing"]
source: "https://github.com/berntpopp/orphanet-link"
stars: 0
language: "Python"
last_updated: "2026-09-01T09:03:03Z"
discovered_at: "2026-09-01T09:12:42Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A Model Context Protocol (MCP) server that provides structured access to Orphanet's rare-disease knowledge via a normalized SQLite + FTS5 index, enabling efficient querying of disease nomenclature, gene associations, phenotypes, and cross-references without manual XML parsing.

## Key Features
- Prebuilt SQLite index with FTS5 for fast full-text search over disease names and synonyms
- Comprehensive toolset for resolving diseases by labels, ORPHA codes, or external CURIEs (OMIM, MONDO, ICD-10/11, etc.)
- Batch processing capabilities for disease resolution and retrieval
- Precomputed classification hierarchies (parents/children/ancestors/descendants) for efficient traversal
- Integration with Model Context Protocol (MCP) for seamless AI agent interactions

## Why It Matters for RAG Builders
It provides a critical, structured interface to rare-disease knowledge, enabling AI systems to efficiently ground queries in authoritative biomedical data without manual XML parsing or complex joins.

## Tech Stack Deep Dive
### Python 3.12+
Automated review identified **Python 3.12+** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FTS5 (Full-Text Search)
Automated review identified **FTS5 (Full-Text Search)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### GitHub Actions (CI/CD)
Automated review identified **GitHub Actions (CI/CD)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### uv (dependency manager)
Automated review identified **uv (dependency manager)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
