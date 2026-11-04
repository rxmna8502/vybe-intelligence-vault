---
title: "chloeeekim/fridai"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Python", "SQLite", "FastEmbed", "ONNX", "MCP (Model Context Protocol)", "Git", "FTS5 (Full Text Search)", "NumPy"]
quality_score: 8
rag_relevance: 9
deployment_complexity: "Medium"
tags: ["MCP server", "local memory", "code recall", "agent integration", "semantic search"]
source: "https://github.com/chloeeekim/fridai"
stars: 0
language: "Python"
last_updated: "2026-07-20T06:04:50Z"
discovered_at: "2026-07-20T06:16:59Z"
evaluated_by: "mistral-small-latest"
---

## Summary
fridai is a lightweight MCP server that enables AI coding agents to recall past code, commits, and AI conversations locally without requiring an LLM. It indexes and searches agent interactions and codebases using local embeddings and lexical search.

## Key Features
- Local embeddings with FastEmbed/ONNX for semantic search without external APIs
- Multi-agent history indexing (Claude Code, OpenAI Codex, Gemini CLI)
- Incremental indexing with support for real-time updates via `--watch`
- Privacy-focused design with automatic secret redaction and local-only storage
- Hybrid search combining lexical (BM25) and vector (RRF) results with reranking

## Why It Matters for RAG Builders
fridai enables AI coding agents to recall and reference past work artifacts locally, improving context-awareness and reducing reliance on external memory systems for RAG pipelines.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastEmbed
Automated review identified **FastEmbed** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### ONNX
Automated review identified **ONNX** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Git
Automated review identified **Git** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FTS5 (Full Text Search)
Automated review identified **FTS5 (Full Text Search)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### NumPy
Automated review identified **NumPy** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
