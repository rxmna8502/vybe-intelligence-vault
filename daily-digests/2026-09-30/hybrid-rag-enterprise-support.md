---
title: "saftyy/hybrid-rag-enterprise-support"
content_type: "repo"
engine: "v2"
category: "Orchestrator"
tech_stack: ["Python", "Pinecone", "OpenAI (text-embedding-3-small, gpt-4o-mini)", "LangChain", "BM25 (rank_bm25)", "Reciprocal Rank Fusion (RRF)", "Pydantic", "LangSmith (for evaluation)", "Tesseract OCR (planned)"]
quality_score: 9
rag_relevance: 10
deployment_complexity: "Medium"
tags: ["RAG pipeline", "Hybrid retrieval", "Grounded generation", "Enterprise support", "Evaluation framework"]
source: "https://github.com/saftyy/hybrid-rag-enterprise-support"
stars: 0
language: "Python"
last_updated: "2026-08-09T01:54:29Z"
discovered_at: "2026-08-09T03:46:27Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A production-grade RAG system for enterprise support automation, combining hybrid retrieval (BM25 + vector) with grounded generation using Pinecone and OpenAI embeddings. Evaluated with RAGAs, it achieves 0.939 faithfulness and 0.775 context precision on a 50-query test set.

## Key Features
- Hybrid retrieval combining BM25 and vector search via Reciprocal Rank Fusion for robust context matching
- Format-aware chunking strategy (Markdown, PDF, HTML, scanned PDFs) to preserve document structure and coherence
- Structured, citation-backed responses with explicit confidence ratings using Pydantic and LangChain's structured output
- Comprehensive evaluation using RAGAs metrics (faithfulness, context precision, answer relevancy) with a 50-query test set
- Production-ready architecture with modular ingestion, retrieval, and generation pipelines

## Why It Matters for RAG Builders
This repository demonstrates a rigorous, end-to-end RAG system with hybrid retrieval and grounded generation, providing a blueprint for building enterprise-grade AI support assistants with measurable accuracy and reliability.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Pinecone
Automated review identified **Pinecone** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenAI (text-embedding-3-small, gpt-4o-mini)
Automated review identified **OpenAI (text-embedding-3-small, gpt-4o-mini)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### LangChain
Automated review identified **LangChain** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### BM25 (rank_bm25)
Automated review identified **BM25 (rank_bm25)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Reciprocal Rank Fusion (RRF)
Automated review identified **Reciprocal Rank Fusion (RRF)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Pydantic
Automated review identified **Pydantic** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### LangSmith (for evaluation)
Automated review identified **LangSmith (for evaluation)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Tesseract OCR (planned)
Automated review identified **Tesseract OCR (planned)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
