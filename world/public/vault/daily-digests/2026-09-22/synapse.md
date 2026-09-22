---
title: "jmagar/synapse"
content_type: "repo"
engine: "v2"
category: "Orchestrator"
tech_stack: ["Rust", "Model Context Protocol (MCP)", "Docker", "Docker Compose", "SSH", "ZFS", "REST", "CLI", "npm"]
quality_score: 9
rag_relevance: 7
deployment_complexity: "Medium"
tags: ["MCP server", "infrastructure automation", "Docker orchestration", "host management", "Rust"]
source: "https://github.com/jmagar/synapse"
stars: 1
language: "Rust"
last_updated: "2026-07-19T23:47:26Z"
discovered_at: "2026-07-19T23:56:08Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A Rust-based MCP and CLI server for local Synapse workflows, providing full-parity functionality to the original TypeScript implementation. It enables Docker, Compose, host inspection, SSH, ZFS, and file operations through standardized MCP tools and CLI commands.

## Key Features
- Exposes two MCP tools (`flux` and `scout`) covering 59 production actions for Docker, Compose, host, SSH, ZFS, and file operations
- Provides CLI parity with MCP tools for scriptable operator workflows
- Implements strict safety and trust models with read/write scopes and confirmation gates for destructive operations
- Supports multiple runtime surfaces: MCP, CLI, REST (compatibility), and a lightweight static web admin shell
- Offers robust authentication via bearer tokens or Google OAuth, with loopback stdio support for local development

## Why It Matters for RAG Builders
It provides a secure, standardized interface for AI agents to interact with local infrastructure, enabling reliable automation of Docker, Compose, and host operations within RAG pipelines.

## Tech Stack Deep Dive
### Rust
Automated review identified **Rust** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker Compose
Automated review identified **Docker Compose** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SSH
Automated review identified **SSH** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### ZFS
Automated review identified **ZFS** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### REST
Automated review identified **REST** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CLI
Automated review identified **CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### npm
Automated review identified **npm** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
