---
title: "kud/mcp-youtube"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["TypeScript", "Node.js", "MCP (Model Context Protocol)", "Google YouTube Data API v3", "OAuth 2.0", "Zod", "Vitest", "npm"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Medium"
tags: ["YouTube API", "MCP server", "media management", "OAuth integration", "quota-aware"]
source: "https://github.com/kud/mcp-youtube"
stars: 0
language: "JavaScript"
last_updated: "2026-07-11T23:38:45Z"
discovered_at: "2026-07-11T23:54:03Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A TypeScript-based MCP server providing full YouTube Data API v3 integration, enabling conversational access to playlists, videos, channels, comments, captions, and media management through any MCP-compatible client.

## Key Features
- Full YouTube Data API v3 coverage with 52 tools for playlists, videos, channels, comments, captions, and media
- Quota-aware design with documented costs for every tool to prevent API abuse
- Guarded destructive actions requiring explicit confirmation to prevent accidental data loss
- Safe bulk cleanup with dry-run support for playlists (e.g., removing tombstones and duplicates)
- One-time OAuth setup with refresh token support for long-term access

## Why It Matters for RAG Builders
It provides essential YouTube API integration for AI agents and RAG systems, enabling automated media management, content retrieval, and playlist cleanup with built-in safeguards against API quota exhaustion.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Google YouTube Data API v3
Automated review identified **Google YouTube Data API v3** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OAuth 2.0
Automated review identified **OAuth 2.0** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Zod
Automated review identified **Zod** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Vitest
Automated review identified **Vitest** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### npm
Automated review identified **npm** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
