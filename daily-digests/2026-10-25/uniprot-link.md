---
title: "berntpopp/uniprot-link"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Python 3.12+", "FastAPI", "SPARQL 1.1", "QLever", "MCP (Model Context Protocol)", "Docker", "GitHub Actions"]
quality_score: 9
rag_relevance: 10
deployment_complexity: "Medium"
tags: ["protein data", "SPARQL", "MCP server", "UniProt", "biomedical AI"]
source: "https://github.com/berntpopp/uniprot-link"
stars: 0
language: "Python"
last_updated: "2026-07-19T19:08:09Z"
discovered_at: "2026-07-19T19:13:36Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A Model Context Protocol (MCP) server that provides a safe, intent-named interface to the UniProt SPARQL endpoint, enabling AI agents to query protein data without exposing them to complex SPARQL syntax or timeout risks. It offers curated tools for protein research, example queries, and structured responses with next-step guidance.

## Key Features
- Intent-named tools for protein research (e.g., `find_proteins`, `get_protein_features`) that compile to timeout-safe SPARQL queries
- Guarded raw-SPARQL escape hatch (`search_sparql_query`) with auto-injected `LIMIT` and rejection of unsafe operations
- Curated example queries for learning UniProt's data model and executing pre-validated queries
- Structured responses with `_meta.next_commands` for seamless agent workflows
- Live data access from UniProt's SPARQL endpoint with no local mirroring, ensuring data freshness

## Why It Matters for RAG Builders
It abstracts the complexity of querying the UniProt SPARQL endpoint, enabling AI agents to reliably retrieve protein data without handling brittle SPARQL syntax or risking timeouts.

## Tech Stack Deep Dive
### Python 3.12+
Automated review identified **Python 3.12+** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastAPI
Automated review identified **FastAPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SPARQL 1.1
Automated review identified **SPARQL 1.1** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### QLever
Automated review identified **QLever** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

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
