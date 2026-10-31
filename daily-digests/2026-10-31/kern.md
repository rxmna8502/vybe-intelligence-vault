---
title: "rafaelnicolett/kern"
content_type: "repo"
engine: "v2"
category: "Orchestrator"
tech_stack: ["Rust", "LanceDB", "llama.cpp", "Ollama", "MCP (Model Context Protocol)", "Markdown", "Vector Embeddings"]
quality_score: 8
rag_relevance: 9
deployment_complexity: "Medium"
tags: ["local-first", "ontology-driven", "MCP-compatible", "incremental RAG", "spec-driven development"]
source: "https://github.com/rafaelnicolett/kern"
stars: 1
language: "Rust"
last_updated: "2026-08-07T04:45:32Z"
discovered_at: "2026-08-07T16:57:18Z"
evaluated_by: "mistral-small-latest"
---

## Summary
kern is a local-first RAG engine designed for Spec-Driven Development, parsing Markdown frontmatter into a deterministic ontology and vector index. It synchronizes entities, relations, and embeddings incrementally without external databases or GPUs, exposing functionality via MCP for AI agents.

## Key Features
- Deterministic parsing of Markdown frontmatter into typed entities and relations without LLM involvement
- Incremental synchronization of vector index and ontology via file diffs, avoiding full-corpus rebuilds
- Local-only operation with no external dependencies (no GPU, no cloud services)
- MCP server interface for seamless integration with AI agents like Claude Code
- Hybrid query routing between vector search and ontology graph traversal for optimal answers

## Why It Matters for RAG Builders
It bridges the gap between vector search and relational understanding in RAG systems by leveraging structured frontmatter to build lightweight, local ontologies that AI agents can query efficiently without external infrastructure.

## Tech Stack Deep Dive
### Rust
Automated review identified **Rust** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### LanceDB
Automated review identified **LanceDB** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### llama.cpp
Automated review identified **llama.cpp** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Ollama
Automated review identified **Ollama** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Markdown
Automated review identified **Markdown** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Vector Embeddings
Automated review identified **Vector Embeddings** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
