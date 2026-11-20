---
title: "DBlassio/rag-arxiv-fds"
content_type: "repo"
engine: "v2"
category: "Orchestrator"
tech_stack: ["Python", "LangChain", "ChromaDB", "BAAI/bge-small-en-v1.5", "Claude (claude-haiku-4-5)", "arXiv API", "Hugging Face Tokenizers"]
quality_score: 8
rag_relevance: 9
deployment_complexity: "Medium"
tags: ["RAG", "arXiv", "grounded generation", "tokenizer-aware chunking", "explicit refusal"]
source: "https://github.com/DBlassio/rag-arxiv-fds"
stars: 0
language: "Python"
last_updated: "2026-08-07T17:10:45Z"
discovered_at: "2026-08-07T17:53:16Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A research assistant RAG system built from scratch over arXiv computer science papers, designed to answer questions using only retrieved evidence and explicitly refuse unsupported queries. It demonstrates best practices in tokenizer-aware chunking, grounded generation, and evaluation of RAG systems.

## Key Features
- Tokenizer-aware chunking to prevent silent truncation of dense technical text
- Explicit refusal to answer unsupported queries with no supporting evidence
- Empirical verification of retrieval and generation quality
- Configurable embedding and retrieval pipeline with ChromaDB
- Deterministic generation (temperature=0) for faithfulness to retrieved evidence

## Why It Matters for RAG Builders
It provides a production-ready blueprint for building trustworthy RAG systems that prioritize evidence-based answers and explicit refusal over hallucination.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### LangChain
Automated review identified **LangChain** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### ChromaDB
Automated review identified **ChromaDB** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### BAAI/bge-small-en-v1.5
Automated review identified **BAAI/bge-small-en-v1.5** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Claude (claude-haiku-4-5)
Automated review identified **Claude (claude-haiku-4-5)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### arXiv API
Automated review identified **arXiv API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Hugging Face Tokenizers
Automated review identified **Hugging Face Tokenizers** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
