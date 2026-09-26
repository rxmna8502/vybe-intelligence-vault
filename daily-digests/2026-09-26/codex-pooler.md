---
title: "icoretech/codex-pooler"
content_type: "repo"
engine: "v2"
category: "Orchestrator"
tech_stack: ["Elixir", "Erlang", "Docker", "Kubernetes", "PostgreSQL", "Redis", "WebSockets", "HTTP/REST", "SMTP"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Medium"
tags: ["gateway", "self-hosted", "Codex", "OpenAI-compatible", "multi-tenant"]
source: "https://github.com/icoretech/codex-pooler"
stars: 167
language: "Elixir"
last_updated: "2026-09-01T02:43:50Z"
discovered_at: "2026-09-01T02:52:43Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Codex Pooler is a self-hosted gateway that acts as a stable intermediary between Codex-compatible clients and upstream Codex accounts, enabling credential isolation, routing, and request management without exposing raw secrets or prompts.

## Key Features
- Stable Pool API keys for credential isolation and client normalization
- Eligibility-aware routing based on model support, quota, health, and session continuity
- OpenAI-compatible SDK surface for seamless integration with existing tools
- Session-aware WebSocket management for resumable Codex sessions
- Privacy-minded observability with metadata-only logging (no prompts or raw secrets stored)

## Why It Matters for RAG Builders
It simplifies and secures access to Codex-compatible models for teams and agents by centralizing routing, credential management, and observability without exposing sensitive data.

## Tech Stack Deep Dive
### Elixir
Automated review identified **Elixir** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Erlang
Automated review identified **Erlang** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Kubernetes
Automated review identified **Kubernetes** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PostgreSQL
Automated review identified **PostgreSQL** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Redis
Automated review identified **Redis** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### WebSockets
Automated review identified **WebSockets** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HTTP/REST
Automated review identified **HTTP/REST** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SMTP
Automated review identified **SMTP** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
