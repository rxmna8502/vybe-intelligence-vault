---
title: "meticulosity/askelephant-mcp"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["TypeScript", "Cloudflare Workers", "Cloudflare KV", "Cloudflare Access", "OAuth", "REST API", "MCP (Model Context Protocol)"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Medium"
tags: ["MCP server", "transcript search", "Cloudflare Worker", "AskElephant integration", "token optimization"]
source: "https://github.com/meticulosity/askelephant-mcp"
stars: 0
language: "TypeScript"
last_updated: "2026-08-03T22:02:53Z"
discovered_at: "2026-08-03T22:10:28Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A Cloudflare Worker that provides a hosted MCP server for querying AskElephant call transcripts via claude.ai. It acts as a read-only intermediary, fetching and filtering transcripts to reduce token costs for AI models.

## Key Features
- Hosted MCP server for claude.ai compatibility
- Read-only access to AskElephant transcripts
- Efficient transcript filtering to minimize token usage
- Cloudflare KV cache for 90-day transcript retention
- Cloudflare Access OIDC authentication with PKCE

## Why It Matters for RAG Builders
It enables hosted MCP connectivity for AskElephant, allowing AI models to query transcripts without exceeding context window limits or requiring local server setup.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Cloudflare Workers
Automated review identified **Cloudflare Workers** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Cloudflare KV
Automated review identified **Cloudflare KV** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Cloudflare Access
Automated review identified **Cloudflare Access** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OAuth
Automated review identified **OAuth** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### REST API
Automated review identified **REST API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
