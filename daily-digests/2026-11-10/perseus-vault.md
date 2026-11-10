---
title: "Perseus-Computing-LLC/perseus-vault"
content_type: "repo"
engine: "v2"
category: "Vector DB"
tech_stack: ["Rust", "SQLite", "AES-256-GCM (encryption)", "BM25 (retrieval)", "Dense embeddings", "Reciprocal Rank Fusion (RRF)", "MCP (Model Context Protocol)", "JSON-RPC"]
quality_score: 9
rag_relevance: 10
deployment_complexity: "Low"
tags: ["persistent memory", "local-first", "encrypted storage", "MCP server", "agent memory"]
source: "https://github.com/Perseus-Computing-LLC/perseus-vault"
stars: 70
language: "Rust"
last_updated: "2026-09-04T02:05:02Z"
discovered_at: "2026-09-04T02:17:07Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Perseus Vault is a persistent, encrypted memory layer for AI agents that operates as a local-first, MCP-native server. It enables agents to retain and recall learned information across sessions without relying on cloud services, using a single Rust binary and SQLite database.

## Key Features
- Hybrid retrieval (BM25 + dense + RRF) for high-accuracy recall across sessions
- Bi-temporal history tracking with AES-256-GCM encryption at rest
- MCP-native interface for seamless integration with any MCP-compatible client
- Per-client memory isolation via deterministic memory banks (workspace scoping)
- Offline LongMemEval benchmarking with 83.2% recall@1 and 99.8% recall@10 on public datasets

## Why It Matters for RAG Builders
Perseus Vault eliminates the need for agents to re-derive or repeat past information by providing a durable, encrypted, and local-first memory layer that integrates directly with MCP clients, enabling true persistent context for RAG and agentic workflows.

## Tech Stack Deep Dive
### Rust
Automated review identified **Rust** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### AES-256-GCM (encryption)
Automated review identified **AES-256-GCM (encryption)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### BM25 (retrieval)
Automated review identified **BM25 (retrieval)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Dense embeddings
Automated review identified **Dense embeddings** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Reciprocal Rank Fusion (RRF)
Automated review identified **Reciprocal Rank Fusion (RRF)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSON-RPC
Automated review identified **JSON-RPC** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
