---
title: "faisibash-oss/rag-practice"
content_type: "repo"
engine: "v2"
category: "Vector DB"
tech_stack: ["Python", "Chroma (local vector store)", "sentence-transformers (all-MiniLM-L6-v2 for embeddings)", "Claude API (for LLM generation)", "python-dotenv (for environment variables)"]
quality_score: 8
rag_relevance: 9
deployment_complexity: "Low"
tags: ["RAG", "local embeddings", "Chroma", "document retrieval", "Claude API"]
source: "https://github.com/faisibash-oss/rag-practice"
stars: 0
language: "Python"
last_updated: "2026-08-09T09:20:57Z"
discovered_at: "2026-08-09T09:44:59Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A minimal, fully local Retrieval-Augmented Generation (RAG) pipeline that enables users to ask questions in the terminal and receive answers grounded in their own documents. It uses local models for embeddings and Chroma as a vector store, with Claude API for generation, requiring no cloud services or paid APIs.

## Key Features
- Fully local RAG pipeline with no cloud dependencies for embeddings or vector storage
- Uses Chroma as an embedded/local vector database for simplicity and portability
- Supports interactive terminal-based querying with streaming answers
- Includes a one-time ingestion script to process and embed documents
- Designed for extensibility with custom document formats and vector stores

## Why It Matters for RAG Builders
It provides a lightweight, local-first approach to RAG that eliminates cloud dependencies for embeddings and vector storage, making it ideal for privacy-focused or offline AI applications.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Chroma (local vector store)
Automated review identified **Chroma (local vector store)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### sentence-transformers (all-MiniLM-L6-v2 for embeddings)
Automated review identified **sentence-transformers (all-MiniLM-L6-v2 for embeddings)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Claude API (for LLM generation)
Automated review identified **Claude API (for LLM generation)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### python-dotenv (for environment variables)
Automated review identified **python-dotenv (for environment variables)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
