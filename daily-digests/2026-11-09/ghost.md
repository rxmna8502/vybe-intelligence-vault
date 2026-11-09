---
title: "wcatz/ghost"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Go", "SQLite", "FTS5", "Ollama (embeddings)", "MCP (Model Context Protocol)", "Docker"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Low"
tags: ["memory management", "MCP server", "local AI", "SQLite", "agent context"]
source: "https://github.com/wcatz/ghost"
stars: 1
language: "Go"
last_updated: "2026-07-20T09:54:27Z"
discovered_at: "2026-07-20T09:59:39Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Ghost is an MCP memory server designed for AI agents like Claude Code and Cursor, providing local, SQLite-based memory storage with hybrid full-text and vector search. It enables cross-client memory persistence without external services, replacing siloed agent memory with a unified, user-owned system.

## Key Features
- Single binary deployment with no external dependencies (optional Ollama for embeddings)
- Hybrid full-text and vector search with Reciprocal Rank Fusion for memory retrieval
- Time-decay scoring and memory consolidation with offline fallback (Jaccard-based)
- Cross-client compatibility via MCP standard over stdio
- Obsidian vault mirror for visualizing and managing memories as a knowledge graph

## Why It Matters for RAG Builders
Ghost eliminates siloed agent memory by providing a unified, local, and portable memory system that works across any MCP-compatible client, reducing context loss and improving agent consistency.

## Tech Stack Deep Dive
### Go
Automated review identified **Go** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FTS5
Automated review identified **FTS5** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Ollama (embeddings)
Automated review identified **Ollama (embeddings)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
