---
title: "IBazylchuk/paparats-mcp"
content_type: "repo"
engine: "v2"
category: "Orchestrator"
tech_stack: ["TypeScript", "Docker", "Qdrant (Vector DB)", "llama.cpp (Embeddings)", "Tree-sitter (AST parsing)", "SQLite", "Prometheus (Metrics)", "OpenTelemetry (Tracing)", "Node.js", "MCP (Model Context Protocol)"]
quality_score: 9
rag_relevance: 10
deployment_complexity: "Medium"
tags: ["semantic code search", "AST-aware indexing", "local-first", "MCP server", "architectural memory"]
source: "https://github.com/IBazylchuk/paparats-mcp"
stars: 10
language: "TypeScript"
last_updated: "2026-07-16T07:58:39Z"
discovered_at: "2026-07-16T08:10:22Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Paparats-MCP is a local-first Model Context Protocol (MCP) server that semantically indexes entire code repositories, enabling AI coding assistants to understand and navigate codebases with AST-aware chunking, symbol graphs, and architectural memory. It provides real-time, private, and token-efficient code search and context for agents like Claude Code and Cursor.

## Key Features
- Semantic, AST-aware code indexing across 11 languages with cross-chunk symbol graphs (calls, references, etc.)
- Architectural memory system for agents to maintain and reuse components, decisions, and lessons learned
- 100% local and private deployment with Qdrant and local embeddings (no cloud or API keys required)
- Real-time sync and token-efficient context retrieval with Prometheus metrics and observability
- Multi-repository workspace support with Git history per chunk and rich metadata

## Why It Matters for RAG Builders
Paparats-MCP enables AI agents to deeply understand and navigate entire codebases with semantic precision, reducing context bloat and improving accuracy in RAG and agentic workflows.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Qdrant (Vector DB)
Automated review identified **Qdrant (Vector DB)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### llama.cpp (Embeddings)
Automated review identified **llama.cpp (Embeddings)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Tree-sitter (AST parsing)
Automated review identified **Tree-sitter (AST parsing)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Prometheus (Metrics)
Automated review identified **Prometheus (Metrics)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenTelemetry (Tracing)
Automated review identified **OpenTelemetry (Tracing)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
