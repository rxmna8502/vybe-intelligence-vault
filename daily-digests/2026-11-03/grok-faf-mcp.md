---
title: "Wolfe-Jam/grok-faf-mcp"
content_type: "repo"
engine: "v2"
category: "Orchestrator"
tech_stack: ["TypeScript", "MCP (Model Context Protocol)", "Cloudflare Workers", "WASM (Zig)", "Node.js", "Bun", "Zig", "YAML"]
quality_score: 10
rag_relevance: 9
deployment_complexity: "Low"
tags: ["MCP server", "persistent context", "xAI Grok", "FAF format", "RAG optimization"]
source: "https://github.com/Wolfe-Jam/grok-faf-mcp"
stars: 17
language: "TypeScript"
last_updated: "2026-07-21T04:13:22Z"
discovered_at: "2026-07-21T04:15:04Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A TypeScript-based MCP server that provides persistent project context for xAI Grok using URL-based deployment and the IANA-registered .faf format. It enables zero-config MCP integration, real-time project context scoring, and automated context enhancement for AI agents.

## Key Features
- URL-based MCP server deployment with sub-ms cold starts via Cloudflare Workers
- IANA-registered .faf format for machine-readable project context (application/vnd.faf+yaml)
- 12+ MCP tools including auto-detection, scoring, orchestration, and context refresh (e.g., faf_auto, faf_score, refresh_faf, faf_orchestrate_recommendation)
- Zig WASM engine (Mk4) for high-performance scoring (3,800% faster than v1.1)
- Seamless integration with Grok/xAI agents via MCPaaS and Smithery gateway

## Why It Matters for RAG Builders
It provides a standardized, persistent, and high-performance way to inject project context into AI agents like Grok, eliminating session reset overhead and enabling context-aware RAG workflows.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Cloudflare Workers
Automated review identified **Cloudflare Workers** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### WASM (Zig)
Automated review identified **WASM (Zig)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Bun
Automated review identified **Bun** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Zig
Automated review identified **Zig** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### YAML
Automated review identified **YAML** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
