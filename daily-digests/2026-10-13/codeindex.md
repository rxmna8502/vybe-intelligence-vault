---
title: "Widthdom/CodeIndex"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["C#", ".NET 8.x / 9.x", "SQLite", "FTS5", "MCP (Model Context Protocol)", "LSP (Language Server Protocol)"]
quality_score: 9
rag_relevance: 9
deployment_complexity: "Medium"
tags: ["code indexing", "local retrieval", "MCP server", "LSP integration", "SQLite FTS5"]
source: "https://github.com/Widthdom/CodeIndex"
stars: 2
language: "C#"
last_updated: "2026-08-01T13:14:59Z"
discovered_at: "2026-08-01T13:16:43Z"
evaluated_by: "mistral-small-latest"
---

## Summary
cdidx is a local-first CLI tool that builds a SQLite-based index of code repositories for fast full-text, symbol, dependency, and inspection queries. It exposes this index via CLI, MCP server, and read-only LSP for AI agents, scripts, and editors to perform repeated code investigations without rescanning the repository.

## Key Features
- Builds a local SQLite FTS5 index for fast full-text and symbol searches
- Exposes index via CLI, MCP server, and read-only LSP for external tools and agents
- Supports incremental refresh and structured query results
- Provides lightweight symbol and reference extraction optimized for retrieval
- Offers bounded JSON output with pagination and truncation controls

## Why It Matters for RAG Builders
cdidx enables AI agents and RAG systems to perform fast, repeatable code searches and retrievals without rescanning repositories, reducing latency and improving efficiency in code-aware workflows.

## Tech Stack Deep Dive
### C#
Automated review identified **C#** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### .NET 8.x / 9.x
Automated review identified **.NET 8.x / 9.x** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FTS5
Automated review identified **FTS5** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### LSP (Language Server Protocol)
Automated review identified **LSP (Language Server Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
