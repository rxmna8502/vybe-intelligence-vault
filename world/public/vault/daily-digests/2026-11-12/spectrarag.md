---
title: "NorthernLightx/SpectraRAG"
content_type: "repo"
engine: "v2"
category: "Orchestrator"
tech_stack: ["Python", "Qdrant", "BM25", "BGE-M3", "ColQwen2", "Docling", "Ollama", "FastAPI", "Docker", "CUDA", "OpenRouter"]
quality_score: 9
rag_relevance: 10
deployment_complexity: "Medium"
tags: ["Multimodal RAG", "Visual Retrieval", "Per-Query Routing", "PDF Processing", "Evaluation-Driven"]
source: "https://github.com/NorthernLightx/SpectraRAG"
stars: 1
language: "Python"
last_updated: "2026-07-30T18:00:57Z"
discovered_at: "2026-08-01T16:07:06Z"
evaluated_by: "mistral-small-latest"
---

## Summary
SpectraRAG enhances RAG systems by enabling question answering over PDFs where answers reside in figures, charts, or tables—areas where text-only search fails. It employs a dual retriever system (text and visual) with a per-query router to dynamically select the optimal retrieval path, significantly improving recall for visual queries.

## Key Features
- Dual retriever system (text and visual) with dynamic routing based on query intent
- Layout-aware PDF ingestion with Docling for figure/table extraction and classification
- Page-level retrieval with ColQwen2 embeddings for visual content and Qdrant for vector storage
- Regression-gated evaluation harness with recall@10 metrics and per-query analysis
- Flexible deployment options from self-contained demo to full local stack with Docker and Ollama

## Why It Matters for RAG Builders
SpectraRAG addresses a critical blind spot in traditional RAG systems by enabling accurate retrieval and answering of queries that depend on visual data in PDFs, unlocking full-document comprehension for AI applications.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Qdrant
Automated review identified **Qdrant** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### BM25
Automated review identified **BM25** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### BGE-M3
Automated review identified **BGE-M3** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### ColQwen2
Automated review identified **ColQwen2** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docling
Automated review identified **Docling** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Ollama
Automated review identified **Ollama** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastAPI
Automated review identified **FastAPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CUDA
Automated review identified **CUDA** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenRouter
Automated review identified **OpenRouter** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
