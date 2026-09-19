---
title: "DeliciousBuding/codex-browser-bridge"
content_type: "repo"
engine: "v2"
category: "Agent Framework"
tech_stack: ["Rust", "Chrome DevTools Protocol (CDP)", "MCP (Model Context Protocol)", "JSON-RPC", "Windows Named Pipes", "TOML (for configuration)"]
quality_score: 9
rag_relevance: 10
deployment_complexity: "Medium"
tags: ["browser automation", "MCP server", "Chrome control", "agent integration", "RAG tooling"]
source: "https://github.com/DeliciousBuding/codex-browser-bridge"
stars: 13
language: "Rust"
last_updated: "2026-08-02T17:54:10Z"
discovered_at: "2026-08-02T18:02:44Z"
evaluated_by: "mistral-small-latest"
---

## Summary
codex-browser-bridge enables MCP-compatible agents like Claude Code to control a local Chrome browser via Codex Desktop's browser bridge. It exposes 52 MCP tools for browser automation, DOM interaction, and network operations, all packaged as a single Rust binary with zero configuration.

## Key Features
- 52 MCP tools for comprehensive browser control (tabs, navigation, DOM, input, network, etc.)
- Pure Rust single binary with zero configuration required
- Direct integration with Codex Desktop's Chrome bridge via named pipes
- Built-in safety limits for large responses (text/image bytes, CDP diagnostics)
- Self-diagnostic tool (`codex_doctor`) and agent skill for optimal usage

## Why It Matters for RAG Builders
It bridges the gap between AI agents and real browser sessions, enabling agents to interact with dynamic, authenticated, or complex web interfaces essential for RAG pipelines.

## Tech Stack Deep Dive
### Rust
Automated review identified **Rust** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Chrome DevTools Protocol (CDP)
Automated review identified **Chrome DevTools Protocol (CDP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSON-RPC
Automated review identified **JSON-RPC** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Windows Named Pipes
Automated review identified **Windows Named Pipes** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### TOML (for configuration)
Automated review identified **TOML (for configuration)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
