---
title: "ni-c/mcp-hub"
content_type: "repo"
engine: "v2"
category: "Orchestrator"
tech_stack: ["Node.js", "TypeScript", "Model Context Protocol (MCP)", "OAuth 2.1", "Docker", "HTTP/HTTPS", "JSON-RPC", "SSE (Server-Sent Events)"]
quality_score: 9
rag_relevance: 10
deployment_complexity: "Medium"
tags: ["MCP gateway", "multi-server aggregation", "OAuth 2.1", "elicitation", "subscriptions"]
source: "https://github.com/ni-c/mcp-hub"
stars: 0
language: "TypeScript"
last_updated: "2026-09-02T08:13:40Z"
discovered_at: "2026-09-02T08:22:44Z"
evaluated_by: "mistral-small-latest"
---

## Summary
mcp-hub is a Model Context Protocol (MCP) gateway that consolidates multiple stdio MCP servers into a single containerized service, supporting both MCP revisions (2026-07-28 and 2025-11-25) and enabling features like elicitation and subscriptions. It provides path-based routing, OAuth 2.1 authentication, and tool filtering for secure and scalable MCP server aggregation.

## Key Features
- Dual-era MCP support (2026-07-28 and 2025-11-25) with seamless client compatibility
- Path-based routing and `/hub` aggregate for centralized tool access
- Built-in OAuth 2.1 authentication and API token support for secure client access
- Tool filtering (allow/deny) for granular access control to MCP server tools
- On-demand lifecycle management with idle timeouts and hot reload for stdio servers

## Why It Matters for RAG Builders
It simplifies the deployment and management of multiple MCP servers by consolidating them into a single, secure, and scalable gateway, reducing infrastructure overhead while enabling advanced features like elicitation and subscriptions for RAG builders.

## Tech Stack Deep Dive
### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OAuth 2.1
Automated review identified **OAuth 2.1** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HTTP/HTTPS
Automated review identified **HTTP/HTTPS** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSON-RPC
Automated review identified **JSON-RPC** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SSE (Server-Sent Events)
Automated review identified **SSE (Server-Sent Events)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
