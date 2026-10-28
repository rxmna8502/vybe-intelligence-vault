---
title: "berntpopp/mondo-link"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Python 3.12+", "SQLite", "Streamable HTTP", "MCP (Model Context Protocol)", "OBO (Ontology Web Language)", "SSSOM (Simple Standard for Sharing Ontological Mappings)", "uv (package manager)", "Docker"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Medium"
tags: ["disease ontology", "MCP server", "ontology indexing", "cross-ontology mapping", "SQLite"]
source: "https://github.com/berntpopp/mondo-link"
stars: 0
language: "Python"
last_updated: "2026-09-01T22:13:06Z"
discovered_at: "2026-09-01T22:19:51Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Mondo-link is an MCP server that provides a local, queryable SQLite index for the Mondo Disease Ontology, enabling fast disease-term lookup, hierarchical traversal, and cross-ontology mapping without relying on upstream APIs or rate limits.

## Key Features
- Precomputed SQLite index with full-text search and transitive `is_a` closure for disease hierarchies
- Cross-ontology mapping support (OMIM, Orphanet, DOID, NCIT, UMLS, MeSH, MONDO) with ranked predicates
- Offline, fast lookups with no upstream rate-limiting or throttling
- Atomic build process with provenance tracking and conditional downloads (ETag/Last-Modified)
- Supports both HTTP and stdio MCP transport for integration with AI agents and tools

## Why It Matters for RAG Builders
It provides a critical, locally queryable interface to the Mondo Disease Ontology, enabling reliable and fast disease-term resolution and hierarchical traversal for RAG and AI systems without dependency on external APIs.

## Tech Stack Deep Dive
### Python 3.12+
Automated review identified **Python 3.12+** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Streamable HTTP
Automated review identified **Streamable HTTP** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OBO (Ontology Web Language)
Automated review identified **OBO (Ontology Web Language)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SSSOM (Simple Standard for Sharing Ontological Mappings)
Automated review identified **SSSOM (Simple Standard for Sharing Ontological Mappings)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### uv (package manager)
Automated review identified **uv (package manager)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
