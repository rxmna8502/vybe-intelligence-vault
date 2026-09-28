---
title: "studiomeyer-io/local-memory-mcp"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["TypeScript", "SQLite", "Node.js", "Transformers.js", "sqlite-vec", "FTS5", "BM25", "Reciprocal Rank Fusion (RRF)", "MCP (Model Context Protocol)"]
quality_score: 9
rag_relevance: 10
deployment_complexity: "Low"
tags: ["local-memory", "MCP-server", "hybrid-retrieval", "bi-temporal-queries", "offline-ai"]
source: "https://github.com/studiomeyer-io/local-memory-mcp"
stars: 10
language: "TypeScript"
last_updated: "2026-08-01T20:44:41Z"
discovered_at: "2026-08-01T20:51:13Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A local-first MCP server providing persistent memory for AI assistants like Claude, Cursor, and Codex. It stores learnings, decisions, and facts in a SQLite database with hybrid retrieval (BM25 + vector cosine via RRF), bi-temporal queries, and contradiction detection—all running entirely offline without API keys.

## Key Features
- Persistent local storage of AI learnings and facts in a single SQLite file with no cloud dependency
- Hybrid retrieval combining BM25 keyword search and vector cosine similarity via Reciprocal Rank Fusion (RRF)
- Bi-temporal 'asOf' queries to retrieve knowledge valid at a specific point in time
- LLM-free contradiction detection and fact supersession for managing stale or conflicting information
- Multilingual embeddings (100+ languages) with local model inference (Xenova/multilingual-e5-small)

## Why It Matters for RAG Builders
It enables RAG systems to maintain persistent, context-aware memory without relying on external APIs or cloud services, ensuring privacy and reducing latency while improving relevance through hybrid retrieval and bi-temporal querying.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Transformers.js
Automated review identified **Transformers.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### sqlite-vec
Automated review identified **sqlite-vec** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FTS5
Automated review identified **FTS5** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### BM25
Automated review identified **BM25** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Reciprocal Rank Fusion (RRF)
Automated review identified **Reciprocal Rank Fusion (RRF)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
