---
title: "joaquinbejar/ai-crew-sync"
content_type: "repo"
engine: "v2"
category: "Orchestrator"
tech_stack: ["Rust", "PostgreSQL", "MCP (Model Context Protocol)", "Streamable HTTP", "axum", "SQLx", "Docker", "CI/CD (GitHub Actions)"]
quality_score: 9
rag_relevance: 9
deployment_complexity: "Medium"
tags: ["AI agent coordination", "task management", "real-time collaboration", "Postgres-backed state", "MCP server"]
source: "https://github.com/joaquinbejar/ai-crew-sync"
stars: 0
language: "Rust"
last_updated: "2026-08-01T06:13:05Z"
discovered_at: "2026-08-01T06:29:17Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A Rust-based MCP server that acts as a coordination bus for AI coding agents (e.g., Claude Code, Codex, Cursor) to collaborate via a shared Postgres-backed state. It enables messaging, task coordination with dependencies, real-time updates, agent-to-agent RPC, and shared team memory.

## Key Features
- Multi-agent task coordination with lease-based TTL and dependency tracking
- Real-time updates via Postgres LISTEN/NOTIFY for blocking waits
- Agent-to-agent RPC with direct messaging and file attachments
- Multi-team isolation with hashed token-based identity
- Horizontal scalability via stateless MCP Streamable HTTP transport

## Why It Matters for RAG Builders
It provides a centralized, scalable coordination layer for AI agents to collaborate on tasks, share context, and manage dependencies in real-time, reducing coordination overhead in multi-agent workflows.

## Tech Stack Deep Dive
### Rust
Automated review identified **Rust** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PostgreSQL
Automated review identified **PostgreSQL** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Streamable HTTP
Automated review identified **Streamable HTTP** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### axum
Automated review identified **axum** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLx
Automated review identified **SQLx** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CI/CD (GitHub Actions)
Automated review identified **CI/CD (GitHub Actions)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
