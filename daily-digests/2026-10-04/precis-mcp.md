---
title: "retospect/precis-mcp"
content_type: "repo"
engine: "v2"
category: "Orchestrator"
tech_stack: ["Python", "PostgreSQL", "pgvector", "Model Context Protocol (MCP)", "FastAPI", "SymPy", "pint", "matplotlib", "Mermaid", "RDKit", "ASE", "spglib", "torch", "sentence-transformers", "FastAPI", "Jinja", "HTMX", "discord.py", "Kokoro"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "High"
tags: ["MCP server", "PostgreSQL", "pgvector", "document management", "agent tooling"]
source: "https://github.com/retospect/precis-mcp"
stars: 3
language: "Python"
last_updated: "2026-09-02T22:03:01Z"
discovered_at: "2026-09-02T22:18:18Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A Model Context Protocol (MCP) server that provides language-model agents with a uniform API for reading, writing, and searching across diverse content types including papers, documents, code, personal state, and cached tool calls. It leverages PostgreSQL with pgvector for storage and supports both local deterministic tools and optional heavyweight integrations.

## Key Features
- Unified API for 8 verbs (get, search, put, edit, delete, tag, link, more) across 20+ content kinds (papers, patents, code, memory, drafts, etc.)
- Hybrid lexical + semantic search with RRF fusion using pgvector for vector embeddings
- Modular design with optional extras for heavy integrations (e.g., embeddings, patent ingestion, Wolfram Math)
- Deterministic local tools (e.g., SymPy, matplotlib, Mermaid) included in core for reliability
- Supports both typed multi-tool and single-tool MCP profiles for flexibility in agent integration

## Why It Matters for RAG Builders
It provides a standardized, extensible interface for agents to interact with diverse content and tools, simplifying RAG pipeline integration and reducing boilerplate for document and state management.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PostgreSQL
Automated review identified **PostgreSQL** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### pgvector
Automated review identified **pgvector** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastAPI
Automated review identified **FastAPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SymPy
Automated review identified **SymPy** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### pint
Automated review identified **pint** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### matplotlib
Automated review identified **matplotlib** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Mermaid
Automated review identified **Mermaid** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### RDKit
Automated review identified **RDKit** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### ASE
Automated review identified **ASE** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### spglib
Automated review identified **spglib** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### torch
Automated review identified **torch** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### sentence-transformers
Automated review identified **sentence-transformers** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastAPI
Automated review identified **FastAPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Jinja
Automated review identified **Jinja** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HTMX
Automated review identified **HTMX** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### discord.py
Automated review identified **discord.py** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Kokoro
Automated review identified **Kokoro** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
