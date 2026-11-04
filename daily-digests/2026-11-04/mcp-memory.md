---
title: "GermaniU/mcp-memory"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Python", "FastMCP", "SQLite", "FTS5", "BM25", "Model Context Protocol (MCP)", "Ollama", "Qdrant", "Docker"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Low"
tags: ["MCP server", "AI agent memory", "local persistence", "BM25 search", "self-hosted"]
source: "https://github.com/GermaniU/mcp-memory"
stars: 0
language: "Python"
last_updated: "2026-08-09T01:54:18Z"
discovered_at: "2026-08-09T03:45:45Z"
evaluated_by: "mistral-small-latest"
---

## Summary
MCP Memory is an open-source MCP server that provides persistent, lexically searchable (BM25) local memory for AI agents like Claude Code, OpenCode, Cursor, and Continue. It uses SQLite with FTS5 for storage and retrieval, ensuring zero external dependencies and full self-hosting capability.

## Key Features
- Persistent local memory storage using SQLite with FTS5 for efficient lexical search (BM25)
- Seamless integration with any MCP-compatible AI agent (Claude Code, Cursor, Continue, etc.)
- Nine standard MCP tools for memory management (save, search, update, delete, list, export, import, etc.)
- Namespace support for separating memory contexts and metadata/tags for flexible organization
- Zero external dependencies, self-contained deployment with optional Qdrant integration for semantic search

## Why It Matters for RAG Builders
It provides a lightweight, self-hosted solution for persistent memory in AI agents, eliminating cloud dependency and enabling fully local, customizable agent workflows.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastMCP
Automated review identified **FastMCP** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FTS5
Automated review identified **FTS5** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### BM25
Automated review identified **BM25** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Ollama
Automated review identified **Ollama** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Qdrant
Automated review identified **Qdrant** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
