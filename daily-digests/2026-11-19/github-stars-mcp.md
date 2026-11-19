---
title: "ENFernandes/github-stars-mcp"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["TypeScript", "Node.js", "SQLite", "Model Context Protocol (MCP)", "GitHub API"]
quality_score: 9
rag_relevance: 7
deployment_complexity: "Low"
tags: ["MCP server", "GitHub integration", "offline cache", "starred repos", "local database"]
source: "https://github.com/ENFernandes/github-stars-mcp"
stars: 0
language: "TypeScript"
last_updated: "2026-08-04T00:10:04Z"
discovered_at: "2026-08-04T00:11:07Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A Model Context Protocol (MCP) server that caches and serves GitHub starred repositories locally via SQLite, enabling offline-friendly searches and listings from any MCP-compatible client.

## Key Features
- Zero-config freshness with ETag-based conditional requests to minimize API calls
- Local SQLite cache for instant, offline-friendly reads of starred repositories
- No native dependencies; uses Node.js built-in modules
- Supports multiple authentication methods (GITHUB_TOKEN, .env, or GitHub CLI)
- Provides MCP tools for searching, listing, and retrieving star details

## Why It Matters for RAG Builders
It enables AI engineers to integrate GitHub starred repositories directly into their MCP clients for seamless, offline-capable retrieval and search.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### GitHub API
Automated review identified **GitHub API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
