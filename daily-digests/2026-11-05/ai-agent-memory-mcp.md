---
title: "xiangzi1126/ai-agent-memory-mcp"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Python", "SQLite", "Chroma (embedded)", "MCP (Model Context Protocol)", "OpenAI-compatible embedding services", "Markdown", "FTS5 (SQLite full-text search)"]
quality_score: 8
rag_relevance: 9
deployment_complexity: "Medium"
tags: ["memory management", "MCP server", "persistent storage", "agent collaboration", "vector retrieval"]
source: "https://github.com/xiangzi1126/ai-agent-memory-mcp"
stars: 0
language: "Python"
last_updated: "2026-07-15T07:58:32Z"
discovered_at: "2026-07-15T08:06:09Z"
evaluated_by: "mistral-small-latest"
---

## Summary
An agent-agnostic persistent memory layer exposed as an MCP Server, enabling local-first memory storage and retrieval for AI agents like Claude Code, Qoder, and Cursor. Memories are stored in project-specific `.aamm/` directories and shared across agents.

## Key Features
- Agent-agnostic memory layer compatible with MCP clients (Claude Code, Qoder, Cursor)
- Three-way memory storage (SQLite, Chroma, Markdown) for structured, vector, and human-readable formats
- Fused retrieval combining vector search, keyword matching, and title/tag matching
- Work journal for timeline tracking of agent interactions
- Local-first storage with project-specific `.aamm/` directory for portability

## Why It Matters for RAG Builders
It provides a portable, agent-agnostic memory layer that enhances RAG systems by enabling persistent, structured, and searchable context across projects and agents.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Chroma (embedded)
Automated review identified **Chroma (embedded)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenAI-compatible embedding services
Automated review identified **OpenAI-compatible embedding services** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Markdown
Automated review identified **Markdown** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FTS5 (SQLite full-text search)
Automated review identified **FTS5 (SQLite full-text search)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
