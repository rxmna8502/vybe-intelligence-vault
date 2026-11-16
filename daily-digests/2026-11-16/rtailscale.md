---
title: "jmagar/rtailscale"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Rust", "MCP (Model Context Protocol)", "Tailscale REST API", "HTTP", "CLI", "Docker"]
quality_score: 9
rag_relevance: 7
deployment_complexity: "Medium"
tags: ["Tailscale", "MCP server", "tailnet management", "device automation", "Rust tooling"]
source: "https://github.com/jmagar/rtailscale"
stars: 4
language: "Rust"
last_updated: "2026-07-19T23:47:30Z"
discovered_at: "2026-07-19T23:56:03Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A Rust-based MCP server and CLI for managing Tailscale tailnets via the Tailscale REST API. It provides read/write access to devices, routes, keys, policies, and users, with explicit safety gates for destructive operations.

## Key Features
- Exposes a single MCP tool (`tailscale`) for tailnet operations including listing devices, routes, keys, policies, and users
- Supports both MCP stdio and HTTP modes for local and shared deployments
- Implements explicit safety gates for destructive actions (e.g., device deletion requires confirmation and opt-in)
- Provides a CLI (`rtailscale`) for parity and debugging with JSON output
- Supports authentication via static bearer tokens, OAuth, or trusted gateways

## Why It Matters for RAG Builders
It enables AI agents to programmatically manage Tailscale tailnets, automating device authorization and monitoring without exposing raw API keys to agents.

## Tech Stack Deep Dive
### Rust
Automated review identified **Rust** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Tailscale REST API
Automated review identified **Tailscale REST API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HTTP
Automated review identified **HTTP** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CLI
Automated review identified **CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
