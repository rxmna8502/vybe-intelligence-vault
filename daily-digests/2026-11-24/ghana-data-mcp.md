---
title: "epigos/ghana-data-mcp"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["TypeScript", "Node.js", "Cloudflare Workers", "MCP (Model Context Protocol)", "Workers KV", "Wrangler CLI"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Medium"
tags: ["MCP server", "Ghana data", "financial indicators", "public APIs", "Cloudflare Workers"]
source: "https://github.com/epigos/ghana-data-mcp"
stars: 0
language: "TypeScript"
last_updated: "2026-08-10T09:18:49Z"
discovered_at: "2026-08-10T09:25:28Z"
evaluated_by: "mistral-small-latest"
---

## Summary
An MCP server providing AI tools with access to public Ghana data, including stock prices, treasury rates, macroeconomic indicators, and national statistics. It runs on Cloudflare Workers and exposes 15 read-only tools over Streamable HTTP for seamless integration with MCP clients.

## Key Features
- Provides 15 read-only tools for accessing Ghana Stock Exchange, Bank of Ghana, IMF, and Ghana Statistical Service data
- Runs on Cloudflare Workers with Streamable HTTP transport for MCP clients
- Includes caching via Workers KV with freshness metadata for reliability
- Supports deployment via GitHub releases and automated CI/CD pipelines
- Offers health checks and connectivity verification via `/health` and `ping` tools

## Why It Matters for RAG Builders
It enables AI tools to fetch real-time and historical Ghana-specific financial and economic data, enhancing RAG systems with localized, structured datasets for context-aware responses.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Cloudflare Workers
Automated review identified **Cloudflare Workers** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Workers KV
Automated review identified **Workers KV** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Wrangler CLI
Automated review identified **Wrangler CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
