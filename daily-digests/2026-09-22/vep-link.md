---
title: "berntpopp/vep-link"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Python", "FastAPI", "Ensembl REST API", "Model Context Protocol (MCP)", "Docker", "uv (dependency manager)", "GitHub Actions (CI/CD)"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Medium"
tags: ["variant annotation", "Ensembl VEP", "genomic coordinates", "MCP server", "biomedical AI"]
source: "https://github.com/berntpopp/vep-link"
stars: 0
language: "Python"
last_updated: "2026-09-01T22:14:00Z"
discovered_at: "2026-09-01T22:19:55Z"
evaluated_by: "mistral-small-latest"
---

## Summary
vep-link is an MCP (Model Context Protocol) server that provides a unified interface to the Ensembl REST API's Variant Effect Predictor (VEP) and Variant Recoder, enabling annotation and recoding of genetic variants across human reference assemblies GRCh38 and GRCh37.

## Key Features
- Unified interface for variant annotation and recoding across GRCh38 and GRCh37
- Normalization of variant inputs (rsID, HGVS, VCF, SPDI) to canonical CHR-POS-REF-ALT format
- Batch processing with rate-limiting and circuit-breaking for Ensembl API resilience
- Four response modes to tailor output detail for model needs
- Live API integration with provenance tracking and citation requirements

## Why It Matters for RAG Builders
It simplifies access to Ensembl's VEP and Variant Recoder for AI models by providing a single, normalized interface, reducing complexity and improving efficiency in variant annotation workflows.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastAPI
Automated review identified **FastAPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Ensembl REST API
Automated review identified **Ensembl REST API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### uv (dependency manager)
Automated review identified **uv (dependency manager)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### GitHub Actions (CI/CD)
Automated review identified **GitHub Actions (CI/CD)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
