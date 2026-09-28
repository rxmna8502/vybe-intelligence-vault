---
title: "ghdtjdwn/ssuAgent"
content_type: "repo"
engine: "v2"
category: "Agent Framework"
tech_stack: ["Python", "LangGraph", "LangChain", "FastAPI", "PostgreSQL", "MCP (Model Context Protocol)", "Groq API", "Gemini API", "OpenRouter API", "Streamable HTTP", "Docker"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Medium"
tags: ["multi-agent", "campus AI", "LangGraph", "MCP integration", "SSE streaming"]
source: "https://github.com/ghdtjdwn/ssuAgent"
stars: 0
language: "Python"
last_updated: "2026-07-16T05:36:08Z"
discovered_at: "2026-07-16T05:39:12Z"
evaluated_by: "mistral-small-latest"
---

## Summary
ssuAgent is a LangGraph-based multi-agent system designed to connect to the 숭실대학교 MCP server (ssuMCP) for campus AI services. It routes user queries to domain-specific agents (academic, library, LMS) and streams responses via SSE, enabling real-time interactions in the ssuAI web UI.

## Key Features
- Multi-agent orchestration with LangGraph StateGraph for explicit state management and branching
- Fallback LLM provider chain (Groq → Gemini → OpenRouter) with runtime key validation
- PostgreSQL-based checkpointing for conversation state persistence and thread ownership binding
- Domain-specific agents (academic, library, LMS) with tool binding fallbacks for provider resilience
- SSE streaming endpoints for real-time agent responses in web UI

## Why It Matters for RAG Builders
It provides a robust, production-ready multi-agent framework for campus AI services with explicit state management, fallback LLM providers, and secure thread ownership binding, critical for scalable RAG deployments.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### LangGraph
Automated review identified **LangGraph** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### LangChain
Automated review identified **LangChain** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastAPI
Automated review identified **FastAPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PostgreSQL
Automated review identified **PostgreSQL** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Groq API
Automated review identified **Groq API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Gemini API
Automated review identified **Gemini API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenRouter API
Automated review identified **OpenRouter API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Streamable HTTP
Automated review identified **Streamable HTTP** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
