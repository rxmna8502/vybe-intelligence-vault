---
title: "GiulioDER/RE-call"
content_type: "repo"
engine: "v2"
category: "Vector DB"
tech_stack: ["Python", "PostgreSQL", "pgvector", "LangChain", "LlamaIndex", "MCP (Model Context Protocol)", "Hybrid Retrieval", "RRF (Reciprocal Rank Fusion)", "CI/CD (GitHub Actions)"]
quality_score: 9
rag_relevance: 10
deployment_complexity: "Medium"
tags: ["memory layer", "trustworthy retrieval", "abstention", "supersession tracking", "postgresql"]
source: "https://github.com/GiulioDER/RE-call"
stars: 2
language: "Python"
last_updated: "2026-08-07T10:26:54Z"
discovered_at: "2026-08-07T11:06:17Z"
evaluated_by: "mistral-small-latest"
---

## Summary
RE-call is a retrieval-augmented system designed to provide trustworthy memory for AI agents by ensuring retrieved information includes confidence, provenance, and validity. It abstains from answering when uncertain rather than guessing, addressing issues like stale or superseded memories that plague traditional RAG systems.

## Key Features
- Enforces memory supersession and validity at retrieval time, demoting stale or superseded memories regardless of cosine similarity
- Provides calibrated abstention when no confident answer exists, avoiding hallucinations
- Zero-cost memory ingestion and retrieval (no LLM calls required), using local embeddings and PostgreSQL
- Supports hybrid retrieval (dense + sparse) and cross-encoders for improved accuracy
- Offers drop-in integrations for LangChain, LlamaIndex, and MCP for seamless agent integration

## Why It Matters for RAG Builders
It ensures AI agents retrieve only accurate, up-to-date, and trustworthy memories, eliminating hallucinations and stale decisions while operating entirely offline and at zero cost.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PostgreSQL
Automated review identified **PostgreSQL** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### pgvector
Automated review identified **pgvector** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### LangChain
Automated review identified **LangChain** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### LlamaIndex
Automated review identified **LlamaIndex** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Hybrid Retrieval
Automated review identified **Hybrid Retrieval** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### RRF (Reciprocal Rank Fusion)
Automated review identified **RRF (Reciprocal Rank Fusion)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CI/CD (GitHub Actions)
Automated review identified **CI/CD (GitHub Actions)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
