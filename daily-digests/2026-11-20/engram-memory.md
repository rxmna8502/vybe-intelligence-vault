---
title: "veronchenko/engram-memory"
content_type: "repo"
engine: "v2"
category: "Orchestrator"
tech_stack: ["Python", "SQLite", "FastAPI", "Model Context Protocol (MCP)", "Docker", "Model2Vec (embeddings)", "Markdown", "YAML", "Reciprocal Rank Fusion (RRF)"]
quality_score: 9
rag_relevance: 10
deployment_complexity: "Medium"
tags: ["persistent memory", "knowledge base", "MCP server", "hybrid search", "graph relations"]
source: "https://github.com/veronchenko/engram-memory"
stars: 0
language: "Python"
last_updated: "2026-08-01T16:01:32Z"
discovered_at: "2026-08-01T16:06:57Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Engram is a self-hosted Model Context Protocol (MCP) server that provides AI agents with persistent, structured memory across sessions. It uses Markdown files as the source of truth, combining hybrid search (BM25 + embeddings) with typed graph relations to enable efficient knowledge retrieval and organization.

## Key Features
- Hybrid search combining BM25, embeddings, and exact-match channels for high-precision retrieval
- Typed graph relations with bidirectional linking for structured knowledge navigation
- Bi-temporal versioning for tracking changes and superseded entries without data loss
- Schema-enforced entry types and integrity checks via the `doctor` tool
- Self-hosted deployment with Docker, supporting multiple transports (stdio, SSE, HTTP)

## Why It Matters for RAG Builders
Engram provides a critical layer for RAG systems by enabling AI agents to retain and retrieve structured knowledge across sessions, reducing redundant context generation and improving decision-making efficiency.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastAPI
Automated review identified **FastAPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model2Vec (embeddings)
Automated review identified **Model2Vec (embeddings)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Markdown
Automated review identified **Markdown** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### YAML
Automated review identified **YAML** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Reciprocal Rank Fusion (RRF)
Automated review identified **Reciprocal Rank Fusion (RRF)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
