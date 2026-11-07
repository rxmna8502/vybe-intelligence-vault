---
title: "hippmem/hippmem"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Rust", "redb", "Tantivy", "HNSW", "gRPC", "CLI", "BM25", "RRF (Reciprocal Rank Fusion)", "Hebbian learning"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Medium"
tags: ["associative memory", "long-term memory", "spreading activation", "offline-first", "AI agent tooling"]
source: "https://github.com/hippmem/hippmem"
stars: 2
language: "Rust"
last_updated: "2026-08-07T15:47:18Z"
discovered_at: "2026-08-07T16:02:50Z"
evaluated_by: "mistral-small-latest"
---

## Summary
HIPPMEM is a native associative memory engine for AI agents written in Rust, enabling long-term memory with write-time association discovery and spreading activation retrieval. It operates fully offline with a deterministic backend but integrates with external embedders for higher semantic accuracy.

## Key Features
- Write-time association discovery with 12+ typed dimensions (entities, topics, causality, etc.)
- Spreading activation retrieval with multi-channel seed fusion (BM25, semantic, temporal, graph, etc.)
- Explanation traces for every retrieval, detailing why a memory was recalled
- Hebbian evolution for dynamic graph strengthening/decay and automatic compaction
- Deterministic offline backend with optional external embedder integration (OpenAI/Anthropic)

## Why It Matters for RAG Builders
HIPPMEM provides continuity in AI agent memory by recalling not just similar text but connected context, enabling more coherent and context-aware interactions without relying solely on vector similarity.

## Tech Stack Deep Dive
### Rust
Automated review identified **Rust** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### redb
Automated review identified **redb** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Tantivy
Automated review identified **Tantivy** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HNSW
Automated review identified **HNSW** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### gRPC
Automated review identified **gRPC** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CLI
Automated review identified **CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### BM25
Automated review identified **BM25** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### RRF (Reciprocal Rank Fusion)
Automated review identified **RRF (Reciprocal Rank Fusion)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Hebbian learning
Automated review identified **Hebbian learning** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
