---
title: "monkey2jack/aiduMEM"
content_type: "repo"
engine: "v2"
category: "Orchestrator"
tech_stack: ["Python 3.12+", "FastAPI", "Uvicorn", "mem0", "Qdrant", "SQLite", "BM25/trigram", "BGE-M3 (embeddings)", "OpenAI API (LLM)", "Docker", "FTS5 (full-text search)"]
quality_score: 9
rag_relevance: 9
deployment_complexity: "Medium"
tags: ["AI memory", "cognitive architecture", "multi-agent federation", "hybrid retrieval", "forgetting curves"]
source: "https://github.com/monkey2jack/aiduMEM"
stars: 2
language: "Python"
last_updated: "2026-08-02T02:33:12Z"
discovered_at: "2026-08-02T02:34:46Z"
evaluated_by: "mistral-small-latest"
---

## Summary
aiduMEM is an AI 'thought engine' designed to provide persistent memory, reasoning, and cognitive architecture for AI agents. It goes beyond simple key-value storage by integrating memory optimization, forgetting curves, multi-agent federation, and hybrid retrieval mechanisms to enable AI systems to remember, reason, and evolve over time.

## Key Features
- Ebbinghaus forgetting curve-based memory decay with configurable decay rates for different memory types (emotional, factual, procedural).
- Relevance gate mechanism to filter out irrelevant context, reducing token usage by up to 100x and improving response times from 10ms to 1ms.
- Tidal coalescing for asynchronous batch processing of short messages, optimizing LLM calls by merging multiple messages into single API requests.
- Chronos dual timeline for time-aware memory validity with valid_from/valid_to fields, ensuring expired facts are deprioritized without deletion.
- Pantheon federation for multi-agent memory sharing with MoE (Mixture-of-Experts) gate control, enabling seamless collaboration and shared knowledge bases.

## Why It Matters for RAG Builders
aiduMEM provides a sophisticated cognitive framework that enables AI agents to retain context, reason over time, and evolve their knowledge, making it essential for building advanced RAG systems with long-term memory and reasoning capabilities.

## Tech Stack Deep Dive
### Python 3.12+
Automated review identified **Python 3.12+** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastAPI
Automated review identified **FastAPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Uvicorn
Automated review identified **Uvicorn** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### mem0
Automated review identified **mem0** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Qdrant
Automated review identified **Qdrant** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### BM25/trigram
Automated review identified **BM25/trigram** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### BGE-M3 (embeddings)
Automated review identified **BGE-M3 (embeddings)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenAI API (LLM)
Automated review identified **OpenAI API (LLM)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FTS5 (full-text search)
Automated review identified **FTS5 (full-text search)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
