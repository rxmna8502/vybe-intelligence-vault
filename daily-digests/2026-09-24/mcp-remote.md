---
title: "abluva/mcp-remote"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["TypeScript", "Node.js", "OAuth 2.0", "MCP (Model Context Protocol)", "stdio", "HTTP/SSE transport"]
quality_score: 8
rag_relevance: 9
deployment_complexity: "Low"
tags: ["MCP proxy", "OAuth authentication", "remote servers", "stdio bridge", "AI tooling"]
source: "https://github.com/abluva/mcp-remote"
stars: 14
language: "TypeScript"
last_updated: "2026-08-04T13:02:19Z"
discovered_at: "2026-08-04T13:04:00Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Abluva-maintained fork of `mcp-remote` that acts as a stdio proxy to connect MCP clients (e.g., Claude Desktop, Cursor) to remote MCP servers with OAuth authentication, addressing critical upstream bugs and improving reliability for production use.

## Key Features
- Resolves upstream OAuth bugs (mid-session re-auth, token expiry, localhost callback issues)
- Supports multiple transport strategies (SSE-first, HTTP-first, etc.)
- Auto-selects callback ports to avoid conflicts
- Debug and silent logging modes for troubleshooting
- Static OAuth client metadata configuration for custom servers

## Why It Matters for RAG Builders
It enables seamless OAuth authentication for stdio-only MCP clients to connect reliably to remote MCP servers, resolving critical upstream issues that hinder production deployments.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OAuth 2.0
Automated review identified **OAuth 2.0** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### stdio
Automated review identified **stdio** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HTTP/SSE transport
Automated review identified **HTTP/SSE transport** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
