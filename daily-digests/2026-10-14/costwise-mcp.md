---
title: "okyashgajjar/costwise-mcp"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Go", "Tree-sitter", "SQLite", "MCP (Model Context Protocol)", "Bluge (inverted index)", "Claude Code", "Cursor", "OpenCode"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Medium"
tags: ["MCP server", "code indexing", "token optimization", "AI agent tooling", "repository intelligence"]
source: "https://github.com/okyashgajjar/costwise-mcp"
stars: 20
language: "Go"
last_updated: "2026-08-02T15:01:30Z"
discovered_at: "2026-08-02T15:02:46Z"
evaluated_by: "mistral-small-latest"
---

## Summary
CostWise is a local MCP server that optimizes AI coding agents by reducing redundant code exploration and memory usage. It indexes repositories using Tree-sitter and SQLite, enabling agents to retrieve symbols, references, and call edges efficiently while minimizing token usage and context window bloat.

## Key Features
- Precomputes and stores repository symbols, references, and call edges in a local SQLite index for fast retrieval
- Provides 10 MCP tools for semantic search, symbol navigation, and context management (e.g., `search_code`, `remember`, `stash_context`)
- Supports 11 languages with bespoke and Tree-sitter parsers for deep analysis
- Implements session-aware guidance to teach AI agents efficient workflows (e.g., stashing large outputs, persisting durable facts)
- Offers automatic repository indexing and manual re-indexing tools for maintenance

## Why It Matters for RAG Builders
CostWise reduces token waste and context bloat in AI coding agents by providing efficient, precomputed repository intelligence, making it essential for building scalable and cost-effective RAG systems.

## Tech Stack Deep Dive
### Go
Automated review identified **Go** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Tree-sitter
Automated review identified **Tree-sitter** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Bluge (inverted index)
Automated review identified **Bluge (inverted index)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Claude Code
Automated review identified **Claude Code** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Cursor
Automated review identified **Cursor** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenCode
Automated review identified **OpenCode** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
