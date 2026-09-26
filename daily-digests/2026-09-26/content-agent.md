---
title: "tmtabor/content-agent"
content_type: "repo"
engine: "v2"
category: "Agent Framework"
tech_stack: ["Python", "FastAPI", "Jinja2", "HTMX", "Pydantic AI", "Ollama", "SQLite", "SkyPilot", "uv", "pytest"]
quality_score: 9
rag_relevance: 7
deployment_complexity: "Medium"
tags: ["content generation", "multi-brand", "local LLM", "Bluesky integration", "newsletter automation"]
source: "https://github.com/tmtabor/content-agent"
stars: 0
language: "Python"
last_updated: "2026-08-04T19:23:07Z"
discovered_at: "2026-08-04T19:32:24Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A local web application that generates branded content for Bluesky posts/threads and email newsletters using a local Ollama model. It supports multiple brands with customizable voice, background, and audience context, ensuring non-repetitive content generation with SQLite-based history tracking.

## Key Features
- Multi-brand support with customizable voice, background, and audience context
- Bluesky post/thread generation with anti-repetition history (last 20 items)
- Email newsletter generation with A/B testing subject lines and HTML templates
- SQLite-based storage for brand config, content history, and agent settings
- Reliability evals to ensure output constraints (e.g., 300-char cap) are met

## Why It Matters for RAG Builders
It provides a turnkey solution for generating and managing branded content using local LLMs, reducing dependency on external APIs while ensuring consistency and non-repetition.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastAPI
Automated review identified **FastAPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Jinja2
Automated review identified **Jinja2** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HTMX
Automated review identified **HTMX** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Pydantic AI
Automated review identified **Pydantic AI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Ollama
Automated review identified **Ollama** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SkyPilot
Automated review identified **SkyPilot** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### uv
Automated review identified **uv** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### pytest
Automated review identified **pytest** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
