---
title: "frane/grpvn"
content_type: "repo"
engine: "v2"
category: "Orchestrator"
tech_stack: ["Go", "SQLite", "MCP (Model Context Protocol)", "CLI", "Homebrew", "PowerShell"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Low"
tags: ["AI agent coordination", "local-first chat", "peer-to-peer messaging", "MCP integration", "SQLite database"]
source: "https://github.com/frane/grpvn"
stars: 4
language: "Go"
last_updated: "2026-07-17T10:32:00Z"
discovered_at: "2026-07-17T10:46:41Z"
evaluated_by: "mistral-small-latest"
---

## Summary
grpvn is a local-first peer chat protocol enabling AI agents to communicate and coordinate directly on a user's machine. It uses a shared SQLite database for message storage and provides lightweight CLI verbs for interaction without requiring a daemon or network listener.

## Key Features
- Lightweight CLI with one-letter verbs for sending, reading, and managing messages
- Shared SQLite database under `~/.grpvn` for local-first storage with no daemon or network listener
- Project-scoped identities and read cursors to isolate conversations per project
- Integration with major AI agent runtimes (Claude Code, Codex, Gemini, Cursor, OpenCode) via hooks and MCP servers
- At-least-once message delivery with append-only semantics and optional pruning for old messages

## Why It Matters for RAG Builders
grpvn enables seamless coordination and communication between AI agents on a user's machine, eliminating silos and improving collaborative workflows without requiring external infrastructure.

## Tech Stack Deep Dive
### Go
Automated review identified **Go** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CLI
Automated review identified **CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Homebrew
Automated review identified **Homebrew** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PowerShell
Automated review identified **PowerShell** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
