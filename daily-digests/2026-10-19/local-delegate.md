---
title: "ZahiriNatZuke/local-delegate"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Python", "FastAPI", "MCP (Model Context Protocol)", "OpenAI API", "uv (package manager)", "Docker (optional)"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Medium"
tags: ["MCP server", "local LLM", "Claude quota saver", "text processing", "OpenAI-compatible"]
source: "https://github.com/ZahiriNatZuke/local-delegate"
stars: 5
language: "Python"
last_updated: "2026-08-01T19:10:35Z"
discovered_at: "2026-08-01T19:19:17Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A Model Context Protocol (MCP) server that delegates mechanical text-to-text tasks to a local OpenAI-compatible LLM endpoint, reducing Claude subscription quota usage by processing large files server-side and returning only concise results.

## Key Features
- Delegates mechanical tasks (summarization, classification, extraction, translation) to a local LLM endpoint to conserve Claude subscription quota
- Supports both stdio and HTTP daemon modes for multi-client sharing
- Includes a built-in dashboard for monitoring backend status, VRAM/RAM usage, and delegation progress
- Implements chunked processing for large documents to avoid context truncation and preserve formatting
- Idempotent installation/uninstallation with backup and rollback support

## Why It Matters for RAG Builders
It enables AI engineers to offload resource-intensive text tasks to local LLMs, reducing dependency on cloud-based API quotas while maintaining high performance for mechanical operations.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastAPI
Automated review identified **FastAPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenAI API
Automated review identified **OpenAI API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### uv (package manager)
Automated review identified **uv (package manager)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker (optional)
Automated review identified **Docker (optional)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
