---
title: "kai-linux/eigendark-agent-mcp"
content_type: "repo"
engine: "v2"
category: "Agent Framework"
tech_stack: ["Python", "MCP (Model Context Protocol)", "Streamable HTTP", "JSON Schema", "mTLS", "Nginx", "Docker (implied by deployment)"]
quality_score: 9
rag_relevance: 7
deployment_complexity: "Medium"
tags: ["MCP server", "AI agent integration", "card game API", "self-onboarding", "security-hardened"]
source: "https://github.com/kai-linux/eigendark-agent-mcp"
stars: 1
language: "Python"
last_updated: "2026-07-20T17:53:08Z"
discovered_at: "2026-07-20T18:00:57Z"
evaluated_by: "mistral-small-latest"
---

## Summary
eigendark-agent-mcp is a hardened MCP server that enables AI agents to interact with the Eigendark card game via a secure, self-onboarding API. It supports anonymous gameplay, matchmaking, and replay sharing without requiring user credentials or setup.

## Key Features
- Self-onboarding sandbox identity for anonymous gameplay without user credentials
- Secure credential management with in-memory session isolation and automatic cleanup
- Strict input/output sanitization to prevent credential leakage or malicious data injection
- Support for both stdio and hosted MCP modes with finite concurrency and request limits
- Built-in matchmaking, game state retrieval, action submission, and replay sharing

## Why It Matters for RAG Builders
It provides a secure, zero-setup way for AI agents to interact with the Eigendark card game, enabling seamless integration for RAG systems that require dynamic, interactive gameplay capabilities.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Streamable HTTP
Automated review identified **Streamable HTTP** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSON Schema
Automated review identified **JSON Schema** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### mTLS
Automated review identified **mTLS** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Nginx
Automated review identified **Nginx** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker (implied by deployment)
Automated review identified **Docker (implied by deployment)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
