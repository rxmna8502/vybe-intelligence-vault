---
title: "TAIPANBOX/engram"
content_type: "repo"
engine: "v2"
category: "Vector DB"
tech_stack: ["Python", "SQLite", "BM25", "Vector embeddings", "MCP (Model Context Protocol)", "Asyncio", "SQLAlchemy", "FastAPI", "Pydantic"]
quality_score: 9
rag_relevance: 10
deployment_complexity: "Low"
tags: ["memory layer", "episodic memory", "semantic memory", "bitemporal facts", "provenance tracking"]
source: "https://github.com/TAIPANBOX/engram"
stars: 2
language: "Python"
last_updated: "2026-08-10T07:22:40Z"
discovered_at: "2026-08-10T07:35:15Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Engram is an embeddable, local-first cognitive memory layer for AI agents that provides persistent, provenance-tracked memory in a single SQLite-based `.engram` file. It combines episodic observations, bitemporal semantic facts, and an entity graph with hybrid BM25+vector recall, dynamic importance decay, and GDPR-compliant forgetting.

## Key Features
- Single-file SQLite-based memory storage with no server or Docker required
- Hybrid BM25+vector recall for accurate and efficient memory retrieval
- Bitemporal semantic facts that track validity over time and provenance for explainability
- Dynamic importance decay using Ebbinghaus forgetting curve for intelligent memory pruning
- MCP-native integration for seamless use with LLM clients like Claude Desktop

## Why It Matters for RAG Builders
Engram provides a critical memory layer for RAG systems by enabling persistent, time-aware, and explainable memory storage that goes beyond simple vector search, ensuring agents retain and recall context accurately over time.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### BM25
Automated review identified **BM25** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Vector embeddings
Automated review identified **Vector embeddings** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Asyncio
Automated review identified **Asyncio** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLAlchemy
Automated review identified **SQLAlchemy** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastAPI
Automated review identified **FastAPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Pydantic
Automated review identified **Pydantic** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
