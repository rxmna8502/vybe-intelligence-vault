---
title: "pilat/coagent"
content_type: "repo"
engine: "v2"
category: "Agent Framework"
tech_stack: ["Go", "SQLite", "Telegram Bot API", "MCP (Model Context Protocol)", "Bash", "Unix Sockets", "YAML", "Git", "mise (toolchain manager)"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Medium"
tags: ["autonomous coding", "durable sessions", "subagents", "MCP integration", "self-hosted"]
source: "https://github.com/pilat/coagent"
stars: 0
language: "Go"
last_updated: "2026-09-01T09:04:21Z"
discovered_at: "2026-09-01T09:07:30Z"
evaluated_by: "mistral-small-latest"
---

## Summary
coagent is a self-hosted, headless coding agent designed for unattended task handoff. It runs as a long-lived daemon, accepts tasks via Telegram or local chat, and manages durable sessions with SQLite persistence, subagents, schedules, and MCP server integrations.

## Key Features
- Durable work persistence with SQLite for sessions, schedules, and subagent relationships
- Headless operation with Telegram or local Unix socket control, no TCP listener or web UI
- Subagent delegation for parallel or hierarchical task execution with isolated contexts
- Built-in tools for code inspection, editing, testing, and project memory management
- Strict security model with opt-in write confinement, secrets management, and sandboxing

## Why It Matters for RAG Builders
coagent enables unattended, durable task execution for AI agents, making it essential for building robust, production-grade autonomous coding systems.

## Tech Stack Deep Dive
### Go
Automated review identified **Go** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Telegram Bot API
Automated review identified **Telegram Bot API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Bash
Automated review identified **Bash** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Unix Sockets
Automated review identified **Unix Sockets** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### YAML
Automated review identified **YAML** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Git
Automated review identified **Git** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### mise (toolchain manager)
Automated review identified **mise (toolchain manager)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
