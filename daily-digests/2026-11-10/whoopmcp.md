---
title: "kurok/whoopmcp"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Python", "Model Context Protocol (MCP)", "OAuth 2.0", "FastAPI", "Pydantic", "pytest", "ruff", "mypy"]
quality_score: 8
rag_relevance: 7
deployment_complexity: "Medium"
tags: ["MCP Server", "WHOOP API", "Health Data", "OAuth", "Local Processing"]
source: "https://github.com/kurok/whoopmcp"
stars: 1
language: "Python"
last_updated: "2026-08-10T17:05:26Z"
discovered_at: "2026-08-10T17:05:57Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A read-only MCP server for the WHOOP API v2 that enables MCP clients to query and analyze personal health data (recovery, sleep, strain, cycles, workouts) locally without exposing credentials to external services. Currently in pre-alpha with stubbed network and analysis internals.

## Key Features
- Read-only access to WHOOP API v2 data (recovery, sleep, strain, cycles, workouts)
- Local OAuth 2.0 authentication with token storage (file or OS keychain)
- Pre-alpha scaffold with stubbed network and analysis internals
- Privacy-focused design (credentials never leave user's machine)
- Rate limit handling and pagination support for WHOOP API

## Why It Matters for RAG Builders
It provides a secure, local-first way for AI agents to access and analyze personal health metrics via the WHOOP API, ensuring privacy while enabling advanced RAG applications.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OAuth 2.0
Automated review identified **OAuth 2.0** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastAPI
Automated review identified **FastAPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Pydantic
Automated review identified **Pydantic** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### pytest
Automated review identified **pytest** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### ruff
Automated review identified **ruff** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### mypy
Automated review identified **mypy** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
