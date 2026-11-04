---
title: "wuisabel-gif/MemWhale"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Rust", "SQLite", "Tauri", "GTK", "Model Context Protocol (MCP)", "Neovim", "Jetson", "WSL"]
quality_score: 9
rag_relevance: 10
deployment_complexity: "Medium"
tags: ["local memory", "terminal recording", "AI agent integration", "debugging assistant", "persistent context"]
source: "https://github.com/wuisabel-gif/MemWhale"
stars: 23
language: "Rust"
last_updated: "2026-08-08T05:44:37Z"
discovered_at: "2026-08-08T05:46:04Z"
evaluated_by: "mistral-small-latest"
---

## Summary
MemoryWhale is a local-first, persistent memory system for developers and AI agents that records terminal commands, outputs, errors, and fixes into a local SQLite database. It provides retrieval and contextualization of past debugging sessions via a CLI, TUI, web dashboard, and Model Context Protocol (MCP) server for seamless integration with coding agents.

## Key Features
- Records full terminal sessions, outputs, errors, and fixes into local SQLite with automatic secret scrubbing
- Provides CLI, TUI, and web dashboard for browsing and searching recorded memories
- Offers MCP server (`mw-mcp`) for direct integration with coding agents (Claude, Codex, Cursor) to retrieve past failures and fixes
- Supports two capture tiers: lightweight shell hooks (always-on) and full session recording (detailed output)
- Includes project-based organization, knowledge graph visualization, and Neovim plugin for in-editor memory access

## Why It Matters for RAG Builders
MemoryWhale eliminates redundant debugging by enabling AI agents to retrieve and learn from past failures and fixes stored locally, reducing context loss and improving efficiency in development workflows.

## Tech Stack Deep Dive
### Rust
Automated review identified **Rust** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Tauri
Automated review identified **Tauri** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### GTK
Automated review identified **GTK** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Neovim
Automated review identified **Neovim** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Jetson
Automated review identified **Jetson** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### WSL
Automated review identified **WSL** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
