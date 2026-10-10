---
title: "escoffier-labs/graphtrail"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Rust", "SQLite", "Tree-sitter", "MCP (Model Context Protocol)", "CLI", "JSON-RPC", "Git"]
quality_score: 9
rag_relevance: 9
deployment_complexity: "Medium"
tags: ["code graph", "call graph", "static analysis", "MCP server", "SQLite"]
source: "https://github.com/escoffier-labs/graphtrail"
stars: 6
language: "Rust"
last_updated: "2026-07-19T05:47:41Z"
discovered_at: "2026-07-19T05:51:12Z"
evaluated_by: "mistral-small-latest"
---

## Summary
GraphTrail is a local code graph tool that indexes symbols, imports, and call edges into an SQLite database, enabling queries for callers, callees, impact, and context via CLI or MCP server. It provides structural insights for code navigation and agent-assisted editing without requiring a daemon or network.

## Key Features
- Local SQLite-based code graph with symbols, imports, and call edges parsed via Tree-sitter
- CLI and MCP server for querying callers, callees, impact, and context
- Supports multiple languages (Python, TypeScript/JavaScript, Rust, Go)
- Incremental sync with git-aware file tracking and `.gitignore` support
- Agent-friendly context packs and MCP tools for integration with AI workflows

## Why It Matters for RAG Builders
GraphTrail provides precise structural context for code navigation and agent-assisted editing, reducing guesswork in large codebases by exposing call graphs and impact analysis directly to AI tools.

## Tech Stack Deep Dive
### Rust
Automated review identified **Rust** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Tree-sitter
Automated review identified **Tree-sitter** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CLI
Automated review identified **CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSON-RPC
Automated review identified **JSON-RPC** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Git
Automated review identified **Git** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
