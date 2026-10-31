---
title: "HKTITAN/dbms-agent-memory"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["TypeScript", "Next.js", "SQLite", "PostgreSQL", "pgvector", "PGlite (WebAssembly PostgreSQL)", "MiniLM-L6-v2 (embedding model)", "@huggingface/transformers", "Node.js", "JSONL", "RRF (Reciprocal Rank Fusion)"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Low"
tags: ["agent memory", "persistent storage", "RAG evaluation", "database performance", "embedding models"]
source: "https://github.com/HKTITAN/dbms-agent-memory"
stars: 0
language: "TypeScript"
last_updated: "2026-08-09T12:36:29Z"
discovered_at: "2026-08-09T12:51:08Z"
evaluated_by: "mistral-small-latest"
---

## Summary
This repository presents a research paper and accompanying tools that evaluate ten persistent memory architectures for AI agents, comparing file stores, SQLite, and PostgreSQL (with pgvector) using a standardized corpus of agent memories. It includes a Next.js web app, a dataset generator, and a measurement harness to reproduce results.

## Key Features
- Compares 10 memory architectures (file stores, SQLite, PostgreSQL with pgvector) for AI agents using a standardized corpus and metrics.
- Includes a reproducible pipeline (corpus generation, embedding, capture, and analysis) with no external dependencies beyond local models.
- Uses PostgreSQL 18.3 with pgvector and PGlite (WebAssembly) for in-browser or local deployment without server setup.
- Provides interactive web-based explorers, charts, and an ER diagram to visualize results and architecture.
- Focuses on relevance labeling without manual judgment by constructing facts and rendering memories backwards to avoid bias.

## Why It Matters for RAG Builders
It provides empirical evidence on how different storage architectures impact AI agent memory retrieval, highlighting critical limitations of vector-only approaches and the importance of structured queries for RAG systems.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Next.js
Automated review identified **Next.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PostgreSQL
Automated review identified **PostgreSQL** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### pgvector
Automated review identified **pgvector** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PGlite (WebAssembly PostgreSQL)
Automated review identified **PGlite (WebAssembly PostgreSQL)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MiniLM-L6-v2 (embedding model)
Automated review identified **MiniLM-L6-v2 (embedding model)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### @huggingface/transformers
Automated review identified **@huggingface/transformers** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSONL
Automated review identified **JSONL** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### RRF (Reciprocal Rank Fusion)
Automated review identified **RRF (Reciprocal Rank Fusion)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
