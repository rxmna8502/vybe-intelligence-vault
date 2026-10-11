---
title: "jaypetez/glean"
content_type: "repo"
engine: "v2"
category: "Agent Framework"
tech_stack: ["Python", "FastAPI", "Docker", "SQLite", "LLM (Ollama, Anthropic, OpenAI)", "YAML", "SSE (Server-Sent Events)", "REST API", "GitHub Actions", "Cosign (for signing)", "nfpm (for packaging)"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Medium"
tags: ["personal agent", "LLM pipeline", "self-hosted", "multi-sink", "pluggable architecture"]
source: "https://github.com/jaypetez/glean"
stars: 7
language: "Python"
last_updated: "2026-09-03T21:58:00Z"
discovered_at: "2026-09-03T22:07:42Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Glean is a self-hosted, pluggable personal agent that aggregates content from RSS, web scraping, search APIs, and other sources, processes it through an LLM pipeline (deduplication, ranking, summarization), and delivers scheduled digests to multiple sinks like Telegram, Discord, Email, or local files.

## Key Features
- Pluggable sources (RSS, web scraping, APIs, search backends) and sinks (Telegram, Discord, Email, File, etc.)
- Per-feed LLM pipeline with configurable stages (dedup, rank, summarize, apply skills, digest)
- Reusable structured skills for JSON output extraction with schema support
- Built-in web UI with live dashboard, visual editors, and first-run setup wizard
- Cross-platform deployment (Docker, standalone binary) with GPU support and hardened releases

## Why It Matters for RAG Builders
Glean provides a flexible, self-hosted framework for building RAG pipelines that aggregate, process, and deliver structured digests from diverse sources, reducing the need for custom scripts while enabling scalable, configurable AI-driven workflows.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastAPI
Automated review identified **FastAPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### LLM (Ollama, Anthropic, OpenAI)
Automated review identified **LLM (Ollama, Anthropic, OpenAI)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### YAML
Automated review identified **YAML** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SSE (Server-Sent Events)
Automated review identified **SSE (Server-Sent Events)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### REST API
Automated review identified **REST API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### GitHub Actions
Automated review identified **GitHub Actions** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Cosign (for signing)
Automated review identified **Cosign (for signing)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### nfpm (for packaging)
Automated review identified **nfpm (for packaging)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
