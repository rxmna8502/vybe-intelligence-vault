---
title: "dinglebear-ai/rgotify"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Rust", "Model Context Protocol (MCP)", "HTTP", "CLI", "npm", "Docker"]
quality_score: 9
rag_relevance: 7
deployment_complexity: "Medium"
tags: ["MCP server", "push notifications", "Gotify integration", "Rust CLI", "AI agent tools"]
source: "https://github.com/dinglebear-ai/rgotify"
stars: 1
language: "Rust"
last_updated: "2026-08-01T03:35:47Z"
discovered_at: "2026-08-01T03:44:14Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A Rust-based MCP server and CLI for Gotify that enables agents to send push notifications, manage messages, and interact with Gotify's API via stdio or HTTP. It bridges MCP clients with Gotify's push notification system for AI-driven workflows.

## Key Features
- Exposes a single MCP tool (`gotify`) for managing Gotify resources (messages, apps, clients) and sending notifications
- Supports both stdio and HTTP transport for MCP clients (Claude Code, Codex, etc.)
- CLI parity with MCP tooling for scripting and debugging
- Destructive actions require explicit confirmation for safety
- Supports static bearer tokens and OAuth via `lab-auth`

## Why It Matters for RAG Builders
It enables AI agents to directly interact with Gotify's push notification system, streamlining real-time alerting and message management within AI-driven workflows.

## Tech Stack Deep Dive
### Rust
Automated review identified **Rust** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HTTP
Automated review identified **HTTP** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CLI
Automated review identified **CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### npm
Automated review identified **npm** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
