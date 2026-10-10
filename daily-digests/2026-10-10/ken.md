---
title: "townsendmerino/ken"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Go", "BM25", "Model2Vec", "RRF Fusion", "MCP (Model Context Protocol)", "SQLite", "PostgreSQL", "MySQL", "MariaDB"]
quality_score: 9
rag_relevance: 10
deployment_complexity: "Low"
tags: ["code search", "hybrid retrieval", "MCP server", "local embeddings", "agent tooling"]
source: "https://github.com/townsendmerino/ken"
stars: 25
language: "Go"
last_updated: "2026-07-16T14:54:32Z"
discovered_at: "2026-07-16T15:00:44Z"
evaluated_by: "mistral-small-latest"
---

## Summary
ken is a fast, hybrid code search tool for AI agents, implemented in pure Go as a single static binary. It combines BM25 lexical search with Model2Vec semantic embeddings and RRF fusion, offering drop-in compatibility with the MinishLab/semble MCP server while eliminating Python dependencies and vector databases.

## Key Features
- Hybrid retrieval combining BM25 lexical search with Model2Vec semantic embeddings for ~97% recall@10 in default mode
- Single static Go binary with no Python interpreter, GPU, or vector DB dependencies, enabling cold starts in ~10-20ms
- Drop-in MCP-compatible server with same tool schemas and output format as MinishLab/semble for seamless agent integration
- CPU-only local execution with automatic model fetching (~60MB) and support for code-aware reranking and database schema indexing
- Cross-platform support (Linux/macOS/Windows, amd64/arm64) with watch mode for real-time re-indexing and nested .gitignore handling

## Why It Matters for RAG Builders
ken eliminates the need for external vector databases or embedding services, providing a lightweight, high-performance hybrid retrieval solution that significantly reduces token costs for RAG pipelines while maintaining near-parity recall with grep-based approaches.

## Tech Stack Deep Dive
### Go
Automated review identified **Go** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### BM25
Automated review identified **BM25** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model2Vec
Automated review identified **Model2Vec** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### RRF Fusion
Automated review identified **RRF Fusion** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PostgreSQL
Automated review identified **PostgreSQL** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MySQL
Automated review identified **MySQL** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MariaDB
Automated review identified **MariaDB** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
