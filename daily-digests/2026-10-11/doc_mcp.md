---
title: "veep2012/doc_mcp"
content_type: "repo"
engine: "v2"
category: "Orchestrator"
tech_stack: ["Python", "Playwright", "SQLite", "Model Context Protocol (MCP)", "Docker/Podman", "SQLite-Vec (for vector search)"]
quality_score: 8
rag_relevance: 9
deployment_complexity: "Medium"
tags: ["documentation indexing", "MCP server", "vector search", "authentication", "crawling"]
source: "https://github.com/veep2012/doc_mcp"
stars: 0
language: "Python"
last_updated: "2026-07-16T18:04:10Z"
discovered_at: "2026-07-16T18:05:50Z"
evaluated_by: "mistral-small-latest"
---

## Summary
doc-mcp is a local Model Context Protocol (MCP) server designed to authenticate, crawl, and index documentation sites for AI clients. It uses Playwright for authentication and crawling, SQLite for storage, and exposes indexed content via MCP tools for keyword and semantic search.

## Key Features
- Local MCP server for authenticated documentation sites with Playwright-based login flows
- SQLite full-text and vector indexing for keyword and semantic search
- Modular architecture with separate auth, crawl, and server components
- Supports containerized deployment for isolation and reproducibility
- Fallback mechanisms for resilience (e.g., degraded vector search if sidecar unavailable)

## Why It Matters for RAG Builders
It enables AI clients to securely and efficiently retrieve up-to-date documentation content for RAG pipelines without relying on external APIs.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Playwright
Automated review identified **Playwright** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker/Podman
Automated review identified **Docker/Podman** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite-Vec (for vector search)
Automated review identified **SQLite-Vec (for vector search)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
