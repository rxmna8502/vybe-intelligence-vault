---
title: "4fuu/uri-agent"
content_type: "repo"
engine: "v2"
category: "Agent Framework"
tech_stack: ["Rust", "WASM", "SQLite", "MCP (Model Context Protocol)", "ACP (Agent Communication Protocol)", "HTTP/HTTPS", "OAuth", "WebSocket"]
quality_score: 8
rag_relevance: 7
deployment_complexity: "Medium"
tags: ["terminal agent", "protocol-oriented", "dynamic tool loading", "MCP bridge", "WASM plugins"]
source: "https://github.com/4fuu/uri-agent"
stars: 0
language: "Rust"
last_updated: "2026-09-02T08:13:50Z"
discovered_at: "2026-09-02T08:21:04Z"
evaluated_by: "mistral-small-latest"
---

## Summary
URI Agent is a protocol-oriented terminal coding agent that enables dynamic tool loading via URI protocols, allowing models to interact with tools on-demand while keeping context minimal until needed. It supports extensible plugins, built-in MCP bridge, ACP editor integration, and broad model provider coverage.

## Key Features
- Protocol-based tool loading with progressive context to minimize model input size
- Built-in MCP bridge for managing stdio and Streamable HTTP servers as on-demand protocols
- ACP v1 editor integration for durable project-scoped sessions with model configuration
- Extensible WASM plugins for adding custom protocols and typed tools at runtime
- Broad model provider coverage via pi.dev catalog and provider-specific integrations

## Why It Matters for RAG Builders
URI Agent simplifies dynamic tool integration for AI agents by enabling on-demand protocol-based tool loading, reducing context overhead and enhancing extensibility for RAG builders.

## Tech Stack Deep Dive
### Rust
Automated review identified **Rust** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### WASM
Automated review identified **WASM** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### ACP (Agent Communication Protocol)
Automated review identified **ACP (Agent Communication Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HTTP/HTTPS
Automated review identified **HTTP/HTTPS** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OAuth
Automated review identified **OAuth** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### WebSocket
Automated review identified **WebSocket** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
