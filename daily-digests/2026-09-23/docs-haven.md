---
title: "Cipher208/docs-haven"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Python", "SQLite", "SQLite FTS5", "MCP (Model Context Protocol)", "Git", "BM25 ranking", "CLI", "pytest"]
quality_score: 9
rag_relevance: 9
deployment_complexity: "Low"
tags: ["knowledge base", "local search", "MCP server", "document indexing", "AI agent persistence"]
source: "https://github.com/Cipher208/docs-haven"
stars: 0
language: "Python"
last_updated: "2026-07-18T09:15:42Z"
discovered_at: "2026-07-18T09:23:55Z"
evaluated_by: "mistral-small-latest"
---

## Summary
DocsHaven is a local knowledge base for AI agents that indexes GitHub repositories, enables instant full-text search, and ensures knowledge persistence across sessions. It operates as an MCP server with 16 tools, requiring minimal dependencies and no cloud services.

## Key Features
- Instant SQLite FTS5 search with BM25 ranking for sub-100ms query times
- URI-based organization (core://, ref://, guide://) for domain-specific knowledge management
- Built-in conflict detection to flag contradictory documents during indexing
- Compressed multi-machine sync via Git for seamless knowledge sharing
- 16 MCP tools for integration with any MCP-compatible AI agent (Claude, Cursor, etc.)

## Why It Matters for RAG Builders
DocsHaven eliminates the need for AI agents to relearn or forget critical knowledge between sessions by providing a persistent, local, and instantly searchable knowledge base.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite FTS5
Automated review identified **SQLite FTS5** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Git
Automated review identified **Git** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### BM25 ranking
Automated review identified **BM25 ranking** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CLI
Automated review identified **CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### pytest
Automated review identified **pytest** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
