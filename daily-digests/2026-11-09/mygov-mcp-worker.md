---
title: "mfaizalzain/mygov-mcp-worker"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["JavaScript", "Cloudflare Workers", "MCP (Model Context Protocol)", "JSON-RPC", "HTTP/HTTPS", "Protobuf"]
quality_score: 7
rag_relevance: 6
deployment_complexity: "Low"
tags: ["MCP server", "Government API", "Streamable HTTP", "OpenAI plugin", "Malaysia data"]
source: "https://github.com/mfaizalzain/mygov-mcp-worker"
stars: 0
language: "JavaScript"
last_updated: "2026-08-10T09:24:06Z"
discovered_at: "2026-08-10T09:25:32Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A streamable-HTTP MCP server that exposes Malaysia's Government Open API as read-only tools via HTTPS, enabling remote access for AI models like ChatGPT. It mirrors the functionality of a bundled plugin server for OpenAI plugin submissions.

## Key Features
- Exposes 6 read-only government API tools (weather, data catalog, GTFS, etc.) via HTTPS
- Supports MCP streamable-HTTP JSON-RPC for tool discovery and invocation
- Includes OpenAI domain verification endpoint for plugin submissions
- Implements rate limiting to comply with government API constraints
- Lightweight parsing of GTFS static ZIPs and GTFS-RT protobuf in-Worker

## Why It Matters for RAG Builders
It enables AI models to securely access Malaysia's government data APIs via a standardized MCP interface, simplifying integration for RAG builders.

## Tech Stack Deep Dive
### JavaScript
Automated review identified **JavaScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Cloudflare Workers
Automated review identified **Cloudflare Workers** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSON-RPC
Automated review identified **JSON-RPC** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HTTP/HTTPS
Automated review identified **HTTP/HTTPS** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Protobuf
Automated review identified **Protobuf** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
