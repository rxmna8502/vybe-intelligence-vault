---
title: "worka-ai/anvil"
content_type: "repo"
engine: "v2"
category: "Vector DB"
tech_stack: ["Rust", "gRPC", "Docker", "mTLS", "Zanzibar", "Erasure Coding", "SQLite", "JWT", "Protobuf"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Medium"
tags: ["distributed storage", "object storage", "Zanzibar authorization", "materialized indexes", "atomic programs"]
source: "https://github.com/worka-ai/anvil"
stars: 77
language: "Rust"
last_updated: "2026-08-09T16:16:00Z"
discovered_at: "2026-08-09T16:38:39Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Anvil is a distributed object storage system designed for application state management, offering stable path-based storage with advanced coordination primitives like streaming writes, compare-and-swap, Zanzibar authorization, and materialized search indexes. It supports scalable, heterogeneous clusters with weighted placement and erasure coding for durability.

## Key Features
- Distributed object storage with stable paths and streaming writes
- Zanzibar-based authorization for fine-grained access control
- Materialized search indexes supporting vector, full-text, and hybrid queries
- Atomic programs for deterministic multi-path state transitions without transactions
- Heterogeneous cluster scaling with capacity-weighted rendezvous hashing and erasure coding

## Why It Matters for RAG Builders
Anvil provides a robust, scalable foundation for RAG systems requiring distributed state management, advanced indexing, and fine-grained authorization, reducing infrastructure complexity while ensuring data consistency and durability.

## Tech Stack Deep Dive
### Rust
Automated review identified **Rust** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### gRPC
Automated review identified **gRPC** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### mTLS
Automated review identified **mTLS** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Zanzibar
Automated review identified **Zanzibar** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Erasure Coding
Automated review identified **Erasure Coding** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JWT
Automated review identified **JWT** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Protobuf
Automated review identified **Protobuf** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
