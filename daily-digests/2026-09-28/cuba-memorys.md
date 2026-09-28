---
title: "LeandroPG19/cuba-memorys"
content_type: "repo"
engine: "v2"
category: "Orchestrator"
tech_stack: ["Rust", "PostgreSQL", "pgvector", "ONNX Runtime", "Docker", "Python", "JavaScript/Node.js", "Model Context Protocol (MCP)"]
quality_score: 9
rag_relevance: 10
deployment_complexity: "Medium"
tags: ["long-term memory", "knowledge graph", "hybrid retrieval", "AI agent memory", "procedural memory"]
source: "https://github.com/LeandroPG19/cuba-memorys"
stars: 26
language: "Rust"
last_updated: "2026-07-13T20:09:42Z"
discovered_at: "2026-07-13T20:14:23Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Cuba-Memorys is a long-term memory server for AI coding agents, providing a knowledge graph that enables agents to search, reason, and verify information across sessions. It integrates with PostgreSQL and pgvector for hybrid retrieval and supports both semantic and procedural memory types.

## Key Features
- Four distinct memory types (semantic, episodic, procedural, working) modeled after psychological literature
- Hybrid retrieval using RRF fusion over full-text, BM25, and pgvector HNSW with entropy-routed weighting
- LLM-based claim verification with calibrated abstention thresholds using Ledoit-Wolf covariance shrinkage
- Zero-config Docker setup with automatic PostgreSQL + pgvector provisioning
- Comprehensive CLI with 13 commands for maintenance, evaluation, and health checks

## Why It Matters for RAG Builders
Cuba-Memorys provides a robust, production-ready framework for AI agents to maintain persistent, verifiable, and structured memory across sessions, addressing critical gaps in long-term context retention for RAG systems.

## Tech Stack Deep Dive
### Rust
Automated review identified **Rust** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PostgreSQL
Automated review identified **PostgreSQL** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### pgvector
Automated review identified **pgvector** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### ONNX Runtime
Automated review identified **ONNX Runtime** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JavaScript/Node.js
Automated review identified **JavaScript/Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
