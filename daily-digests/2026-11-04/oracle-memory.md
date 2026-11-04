---
title: "JonusNattapong/Oracle-memory"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["TypeScript", "Node.js", "MCP (Model Context Protocol)", "BM25", "Vector Embeddings (Xenova/all-MiniLM-L6-v2)", "Entity Graph", "JSON", "HTTP/Streamable Transport"]
quality_score: 9
rag_relevance: 9
deployment_complexity: "Low"
tags: ["memory-server", "MCP", "hybrid-search", "file-backed", "agent-coordination"]
source: "https://github.com/JonusNattapong/Oracle-memory"
stars: 1
language: "TypeScript"
last_updated: "2026-07-17T02:49:41Z"
discovered_at: "2026-07-17T02:52:09Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Oracle Memory is a file-backed MCP memory server for AI agents that enables persistent, searchable memory across sessions without requiring a database. It combines BM25 keyword search, vector embeddings, and entity graphs for hybrid retrieval, while supporting structured memory types and atomic writes for data integrity.

## Key Features
- Hybrid search combining BM25 keyword, vector semantic, and entity graph ranking for high-precision recall
- Four structured memory types (fact, insight, chunk, working) with automatic TTL and session management
- Atomic writes and file-based storage for simplicity and data integrity without external databases
- Built-in benchmarking for retrieval quality and temporal correctness to ensure reliability
- Supports both stdio and HTTP transport modes with optional bearer token authentication

## Why It Matters for RAG Builders
Oracle Memory eliminates the need for external databases in AI agent memory systems while providing robust, hybrid search capabilities essential for RAG pipelines requiring persistent, session-spanning context.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### BM25
Automated review identified **BM25** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Vector Embeddings (Xenova/all-MiniLM-L6-v2)
Automated review identified **Vector Embeddings (Xenova/all-MiniLM-L6-v2)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Entity Graph
Automated review identified **Entity Graph** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSON
Automated review identified **JSON** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HTTP/Streamable Transport
Automated review identified **HTTP/Streamable Transport** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
