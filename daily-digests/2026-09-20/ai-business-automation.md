---
title: "Andyyao12/ai-business-automation"
content_type: "repo"
engine: "v2"
category: "Orchestrator"
tech_stack: ["Python", "FastAPI", "Pydantic", "SQLite", "OpenAI Responses API", "n8n", "Docker", "CI/CD (GitHub Actions)"]
quality_score: 9
rag_relevance: 7
deployment_complexity: "Medium"
tags: ["AI orchestration", "intent classification", "business automation", "webhook integration", "LLM tool calling"]
source: "https://github.com/Andyyao12/ai-business-automation"
stars: 0
language: "Python"
last_updated: "2026-08-10T01:33:48Z"
discovered_at: "2026-08-10T01:35:28Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A reference implementation of an AI-assisted customer operations pipeline that processes inquiries into validated intents, knowledge responses, or business tool calls, with persistent SQLite records and n8n webhook events. Supports deterministic mock mode or optional OpenAI Responses API integration.

## Key Features
- Replaceable intent provider (mock or OpenAI Responses API)
- Deterministic or LLM-powered intent classification
- Persistent SQLite transaction for business requests and Outbox events
- Sanitized webhook delivery with retry and HMAC signing
- Idempotency key support for write operations

## Why It Matters for RAG Builders
It provides a modular, production-ready blueprint for integrating LLM intent classification with business tools, persistence, and workflow automation, reducing integration complexity for RAG/AI stack builders.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastAPI
Automated review identified **FastAPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Pydantic
Automated review identified **Pydantic** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenAI Responses API
Automated review identified **OpenAI Responses API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### n8n
Automated review identified **n8n** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CI/CD (GitHub Actions)
Automated review identified **CI/CD (GitHub Actions)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
