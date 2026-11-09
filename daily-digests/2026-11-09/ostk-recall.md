---
title: "os-tack/ostk-recall"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Rust", "model2vec-rs", "LanceDB", "Tantivy", "SQLite", "fastembed-rs", "MCP (Model Context Protocol)", "Arrow", "BM25"]
quality_score: 9
rag_relevance: 10
deployment_complexity: "Low"
tags: ["local-first", "hybrid retrieval", "MCP server", "personal knowledge management", "semantic search"]
source: "https://github.com/os-tack/ostk-recall"
stars: 5
language: "Rust"
last_updated: "2026-08-07T18:27:40Z"
discovered_at: "2026-08-07T18:58:34Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A local-first, single-binary search-and-recall service that indexes personal files, chat histories, and code into a private corpus. It combines hybrid semantic and keyword retrieval with a concept ledger and attention runtime, exposing results via MCP to clients like Claude Desktop or Cursor while keeping all data on-device.

## Key Features
- Hybrid dense (model2vec) and sparse (BM25) retrieval with reciprocal rank fusion and optional cross-encoder reranking
- Concept ledger with typed nodes, directed edges, and conductance-based graph diffusion for dynamic memory
- Live attention runtime with auto-weaving, decay, and ambient memory lens for contextual recall
- 31 MCP tools spanning recall, memory, attention, and thread management for AI agent integration
- Pre-built binaries for Linux, macOS, and Windows with zero-config deployment

## Why It Matters for RAG Builders
It provides a privacy-preserving, local-first alternative to cloud-based RAG systems, enabling AI agents to perform hybrid semantic and keyword search across personal data while maintaining full control over the corpus and retrieval process.

## Tech Stack Deep Dive
### Rust
Automated review identified **Rust** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### model2vec-rs
Automated review identified **model2vec-rs** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### LanceDB
Automated review identified **LanceDB** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Tantivy
Automated review identified **Tantivy** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### fastembed-rs
Automated review identified **fastembed-rs** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Arrow
Automated review identified **Arrow** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### BM25
Automated review identified **BM25** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
