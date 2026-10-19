---
title: "nordicnode/kernava-mcp"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Rust", "tree-sitter", "SQLite-WAL", "DashMap", "rmcp", "axum", "FTS5", "Louvain community detection"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Medium"
tags: ["MCP server", "call graph", "code analysis", "symbol extraction", "dead code detection"]
source: "https://github.com/nordicnode/kernava-mcp"
stars: 1
language: "Rust"
last_updated: "2026-07-15T02:01:43Z"
discovered_at: "2026-07-15T02:12:26Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Kernava MCP is a Rust-based MCP server that builds and serves an in-memory call graph for codebases, enabling efficient structural queries like call relationships, dead code detection, and impact analysis without re-reading source files.

## Key Features
- In-RAM call graph with lock-free reads for sub-millisecond query responses
- Supports 11 languages with incremental re-indexing and content-hash dedup
- SQLite-WAL persistence with FTS5 full-text search for symbols and code
- 16 MCP tools for structural queries (callers, callees, impact radius, dead code, etc.)
- Streamable HTTP transport via rmcp for long-lived, warm sessions

## Why It Matters for RAG Builders
Kernava MCP enables AI agents to efficiently query code structure without token-heavy file reads, making it essential for RAG systems that need to analyze or reason about codebases.

## Tech Stack Deep Dive
### Rust
Automated review identified **Rust** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### tree-sitter
Automated review identified **tree-sitter** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite-WAL
Automated review identified **SQLite-WAL** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### DashMap
Automated review identified **DashMap** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### rmcp
Automated review identified **rmcp** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### axum
Automated review identified **axum** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FTS5
Automated review identified **FTS5** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Louvain community detection
Automated review identified **Louvain community detection** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
