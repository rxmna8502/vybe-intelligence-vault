---
title: "fncreator22/sentinel-mcp"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Python", "FastAPI", "scikit-learn", "TF-IDF", "Logistic Regression", "Ollama", "OpenAI", "Anthropic", "Google Gemini", "SQLite", "Docker", "Model Context Protocol (MCP)", "FastMCP", "YAML"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Medium"
tags: ["guardrails", "LLM safety", "MCP integration", "multi-stage decision pipeline", "audit logging"]
source: "https://github.com/fncreator22/sentinel-mcp"
stars: 3
language: "Python"
last_updated: "2026-07-19T07:13:54Z"
discovered_at: "2026-07-19T07:29:55Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Sentinel is a three-stage guardrail agent designed to review and approve/disapprove actions proposed by LLM-powered coding assistants before execution. It integrates via the Model Context Protocol (MCP) to act as a safety layer, blocking destructive commands, flagging scope creep, and maintaining a full audit trail of decisions.

## Key Features
- Three-stage decision pipeline (Rules Engine, Classifier, LLM Reviewer) for scalable risk assessment
- Supports both Stdio and SSE MCP transports for compatibility with local and web-based IDEs
- Offline-first Stage 2 classifier (TF-IDF + Logistic Regression) for low-latency, explainable decisions
- Full audit trail with SQLite for compliance and debugging
- Configurable rules engine and model provider abstraction for flexibility

## Why It Matters for RAG Builders
Sentinel provides a critical safety layer for autonomous LLM coding agents by reviewing actions before execution, reducing risks of data loss, credential exposure, and irreversible changes while maintaining low latency and cost for common cases.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastAPI
Automated review identified **FastAPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### scikit-learn
Automated review identified **scikit-learn** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### TF-IDF
Automated review identified **TF-IDF** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Logistic Regression
Automated review identified **Logistic Regression** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Ollama
Automated review identified **Ollama** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenAI
Automated review identified **OpenAI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Anthropic
Automated review identified **Anthropic** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Google Gemini
Automated review identified **Google Gemini** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastMCP
Automated review identified **FastMCP** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### YAML
Automated review identified **YAML** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
