---
title: "rustic-ai/uni-db"
content_type: "repo"
engine: "v2"
category: "Vector DB"
tech_stack: ["Rust", "Python", "OpenCypher", "Lance", "PyO3", "Datalog", "S3/GCS", "Rhai", "WASM", "Extism"]
quality_score: 9
rag_relevance: 10
deployment_complexity: "Medium"
tags: ["embedded database", "vector search", "property graph", "columnar storage", "serverless"]
source: "https://github.com/rustic-ai/uni-db"
stars: 41
language: "Rust"
last_updated: "2026-08-07T09:57:02Z"
discovered_at: "2026-08-07T10:04:47Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Uni is an embedded database combining a property graph (OpenCypher), vector search, and columnar storage (Lance) into a single engine. It enables local, fast, multimodal data access with durability via object storage (S3/GCS/local) and is designed for applications requiring embedded, serverless database capabilities.

## Key Features
- Embedded & serverless operation with no separate server process
- Property graph queries via OpenCypher with MATCH, CREATE, WHERE, and aggregations
- K-NN vector search with pre-filtering, threshold support, and hybrid fusion (vector + BM25)
- Serializable transactions with snapshot isolation and optimistic concurrency control
- Columnar storage backed by Lance with support for local disk or object storage (S3/GCS)

## Why It Matters for RAG Builders
Uni provides a unified, embedded solution for RAG pipelines requiring both graph and vector search capabilities, eliminating the need for multiple specialized databases while ensuring local, low-latency access.

## Tech Stack Deep Dive
### Rust
Automated review identified **Rust** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenCypher
Automated review identified **OpenCypher** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Lance
Automated review identified **Lance** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PyO3
Automated review identified **PyO3** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Datalog
Automated review identified **Datalog** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### S3/GCS
Automated review identified **S3/GCS** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Rhai
Automated review identified **Rhai** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### WASM
Automated review identified **WASM** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Extism
Automated review identified **Extism** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
