---
title: "sunbeamdotpt/memory"
content_type: "repo"
engine: "v2"
category: "Vector DB"
tech_stack: ["Rust", "SQLite", "FastEmbed", "HNSW (Hierarchical Navigable Small World)", "MCP (Model Context Protocol)", "ConnectRPC", "Protobuf", "HTTP/2", "OIDC/JWT", "Systemd"]
quality_score: 9
rag_relevance: 10
deployment_complexity: "Medium"
tags: ["semantic memory", "vector search", "MCP server", "file ingestion", "RAG augmentation"]
source: "https://github.com/sunbeamdotpt/memory"
stars: 23
language: "Rust"
last_updated: "2026-07-11T07:40:54Z"
discovered_at: "2026-07-11T07:52:39Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A semantic memory server for AI assistants that stores and retrieves facts, code snippets, notes, and documents using vector embeddings. It supports local and remote access via MCP (stdio/HTTP) and ConnectRPC, with automatic file ingestion and directory watching for real-time memory updates.

## Key Features
- Semantic search with vector embeddings (BGE-Base-English-v1.5)
- Automatic file ingestion and directory watching (supports PDFs, code, text)
- Local stdio MCP server and remote HTTP/ConnectRPC API
- Git repository tracking with branch-aware updates
- OIDC/JWT authentication and systemd service integration

## Why It Matters for RAG Builders
It provides a persistent, semantic memory layer for AI assistants that keeps retrieved context current and relevant, essential for building advanced RAG systems.

## Tech Stack Deep Dive
### Rust
Automated review identified **Rust** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastEmbed
Automated review identified **FastEmbed** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HNSW (Hierarchical Navigable Small World)
Automated review identified **HNSW (Hierarchical Navigable Small World)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### ConnectRPC
Automated review identified **ConnectRPC** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Protobuf
Automated review identified **Protobuf** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HTTP/2
Automated review identified **HTTP/2** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OIDC/JWT
Automated review identified **OIDC/JWT** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Systemd
Automated review identified **Systemd** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
