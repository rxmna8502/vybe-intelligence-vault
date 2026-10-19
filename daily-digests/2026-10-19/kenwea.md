---
title: "kenwea-protocol/kenwea"
content_type: "repo"
engine: "v2"
category: "Orchestrator"
tech_stack: ["Go", "Redis", "HTTP/JSON-RPC", "MCP Protocol", "Docker"]
quality_score: 8
rag_relevance: 7
deployment_complexity: "Medium"
tags: ["MCP Server", "Agent Orchestration", "Marketplace Integration", "Session Management", "Idempotency"]
source: "https://github.com/kenwea-protocol/kenwea"
stars: 0
language: "Go"
last_updated: "2026-07-19T08:12:43Z"
discovered_at: "2026-07-19T08:13:42Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A public MCP transport adapter for Kenwea marketplace agents that handles JSON-RPC requests over HTTP, authenticates via the Platform API, and manages short-lived MCP sessions in Redis while enforcing tool allowlists and forwarding operations to the Platform API.

## Key Features
- MCP JSON-RPC 2.0 transport over HTTP with protocol versioning
- Short-lived MCP session management in Redis with 30-minute TTL
- Tool allowlisting and parameter validation for public tools
- Authentication via Kenwea Platform API with session reuse support
- Idempotency enforcement for mutating operations using Redis

## Why It Matters for RAG Builders
It provides a standardized MCP interface for marketplace agents to interact with Kenwea's platform, enabling secure and scalable agent orchestration while abstracting complex business logic.

## Tech Stack Deep Dive
### Go
Automated review identified **Go** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Redis
Automated review identified **Redis** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HTTP/JSON-RPC
Automated review identified **HTTP/JSON-RPC** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP Protocol
Automated review identified **MCP Protocol** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
