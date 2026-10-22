---
title: "monahand1023/corpus"
content_type: "repo"
engine: "v2"
category: "Vector DB"
tech_stack: ["Python", "SQLite", "sqlite-vec", "FastMCP", "Voyage API", "Gemini API", "BM25", "BGE (cross-encoder re-ranker)", "MCP (Model Context Protocol)", "PyPDF", "Trafilatura"]
quality_score: 9
rag_relevance: 10
deployment_complexity: "Low"
tags: ["local-first RAG", "personal knowledge system", "hybrid search", "MCP integration", "SQLite-based vector storage"]
source: "https://github.com/monahand1023/corpus"
stars: 0
language: "Python"
last_updated: "2026-09-02T15:42:29Z"
discovered_at: "2026-09-02T15:53:18Z"
evaluated_by: "mistral-small-latest"
---

## Summary
corpus-rag is a local-first, personal knowledge system that enables users to store, index, and query their documents (notes, PDFs, HTML, etc.) entirely on their own machine using plain English queries. It combines SQLite for storage with local or API-based embeddings (Voyage or Gemini) and supports hybrid search with BM25 and vector retrieval.

## Key Features
- Hybrid search combining semantic vectors and BM25 with auto-fused weights
- Local SQLite storage for vectors, BM25 FTS, and metadata (no external vector DB required)
- Idempotent and incremental ingestion with deduplication and pruning of orphaned chunks
- Seven MCP tools for integration with Claude Code/Desktop (e.g., search, expand_context, summaries)
- Built-in connectors for markdown, text, PDF, and HTML with optional extras for additional formats

## Why It Matters for RAG Builders
It provides a self-contained, privacy-preserving RAG system that eliminates the need for external vector databases or cloud services, making it ideal for personal archives and sensitive data.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### sqlite-vec
Automated review identified **sqlite-vec** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastMCP
Automated review identified **FastMCP** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Voyage API
Automated review identified **Voyage API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Gemini API
Automated review identified **Gemini API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### BM25
Automated review identified **BM25** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### BGE (cross-encoder re-ranker)
Automated review identified **BGE (cross-encoder re-ranker)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PyPDF
Automated review identified **PyPDF** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Trafilatura
Automated review identified **Trafilatura** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
