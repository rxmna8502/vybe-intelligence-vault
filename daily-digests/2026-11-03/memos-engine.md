---
title: "TAskMAster339/memos-engine"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Python", "tree-sitter", "SQLite", "FastAPI", "FastMCP", "pydantic", "fastembed", "uv", "pytest"]
quality_score: 8
rag_relevance: 9
deployment_complexity: "Medium"
tags: ["code indexing", "structural analysis", "AI agent tools", "symbol resolution", "call graph"]
source: "https://github.com/TAskMAster339/memos-engine"
stars: 0
language: "Python"
last_updated: "2026-07-21T14:58:57Z"
discovered_at: "2026-07-21T15:03:44Z"
evaluated_by: "mistral-small-latest"
---

## Summary
memos-engine builds a structural index of TypeScript/TSX and Go codebases by parsing symbols, call edges, and imports using tree-sitter, storing results in SQLite. It enables AI agents to query code structure (definitions, callers, callees) instead of raw text, serving as the foundational layer for a Memory OS.

## Key Features
- Builds a persistent structural index of codebases (symbols, call edges, imports) using tree-sitter parsers for TypeScript/TSX and Go
- Stores index in SQLite with support for semantic search via embeddings (all-MiniLM-L6-v2)
- Provides MCP and HTTP APIs for AI agents to query code structure (e.g., find_symbol_tool, find_calls_tool, get_context_tool)
- Supports episodic memory for agents to store and retrieve notes across sessions
- Includes tools for impact analysis (rename, diff, unused symbols, dead imports) and dependency graph generation

## Why It Matters for RAG Builders
It enables AI agents to understand and navigate codebases structurally rather than textually, improving accuracy and efficiency in tasks like refactoring, debugging, and documentation.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### tree-sitter
Automated review identified **tree-sitter** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastAPI
Automated review identified **FastAPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastMCP
Automated review identified **FastMCP** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### pydantic
Automated review identified **pydantic** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### fastembed
Automated review identified **fastembed** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### uv
Automated review identified **uv** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### pytest
Automated review identified **pytest** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
