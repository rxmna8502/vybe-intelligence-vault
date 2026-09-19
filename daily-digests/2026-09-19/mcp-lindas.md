---
title: "OpenHelvetia/mcp-lindas"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Rust", "Model Context Protocol (MCP)", "SPARQL", "Linked Data (RDF)", "Git", "Cargo"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Medium"
tags: ["MCP server", "Linked Data", "Political data", "Swiss government data", "RAG data source"]
source: "https://github.com/OpenHelvetia/mcp-lindas"
stars: 0
language: "Rust"
last_updated: "2026-09-03T19:04:28Z"
discovered_at: "2026-09-03T19:07:05Z"
evaluated_by: "mistral-small-latest"
---

## Summary
mcp-lindas is an MCP server that exposes Switzerland's 44 political Linked Data cubes (e.g., votes, elections, federal council) via the Model Context Protocol (MCP) for AI systems. It provides 8 tools to query and retrieve structured political data while preserving source attribution and ensuring data integrity.

## Key Features
- Exposes 44 Swiss political data cubes via MCP with 8 specialized tools for querying (e.g., votes, elections, federal council records).
- Preserves data provenance: every response includes the exact source IRI, row, or version for traceability.
- Supports offline testing via recorded fixtures and live mode with polite rate limiting (2 requests/sec, burst 4).
- No data storage or state retention; operates purely as a read-only interface to LINDAS.
- Comprehensive testing pipeline with 64 tests (22 unit, 7 contract, 35 end-to-end) and rule-based contract validation.

## Why It Matters for RAG Builders
It provides a standardized, provenance-aware interface to high-quality Swiss political data, essential for RAG systems requiring authoritative and traceable sources.

## Tech Stack Deep Dive
### Rust
Automated review identified **Rust** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SPARQL
Automated review identified **SPARQL** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Linked Data (RDF)
Automated review identified **Linked Data (RDF)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Git
Automated review identified **Git** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Cargo
Automated review identified **Cargo** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
