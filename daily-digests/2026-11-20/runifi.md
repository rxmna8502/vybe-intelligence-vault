---
title: "jmagar/runifi"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Rust", "MCP (Model Context Protocol)", "UniFi Network API", "HTTP", "CLI", "Docker", "npm"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Medium"
tags: ["UniFi integration", "MCP server", "Rust CLI", "network monitoring", "API gateway"]
source: "https://github.com/jmagar/runifi"
stars: 1
language: "Rust"
last_updated: "2026-07-19T23:47:35Z"
discovered_at: "2026-07-19T23:56:00Z"
evaluated_by: "mistral-small-latest"
---

## Summary
unifi-rmcp is a Rust-based MCP server and CLI for managing Ubiquiti UniFi Network controllers through official, internal, and hybrid API actions. It exposes MCP tools and a CLI to inspect clients, devices, networks, health, and more, while enforcing UniFi permission scopes.

## Key Features
- Exposes UniFi controller data via MCP tools and CLI for agent interactions
- Supports both official and internal UniFi API actions with permission enforcement
- Provides HTTP MCP server for shared deployments and loopback stdio for local use
- Includes CLI parity for debugging and scripting, with Docker and npm packaging
- Enforces UniFi read/admin scopes and integrates with OAuth for HTTP MCP auth

## Why It Matters for RAG Builders
It bridges UniFi network data with AI agents via MCP, enabling secure, permission-aware access to network telemetry and controls for RAG applications.

## Tech Stack Deep Dive
### Rust
Automated review identified **Rust** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### UniFi Network API
Automated review identified **UniFi Network API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HTTP
Automated review identified **HTTP** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CLI
Automated review identified **CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### npm
Automated review identified **npm** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
