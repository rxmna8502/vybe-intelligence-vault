---
title: "stump-wtf/msgbrowse"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Go", "SQLite", "HTMX", "Tailwind CSS", "MCP (Model Context Protocol)", "OpenAI-compatible LLM endpoints", "Python (for exporters)", "Docker (optional)"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Medium"
tags: ["message archive", "local-first", "semantic search", "MCP server", "privacy-focused"]
source: "https://github.com/stump-wtf/msgbrowse"
stars: 0
language: "Go"
last_updated: "2026-08-02T13:46:55Z"
discovered_at: "2026-08-02T13:49:28Z"
evaluated_by: "mistral-small-latest"
---

## Summary
msgbrowse is a self-hosted, local-only browser and search engine for personal message archives (Signal, iMessage, WhatsApp) that provides a private UI, keyword and semantic search, and an MCP server for AI-powered querying over your message history.

## Key Features
- Local-only processing with no data egress beyond configured LLM endpoints
- Supports Signal, iMessage, and WhatsApp archives via upstream exporters
- Keyword and semantic search with embeddings for natural language queries
- MCP server for integration with AI assistants like Claude
- Incremental and idempotent imports with incremental updates

## Why It Matters for RAG Builders
It enables private, local-first RAG over personal message archives with seamless AI assistant integration via MCP, ensuring data never leaves the user's control.

## Tech Stack Deep Dive
### Go
Automated review identified **Go** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HTMX
Automated review identified **HTMX** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Tailwind CSS
Automated review identified **Tailwind CSS** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenAI-compatible LLM endpoints
Automated review identified **OpenAI-compatible LLM endpoints** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Python (for exporters)
Automated review identified **Python (for exporters)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker (optional)
Automated review identified **Docker (optional)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
