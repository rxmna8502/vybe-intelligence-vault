---
title: "paulnsorensen/hallouminate"
content_type: "repo"
engine: "v2"
category: "Vector DB"
tech_stack: ["Rust", "LanceDB", "FastEmbed", "MCP (Model Context Protocol)", "Unix Domain Sockets", "TOML (config)", "ONNX Runtime"]
quality_score: 9
rag_relevance: 10
deployment_complexity: "Medium"
tags: ["markdown indexing", "LLM knowledge base", "semantic search", "agent integration", "per-repo wiki"]
source: "https://github.com/paulnsorensen/hallouminate"
stars: 0
language: "Rust"
last_updated: "2026-07-20T03:50:02Z"
discovered_at: "2026-07-20T03:52:30Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Hallouminate is a markdown corpus indexer designed to help LLMs build and query per-repo wikis without hallucinations. It stores markdown verbatim, embeds content with fastembed, indexes embeddings in LanceDB, and exposes an MCP interface for agents to author and search knowledge bases.

## Key Features
- Verbatim markdown storage with no imposed schema, preserving original content integrity
- Automatic embedding and indexing of markdown corpora using LanceDB for vector search
- MCP server interface enabling LLMs to dynamically add, read, delete, and search wiki content
- Long-lived daemon with atomic operations and per-corpus mutation locks to prevent race conditions
- Cross-repo union search capability for aggregating and re-ranking results from multiple wikis

## Why It Matters for RAG Builders
Hallouminate enables LLMs to maintain persistent, hallucination-free knowledge bases directly tied to code repositories, streamlining agent workflows for documentation and context-aware reasoning.

## Tech Stack Deep Dive
### Rust
Automated review identified **Rust** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### LanceDB
Automated review identified **LanceDB** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastEmbed
Automated review identified **FastEmbed** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Unix Domain Sockets
Automated review identified **Unix Domain Sockets** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### TOML (config)
Automated review identified **TOML (config)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### ONNX Runtime
Automated review identified **ONNX Runtime** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
