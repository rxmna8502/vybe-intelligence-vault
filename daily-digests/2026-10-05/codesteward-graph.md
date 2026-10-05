---
title: "Codesteward/codesteward-graph"
content_type: "repo"
engine: "v2"
category: "Orchestrator"
tech_stack: ["Python", "Tree-sitter", "Neo4j", "JanusGraph", "GraphQLite", "SQLite", "Docker", "Model Context Protocol (MCP)", "TypeScript", "JavaScript", "Java", "Go", "Rust", "PHP", "C#", "Kotlin", "Scala", "C", "C++", "SQL", "COBOL"]
quality_score: 9
rag_relevance: 10
deployment_complexity: "Medium"
tags: ["code graph", "MCP server", "AST parsing", "dependency analysis", "authentication detection"]
source: "https://github.com/Codesteward/codesteward-graph"
stars: 2
language: "Python"
last_updated: "2026-07-15T19:59:34Z"
discovered_at: "2026-07-15T20:08:15Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Codesteward-Graph parses codebases into a persistent structural graph using tree-sitter AST and exposes it as an MCP tool interface for AI agents. It enables efficient cross-file queries for relationships, call chains, auth guards, and dependencies without repeated file scans.

## Key Features
- Parses 14+ languages into a queryable graph via tree-sitter AST
- Exposes MCP tools for AI agents to query structural relationships, call chains, and dependencies
- Supports multiple backends: Neo4j, JanusGraph, and GraphQLite (embedded SQLite)
- Includes taint analysis for security workflows (optional)
- Auto-detects AI tools (Claude Code, Cursor, Cline) for seamless integration

## Why It Matters for RAG Builders
Codesteward-Graph enables AI agents to efficiently query codebases as structured graphs, eliminating repeated file scans and enabling precise cross-file analysis for tasks like dependency mapping, auth guard detection, and call chain resolution.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Tree-sitter
Automated review identified **Tree-sitter** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Neo4j
Automated review identified **Neo4j** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JanusGraph
Automated review identified **JanusGraph** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### GraphQLite
Automated review identified **GraphQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JavaScript
Automated review identified **JavaScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Java
Automated review identified **Java** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Go
Automated review identified **Go** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Rust
Automated review identified **Rust** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PHP
Automated review identified **PHP** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### C#
Automated review identified **C#** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Kotlin
Automated review identified **Kotlin** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Scala
Automated review identified **Scala** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### C
Automated review identified **C** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### C++
Automated review identified **C++** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQL
Automated review identified **SQL** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### COBOL
Automated review identified **COBOL** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
