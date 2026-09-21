---
title: "saianthireddy/webdocs-mcp"
content_type: "repo"
engine: "v2"
category: "Orchestrator"
tech_stack: ["Python", "FastAPI", "DuckDB", "BM25", "Hashing/Embeddings", "Model Context Protocol (MCP)", "Docker", "Pytest", "httpx", "Redis (optional)"]
quality_score: 9
rag_relevance: 10
deployment_complexity: "Medium"
tags: ["documentation retrieval", "MCP server", "hybrid search", "offline indexing", "LLM agent tools"]
source: "https://github.com/saianthireddy/webdocs-mcp"
stars: 1
language: "Python"
last_updated: "2026-07-17T16:12:25Z"
discovered_at: "2026-07-17T16:15:00Z"
evaluated_by: "mistral-small-latest"
---

## Summary
webdocs-mcp is a lightweight MCP server that crawls documentation sites, indexes them into DuckDB with hybrid (semantic + BM25) search, and exposes tools for LLM agents to retrieve current, version-specific documentation. It runs offline by default but supports OpenAI embeddings for production use.

## Key Features
- Breadth-first crawler with parent/child hierarchy tracking for documentation sites
- Hybrid search combining embeddings (hashing or OpenAI) and BM25 for robust retrieval
- Exposes tools (search_docs, list_doc_pages, get_doc_page) over MCP for LLM agents
- Portable DuckDB-based index with zero operational overhead
- Fully offline-testable with injectable fetcher and in-memory fake sites

## Why It Matters for RAG Builders
It enables LLM agents to retrieve current, version-specific documentation directly from source, eliminating hallucinations caused by stale or outdated training data.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastAPI
Automated review identified **FastAPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### DuckDB
Automated review identified **DuckDB** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### BM25
Automated review identified **BM25** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Hashing/Embeddings
Automated review identified **Hashing/Embeddings** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Pytest
Automated review identified **Pytest** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### httpx
Automated review identified **httpx** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Redis (optional)
Automated review identified **Redis (optional)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
