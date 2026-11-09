---
title: "openai/tunnel-client"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Go", "MCP (Model Context Protocol)", "Cloudflare Tunnel", "REST API", "OAuth", "gRPC", "Docker", "Kubernetes"]
quality_score: 9
rag_relevance: 10
deployment_complexity: "Medium"
tags: ["secure connectivity", "MCP server", "private network", "OpenAI integration", "tunnel proxy"]
source: "https://github.com/openai/tunnel-client"
stars: 221
language: "Go"
last_updated: "2026-08-05T22:05:44Z"
discovered_at: "2026-08-05T22:15:08Z"
evaluated_by: "mistral-small-latest"
---

## Summary
The tunnel-client enables secure, private connectivity between local or on-premises MCP servers and OpenAI's hosted services (ChatGPT, Codex, Responses API, AgentKit) without exposing the MCP server to the public internet. It acts as a secure bridge, ensuring secure and compliant access to private MCP resources.

## Key Features
- Secure long-polling connection to OpenAI's control plane for MCP server access
- Embeddable Go SDK for in-memory MCP transport integration
- Operator-visible health checks (/healthz, /readyz, /metrics) and UI dashboard
- Support for Docker, Kubernetes, and VM deployments with Cloudflare Tunnel
- Role-based access control and permission management for tunnels and connectors

## Why It Matters for RAG Builders
It enables RAG/AI stack builders to securely connect private MCP servers to OpenAI's ecosystem without exposing them to the internet, ensuring compliance and reducing deployment complexity.

## Tech Stack Deep Dive
### Go
Automated review identified **Go** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Cloudflare Tunnel
Automated review identified **Cloudflare Tunnel** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### REST API
Automated review identified **REST API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OAuth
Automated review identified **OAuth** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### gRPC
Automated review identified **gRPC** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Kubernetes
Automated review identified **Kubernetes** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
