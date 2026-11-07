---
title: "berntpopp/mavedb-link"
content_type: "repo"
engine: "v2"
category: "Agent Framework"
tech_stack: ["Python 3.12+", "FastMCP 3.x", "SQLite", "Zenodo API", "MaveDB REST API", "uv (package manager)", "Claude MCP client"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Medium"
tags: ["MCP server", "variant effect scoring", "MAVE data", "functional classification", "biomedical AI"]
source: "https://github.com/berntpopp/mavedb-link"
stars: 0
language: "Python"
last_updated: "2026-07-14T09:53:26Z"
discovered_at: "2026-07-14T10:08:14Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A Model Context Protocol (MCP) server that provides structured, interpretable access to MaveDB's quantitative variant-effect scores, including curated functional classifications and thresholds. It bridges raw MAVE scores with their biological context for AI agents and research workflows.

## Key Features
- Provides calibrated functional classifications (ACMG PS3/BS3, OddsPath) alongside raw MAVE scores to prevent hallucinations
- Resolves variant identifiers (HGVS, GA4GH VRS, URN) internally for seamless agent integration
- Offers offline-capable lookups via a local SQLite mirror of MaveDB's Zenodo bulk dump with live API fallback
- Exposes 15+ typed tools for structured data access, including full-text search, variant scoring, and gene-specific datasets
- Includes server-side diagnostics, metadata sourcing, and compliance with data licensing per score set

## Why It Matters for RAG Builders
It transforms raw, uninterpretable MAVE scores into structured, biologically meaningful data with curated thresholds, enabling AI agents to make accurate variant-effect predictions without manual data assembly.

## Tech Stack Deep Dive
### Python 3.12+
Automated review identified **Python 3.12+** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastMCP 3.x
Automated review identified **FastMCP 3.x** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Zenodo API
Automated review identified **Zenodo API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MaveDB REST API
Automated review identified **MaveDB REST API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### uv (package manager)
Automated review identified **uv (package manager)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Claude MCP client
Automated review identified **Claude MCP client** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
