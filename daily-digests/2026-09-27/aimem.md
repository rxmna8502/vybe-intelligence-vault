---
title: "yogesh-joshi-0333/aimem"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["TypeScript", "Node.js", "SQLite", "sqlite-vec", "ONNX", "MCP (Model Context Protocol)", "JSON-RPC 2.0"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Low"
tags: ["local-first", "MCP server", "AI memory", "persistent context", "SQLite vector search"]
source: "https://github.com/yogesh-joshi-0333/aimem"
stars: 0
language: "TypeScript"
last_updated: "2026-08-07T11:51:13Z"
discovered_at: "2026-08-07T11:56:24Z"
evaluated_by: "mistral-small-latest"
---

## Summary
aimem is a local-first MCP (Model Context Protocol) memory server designed to provide persistent, project-scoped memory for AI coding assistants like Claude Code and Cursor. It eliminates the need to re-explain project context across chat sessions by storing memories locally in a SQLite database with vector search capabilities.

## Key Features
- Project-scoped memory storage in a local SQLite database with vector search for efficient retrieval
- Three-tier memory capture: event-based, turn-count based, and context-threshold based to ensure critical information is preserved
- Conflict resolution and versioning engine to handle updates without silent overwrites, preserving historical context
- Zero external dependencies—bundled embedding model and no cloud API or account required
- MCP-compatible tooling for seamless integration with AI coding assistants like Claude Code and Cursor

## Why It Matters for RAG Builders
aimem solves the critical problem of AI memory loss in long coding sessions by providing persistent, project-scoped memory that eliminates the need to re-explain context, making it essential for RAG builders who require reliable, local, and efficient memory management.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### sqlite-vec
Automated review identified **sqlite-vec** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### ONNX
Automated review identified **ONNX** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSON-RPC 2.0
Automated review identified **JSON-RPC 2.0** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
