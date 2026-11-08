---
title: "datamcpapp/datamcp-app"
content_type: "repo"
engine: "v2"
category: "Orchestrator"
tech_stack: ["PostgreSQL", "OpenAPI 3.x", "HTTPS", "MCP (Model Context Protocol)", "AES-256-GCM (encryption)", "OAuth 2.0 with PKCE", "REST API"]
quality_score: 8
rag_relevance: 9
deployment_complexity: "Low"
tags: ["MCP gateway", "PostgreSQL integration", "OpenAPI to MCP", "AI client access control", "remote MCP endpoints"]
source: "https://github.com/datamcpapp/datamcp-app"
stars: 0
language: "None"
last_updated: "2026-07-16T18:05:37Z"
discovered_at: "2026-07-16T18:05:44Z"
evaluated_by: "mistral-small-latest"
---

## Summary
datamcp provides a hosted MCP gateway that converts PostgreSQL databases and OpenAPI 3.x APIs into secure, remote HTTPS MCP endpoints for AI clients. It manages backend credentials server-side, enforces granular permissions per MCP link, and supports authentication for clients like Cursor, Claude, and ChatGPT.

## Key Features
- Hosts PostgreSQL 12+ and OpenAPI 3.x as managed MCP endpoints without client-side credential storage
- Enforces granular permissions per MCP link (read-only, read-write, custom table restrictions)
- Supports OAuth 2.0 with PKCE and API key authentication for MCP clients
- Encrypts backend credentials at rest with AES-256-GCM
- Provides activity logging and permission denials for PostgreSQL connections

## Why It Matters for RAG Builders
datamcp eliminates the need for AI clients to manage backend credentials directly, enabling secure and scalable access to PostgreSQL and OpenAPI sources while enforcing fine-grained permissions.

## Tech Stack Deep Dive
### PostgreSQL
Automated review identified **PostgreSQL** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenAPI 3.x
Automated review identified **OpenAPI 3.x** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HTTPS
Automated review identified **HTTPS** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### AES-256-GCM (encryption)
Automated review identified **AES-256-GCM (encryption)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OAuth 2.0 with PKCE
Automated review identified **OAuth 2.0 with PKCE** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### REST API
Automated review identified **REST API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
