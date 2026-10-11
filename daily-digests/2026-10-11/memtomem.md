---
title: "memtomem/memtomem"
content_type: "repo"
engine: "v2"
category: "Orchestrator"
tech_stack: ["Python", "MCP (Model Context Protocol)", "BM25", "ONNX", "Rust (for performance-critical components)", "FastAPI", "SQLite", "LangGraph", "Tree-sitter (for code parsing)", "React (Web UI)"]
quality_score: 9
rag_relevance: 10
deployment_complexity: "Medium"
tags: ["long-term memory", "hybrid search", "markdown indexing", "AI agent integration", "MCP server"]
source: "https://github.com/memtomem/memtomem"
stars: 13
language: "Python"
last_updated: "2026-09-02T02:05:33Z"
discovered_at: "2026-09-02T02:13:13Z"
evaluated_by: "mistral-small-latest"
---

## Summary
memtomem is a markdown-first long-term memory system for AI coding agents that indexes local files (markdown, code, JSON, etc.) into a searchable knowledge base. It enables hybrid search (BM25 + semantic) and integrates with AI tools like Claude Code or Cursor via MCP for persistent, user-controlled memory across sessions.

## Key Features
- Hybrid search combining BM25 keyword and dense vector similarity for robust retrieval
- Incremental indexing with SHA-256 diffing to avoid redundant processing
- Namespaces and maintenance tools (deduplication, TTL expiration, auto-tagging)
- Web UI dashboard for visualization, management, and diagnostics
- MCP-compatible tooling for seamless integration with AI coding agents

## Why It Matters for RAG Builders
memtomem provides a critical layer for RAG systems by enabling persistent, user-controlled long-term memory that persists across AI agent sessions, reducing hallucinations and improving contextual continuity.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### BM25
Automated review identified **BM25** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### ONNX
Automated review identified **ONNX** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Rust (for performance-critical components)
Automated review identified **Rust (for performance-critical components)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastAPI
Automated review identified **FastAPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### LangGraph
Automated review identified **LangGraph** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Tree-sitter (for code parsing)
Automated review identified **Tree-sitter (for code parsing)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### React (Web UI)
Automated review identified **React (Web UI)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
