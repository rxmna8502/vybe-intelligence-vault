---
title: "berntpopp/mgi-link"
content_type: "repo"
engine: "v2"
category: "Agent Framework"
tech_stack: ["Python 3.12+", "FastAPI", "SQLite", "MCP (Model Context Protocol)", "CI/CD (GitHub Actions)", "Makefile", "Docker (implied by deployment docs)"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Medium"
tags: ["MCP server", "Mouse genetics", "Phenotype data", "Ortholog mapping", "Structured API"]
source: "https://github.com/berntpopp/mgi-link"
stars: 1
language: "Python"
last_updated: "2026-09-01T22:12:21Z"
discovered_at: "2026-09-01T22:19:58Z"
evaluated_by: "mistral-small-latest"
---

## Summary
mgi-link is an MCP (Model Context Protocol) server that transforms unstructured MGI (Mouse Genome Informatics) data into structured, queryable tools for AI agents. It provides offline access to mouse gene, allele, mutation, and phenotype data via a deterministic SQLite index, bridging the gap between mouse and human orthologs.

## Key Features
- Exposes MGI data (genes, alleles, phenotypes) as MCP tools with structured outputs
- Supports human-to-mouse ortholog resolution via HGNC/Entrez/Ensembl/OMIM
- Offline SQLite index for deterministic, fast queries
- Response mode verbosity control and tool chaining via `_meta.next_commands`
- Built-in health diagnostics and provenance tracking for data refreshes

## Why It Matters for RAG Builders
It enables AI agents to programmatically access and reason over mouse genetics data from MGI, which is otherwise inaccessible via a clean API, making it essential for RAG systems in biomedical research.

## Tech Stack Deep Dive
### Python 3.12+
Automated review identified **Python 3.12+** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastAPI
Automated review identified **FastAPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CI/CD (GitHub Actions)
Automated review identified **CI/CD (GitHub Actions)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Makefile
Automated review identified **Makefile** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker (implied by deployment docs)
Automated review identified **Docker (implied by deployment docs)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
