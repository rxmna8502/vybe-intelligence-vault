---
title: "oxHive/hivemind"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Rust", "libsql", "SQLite", "MCP (Model Context Protocol)", "TypeScript", "Bun", "React", "Systemd/launchd (for service management)"]
quality_score: 9
rag_relevance: 9
deployment_complexity: "Medium"
tags: ["persistent memory", "AI coding agents", "MCP server", "context injection", "session management"]
source: "https://github.com/oxHive/hivemind"
stars: 2
language: "Rust"
last_updated: "2026-07-14T16:02:39Z"
discovered_at: "2026-07-14T16:14:21Z"
evaluated_by: "mistral-small-latest"
---

## Summary
HiveMind is a local MCP server that provides persistent memory for AI coding agents like Claude Code, enabling context, preferences, and project knowledge to persist across sessions via a libsql-backed SQLite database. It injects project-specific memories at session start and offers on-demand recall tools.

## Key Features
- Persistent memory store for AI agents using libsql-backed SQLite database
- Automatic session-start context injection with token budget control via `.hivemind.toml`
- On-demand memory recall, search, and tagging tools (MCP-compatible)
- Cross-client compatibility with Claude Code, Cursor, Windsurf, OpenCode, Kimi, and Codex
- Optional dashboard and REST API for memory management and visualization

## Why It Matters for RAG Builders
HiveMind enables AI coding agents to retain project-specific context and preferences across sessions without token overhead, significantly improving continuity and efficiency in RAG workflows.

## Tech Stack Deep Dive
### Rust
Automated review identified **Rust** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### libsql
Automated review identified **libsql** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Bun
Automated review identified **Bun** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### React
Automated review identified **React** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Systemd/launchd (for service management)
Automated review identified **Systemd/launchd (for service management)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
