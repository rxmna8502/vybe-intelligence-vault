---
title: "pa1ch/yandex360-mcp"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Python", "MCP (Model Context Protocol)", "Yandex 360 API", "OAuth 2.0", "uv (package manager)"]
quality_score: 9
rag_relevance: 7
deployment_complexity: "Low"
tags: ["MCP server", "Yandex 360", "Wiki integration", "AI assistant tools", "OAuth"]
source: "https://github.com/pa1ch/yandex360-mcp"
stars: 0
language: "Python"
last_updated: "2026-07-19T14:49:39Z"
discovered_at: "2026-07-19T14:54:26Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A Model Context Protocol (MCP) server that provides AI assistants with tools to interact with Yandex 360 services, primarily Yandex Wiki, via OAuth tokens. It enables read/write operations, full-text search, and page management with modular service support and zero-friction installation.

## Key Features
- Modular service support (Wiki, Directory, Disk) with conditional tool registration based on environment variables
- Zero-friction installation via `uvx` with stdio transport, no local cloning required
- Secure token management using environment variables (no secrets in code/config)
- Context-optimized tool exposure—only active modules/tools are registered for AI assistants
- Full Yandex Wiki functionality: read/edit pages, search, page tree navigation, and CRUD operations

## Why It Matters for RAG Builders
It enables AI assistants to directly interact with Yandex 360 services like Wiki, reducing manual workflows and enhancing automation for users of Yandex 360 ecosystems.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Yandex 360 API
Automated review identified **Yandex 360 API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OAuth 2.0
Automated review identified **OAuth 2.0** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### uv (package manager)
Automated review identified **uv (package manager)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
