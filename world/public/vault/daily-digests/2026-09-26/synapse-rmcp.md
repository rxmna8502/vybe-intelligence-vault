---
title: "jmagar/synapse-rmcp"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Rust", "Rust SDK (rmcp)", "Docker", "Docker Compose", "SSH", "ZFS", "CLI", "MCP (Model Context Protocol)", "REST", "npm"]
quality_score: 9
rag_relevance: 7
deployment_complexity: "Medium"
tags: ["MCP server", "Docker management", "host inspection", "Rust implementation", "CLI tool"]
source: "https://github.com/jmagar/synapse-rmcp"
stars: 1
language: "Rust"
last_updated: "2026-07-13T13:17:13Z"
discovered_at: "2026-07-13T13:22:38Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Rust-based MCP and CLI server for local Synapse workflows, providing full-parity functionality to the original TypeScript implementation. It enables Docker, Compose, host, SSH, log, ZFS, and file operations through MCP tools and CLI commands.

## Key Features
- Full-parity Rust port of synapse-mcp with 59 production actions
- Two MCP tools (`flux` and `scout`) covering Docker, Compose, SSH, logs, ZFS, and file operations
- Equivalent CLI commands for scriptable operator workflows
- Strict safety model with read/write scopes and confirmation gates for destructive actions
- Supports stdio, HTTP, and REST interfaces with configurable authentication

## Why It Matters for RAG Builders
It provides a high-performance, Rust-based MCP server for local infrastructure management, enabling secure and auditable agent interactions with Docker, Compose, and host systems.

## Tech Stack Deep Dive
### Rust
Automated review identified **Rust** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Rust SDK (rmcp)
Automated review identified **Rust SDK (rmcp)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker Compose
Automated review identified **Docker Compose** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SSH
Automated review identified **SSH** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### ZFS
Automated review identified **ZFS** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CLI
Automated review identified **CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### REST
Automated review identified **REST** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### npm
Automated review identified **npm** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
