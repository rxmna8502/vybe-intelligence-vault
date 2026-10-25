---
title: "Lumina-AI-studio/mcp-production-kit"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["TypeScript", "MCP (Model Context Protocol)", "OAuth 2.1", "JWT", "RBAC", "PostgreSQL", "Keycloak", "Auth0", "Docker", "Node.js", "Vitest"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Medium"
tags: ["MCP server", "OAuth 2.1", "RBAC", "audit logging", "TypeScript"]
source: "https://github.com/Lumina-AI-studio/mcp-production-kit"
stars: 0
language: "TypeScript"
last_updated: "2026-07-10T16:22:10Z"
discovered_at: "2026-07-10T16:24:21Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A production-ready TypeScript MCP server template that provides OAuth 2.1 authentication, role-based access control (RBAC), and audit logging for MCP servers. It includes streamable HTTP transport, rate limiting, and tool evaluation capabilities.

## Key Features
- Streamable HTTP transport via `@modelcontextprotocol/sdk`
- OAuth 2.1 resource server with JWKS token validation and audience binding
- Per-tool RBAC with deny-by-default scope mapping and write tool confirmation payloads
- Append-only audit logging with actor, tool, args hash, status, latency, and trace ID
- Rate limiting, tests, and evals for tool selection and MCP Inspector flows

## Why It Matters for RAG Builders
It provides a robust foundation for securely deploying MCP servers with enterprise-grade authentication, authorization, and auditing capabilities.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OAuth 2.1
Automated review identified **OAuth 2.1** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JWT
Automated review identified **JWT** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### RBAC
Automated review identified **RBAC** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PostgreSQL
Automated review identified **PostgreSQL** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Keycloak
Automated review identified **Keycloak** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Auth0
Automated review identified **Auth0** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

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
