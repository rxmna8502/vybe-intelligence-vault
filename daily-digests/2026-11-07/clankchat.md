---
title: "simozampa/clankchat"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["TypeScript", "Node.js", "SQLite", "Git", "CLI", "MCP (Model Context Protocol)"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Low"
tags: ["agent communication", "Git integration", "local messaging", "coding agents", "durable state"]
source: "https://github.com/simozampa/clankchat"
stars: 1
language: "TypeScript"
last_updated: "2026-08-08T22:22:03Z"
discovered_at: "2026-08-08T22:32:01Z"
evaluated_by: "mistral-small-latest"
---

## Summary
clankchat is a local communication layer for coding agents within a Git repository, enabling direct messaging, broadcasts, and request/reply interactions between agents like Claude Code and OpenCode without human relay. It uses SQLite for durable state stored in Git's common directory, ensuring shared conversations across linked worktrees.

## Key Features
- Durable message storage in SQLite under Git's common directory for shared state across worktrees
- Direct messaging, broadcasts, and request/reply interactions between agents (Claude Code, OpenCode)
- Human-readable watch mode for monitoring agent conversations in real-time
- Pinned broadcasts for persistent instructions to all agents in a repository
- Seamless integration with MCP tools for agent-driven interactions

## Why It Matters for RAG Builders
It enables seamless, durable, and context-aware communication between AI coding agents within a Git repository, reducing coordination overhead and improving collaborative workflows.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Git
Automated review identified **Git** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CLI
Automated review identified **CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
