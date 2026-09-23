---
title: "AayushCharde/mcp-worker-template"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["TypeScript", "Cloudflare Workers", "Wrangler", "JSON-RPC", "Streamable HTTP", "Node.js"]
quality_score: 9
rag_relevance: 7
deployment_complexity: "Low"
tags: ["MCP server", "Cloudflare Workers", "Streamable HTTP", "Bearer authentication", "Minimal dependencies"]
source: "https://github.com/AayushCharde/mcp-worker-template"
stars: 0
language: "TypeScript"
last_updated: "2026-08-03T18:50:04Z"
discovered_at: "2026-08-03T18:52:46Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A minimal MCP (Model Context Protocol) server template for Cloudflare Workers, implementing a hand-rolled Streamable HTTP transport with zero runtime dependencies. Designed for tools-only servers, it simplifies deployment and reduces complexity while adhering to the MCP specification.

## Key Features
- Hand-rolled Streamable HTTP transport (~190 lines of code) for MCP servers
- Zero runtime dependencies, reducing bundle size and security surface
- Stateless design with single static bearer token authentication
- Simple tool registration via a single file (`src/tools.ts`)
- Supports JSON-RPC batches and protocol version negotiation

## Why It Matters for RAG Builders
It provides a lightweight, dependency-free foundation for building MCP servers on Cloudflare Workers, ideal for developers seeking minimal overhead and maximum control over their AI tooling stack.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Cloudflare Workers
Automated review identified **Cloudflare Workers** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Wrangler
Automated review identified **Wrangler** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSON-RPC
Automated review identified **JSON-RPC** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Streamable HTTP
Automated review identified **Streamable HTTP** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
