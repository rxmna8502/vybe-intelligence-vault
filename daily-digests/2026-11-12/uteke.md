---
title: "codecoradev/uteke"
content_type: "repo"
engine: "v2"
category: "Vector DB"
tech_stack: ["Rust", "SQLite", "ONNX Runtime", "EmbeddingGemma", "HNSW", "FTS5", "JSON-RPC", "HTTP", "Docker"]
quality_score: 9
rag_relevance: 10
deployment_complexity: "Low"
tags: ["local-first", "semantic memory", "offline AI", "persistent context", "single binary"]
source: "https://github.com/codecoradev/uteke"
stars: 178
language: "Rust"
last_updated: "2026-08-05T02:15:35Z"
discovered_at: "2026-08-05T02:17:16Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Uteke is a local-first, offline memory engine for AI agents that provides persistent, semantic memory storage and retrieval. It enables AI tools to retain context across sessions without cloud dependencies, using a single Rust binary with hybrid search (vector + full-text) and ~45ms recall latency.

## Key Features
- Hybrid search combining vector similarity and full-text search (RRF fusion) for accurate recall by meaning and keywords
- Single Rust binary with zero dependencies, fully offline, and no API keys required
- Rooms for multi-agent collaboration and context isolation with time-travel queries
- MCP server and CLI integration for seamless AI agent and tooling compatibility
- Rich metadata support (tags, entities, categories) with smart decay and auto-linking for knowledge graph construction

## Why It Matters for RAG Builders
Uteke enables RAG and AI agents to retain persistent, semantic memory without cloud dependencies, ensuring privacy, speed, and offline functionality critical for production deployments.

## Tech Stack Deep Dive
### Rust
Automated review identified **Rust** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### ONNX Runtime
Automated review identified **ONNX Runtime** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### EmbeddingGemma
Automated review identified **EmbeddingGemma** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HNSW
Automated review identified **HNSW** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FTS5
Automated review identified **FTS5** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSON-RPC
Automated review identified **JSON-RPC** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HTTP
Automated review identified **HTTP** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
