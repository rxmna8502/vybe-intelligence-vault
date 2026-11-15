---
title: "attacca-cc/zyris-code"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Rust", "ratatui", "Zyris Protocol", "Attacca API", "MCP (Model Context Protocol)", "PTY (Pseudo Terminal)"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Medium"
tags: ["terminal interface", "agent tooling", "file editing", "MCP integration", "access control"]
source: "https://github.com/attacca-cc/zyris-code"
stars: 0
language: "Rust"
last_updated: "2026-08-07T14:56:36Z"
discovered_at: "2026-08-07T18:57:35Z"
evaluated_by: "mistral-small-latest"
---

## Summary
zyris-code is a terminal-based coding client for Attacca agents that provides a bilingual (Korean/English) TUI interface. It enables agents to interact with the local filesystem, execute shell commands, and utilize MCP servers while enforcing directory-based access controls.

## Key Features
- Bilingual TUI (Korean/English) with interactive terminal interface
- Agent-controlled file editing, searching, and shell command execution
- Directory-based access control ('fence') to restrict agent operations
- Four operational modes (normal, plan, work, job) with distinct tooling permissions
- Undo functionality with persistent backups and change tracking

## Why It Matters for RAG Builders
It provides secure, agent-driven local tooling with fine-grained access control, essential for safe and efficient RAG/AI stack operations.

## Tech Stack Deep Dive
### Rust
Automated review identified **Rust** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### ratatui
Automated review identified **ratatui** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Zyris Protocol
Automated review identified **Zyris Protocol** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Attacca API
Automated review identified **Attacca API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PTY (Pseudo Terminal)
Automated review identified **PTY (Pseudo Terminal)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
