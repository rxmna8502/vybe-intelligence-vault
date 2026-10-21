---
title: "berntpopp/spliceailookup-link"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Python 3.12+", "FastAPI", "MCP (Model Context Protocol)", "Ensembl VEP REST API", "SpliceAI Lookup (Broad Institute)", "Streamable HTTP", "Docker", "CI/CD (GitHub Actions)"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Medium"
tags: ["splice-impact prediction", "MCP server", "variant resolution", "SpliceAI", "Pangolin"]
source: "https://github.com/berntpopp/spliceailookup-link"
stars: 0
language: "Python"
last_updated: "2026-09-01T22:13:33Z"
discovered_at: "2026-09-01T22:19:54Z"
evaluated_by: "mistral-small-latest"
---

## Summary
An MCP server (Streamable HTTP) that wraps the Broad Institute's SpliceAI Lookup backends to provide LLM-ergonomic tools for splice-impact prediction, including SpliceAI, Pangolin, and SpliceAI-10k models, along with an Ensembl-VEP-backed variant resolver.

## Key Features
- Provides LLM-ergonomic tools for splice-impact prediction via SpliceAI, Pangolin, and SpliceAI-10k models
- Includes an Ensembl-VEP-backed variant resolver for canonical variant IDs (CHROM-POS-REF-ALT)
- Implements caching, rate limiting, and concurrency control to handle upstream fragility and cold starts
- Supports batch processing for gene panels and progress notifications via MCP background tasks
- Offers server discovery tools, rate budgeting, and typed error handling for robust agent integration

## Why It Matters for RAG Builders
This tool bridges the gap between the Broad Institute's SpliceAI Lookup service and AI agents by providing a standardized, LLM-friendly API for splice-impact predictions and variant resolution.

## Tech Stack Deep Dive
### Python 3.12+
Automated review identified **Python 3.12+** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastAPI
Automated review identified **FastAPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Ensembl VEP REST API
Automated review identified **Ensembl VEP REST API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SpliceAI Lookup (Broad Institute)
Automated review identified **SpliceAI Lookup (Broad Institute)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Streamable HTTP
Automated review identified **Streamable HTTP** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

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
