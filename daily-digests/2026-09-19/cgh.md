---
title: "altikva/cgh"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Python", "DuckDB", "SQLite", "MCP (Model Context Protocol)", "Tree-sitter (for parsing)", "Watchdog (file watcher)", "FastAPI (for MCP server)"]
quality_score: 9
rag_relevance: 9
deployment_complexity: "Medium"
tags: ["code graph", "MCP server", "AI coding assistant", "symbol lookup", "context optimization"]
source: "https://github.com/altikva/cgh"
stars: 0
language: "Python"
last_updated: "2026-08-09T12:45:20Z"
discovered_at: "2026-08-09T12:50:10Z"
evaluated_by: "mistral-small-latest"
---

## Summary
cgh is a local code graph tool that parses repositories into structured graphs of files, functions, classes, and documentation, exposing them via an MCP server for AI coding assistants. It provides shared memory, guardrails, and confidentiality layers to optimize agent navigation and reduce context token usage.

## Key Features
- Parses repositories into structured graphs (files, functions, classes, Terraform resources, Markdown docs)
- Exposes graph via MCP server for AI tools (Claude, Cursor, Codex, Gemini, IBM Bob)
- Provides shared memory and session context for connected agents
- Includes confidentiality layers (egress gates, guard hooks) for data security
- Reduces context tokens by 40-60% and turns by 20-40% for code navigation tasks

## Why It Matters for RAG Builders
cgh enables AI coding assistants to perform precise, symbol-level lookups in large codebases, drastically reducing context overhead and improving efficiency for RAG and AI stack builders.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### DuckDB
Automated review identified **DuckDB** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Tree-sitter (for parsing)
Automated review identified **Tree-sitter (for parsing)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Watchdog (file watcher)
Automated review identified **Watchdog (file watcher)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastAPI (for MCP server)
Automated review identified **FastAPI (for MCP server)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
