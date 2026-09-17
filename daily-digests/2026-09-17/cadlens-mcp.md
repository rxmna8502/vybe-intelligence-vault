---
title: "cadlens-co/cadlens-mcp"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["TypeScript", "Node.js", "Model Context Protocol (MCP)", "REST API", "Webhooks", "npm"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Low"
tags: ["MCP", "CAD parsing", "AI agents", "DWG/DXF support", "LLM integration"]
source: "https://github.com/cadlens-co/cadlens-mcp"
stars: 0
language: "TypeScript"
last_updated: "2026-07-15T18:03:03Z"
discovered_at: "2026-07-15T18:06:21Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A Model Context Protocol (MCP) server that integrates the Cadlens CAD parsing API, enabling MCP-aware LLM clients to parse and reason over CAD files (DWG, DXF, PDF, etc.) without requiring AutoCAD or desktop software. It bridges CAD data extraction with AI workflows via a standardized protocol.

## Key Features
- Wraps Cadlens CAD parsing API to enable MCP-compatible LLM clients (Claude, Cursor, etc.) to parse CAD files (DWG, DXF, PDF, etc.) up to 100MB.
- Provides tools for parsing files, checking job status, fetching results, and managing webhooks for real-time updates.
- Supports structured output modes (summary, entities by type, entities on layer, full) for flexible data extraction.
- Includes optional webhook short-circuiting to reduce latency by up to 1 second per parse operation.
- Ships with project-scoped Claude agents for debugging, testing, and summarizing CAD drawings.

## Why It Matters for RAG Builders
It enables AI agents to seamlessly integrate CAD file parsing into their workflows via the Model Context Protocol, unlocking structured reasoning over engineering drawings without manual preprocessing.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### REST API
Automated review identified **REST API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Webhooks
Automated review identified **Webhooks** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### npm
Automated review identified **npm** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
