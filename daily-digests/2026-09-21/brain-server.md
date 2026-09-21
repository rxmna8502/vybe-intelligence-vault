---
title: "markfietje/brain-server"
content_type: "repo"
engine: "v2"
category: "Orchestrator"
tech_stack: ["Rust", "Axum", "rusqlite", "r2d2", "tokio", "SQLite", "model2vec", "minishlab/potion-retrieval-32M", "JWT", "HMAC", "AES-256-GCM"]
quality_score: 9
rag_relevance: 10
deployment_complexity: "Medium"
tags: ["semantic memory", "knowledge graph", "edge AI", "hybrid retrieval", "temporal evidence"]
source: "https://github.com/markfietje/brain-server"
stars: 0
language: "Rust"
last_updated: "2026-08-03T02:52:30Z"
discovered_at: "2026-08-03T02:54:39Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A local-first semantic memory and knowledge graph server for AI agents, designed to run on low-power edge hardware like Jetson Nano or Raspberry Pi 5. It provides hybrid retrieval (vector + lexical), structured querying, and a knowledge graph with temporal evidence tracking, all while minimizing per-query costs and network latency.

## Key Features
- Hybrid retrieval combining vector KNN and lexical FTS5 via Reciprocal Rank Fusion with deterministic PRF query expansion and provenance tracking.
- Temporal evidence and point-in-time recall with conflict detection for contradictory or superseded information.
- Knowledge graph with entity/relationship extraction, multi-hop traversal, and structured explanations.
- Calibrated abstention and span verification for high-confidence retrieval without relying on LLMs.
- Opt-in anticipation suggestions and reviewable consolidation proposals for managing duplicates and contradictions.

## Why It Matters for RAG Builders
It provides a zero-cost, low-latency alternative to cloud-based memory services for RAG systems, enabling efficient local knowledge storage and retrieval on edge hardware.

## Tech Stack Deep Dive
### Rust
Automated review identified **Rust** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Axum
Automated review identified **Axum** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### rusqlite
Automated review identified **rusqlite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### r2d2
Automated review identified **r2d2** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### tokio
Automated review identified **tokio** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### model2vec
Automated review identified **model2vec** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### minishlab/potion-retrieval-32M
Automated review identified **minishlab/potion-retrieval-32M** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JWT
Automated review identified **JWT** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HMAC
Automated review identified **HMAC** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### AES-256-GCM
Automated review identified **AES-256-GCM** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
