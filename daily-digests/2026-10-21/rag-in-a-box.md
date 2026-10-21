---
title: "DevNexsler/RAG-In-A-Box"
content_type: "repo"
engine: "v2"
category: "Orchestrator"
tech_stack: ["Python", "LanceDB", "Tantivy (BM25)", "Prefect 3.x", "Qwen3-Embedding-8B", "GPT-4.1 Mini", "Gemini Vision (OCR)", "DeepSeek OCR2 (local OCR)", "Qwen3-Reranker-8B", "MCP (Model Context Protocol)", "FastAPI", "Ollama (local mode)", "Docker"]
quality_score: 9
rag_relevance: 10
deployment_complexity: "Medium"
tags: ["RAG pipeline", "MCP server", "document indexing", "hybrid search", "LLM enrichment"]
source: "https://github.com/DevNexsler/RAG-In-A-Box"
stars: 4
language: "Python"
last_updated: "2026-07-14T15:55:40Z"
discovered_at: "2026-07-14T16:14:27Z"
evaluated_by: "mistral-small-latest"
---

## Summary
RAG-In-A-Box provides a production-grade RAG pipeline with an MCP server, enabling any MCP-compatible AI assistant to search documents via a single configuration. It supports multi-format document indexing (Markdown, PDFs, images, audio, video) with hybrid search, LLM enrichment, and taxonomy management, all deployable with minimal infrastructure.

## Key Features
- 10-step hybrid search pipeline combining vector, BM25, reranker, and MMR for high-precision retrieval
- Automated LLM enrichment extracting summaries, entities, topics, and key facts from documents
- Taxonomy system with semantic matching and MCP tools for CRUD operations on tags and folders
- Multi-format document support (Markdown, PDF, images, audio, video) with OCR and metadata extraction
- MCP server exposing 16 tools for seamless integration with any MCP-compatible AI assistant

## Why It Matters for RAG Builders
It simplifies building and deploying production-grade RAG systems with minimal infrastructure, enabling AI assistants to directly query document collections via a standardized MCP interface.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### LanceDB
Automated review identified **LanceDB** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Tantivy (BM25)
Automated review identified **Tantivy (BM25)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Prefect 3.x
Automated review identified **Prefect 3.x** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Qwen3-Embedding-8B
Automated review identified **Qwen3-Embedding-8B** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### GPT-4.1 Mini
Automated review identified **GPT-4.1 Mini** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Gemini Vision (OCR)
Automated review identified **Gemini Vision (OCR)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### DeepSeek OCR2 (local OCR)
Automated review identified **DeepSeek OCR2 (local OCR)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Qwen3-Reranker-8B
Automated review identified **Qwen3-Reranker-8B** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastAPI
Automated review identified **FastAPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Ollama (local mode)
Automated review identified **Ollama (local mode)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
