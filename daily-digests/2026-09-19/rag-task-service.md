---
title: "erishen/rag-task-service"
content_type: "repo"
engine: "v2"
category: "Orchestrator"
tech_stack: ["Rust", "Axum", "SQLite", "LanceDB", "PostgreSQL", "pgvector", "BM25", "RRF (Reciprocal Rank Fusion)", "LLM Reranking", "Docker", "Nginx"]
quality_score: 9
rag_relevance: 10
deployment_complexity: "Medium"
tags: ["RAG pipeline", "asynchronous tasks", "hybrid search", "vector database", "document retrieval"]
source: "https://github.com/erishen/rag-task-service"
stars: 0
language: "Rust"
last_updated: "2026-08-09T15:10:26Z"
discovered_at: "2026-08-09T15:35:11Z"
evaluated_by: "mistral-small-latest"
---

## Summary
An asynchronous task service and RAG document retrieval pipeline built with Axum in Rust. It handles document upload, chunking, embedding, vector storage, and retrieval with support for hybrid BM25+vector search, optional LLM reranking, and switchable backends (in-memory, LanceDB, or PostgreSQL + pgvector).

## Key Features
- Asynchronous task management with optimistic concurrency control using task version numbers
- Hybrid BM25+vector search with RRF fusion and optional LLM reranking for enhanced relevance
- Switchable backends for embeddings, vector storage, and keyword indexing (in-memory, LanceDB, PostgreSQL+pgvector)
- Robust error handling with typed errors and compile-time enforcement via Rust's type system
- Scalable architecture with performance benchmarks showing efficient hybrid search (54ms at 17k chunks, 1.5s at 340k chunks)

## Why It Matters for RAG Builders
It provides a production-ready, scalable RAG pipeline with hybrid search capabilities and flexible backend options, enabling seamless integration into AI engineering stacks for document retrieval and task orchestration.

## Tech Stack Deep Dive
### Rust
Automated review identified **Rust** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Axum
Automated review identified **Axum** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### LanceDB
Automated review identified **LanceDB** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PostgreSQL
Automated review identified **PostgreSQL** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### pgvector
Automated review identified **pgvector** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### BM25
Automated review identified **BM25** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### RRF (Reciprocal Rank Fusion)
Automated review identified **RRF (Reciprocal Rank Fusion)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### LLM Reranking
Automated review identified **LLM Reranking** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Nginx
Automated review identified **Nginx** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
