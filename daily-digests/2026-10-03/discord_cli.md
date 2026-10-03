---
title: "quangdang46/discord_cli"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Rust", "SQLite", "FTS5 (Full-Text Search)", "Discord API", "MCP (Model Context Protocol)", "Tokio", "LevelDB", "Claude Code"]
quality_score: 9
rag_relevance: 7
deployment_complexity: "Medium"
tags: ["Discord automation", "CLI tool", "MCP server", "Offline search", "User account access"]
source: "https://github.com/quangdang46/discord_cli"
stars: 2
language: "Rust"
last_updated: "2026-08-07T00:01:16Z"
discovered_at: "2026-08-07T00:01:52Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A Discord CLI and MCP server that operates as a user account, enabling reading, sending, searching, and managing any server or DM without requiring bot invitations. It provides agent-native JSON/JSONL output, SQLite-based offline archiving with FTS5 search, and stealth-aware fingerprinting for safe automation.

## Key Features
- Operates as a user account, granting access to all servers, DMs, and threads without bot invitations
- Agent-native output with JSON/JSONL envelopes and exit-code contracts for programmatic use
- SQLite-based offline archive with FTS5 full-text search for instant querying
- Stealth-aware fingerprinting (UA, X-Super-Properties, device_id) to mimic real client behavior
- MCP server integration for direct tool access in AI agents like Claude Code

## Why It Matters for RAG Builders
It enables AI agents to interact with Discord as a user account, providing real-time data access and offline search capabilities essential for building comprehensive RAG systems.

## Tech Stack Deep Dive
### Rust
Automated review identified **Rust** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FTS5 (Full-Text Search)
Automated review identified **FTS5 (Full-Text Search)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Discord API
Automated review identified **Discord API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Tokio
Automated review identified **Tokio** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### LevelDB
Automated review identified **LevelDB** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Claude Code
Automated review identified **Claude Code** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
