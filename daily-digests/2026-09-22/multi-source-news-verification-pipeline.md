---
title: "ogaston/multi-source-news-verification-pipeline"
content_type: "repo"
engine: "v2"
category: "Orchestrator"
tech_stack: ["Python", "PostgreSQL", "Chroma", "LlamaIndex", "LangGraph", "Playwright", "Traefik", "Docker", "DeepSeek API", "Serper.dev API", "SentenceTransformers", "SQLAdmin"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "High"
tags: ["news verification", "multi-source ingestion", "semantic search", "AI fact-checking", "MCP server"]
source: "https://github.com/ogaston/multi-source-news-verification-pipeline"
stars: 0
language: "Python"
last_updated: "2026-08-02T23:53:05Z"
discovered_at: "2026-08-03T00:01:08Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A multi-source news verification pipeline that ingests, clusters, and verifies Dominican news articles from 10 outlets using AI-driven verification and semantic search. It exposes verified articles, story clusters, and semantic search capabilities via an MCP server backed by PostgreSQL, Chroma, and LlamaIndex.

## Key Features
- Multi-source news ingestion from 10 Dominican outlets with incremental updates and duplicate detection
- AI-powered clustering and verification using LangGraph agents (claim extraction, fact-checking, rhetorical auditing, synthesis)
- Semantic search over raw articles, story clusters, and verified articles via MCP tools
- PostgreSQL-backed admin UI (SQLAdmin) for data management and monitoring
- Scheduled pipeline (ingestion, preprocessing, story auditing) with configurable intervals and external API integrations

## Why It Matters for RAG Builders
It provides a robust, automated pipeline for verifying and synthesizing news from multiple sources, enabling RAG builders to integrate high-quality, fact-checked content with semantic search capabilities.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PostgreSQL
Automated review identified **PostgreSQL** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Chroma
Automated review identified **Chroma** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### LlamaIndex
Automated review identified **LlamaIndex** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### LangGraph
Automated review identified **LangGraph** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Playwright
Automated review identified **Playwright** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Traefik
Automated review identified **Traefik** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### DeepSeek API
Automated review identified **DeepSeek API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Serper.dev API
Automated review identified **Serper.dev API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SentenceTransformers
Automated review identified **SentenceTransformers** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLAdmin
Automated review identified **SQLAdmin** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
