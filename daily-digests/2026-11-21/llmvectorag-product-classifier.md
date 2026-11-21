---
title: "elifyagmurduran/LLMvectoRAG-product-classifier"
content_type: "repo"
engine: "v2"
category: "Orchestrator"
tech_stack: ["Python", "FAISS", "Azure OpenAI", "HuggingFace (optional)", "Azure SQL", "PostgreSQL", "ODBC Driver 18 for SQL Server", "YAML", "Pytest"]
quality_score: 8
rag_relevance: 9
deployment_complexity: "Medium"
tags: ["RAG pipeline", "GS1 taxonomy", "product classification", "FAISS indexing", "LLM inference"]
source: "https://github.com/elifyagmurduran/LLMvectoRAG-product-classifier"
stars: 0
language: "Python"
last_updated: "2026-08-10T19:26:05Z"
discovered_at: "2026-08-10T20:02:20Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A YAML-configurable RAG pipeline that builds a FAISS vector index from the GS1 GPC taxonomy, embeds product rows from a database, and classifies them using vector similarity combined with LLM inference. It supports proactive rate limiting, configurable retry strategies, and batch-level error handling for robust long-running classification jobs.

## Key Features
- Three-mode pipeline (build-vectors, embed-rows, classify) for end-to-end product classification
- Configurable via YAML for embedding models, LLM providers, and database connectors
- Proactive rate limiting and batch-level error handling for reliability
- Supports FAISS for efficient vector similarity search
- Modular design allowing swapping of embedding/LLM providers and database backends

## Why It Matters for RAG Builders
It provides a production-ready, configurable pipeline for classifying unstructured product data against standardized taxonomies like GS1, bridging the gap between raw data and AI-driven enrichment.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FAISS
Automated review identified **FAISS** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Azure OpenAI
Automated review identified **Azure OpenAI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HuggingFace (optional)
Automated review identified **HuggingFace (optional)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Azure SQL
Automated review identified **Azure SQL** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PostgreSQL
Automated review identified **PostgreSQL** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### ODBC Driver 18 for SQL Server
Automated review identified **ODBC Driver 18 for SQL Server** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### YAML
Automated review identified **YAML** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Pytest
Automated review identified **Pytest** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
