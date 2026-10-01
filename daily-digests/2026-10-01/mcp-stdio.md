---
title: "shigechika/mcp-stdio"
content_type: "repo"
engine: "v2"
category: "Orchestrator"
tech_stack: ["Python", "HTTP/HTTPS", "OAuth 2.1", "SSE (Server-Sent Events)", "Streamable HTTP", "JSON-RPC", "CLI"]
quality_score: 9
rag_relevance: 9
deployment_complexity: "Medium"
tags: ["MCP gateway", "OAuth integration", "stdio-to-HTTP", "remote server connector", "authentication proxy"]
source: "https://github.com/shigechika/mcp-stdio"
stars: 5
language: "Python"
last_updated: "2026-08-02T08:20:06Z"
discovered_at: "2026-08-02T08:22:52Z"
evaluated_by: "mistral-small-latest"
---

## Summary
mcp-stdio is a bidirectional stdio-to-HTTP gateway that enables MCP clients like Claude Desktop to connect to remote HTTP-based MCP servers, supporting authentication methods such as Bearer tokens, custom headers, and OAuth 2.1 with PKCE.

## Key Features
- Supports both Streamable HTTP and SSE MCP transports with protocol-era auto-detection
- Built-in OAuth 2.1 client with PKCE, dynamic client registration, and token refresh
- Handles authentication via Bearer tokens, custom headers, and OAuth flows
- Auto-pagination for tools/resources/prompts lists in Streamable HTTP transport
- Proactive token refresh and step-up authorization for seamless session continuity

## Why It Matters for RAG Builders
It bridges MCP clients to remote servers, enabling secure and flexible integration with AI agents and tools while handling authentication and protocol complexities transparently.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HTTP/HTTPS
Automated review identified **HTTP/HTTPS** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OAuth 2.1
Automated review identified **OAuth 2.1** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SSE (Server-Sent Events)
Automated review identified **SSE (Server-Sent Events)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Streamable HTTP
Automated review identified **Streamable HTTP** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSON-RPC
Automated review identified **JSON-RPC** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CLI
Automated review identified **CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
