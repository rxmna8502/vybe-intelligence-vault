---
title: "berntpopp/metadome-link"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Python 3.12+", "FastAPI", "MCP (Model Context Protocol)", "Celery", "SQLite", "Docker", "uv (package manager)"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Medium"
tags: ["bioinformatics", "genomics", "variant annotation", "MCP server", "protein domains"]
source: "https://github.com/berntpopp/metadome-link"
stars: 0
language: "Python"
last_updated: "2026-09-01T09:04:35Z"
discovered_at: "2026-09-01T09:11:57Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A Model Context Protocol (MCP) server that wraps the MetaDome web service to expose per-residue missense tolerance landscapes, Pfam domain annotations, meta-domain homolog variant aggregation, and ClinVar annotations for human transcripts via a standardized API interface.

## Key Features
- Exposes MetaDome's per-residue missense tolerance landscapes (sw_dn_ds) via a queryable API
- Provides Pfam domain annotations and meta-domain homolog variant aggregation
- Implements async request-poll split for landscape builds to avoid blocking clients
- Persistent on-disk SQLite cache for completed landscapes, keyed by transcript ID and data version
- Supports batch operations (e.g., compare_positions) and residue-level ClinVar annotations

## Why It Matters for RAG Builders
It bridges the gap between MetaDome's visualization-focused web service and programmatic access, enabling AI systems to query per-residue tolerance and variant data for RAG applications in genomics.

## Tech Stack Deep Dive
### Python 3.12+
Automated review identified **Python 3.12+** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastAPI
Automated review identified **FastAPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Celery
Automated review identified **Celery** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### uv (package manager)
Automated review identified **uv (package manager)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
