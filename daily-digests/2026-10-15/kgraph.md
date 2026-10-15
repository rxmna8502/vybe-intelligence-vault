---
title: "ajksunkang-aios/KGraph"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Python", "SQLite", "SCIP (Sourcegraph Code Intelligence Protocol)", "scip-clang", "MCP (Model Context Protocol)", "Protobuf", "Docker", "clang/LLVM"]
quality_score: 9
rag_relevance: 10
deployment_complexity: "Medium"
tags: ["kernel code analysis", "compiler-aware indexing", "function-pointer resolution", "MCP server", "Linux kernel"]
source: "https://github.com/ajksunkang-aios/KGraph"
stars: 3
language: "Python"
last_updated: "2026-07-14T07:55:43Z"
discovered_at: "2026-07-14T08:01:11Z"
evaluated_by: "mistral-small-latest"
---

## Summary
KGraph is a compiler-aware kernel code graph engine that indexes Linux kernel code based on actual compilation truth rather than syntax parsing. It enables AI agents to query kernel structure efficiently via an MCP server, resolving function-pointer calls and config-aware branches for accurate structural analysis.

## Key Features
- Compiler-aware indexing using `compile_commands.json` and `scip-clang` to capture only code compiled under a specific config
- Resolves function-pointer calls (e.g., `ops_bind` edges) that syntax-based tools cannot track
- Provides 13 MCP tools for structural queries (callers, callees, ops implementations, symbol lookup)
- SQLite-native knowledge graph for efficient querying and token budget control
- Auto-configuration for AI agents (Claude, Cursor, Codex, opencode, Hermes) via `kgraph install`

## Why It Matters for RAG Builders
KGraph enables AI agents to perform accurate, token-efficient structural queries on Linux kernel code by indexing compiler-resolved truth, eliminating noise from dead branches and unresolved function pointers.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SCIP (Sourcegraph Code Intelligence Protocol)
Automated review identified **SCIP (Sourcegraph Code Intelligence Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### scip-clang
Automated review identified **scip-clang** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Protobuf
Automated review identified **Protobuf** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### clang/LLVM
Automated review identified **clang/LLVM** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
