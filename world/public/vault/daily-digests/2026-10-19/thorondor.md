---
title: "FeanorsCodeSL/thorondor"
content_type: "repo"
engine: "v2"
category: "Orchestrator"
tech_stack: ["Python", "FastAPI", "Docker", "SearXNG", "Crawl4AI", "llama.cpp", "BGE-M3 embeddings", "BGE-reranker-v2-m3", "PostgreSQL", "PowerShell", "Bash", "GGUF models", "Compose", "MCP (Model Context Protocol)"]
quality_score: 9
rag_relevance: 10
deployment_complexity: "Medium"
tags: ["semantic search", "self-hosted", "RAG pipeline", "agent tools", "data sovereignty"]
source: "https://github.com/FeanorsCodeSL/thorondor"
stars: 0
language: "Python"
last_updated: "2026-07-12T16:48:45Z"
discovered_at: "2026-07-12T17:03:58Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Thorondor is a self-hosted, data-sovereign semantic web-search service designed for AI agents. It replaces hosted search-for-agents APIs with an on-premises pipeline that discovers URLs via SearXNG, crawls pages with Crawl4AI, chunks content using a semantic chunker, reranks passages, and returns cited evidence through REST and MCP interfaces.

## Key Features
- Multi-engine URL discovery via SearXNG with domain filtering and safety checks
- Concurrent, JavaScript-capable page crawling with Crawl4AI and trafilatura cleaning
- Semantic chunking with ClusterSemanticChunker and BGE-M3 embeddings for optimal boundaries
- Batched reranking with BGE-reranker-v2-m3 to score passages against the original query
- Dual REST and MCP interfaces for seamless integration with AI agents and applications

## Why It Matters for RAG Builders
Thorondor provides a critical, self-hosted alternative to proprietary web search APIs, enabling RAG builders to maintain data sovereignty while integrating high-quality, cited search results directly into their pipelines.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastAPI
Automated review identified **FastAPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SearXNG
Automated review identified **SearXNG** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Crawl4AI
Automated review identified **Crawl4AI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### llama.cpp
Automated review identified **llama.cpp** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### BGE-M3 embeddings
Automated review identified **BGE-M3 embeddings** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### BGE-reranker-v2-m3
Automated review identified **BGE-reranker-v2-m3** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PostgreSQL
Automated review identified **PostgreSQL** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PowerShell
Automated review identified **PowerShell** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Bash
Automated review identified **Bash** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### GGUF models
Automated review identified **GGUF models** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Compose
Automated review identified **Compose** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
