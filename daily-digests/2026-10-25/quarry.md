---
title: "punt-labs/quarry"
content_type: "repo"
engine: "v2"
category: "Vector DB"
tech_stack: ["Python", "ONNX Runtime", "LanceDB", "Claude Code", "MCP (Model Context Protocol)", "WebSocket", "CUDA (for GPU acceleration)", "OCR (for scanned PDFs)", "Git (for capture shadow repos)"]
quality_score: 9
rag_relevance: 10
deployment_complexity: "Medium"
tags: ["local semantic search", "privacy-focused", "AI agent integration", "document indexing", "embedding"]
source: "https://github.com/punt-labs/quarry"
stars: 2
language: "Python"
last_updated: "2026-07-14T05:10:25Z"
discovered_at: "2026-07-14T05:29:16Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Quarry is a local semantic search tool designed for AI agents and humans, enabling document indexing, embedding, and retrieval without cloud dependencies. It supports 20+ document formats, uses ONNX for local embeddings, and stores vectors in LanceDB for fast, privacy-focused semantic search.

## Key Features
- Indexes 20+ document formats (PDFs, code, spreadsheets, etc.) with OCR support for scanned pages
- Local ONNX embedding model (snowflake-arctic-embed-m-v1.5) for offline, no-API-key operation
- Daemon architecture with MCP proxy for seamless AI agent integration (Claude Code/Desktop)
- Passive knowledge capture via session hooks, web fetches, and auto-ingestion of project directories
- Hybrid search (vector + BM25) with true cosine similarity scoring and privacy-preserving redaction

## Why It Matters for RAG Builders
Quarry provides a privacy-preserving, locally hosted alternative to cloud-based semantic search, essential for RAG builders who need offline-capable, agent-integrated retrieval with minimal infrastructure overhead.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### ONNX Runtime
Automated review identified **ONNX Runtime** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### LanceDB
Automated review identified **LanceDB** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Claude Code
Automated review identified **Claude Code** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### WebSocket
Automated review identified **WebSocket** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CUDA (for GPU acceleration)
Automated review identified **CUDA (for GPU acceleration)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OCR (for scanned PDFs)
Automated review identified **OCR (for scanned PDFs)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Git (for capture shadow repos)
Automated review identified **Git (for capture shadow repos)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
