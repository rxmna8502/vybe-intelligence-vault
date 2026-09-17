---
title: "axiomchronicles/elips"
content_type: "repo"
engine: "v2"
category: "Vector DB"
tech_stack: ["C++23", "Python", "HNSW (ANN)", "GPU acceleration", "SQLite-like embedded model"]
quality_score: 9
rag_relevance: 10
deployment_complexity: "Medium"
tags: ["embedded vector database", "ANN search", "GPU acceleration", "metadata filtering", "document retrieval"]
source: "https://github.com/axiomchronicles/elips"
stars: 1
language: "TypeScript"
last_updated: "2026-08-07T09:56:48Z"
discovered_at: "2026-08-07T10:04:47Z"
evaluated_by: "mistral-small-latest"
---

## Summary
ELIPS is an in-process vector and document retrieval engine written in C++23 with native Python bindings, designed for embedded deployments similar to SQLite but with advanced features like ANN indexes, metadata filters, and GPU-backed indexes.

## Key Features
- In-process vector and document retrieval with no server or daemon required
- Supports both graph (HNSW) and exact vector indexes with GPU acceleration
- First-class document lineage, metadata filters, and hybrid retrieval
- Segmented persistence with WAL crash recovery and snapshot compatibility
- Built-in local text embedding with automatic provisioning

## Why It Matters for RAG Builders
ELIPS provides a lightweight, embedded alternative to traditional vector databases, ideal for RAG systems needing low-latency, local retrieval with advanced indexing and metadata filtering capabilities.

## Tech Stack Deep Dive
### C++23
Automated review identified **C++23** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HNSW (ANN)
Automated review identified **HNSW (ANN)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### GPU acceleration
Automated review identified **GPU acceleration** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite-like embedded model
Automated review identified **SQLite-like embedded model** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
