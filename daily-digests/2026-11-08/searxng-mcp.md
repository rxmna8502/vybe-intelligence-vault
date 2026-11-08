---
title: "88plug/searxng-mcp"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Python", "MCP (Model Context Protocol)", "SearXNG", "Playwright", "FastAPI", "Docker", "uv", "Claude Code"]
quality_score: 9
rag_relevance: 10
deployment_complexity: "Medium"
tags: ["MCP server", "SearXNG integration", "web search", "token efficiency", "page extraction"]
source: "https://github.com/88plug/searxng-mcp"
stars: 0
language: "Python"
last_updated: "2026-07-17T14:40:45Z"
discovered_at: "2026-07-17T14:43:24Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A token-efficient MCP server that integrates SearXNG metasearch with LLMs, enabling private web search, multi-query research, and page extraction while preserving full result payloads in hidden metadata for optimal token usage.

## Key Features
- Compact model-visible output with full payloads preserved in hidden `_meta` for token efficiency
- Parallel search and fetch operations for faster research workflows
- Rendered extraction for JavaScript-heavy pages with automatic Playwright Chromium setup
- Multiple transport options (stdio, streamable-http, SSE) for flexible deployment
- Self-hostable with Docker support and hardened production deployment options

## Why It Matters for RAG Builders
It enables private, token-efficient web search and page extraction for RAG pipelines by leveraging SearXNG while minimizing token waste on raw HTML.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SearXNG
Automated review identified **SearXNG** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Playwright
Automated review identified **Playwright** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastAPI
Automated review identified **FastAPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### uv
Automated review identified **uv** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Claude Code
Automated review identified **Claude Code** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
