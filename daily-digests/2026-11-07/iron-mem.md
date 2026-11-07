---
title: "BMC-INC/Iron-mem"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Rust", "SQLite", "PostgreSQL", "MCP (Model Context Protocol)", "Tree-sitter", "ONNX (for cross-encoder reranking)", "Docker", "FTS5 (Full-Text Search)", "Vector databases (via external adapters)", "Graph databases (via external adapters)"]
quality_score: 9
rag_relevance: 9
deployment_complexity: "Medium"
tags: ["persistent memory", "AI coding assistants", "session context", "MCP server", "governed retrieval"]
source: "https://github.com/BMC-INC/Iron-mem"
stars: 5
language: "Rust"
last_updated: "2026-07-16T22:00:56Z"
discovered_at: "2026-07-16T22:02:43Z"
evaluated_by: "mistral-small-latest"
---

## Summary
IronMem is a persistent memory layer for AI coding assistants that records, compresses, and injects session context across projects and tools. It enables lossless recall of past interactions, supports multi-provider LLM compression, and offers governed retrieval with temporal graph and vector search capabilities.

## Key Features
- Lossless reversible memory storage with content-addressed blobs (CCR pattern)
- Hybrid retrieval combining FTS, vector search, and temporal graph recall
- Multi-provider LLM compression (Anthropic, OpenAI, Google, Vertex AI)
- Governed memory with provenance, consent, and classification metadata
- Adaptive working-memory skim and exact evidence retrieval

## Why It Matters for RAG Builders
IronMem solves the critical problem of context loss in AI coding assistants by providing persistent, governed memory across sessions, enabling more coherent and efficient multi-session workflows.

## Tech Stack Deep Dive
### Rust
Automated review identified **Rust** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PostgreSQL
Automated review identified **PostgreSQL** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Tree-sitter
Automated review identified **Tree-sitter** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### ONNX (for cross-encoder reranking)
Automated review identified **ONNX (for cross-encoder reranking)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FTS5 (Full-Text Search)
Automated review identified **FTS5 (Full-Text Search)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Vector databases (via external adapters)
Automated review identified **Vector databases (via external adapters)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Graph databases (via external adapters)
Automated review identified **Graph databases (via external adapters)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
