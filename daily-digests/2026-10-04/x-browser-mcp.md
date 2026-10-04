---
title: "SohrabZ/x-browser-mcp"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Go", "Chrome DevTools Protocol (CDP)", "Model Context Protocol (MCP)", "HTTP API", "Chrome Browser"]
quality_score: 9
rag_relevance: 6
deployment_complexity: "Medium"
tags: ["X/Twitter integration", "MCP server", "browser automation", "local AI agents", "read/write access"]
source: "https://github.com/SohrabZ/x-browser-mcp"
stars: 0
language: "Go"
last_updated: "2026-08-05T02:05:10Z"
discovered_at: "2026-08-05T02:18:08Z"
evaluated_by: "mistral-small-latest"
---

## Summary
x-browser-mcp is a browser-backed MCP server that enables local AI agents to read and post to X (formerly Twitter) using a dedicated Chrome profile, eliminating the need for X API keys or developer accounts. It bridges AI agents to X via the Model Context Protocol (MCP) and Chrome DevTools Protocol (CDP).

## Key Features
- Read X content (timelines, posts, threads, bookmarks, lists) via DOM parsing without X API keys
- Write actions (post, reply, like, repost, bookmark) with explicit write-enable flag and token protection
- Exposes functionality over both MCP and HTTP API for flexibility
- Uses a dedicated Chrome profile for authenticated sessions, ensuring real user experience
- Security measures include rate limiting, audit logging, and write token confirmation

## Why It Matters for RAG Builders
It provides a cost-effective, API-free way for AI agents to interact with X, enabling real-time data retrieval and actions without per-request billing or developer account constraints.

## Tech Stack Deep Dive
### Go
Automated review identified **Go** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Chrome DevTools Protocol (CDP)
Automated review identified **Chrome DevTools Protocol (CDP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HTTP API
Automated review identified **HTTP API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Chrome Browser
Automated review identified **Chrome Browser** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
