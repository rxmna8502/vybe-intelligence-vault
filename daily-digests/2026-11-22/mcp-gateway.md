---
title: "openziti/mcp-gateway"
content_type: "repo"
engine: "v2"
category: "Orchestrator"
tech_stack: ["Go", "OpenZiti", "zrok", "Agora", "Model Context Protocol (MCP)", "YAML", "HTTP/SSE", "mTLS"]
quality_score: 9
rag_relevance: 9
deployment_complexity: "Medium"
tags: ["zero trust", "secure access", "MCP tools", "overlay network", "AI agent integration"]
source: "https://github.com/openziti/mcp-gateway"
stars: 43
language: "Go"
last_updated: "2026-07-21T17:14:51Z"
discovered_at: "2026-07-21T17:16:45Z"
evaluated_by: "mistral-small-latest"
---

## Summary
MCP Gateway provides zero-trust, cryptographically secure access to Model Context Protocol (MCP) tools over OpenZiti, zrok, and Agora networks. It aggregates multiple MCP servers into a single secure endpoint without exposing public interfaces, enabling AI assistants to securely interact with internal tools.

## Key Features
- Zero-trust connectivity for MCP tools using OpenZiti's overlay network, eliminating public endpoints and attack surfaces.
- Aggregates multiple MCP servers (stdio, HTTP, zrok, Agora) into a single secure endpoint with per-client isolation.
- Supports tool-level permission control via allow/deny lists for fine-grained access management.
- Enables persistent shares for seamless reconnection without changing share tokens.
- Integrates with Agora for service discovery and Layer 1 tunnels alongside zrok for flexible deployment.

## Why It Matters for RAG Builders
MCP Gateway enables secure, zero-trust access to internal MCP tools for AI assistants without exposing endpoints, reducing security risks while simplifying deployment and management.

## Tech Stack Deep Dive
### Go
Automated review identified **Go** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenZiti
Automated review identified **OpenZiti** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### zrok
Automated review identified **zrok** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Agora
Automated review identified **Agora** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### YAML
Automated review identified **YAML** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HTTP/SSE
Automated review identified **HTTP/SSE** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### mTLS
Automated review identified **mTLS** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
