---
title: "arjun-go-go/finance-tweet-analyzer"
content_type: "repo"
engine: "v2"
category: "Orchestrator"
tech_stack: ["FastAPI", "LangGraph", "LangChain", "ChromaDB", "PostgreSQL", "Redis", "Celery", "Next.js", "Python 3.12+", "TypeScript", "Tailwind CSS", "OpenRouter", "DashScope", "mem0"]
quality_score: 9
rag_relevance: 10
deployment_complexity: "High"
tags: ["multi-agent orchestration", "hybrid RAG", "financial analysis", "real-time streaming", "enterprise AI"]
source: "https://github.com/arjun-go-go/finance-tweet-analyzer"
stars: 2
language: "Python"
last_updated: "2026-07-18T13:01:18Z"
discovered_at: "2026-07-18T13:09:56Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Enterprise-grade financial tweet analysis platform leveraging LangGraph multi-agent orchestration, hybrid RAG retrieval, and real-time SSE streaming for structured report generation, chat-based Q&A, and risk assessment.

## Key Features
- 8 specialized LangGraph agents (Report, Chat, Supervisor, Analysis, Signal, Self-Query, SQL, Risk) with distinct architectures (ReAct, Plan-and-Execute, Send fan-out)
- 5-path hybrid RAG pipeline with semantic (ChromaDB), BM25, and structured SQL retrieval, RRF fusion, and Qwen reranker with quota balancing
- Real-time SSE streaming via Redis pub/sub for chat tokens and report progress with incremental database persistence
- Async task processing with Celery + Redis, distributed locks, circuit breakers, and exponential backoff retries
- Cross-session memory integration with mem0 long-term memory and LangGraph checkpointing for personalized conversations

## Why It Matters for RAG Builders
This platform demonstrates a production-grade multi-agent orchestration system with hybrid RAG and real-time streaming, providing a blueprint for scalable AI-driven financial analysis pipelines.

## Tech Stack Deep Dive
### FastAPI
Automated review identified **FastAPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### LangGraph
Automated review identified **LangGraph** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### LangChain
Automated review identified **LangChain** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### ChromaDB
Automated review identified **ChromaDB** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PostgreSQL
Automated review identified **PostgreSQL** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Redis
Automated review identified **Redis** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Celery
Automated review identified **Celery** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Next.js
Automated review identified **Next.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Python 3.12+
Automated review identified **Python 3.12+** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Tailwind CSS
Automated review identified **Tailwind CSS** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenRouter
Automated review identified **OpenRouter** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### DashScope
Automated review identified **DashScope** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### mem0
Automated review identified **mem0** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
