---
title: "rhenus-Q/Enterprise-Office-Agent"
content_type: "repo"
engine: "v2"
category: "Orchestrator"
tech_stack: ["Python", "LangGraph", "LangChain", "Chroma", "OpenAI", "FastAPI", "React", "TypeScript", "Vite", "Tavily", "Chromadb", "Pydantic", "uv"]
quality_score: 9
rag_relevance: 10
deployment_complexity: "Medium"
tags: ["Agentic RAG", "LangGraph", "Enterprise AI", "Deterministic Routing", "Observability"]
source: "https://github.com/rhenus-Q/Enterprise-Office-Agent"
stars: 0
language: "Python"
last_updated: "2026-08-05T05:39:55Z"
discovered_at: "2026-08-05T05:47:32Z"
evaluated_by: "mistral-small-latest"
---

## Summary
An enterprise AI agent system built with LangGraph, combining a self-correcting Agentic RAG engine for document Q&A with a deterministic office-workflow agent that routes free-text requests to seven local capabilities. The design emphasizes engineering discipline, clear module boundaries, and CI-safe testing with optional LLM assists for synthesis tasks.

## Key Features
- Self-correcting Agentic RAG engine with CRAG-style workflow, quality gates, and bounded retries
- Deterministic office-workflow agent with seven capabilities (Knowledge Q&A, Email Summary, Calendar Lookup, Task/Ticket Assistant, Daily Briefing, Meeting Agent, Workflow/Approval Agent)
- Modular architecture with clear boundaries between RAG and office layers, avoiding duplication of logic
- Privacy-aware runtime modes (PRIVACY_MODE, OFFLINE_MODE) for controlled external service access
- Full CI-safe testing suite, FastAPI adapter, and React-based observability workspace

## Why It Matters for RAG Builders
This repository provides a production-grade reference architecture for integrating Agentic RAG with deterministic workflow automation, offering critical insights into modular design, quality gates, and privacy-aware deployment patterns for RAG/AI stack builders.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### LangGraph
Automated review identified **LangGraph** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### LangChain
Automated review identified **LangChain** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Chroma
Automated review identified **Chroma** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenAI
Automated review identified **OpenAI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastAPI
Automated review identified **FastAPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### React
Automated review identified **React** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Vite
Automated review identified **Vite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Tavily
Automated review identified **Tavily** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Chromadb
Automated review identified **Chromadb** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Pydantic
Automated review identified **Pydantic** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### uv
Automated review identified **uv** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
