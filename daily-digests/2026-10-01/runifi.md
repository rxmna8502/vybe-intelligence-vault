---
title: "dinglebear-ai/runifi"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Rust", "MCP (Model Context Protocol)", "HTTP", "CLI", "Docker", "Node.js (npm package)", "REST API", "TOML (configuration)"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Medium"
tags: ["UniFi integration", "MCP server", "network monitoring", "Rust tooling", "REST API wrapper"]
source: "https://github.com/dinglebear-ai/runifi"
stars: 1
language: "Rust"
last_updated: "2026-08-01T03:36:39Z"
discovered_at: "2026-08-01T03:44:09Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A Rust-based MCP server and CLI for interacting with UniFi Network controllers, exposing REST-backed network operations (clients, devices, WLANs, health, alarms, events) via stdio or HTTP. It provides read and mutating actions for UniFi controllers while enforcing authorization scopes.

## Key Features
- Exposes 267 MCP actions (78 official, 175 internal, 8 preserved convenience) for UniFi controller operations
- Supports both stdio and HTTP MCP runtime surfaces for local and shared deployments
- Enforces authorization scopes (unifi:read for read actions, unifi:admin for mutating actions)
- Provides CLI parity with MCP actions for debugging and scripting
- Includes setup, verification, and health-check commands for runtime validation

## Why It Matters for RAG Builders
It enables AI agents to securely interact with UniFi network infrastructure via standardized MCP interfaces, bridging the gap between AI workflows and physical network management.

## Tech Stack Deep Dive
### Rust
Automated review identified **Rust** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HTTP
Automated review identified **HTTP** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CLI
Automated review identified **CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js (npm package)
Automated review identified **Node.js (npm package)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### REST API
Automated review identified **REST API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### TOML (configuration)
Automated review identified **TOML (configuration)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
