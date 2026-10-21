---
title: "erekola/turva-mcp"
content_type: "repo"
engine: "v2"
category: "Agent Framework"
tech_stack: ["TypeScript", "Cloudflare Workers", "Cloudflare Agents SDK", "Streamable HTTP", "MCP Protocol", "Cloudflare Wrangler"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Medium"
tags: ["MCP Server", "Agent Readiness", "Security Scanning", "Cloudflare Workers", "Public Data"]
source: "https://github.com/erekola/turva-mcp"
stars: 1
language: "TypeScript"
last_updated: "2026-08-09T14:27:54Z"
discovered_at: "2026-08-09T14:37:54Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A public, read-only Model Context Protocol (MCP) server for turva.dev that exposes agent-readiness audits, security scans, and service catalogs as structured JSON. It enables AI agents to query public data without scraping HTML.

## Key Features
- Exposes turva.dev's agent-readiness scores and security scan results via MCP protocol
- Static TypeScript objects ensure deterministic, verifiable responses with embedded verification links
- Implements MCP protocol revision 2026-07-28 with Streamable HTTP transport
- No authentication required; all data is public and read-only
- Rate-limited to 100 requests per 60 seconds per IP with fail-open behavior

## Why It Matters for RAG Builders
It provides a standardized, auditable way for AI agents to access public security and readiness data, simplifying integration and verification for RAG systems.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Cloudflare Workers
Automated review identified **Cloudflare Workers** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Cloudflare Agents SDK
Automated review identified **Cloudflare Agents SDK** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Streamable HTTP
Automated review identified **Streamable HTTP** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP Protocol
Automated review identified **MCP Protocol** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Cloudflare Wrangler
Automated review identified **Cloudflare Wrangler** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
