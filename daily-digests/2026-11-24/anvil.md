---
title: "BrokkAi/anvil"
content_type: "repo"
engine: "v2"
category: "Agent Framework"
tech_stack: ["Rust", "Agent Client Protocol (ACP)", "JSON-RPC", "MCP (Model Context Protocol)", "WASM", "Homebrew", "crates.io"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Medium"
tags: ["Agent Runtime", "Model Routing", "ACP Server", "Sandboxing", "MCP Integration"]
source: "https://github.com/BrokkAi/anvil"
stars: 6
language: "Rust"
last_updated: "2026-08-03T13:38:19Z"
discovered_at: "2026-08-03T13:42:09Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Anvil is a Rust-based Agent Client Protocol (ACP) server that provides a reusable agent engine for ACP-compatible clients like editors, bots, TUIs, and internal tools. It handles model routing, tool loops, permissions, sessions, and MCP integration while delegating user experience to the client.

## Key Features
- Portable ACP server supporting multiple clients (Zed, JetBrains, Neovim, custom TUIs)
- Built-in model routing for 10+ providers (OpenAI, Bedrock, Ollama, DeepSeek, etc.)
- Explicit safety boundaries with permission gates, workspace checks, and configurable sandboxing
- Persistent sessions with durable history, context compaction, and usage reporting
- Direct ACP client installers and extensible tooling (filesystem, shell, MCP servers, plugins)

## Why It Matters for RAG Builders
Anvil provides a standardized, reusable agent runtime that simplifies building and integrating AI agents across multiple frontends while ensuring safety and scalability.

## Tech Stack Deep Dive
### Rust
Automated review identified **Rust** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Agent Client Protocol (ACP)
Automated review identified **Agent Client Protocol (ACP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSON-RPC
Automated review identified **JSON-RPC** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### WASM
Automated review identified **WASM** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Homebrew
Automated review identified **Homebrew** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### crates.io
Automated review identified **crates.io** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
