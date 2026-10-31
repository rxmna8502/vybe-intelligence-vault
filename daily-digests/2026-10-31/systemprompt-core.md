---
title: "systempromptio/systemprompt-core"
content_type: "repo"
engine: "v2"
category: "Orchestrator"
tech_stack: ["Rust", "PostgreSQL", "ChaCha20-Poly1305", "OAuth2", "OIDC", "HTTP", "SSE", "JSON-RPC", "A2A Protocol", "Model Context Protocol (MCP)"]
quality_score: 9
rag_relevance: 10
deployment_complexity: "Medium"
tags: ["AI governance", "agent orchestration", "audit trails", "security", "Rust"]
source: "https://github.com/systempromptio/systemprompt-core"
stars: 8
language: "Rust"
last_updated: "2026-09-01T09:03:22Z"
discovered_at: "2026-09-01T09:12:06Z"
evaluated_by: "mistral-small-latest"
---

## Summary
systemprompt-core is a governance engine for AI infrastructure that compiles to a single Rust binary, providing a secure, audited path for agent interactions, MCP tool calls, and inference requests. It operates with a PostgreSQL backend and enforces strict security controls like secret detection and fail-closed authorization.

## Key Features
- Single Rust binary with PostgreSQL backend for centralized governance
- Fail-closed authorization with structured audit logging for every decision
- Built-in OAuth2/OIDC authorization server with WebAuthn support
- Secret detection and isolation via ChaCha20-Poly1305 encryption
- Supports A2A agents, MCP servers, and provider-agnostic model routing

## Why It Matters for RAG Builders
It provides a critical governance layer for RAG/AI stacks, ensuring secure, auditable, and self-hosted agent interactions without relying on third-party infrastructure.

## Tech Stack Deep Dive
### Rust
Automated review identified **Rust** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PostgreSQL
Automated review identified **PostgreSQL** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### ChaCha20-Poly1305
Automated review identified **ChaCha20-Poly1305** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OAuth2
Automated review identified **OAuth2** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OIDC
Automated review identified **OIDC** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HTTP
Automated review identified **HTTP** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SSE
Automated review identified **SSE** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSON-RPC
Automated review identified **JSON-RPC** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### A2A Protocol
Automated review identified **A2A Protocol** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
