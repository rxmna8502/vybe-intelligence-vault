---
title: "hyx1249207016-netizen/AgenticRAG"
content_type: "repo"
engine: "v2"
category: "Agent Framework"
tech_stack: ["Python", "Ollama", "LangGraph", "ChromaDB", "BGE embeddings", "BM25", "bge-reranker", "FastAPI", "Docker", "Pydantic", "LangChain"]
quality_score: 9
rag_relevance: 10
deployment_complexity: "Medium"
tags: ["Local-first RAG", "ReAct Agent", "Tiered Memory", "Dual Retrieval", "Ollama Integration"]
source: "https://github.com/hyx1249207016-netizen/AgenticRAG"
stars: 0
language: "Python"
last_updated: "2026-07-19T15:56:21Z"
discovered_at: "2026-07-19T15:56:35Z"
evaluated_by: "mistral-small-latest"
---

## Summary
AgenticRAG is a local-first, production-ready AI agent that integrates dual-channel retrieval (semantic + BM25), ReAct reasoning, and tiered memory (short-term, long-term, and user profiling) for knowledge Q&A tasks. It operates entirely on a local machine using Ollama, ensuring no cloud dependency, data leakage, or additional costs.

## Key Features
- ReAct agent loop with 4 built-in tools (knowledge base search, web search, web fetch, clock)
- Dual-channel retrieval combining semantic vector search (ChromaDB + BGE embeddings) and BM25 keyword search, fused via bge-reranker
- Tiered memory system with short-term, long-term (ChromaDB), and user profiling for contextual continuity
- SSRF protection with dual IP validation and graceful degradation fallback mechanisms
- Provider-agnostic model switching (Ollama, OpenAI-compatible, or LangChain-supported LLMs) with Docker support

## Why It Matters for RAG Builders
AgenticRAG provides a robust, local-first framework for building production-grade RAG agents with advanced reasoning and memory capabilities, eliminating cloud dependencies while ensuring data privacy and cost efficiency.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Ollama
Automated review identified **Ollama** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### LangGraph
Automated review identified **LangGraph** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### ChromaDB
Automated review identified **ChromaDB** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### BGE embeddings
Automated review identified **BGE embeddings** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### BM25
Automated review identified **BM25** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### bge-reranker
Automated review identified **bge-reranker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastAPI
Automated review identified **FastAPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Pydantic
Automated review identified **Pydantic** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### LangChain
Automated review identified **LangChain** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
