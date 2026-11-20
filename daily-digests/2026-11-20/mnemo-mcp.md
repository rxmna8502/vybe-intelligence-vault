---
title: "n24q02m/mnemo-mcp"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Python", "SQLite", "SQLite-vec", "FTS5", "MCP (Model Context Protocol)", "ONNX Runtime", "Qwen3", "AES-256-GCM", "Argon2id", "S3/R2/B2/MinIO", "Google Drive API", "Docker"]
quality_score: 9
rag_relevance: 10
deployment_complexity: "Medium"
tags: ["AI memory", "hybrid search", "knowledge graph", "persistent storage", "MCP server"]
source: "https://github.com/n24q02m/mnemo-mcp"
stars: 8
language: "Python"
last_updated: "2026-07-18T09:15:45Z"
discovered_at: "2026-07-18T09:24:06Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Mnemo MCP Server provides persistent AI memory with hybrid search, embedded synchronization, and temporal knowledge graph capabilities. It enables AI agents to capture, retrieve, and manage long-term memory with advanced features like entity resolution, LLM-driven compression, and cross-machine sync.

## Key Features
- Hybrid retrieval combining full-text search (FTS5) and vector search (sqlite-vec) with Reciprocal Rank Fusion (RRF) and cross-encoder reranking
- Temporal knowledge graph with bitemporal columns for time-travel queries and entity resolution via embedding KNN
- LLM-driven memory compression (~3x token reduction) and importance-based soft-archive policies
- Multi-machine sync with E2E-encrypted passport bundles (AES-256-GCM) supporting S3, R2, B2, MinIO, and Google Drive backends
- Plugin trinity (recall-context, memory-commit skills) and proactive memory capture for AI agents

## Why It Matters for RAG Builders
Mnemo MCP is essential for RAG builders as it provides a robust, self-hostable solution for persistent AI memory with advanced retrieval, compression, and synchronization capabilities, enabling long-term context retention and cross-session continuity.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite-vec
Automated review identified **SQLite-vec** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FTS5
Automated review identified **FTS5** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### ONNX Runtime
Automated review identified **ONNX Runtime** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Qwen3
Automated review identified **Qwen3** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### AES-256-GCM
Automated review identified **AES-256-GCM** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Argon2id
Automated review identified **Argon2id** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### S3/R2/B2/MinIO
Automated review identified **S3/R2/B2/MinIO** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Google Drive API
Automated review identified **Google Drive API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
