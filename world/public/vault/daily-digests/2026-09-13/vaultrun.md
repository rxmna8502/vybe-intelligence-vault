---
title: "nickvd7/vaultrun"
content_type: "repo"
engine: "v2"
category: "Orchestrator"
tech_stack: ["Go", "Docker", "PostgreSQL", "Redis", "Gin (Go web framework)", "Next.js", "Python", "Model Context Protocol (MCP)", "OAuth/OIDC", "SAML 2.0", "SQLite", "MongoDB", "AWS SDK"]
quality_score: 9
rag_relevance: 9
deployment_complexity: "Medium"
tags: ["secure sandboxing", "self-hosted AI runtime", "Docker orchestration", "MCP server", "audit logging"]
source: "https://github.com/nickvd7/vaultrun"
stars: 0
language: "Go"
last_updated: "2026-07-15T17:55:33Z"
discovered_at: "2026-07-15T18:06:24Z"
evaluated_by: "mistral-small-latest"
---

## Summary
VaultRun provides a self-hosted, secure runtime for executing AI agent commands in isolated Docker sandboxes on your own infrastructure. It enables safe code execution, database queries, cloud API calls, and file management without external SaaS dependencies or data leaving your network.

## Key Features
- Isolated Docker container execution per session with strict resource limits (CPU, memory, timeout)
- 53-tool MCP server supporting both stdio and HTTP transport for integration with Claude, OpenAI, and custom agents
- HMAC-signed audit trail for all actions with path traversal prevention and non-root container execution
- Enterprise-grade SSO (OIDC + SAML 2.0) for dashboard authentication, available separately
- GitHub CI runner for executing PR test suites in isolated sandboxes with Slack/Teams notifications

## Why It Matters for RAG Builders
VaultRun is essential for AI stack builders who need a secure, self-hosted environment to safely execute agent commands without relying on external SaaS platforms or exposing sensitive data.

## Tech Stack Deep Dive
### Go
Automated review identified **Go** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PostgreSQL
Automated review identified **PostgreSQL** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Redis
Automated review identified **Redis** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Gin (Go web framework)
Automated review identified **Gin (Go web framework)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Next.js
Automated review identified **Next.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OAuth/OIDC
Automated review identified **OAuth/OIDC** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SAML 2.0
Automated review identified **SAML 2.0** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MongoDB
Automated review identified **MongoDB** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### AWS SDK
Automated review identified **AWS SDK** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
