---
title: "EllisMorrow/Caelune"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Python", "PySide6", "SQLite (FTS5)", "LanceDB", "PyTorch", "sentence-transformers", "Transformers", "BAAI/bge-m3", "BAAI/bge-reranker-v2-m3", "Apache Tika", "PyPDF", "Model Context Protocol (MCP)", "PyInstaller"]
quality_score: 9
rag_relevance: 9
deployment_complexity: "Medium"
tags: ["local-first", "hybrid retrieval", "MCP server", "knowledge base", "desktop app"]
source: "https://github.com/EllisMorrow/Caelune"
stars: 43
language: "Python"
last_updated: "2026-08-01T14:56:09Z"
discovered_at: "2026-08-01T15:01:30Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Caelune is a local-first Windows desktop application and read-only MCP server designed for searching private Markdown, PDF, and Tika-backed knowledge bases. It combines hybrid retrieval (lexical, semantic, and optional reranking) with a user-friendly interface for indexing, querying, and reviewing results.

## Key Features
- Hybrid retrieval combining lexical (FTS5), semantic (LanceDB), and optional reranking for high-accuracy search
- Local-first architecture with privacy-focused design, keeping all data and indexes on the user's machine
- Read-only MCP server for seamless integration with AI clients while preventing index modifications
- Event-driven live watch for automatic incremental updates to knowledge bases after file changes
- Support for Markdown, PDF, and 1,290+ file formats via Apache Tika with unified source-aware results

## Why It Matters for RAG Builders
Caelune enables RAG builders to securely and efficiently search private knowledge bases with hybrid retrieval while ensuring data privacy and seamless MCP integration for AI clients.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PySide6
Automated review identified **PySide6** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite (FTS5)
Automated review identified **SQLite (FTS5)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### LanceDB
Automated review identified **LanceDB** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PyTorch
Automated review identified **PyTorch** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### sentence-transformers
Automated review identified **sentence-transformers** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Transformers
Automated review identified **Transformers** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### BAAI/bge-m3
Automated review identified **BAAI/bge-m3** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### BAAI/bge-reranker-v2-m3
Automated review identified **BAAI/bge-reranker-v2-m3** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Apache Tika
Automated review identified **Apache Tika** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PyPDF
Automated review identified **PyPDF** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PyInstaller
Automated review identified **PyInstaller** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
