---
title: "dumbspacecookie/stickies"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["JavaScript", "Node.js", "SQLite", "Model Context Protocol (MCP)", "TypeScript (implied by Node.js ecosystem)", "Git"]
quality_score: 9
rag_relevance: 7
deployment_complexity: "Medium"
tags: ["note-taking", "persistent-memory", "Claude-Code-plugin", "local-first", "project-management"]
source: "https://github.com/dumbspacecookie/stickies"
stars: 0
language: "JavaScript"
last_updated: "2026-07-17T02:44:33Z"
discovered_at: "2026-07-17T02:52:16Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Stickies is a persistent sticky note system for Claude Code that allows users to pin important notes, todos, or decisions which survive session resets and terminal closures. It integrates with local SQLite storage and supports auto-capture, git sync, and a Kanban-style Flow Board for project planning.

## Key Features
- Zero-turn capture of notes via `!!sticky` directives in Claude Code replies, persisting without extra tool calls or tokens.
- Auto-capture and session-start digest with importance-graded injection (P1/P2/P3) for efficient note retrieval.
- Git-backed sync (opt-in) for cross-machine note consistency and conflict-free merging.
- Flow Board Kanban for visualizing project progress derived from `.planning/ROADMAP.md` or `.flow/` snapshots.
- Multi-surface support including terminal, desktop, mobile, and Discord via MCP and CLI tools.

## Why It Matters for RAG Builders
Stickies provides a lightweight, local-first alternative to AI memory systems for developers, enabling persistent, user-controlled note capture and project tracking without cloud dependency or LLM overhead.

## Tech Stack Deep Dive
### JavaScript
Automated review identified **JavaScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### TypeScript (implied by Node.js ecosystem)
Automated review identified **TypeScript (implied by Node.js ecosystem)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Git
Automated review identified **Git** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
