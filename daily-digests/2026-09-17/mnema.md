---
title: "mienetic/mnema"
content_type: "repo"
engine: "v2"
category: "Orchestrator"
tech_stack: ["Python", "Model Context Protocol (MCP)", "ChromaDB", "Qdrant", "sqlite-vec", "sentence-transformers", "OpenAI embeddings", "FastAPI", "uv (package manager)"]
quality_score: 9
rag_relevance: 10
deployment_complexity: "Medium"
tags: ["long-term memory", "MCP server", "vector database", "hybrid search", "memory decay"]
source: "https://github.com/mienetic/mnema"
stars: 2
language: "Python"
last_updated: "2026-07-14T17:56:03Z"
discovered_at: "2026-07-14T18:02:03Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Mnema is an open-source Model Context Protocol (MCP) server that provides long-term, persistent, and searchable memory for AI agents, solving the context-window problem by integrating with pluggable vector databases and hybrid search mechanisms.

## Key Features
- Pluggable vector backends (ChromaDB, Qdrant, sqlite-vec) for flexible storage
- Hybrid search combining semantic similarity, tag overlap, and decay scoring for precise recall
- Memory decay mechanism (recency × frequency × importance) to maintain relevance
- Multi-user/session support via scope-based namespace isolation
- MCP-native integration for seamless compatibility with AI clients like Claude, Cursor, and Zed

## Why It Matters for RAG Builders
Mnema provides a critical long-term memory layer for AI agents, enabling persistent context retention without token overhead, which is essential for building robust RAG systems.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### ChromaDB
Automated review identified **ChromaDB** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Qdrant
Automated review identified **Qdrant** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### sqlite-vec
Automated review identified **sqlite-vec** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### sentence-transformers
Automated review identified **sentence-transformers** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenAI embeddings
Automated review identified **OpenAI embeddings** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastAPI
Automated review identified **FastAPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### uv (package manager)
Automated review identified **uv (package manager)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
