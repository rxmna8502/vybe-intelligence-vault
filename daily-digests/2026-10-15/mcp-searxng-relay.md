---
title: "littleoffice/mcp-searxng-relay"
content_type: "repo"
engine: "v2"
category: "Agent Framework"
tech_stack: ["Go", "Docker", "Kubernetes", "Model Context Protocol (MCP)", "SearXNG", "Prometheus (metrics)", "SSRF protection", "Bearer token authentication"]
quality_score: 9
rag_relevance: 9
deployment_complexity: "Medium"
tags: ["MCP server", "self-hosted search", "SearXNG", "security-hardened", "audit logging"]
source: "https://github.com/littleoffice/mcp-searxng-relay"
stars: 1
language: "Go"
last_updated: "2026-07-15T08:03:39Z"
discovered_at: "2026-07-15T08:06:03Z"
evaluated_by: "mistral-small-latest"
---

## Summary
An MCP server that enables AI agents to perform web searches and URL fetching through a self-hosted SearXNG instance, prioritizing security, auditability, and compliance for restricted environments. It supports both local (stdio) and networked (HTTP) deployments.

## Key Features
- Web search via SearXNG with full query control (language, time range, safe-search, etc.)
- Structured URL fetching with Markdown extraction, PDF/Office document support, and image handling
- SSRF protection, rate limiting, and per-identity audit logging for security compliance
- Reproducible container builds with supply-chain provenance verification
- Prompt fencing and session management for defensible security posture

## Why It Matters for RAG Builders
It enables AI agents to perform secure, auditable web searches and document retrieval within restricted environments, eliminating reliance on third-party search APIs while maintaining compliance and control.

## Tech Stack Deep Dive
### Go
Automated review identified **Go** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Kubernetes
Automated review identified **Kubernetes** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SearXNG
Automated review identified **SearXNG** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Prometheus (metrics)
Automated review identified **Prometheus (metrics)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SSRF protection
Automated review identified **SSRF protection** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Bearer token authentication
Automated review identified **Bearer token authentication** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
