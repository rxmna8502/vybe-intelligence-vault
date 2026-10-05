---
title: "smeet666/mcp-lrclib"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["TypeScript", "Node.js", "MCP (Model Context Protocol)", "HTTP", "REST API"]
quality_score: 8
rag_relevance: 7
deployment_complexity: "Low"
tags: ["lyrics", "MCP server", "LRC format", "time-synced lyrics", "music metadata"]
source: "https://github.com/smeet666/mcp-lrclib"
stars: 0
language: "TypeScript"
last_updated: "2026-08-03T18:51:17Z"
discovered_at: "2026-08-03T18:52:44Z"
evaluated_by: "mistral-small-latest"
---

## Summary
An MCP server for LRCLIB that enables searching tracks and fetching their lyrics, including time-synced (LRC) lyrics, without requiring an API key or account. It acts as a read-only client to LRCLIB's public API.

## Key Features
- Search tracks by title, artist, or album with metadata-only results
- Fetch plain or time-synced (LRC) lyrics for a track using its LRCLIB ID
- In-memory caching to reduce API calls and improve performance
- Configurable rate limiting, timeouts, and logging for robustness
- Read-only client that does not contribute data back to LRCLIB

## Why It Matters for RAG Builders
It provides a lightweight, no-configuration way to integrate time-synced lyrics into RAG pipelines for music-related applications.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HTTP
Automated review identified **HTTP** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### REST API
Automated review identified **REST API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
