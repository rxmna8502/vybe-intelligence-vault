---
title: "1939869736luosi/codex-sessions-manager"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["TypeScript", "Node.js", "SQLite", "CLI", "MCP (Model Context Protocol)", "JSONL", "Zstandard (ZST) compression"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Medium"
tags: ["session cleanup", "local audit", "privacy tool", "MCP server", "Codex integration"]
source: "https://github.com/1939869736luosi/codex-sessions-manager"
stars: 12
language: "TypeScript"
last_updated: "2026-07-11T05:37:20Z"
discovered_at: "2026-07-11T05:39:10Z"
evaluated_by: "mistral-small-latest"
---

## Summary
codex-sessions-manager is a local audit and cleanup tool for Codex sessions, designed to inspect, verify, and safely delete residual files and database records left behind by Codex Desktop's built-in archive/delete operations. It supports CLI, MCP server, and Skill integration for AI agents.

## Key Features
- Safe session deletion with rollback and recovery via trash mechanism
- Multi-surface cleanup (files, JSONL, SQLite, global state) with post-delete verification
- MCP server and Skill integration for AI agent orchestration
- Family/session relationship analysis (parent/child, subagents, forks/sides)
- Root residue scanning and batch preview for orphaned files

## Why It Matters for RAG Builders
It ensures complete local cleanup of Codex sessions, preventing residual data leaks and enabling AI agents to manage session history safely and efficiently.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CLI
Automated review identified **CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSONL
Automated review identified **JSONL** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Zstandard (ZST) compression
Automated review identified **Zstandard (ZST) compression** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
