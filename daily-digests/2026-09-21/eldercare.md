---
title: "bluegumtrees/ElderCare"
content_type: "repo"
engine: "v2"
category: "Agent Framework"
tech_stack: ["Python", "FastAPI", "ChromaDB", "BAAI/bge-small-zh-v1.5", "BAAI/bge-reranker-base", "rank-bm25", "jieba", "Qwen (via OpenRouter)", "SQLite", "HTML/CSS/JS", "Web Speech API"]
quality_score: 9
rag_relevance: 10
deployment_complexity: "Medium"
tags: ["RAG", "dynamic routing", "intent classification", "source citation", "elderly care"]
source: "https://github.com/bluegumtrees/ElderCare"
stars: 0
language: "Python"
last_updated: "2026-07-16T05:30:51Z"
discovered_at: "2026-07-16T05:39:17Z"
evaluated_by: "mistral-small-latest"
---

## Summary
ElderCare is an AI companion assistant designed for elderly individuals living alone, offering conversational support, health consultations, psychological counseling, emergency medical advice, and fraud prevention. It uses a dynamic routing RAG system with a three-stage retrieval pipeline to ensure high-quality, explainable responses with clickable source citations.

## Key Features
- Dynamic routing RAG with 5 intent categories (chat, health, psychology, emergency, fraud) and risk assessment
- Three-stage retrieval pipeline (dense + sparse → RRF → CrossEncoder rerank) for high-quality context
- Clickable source citations with chunk-level traceability and historical session replay
- Real-time email alerts for high-risk scenarios with async task dispatch
- Built-in evaluation framework (LLM-as-judge) for RAG performance benchmarking

## Why It Matters for RAG Builders
ElderCare demonstrates a production-grade RAG system with dynamic intent routing, multi-stage retrieval, and explainable outputs, making it a critical reference for AI engineers building robust, user-trusted agent frameworks.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastAPI
Automated review identified **FastAPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### ChromaDB
Automated review identified **ChromaDB** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### BAAI/bge-small-zh-v1.5
Automated review identified **BAAI/bge-small-zh-v1.5** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### BAAI/bge-reranker-base
Automated review identified **BAAI/bge-reranker-base** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### rank-bm25
Automated review identified **rank-bm25** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### jieba
Automated review identified **jieba** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Qwen (via OpenRouter)
Automated review identified **Qwen (via OpenRouter)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HTML/CSS/JS
Automated review identified **HTML/CSS/JS** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Web Speech API
Automated review identified **Web Speech API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
