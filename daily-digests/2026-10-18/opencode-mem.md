---
title: "Stranmor/opencode-mem"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Rust", "PostgreSQL", "pgvector", "MCP (Model Context Protocol)", "Axum (HTTP server)", "ONNX (embeddings)", "OpenAI-compatible API"]
quality_score: 9
rag_relevance: 9
deployment_complexity: "Medium"
tags: ["memory", "MCP server", "PostgreSQL", "vector search", "hierarchical summaries"]
source: "https://github.com/Stranmor/opencode-mem"
stars: 3
language: "Rust"
last_updated: "2026-08-08T23:19:18Z"
discovered_at: "2026-08-08T23:31:41Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A Rust-based MCP server providing persistent memory infrastructure for AI coding agents, featuring PostgreSQL storage with optional vector retrieval, hierarchical summaries, and hybrid search capabilities for efficient observation storage and retrieval.

## Key Features
- PostgreSQL-backed persistent memory with pgvector for vector retrieval
- Hybrid search combining full-text, keyword, and semantic retrieval paths
- Hierarchical summaries with drill-down capabilities for efficient context retrieval
- MCP, HTTP, and CLI entrypoints with shared PostgreSQL service layer
- Privacy filtering and circuit-breaker mechanisms for robust operation

## Why It Matters for RAG Builders
It provides a robust, PostgreSQL-backed memory infrastructure for AI agents, enabling persistent context storage, hybrid retrieval, and hierarchical summarization essential for RAG systems.

## Tech Stack Deep Dive
### Rust
Automated review identified **Rust** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PostgreSQL
Automated review identified **PostgreSQL** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### pgvector
Automated review identified **pgvector** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Axum (HTTP server)
Automated review identified **Axum (HTTP server)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### ONNX (embeddings)
Automated review identified **ONNX (embeddings)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenAI-compatible API
Automated review identified **OpenAI-compatible API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
