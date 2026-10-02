---
title: "saagpatel/portfolio-mcp"
content_type: "repo"
engine: "v2"
category: "Agent Framework"
tech_stack: ["TypeScript", "Model Context Protocol (MCP)", "Cloudflare Workers", "BM25", "Node.js", "Vitest"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Medium"
tags: ["MCP server", "static corpus", "BM25 retrieval", "agent-native", "stateless"]
source: "https://github.com/saagpatel/portfolio-mcp"
stars: 0
language: "TypeScript"
last_updated: "2026-08-05T18:18:47Z"
discovered_at: "2026-08-05T18:24:51Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A read-only, stateless Model Context Protocol (MCP) server that enables AI agents to query Saagar Patel's public writing, projects, and benchmark results directly without scraping HTML. The server is transport-agnostic, supporting both Cloudflare Workers (HTTP) and local stdio execution.

## Key Features
- Read-only, stateless MCP server with zero runtime fetches or external dependencies
- Supports BM25 retrieval over a baked static corpus (no embeddings by default)
- Exposes 8 tools, 2 prompts, and multiple resources for querying essays, projects, profiles, and OPERANT benchmark results
- Transport-agnostic core with dual deployment options: Cloudflare Worker (HTTP) and local stdio
- Designed for security with no auth, no tracking, no database, and no caller-controlled egress

## Why It Matters for RAG Builders
It provides a secure, stateless, and agent-native way to retrieve structured data from a public portfolio without scraping, making it ideal for RAG pipelines requiring reliable and auditable data access.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Cloudflare Workers
Automated review identified **Cloudflare Workers** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### BM25
Automated review identified **BM25** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Vitest
Automated review identified **Vitest** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
