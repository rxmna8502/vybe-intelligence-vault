---
title: "freema/vellum"
content_type: "repo"
engine: "v2"
category: "Agent Framework"
tech_stack: ["Go", "React", "Docker", "MCP (Model Context Protocol)", "OAuth 2.1", "Markdown", "Git"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Medium"
tags: ["MCP server", "markdown vault", "self-hosted", "knowledge management", "agent integration"]
source: "https://github.com/freema/vellum"
stars: 2
language: "Go"
last_updated: "2026-07-14T15:53:59Z"
discovered_at: "2026-07-14T16:14:29Z"
evaluated_by: "mistral-small-latest"
---

## Summary
vellum is a lightweight, self-hosted MCP server designed to manage a folder of markdown files as a personal or team knowledge vault. It provides a static Go binary with an embedded web UI and MCP capabilities, enabling agents to interact with markdown notes as resources or tools without requiring a database or embeddings.

## Key Features
- Static Go binary with embedded React SPA for a lightweight, portable vault
- MCP server exposing notes as resources and tools (15+ tools) for agent interaction
- Flat markdown storage with no database or embeddings, ensuring portability and no vendor lock-in
- Built-in OAuth 2.1 for secure authentication, with support for Claude and other MCP clients
- Curator tools for deterministic context preparation (e.g., tag suggestions, link recommendations) without LLM calls

## Why It Matters for RAG Builders
vellum provides a simple, self-hosted way to manage markdown knowledge bases that agents can directly interact with via MCP, reducing complexity and lock-in for RAG pipelines.

## Tech Stack Deep Dive
### Go
Automated review identified **Go** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### React
Automated review identified **React** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OAuth 2.1
Automated review identified **OAuth 2.1** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Markdown
Automated review identified **Markdown** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Git
Automated review identified **Git** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
