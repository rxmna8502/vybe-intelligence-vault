---
title: "pyworkload/3x-ui-mcp"
content_type: "repo"
engine: "v2"
category: "Agent Framework"
tech_stack: ["Go", "MCP (Model Context Protocol)", "HTTP API", "Xray", "V2Ray", "CSRF", "Bearer Authentication"]
quality_score: 9
rag_relevance: 7
deployment_complexity: "Low"
tags: ["MCP server", "proxy management", "Xray/V2Ray", "LLM integration", "API abstraction"]
source: "https://github.com/pyworkload/3x-ui-mcp"
stars: 5
language: "Go"
last_updated: "2026-08-04T19:28:54Z"
discovered_at: "2026-08-04T19:33:25Z"
evaluated_by: "mistral-small-latest"
---

## Summary
MCP (Model Context Protocol) server that exposes the 3x-ui proxy management panel's HTTP API as MCP tools, enabling LLMs to manage inbounds, clients, routing rules, Xray service, and server settings programmatically.

## Key Features
- 46 MCP tools covering full 3x-ui API (v3.2.8+) for inbound, client, server, and Xray management
- Dual authentication modes: session login with CSRF or Bearer API token for seamless LLM integration
- Automatic session management with transparent re-authentication and CSRF token refresh
- Email-keyed client model supporting bulk operations, paged listing, and traffic management
- Zero external dependencies beyond the MCP SDK, with stdio transport for lightweight deployment

## Why It Matters for RAG Builders
It enables LLMs to programmatically manage proxy infrastructure via a standardized MCP interface, simplifying automation and integration for RAG/AI systems.

## Tech Stack Deep Dive
### Go
Automated review identified **Go** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HTTP API
Automated review identified **HTTP API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Xray
Automated review identified **Xray** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### V2Ray
Automated review identified **V2Ray** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CSRF
Automated review identified **CSRF** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Bearer Authentication
Automated review identified **Bearer Authentication** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
