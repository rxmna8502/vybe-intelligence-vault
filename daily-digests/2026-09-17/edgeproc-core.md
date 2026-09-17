---
title: "hseshadr/edgeproc-core"
content_type: "repo"
engine: "v2"
category: "Vector DB"
tech_stack: ["Python", "FAISS", "pgvector", "hnswlib", "pydantic", "asyncio", "mypy", "pytest", "uv", "TypeScript (for examples)"]
quality_score: 9
rag_relevance: 9
deployment_complexity: "Medium"
tags: ["multi-tenant", "vector partitioning", "embedding routing", "FAISS integration", "isolation"]
source: "https://github.com/hseshadr/edgeproc-core"
stars: 0
language: "Python"
last_updated: "2026-08-08T13:18:28Z"
discovered_at: "2026-08-08T13:49:31Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A lightweight Python library that provides a protocol and reference implementation for partitioning vector embeddings across multiple tenants, users, or time periods in multi-tenant vector search systems. It routes vectors to the correct partitions and merges search results while ensuring isolation and performance.

## Key Features
- Protocol-based partitioning strategies (Global, Bucketed, Hot-and-cold) with one-line swapping
- Conformance suite to validate backend implementations for cross-tenant safety
- Supports major vector index backends (FAISS, pgvector, hnswlib) without shipping them
- Benchmarking tools for routing and search latency (e.g., p50 5.8ms routing, p95 19.2ms search)
- Strict type checking (mypy --strict) and ≥90% branch coverage with automated CI/CD

## Why It Matters for RAG Builders
It provides a critical foundation for multi-tenant RAG systems by ensuring secure, performant, and scalable vector partitioning without reinventing the wheel for every deployment.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FAISS
Automated review identified **FAISS** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### pgvector
Automated review identified **pgvector** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### hnswlib
Automated review identified **hnswlib** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### pydantic
Automated review identified **pydantic** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### asyncio
Automated review identified **asyncio** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### mypy
Automated review identified **mypy** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### pytest
Automated review identified **pytest** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### uv
Automated review identified **uv** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### TypeScript (for examples)
Automated review identified **TypeScript (for examples)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
