---
title: "yantrikos/yantrikdb"
content_type: "repo"
engine: "v2"
category: "Vector DB"
tech_stack: ["Rust", "Python", "SQLite", "HNSW (Hierarchical Navigable Small World)", "CRDT (Conflict-free Replicated Data Types)", "OpenRaft", "Embedding models (custom 'potion' variants)", "BM25", "LSM (Log-Structured Merge) Trees"]
quality_score: 9
rag_relevance: 10
deployment_complexity: "Medium"
tags: ["cognitive memory", "embedded database", "AI agents", "temporal decay", "knowledge graph"]
source: "https://github.com/yantrikos/yantrikdb"
stars: 47
language: "Rust"
last_updated: "2026-08-07T17:36:48Z"
discovered_at: "2026-08-07T17:52:26Z"
evaluated_by: "mistral-small-latest"
---

## Summary
YantrikDB is an embedded cognitive memory engine designed for persistent AI systems, enabling hierarchical, contextual, and time-aware memory management with built-in decay, contradiction detection, and autonomous consolidation. It operates as a local-first, embedded database with optional cluster support for multi-node deployments.

## Key Features
- Embedded, local-first architecture with no server process required, ensuring offline functionality and minimal latency
- Hierarchical memory system with semantic, episodic, and procedural memory types, supporting contextual recall and consolidation
- Built-in temporal decay and contradiction detection for adaptive, human-like memory behavior
- Knowledge graph integration for entity relationships and bridge detection, improving recall precision
- Decoupled write path with LSM-based vector index for high write throughput and lock-free reads

## Why It Matters for RAG Builders
YantrikDB provides a purpose-built memory architecture for RAG systems, eliminating the inefficiencies of context stuffing while enabling persistent, adaptive, and hierarchical memory that scales without token bloat.

## Tech Stack Deep Dive
### Rust
Automated review identified **Rust** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HNSW (Hierarchical Navigable Small World)
Automated review identified **HNSW (Hierarchical Navigable Small World)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CRDT (Conflict-free Replicated Data Types)
Automated review identified **CRDT (Conflict-free Replicated Data Types)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenRaft
Automated review identified **OpenRaft** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Embedding models (custom 'potion' variants)
Automated review identified **Embedding models (custom 'potion' variants)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### BM25
Automated review identified **BM25** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### LSM (Log-Structured Merge) Trees
Automated review identified **LSM (Log-Structured Merge) Trees** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
