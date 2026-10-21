---
title: "berntpopp/clinvar-link"
content_type: "repo"
engine: "v2"
category: "Agent Framework"
tech_stack: ["Python 3.12+", "FastAPI", "SQLite", "Model Context Protocol (MCP)", "Docker", "GitHub Actions"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Medium"
tags: ["ClinVar", "variant classification", "MCP server", "NCBI data", "offline indexing"]
source: "https://github.com/berntpopp/clinvar-link"
stars: 0
language: "Python"
last_updated: "2026-07-19T13:17:16Z"
discovered_at: "2026-07-19T13:17:35Z"
evaluated_by: "mistral-small-latest"
---

## Summary
An MCP (Model Context Protocol) server that provides structured access to NCBI ClinVar data for variant pathogenicity and gene classification queries. It indexes ClinVar's weekly bulk release into a local SQLite database for fast, offline, and reproducible lookups, avoiding rate-limited web APIs.

## Key Features
- Resolves multiple variant identifiers (VCV, VariationID, rsID, HGVS, AlleleID) to a single normalized classification with review-status confidence
- Provides batch processing for multiple variant queries in a single call
- Offers free-text search over gene names, identifiers, and traits with filtering options
- Delivers reproducible results with paste-verbatim citations tied to the exact ClinVar release
- Supports both local deployment and hosted access with prebuilt SQLite index

## Why It Matters for RAG Builders
It enables RAG builders to integrate authoritative, normalized ClinVar variant classifications into AI workflows with fast, offline, and reproducible lookups, avoiding the pitfalls of rate-limited web APIs.

## Tech Stack Deep Dive
### Python 3.12+
Automated review identified **Python 3.12+** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastAPI
Automated review identified **FastAPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### GitHub Actions
Automated review identified **GitHub Actions** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
