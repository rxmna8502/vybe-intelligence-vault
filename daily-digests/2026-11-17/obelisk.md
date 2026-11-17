---
title: "tommy0103/obelisk"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["TypeScript", "SQLite", "Node.js", "Electron", "Vue.js", "FTS5 (Full-Text Search)", "better-sqlite3", "electron-vite"]
quality_score: 9
rag_relevance: 9
deployment_complexity: "Medium"
tags: ["session indexing", "agent memory", "SQLite database", "multi-provider support", "developer tooling"]
source: "https://github.com/tommy0103/obelisk"
stars: 284
language: "JavaScript"
last_updated: "2026-08-03T13:38:23Z"
discovered_at: "2026-08-03T13:42:16Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Obelisk is a dual-mode system that indexes past AI coding sessions (Claude Code, Codex, Kimi Code) into a unified local SQLite database, enabling both agent-driven retrieval and human browsing via an Electron app. It provides structured query APIs for agents and a visual interface for analyzing session history, tool calls, and activity metrics.

## Key Features
- Unified SQLite index for Claude Code, Codex, and Kimi Code sessions with live file watching
- Agent-first retrieval via CLI with JavaScript query API (search, context, sql, structured helpers)
- Human-facing Electron app for browsing sessions, memories, activity heatmaps, and generating recap cards
- Memory layer for agent-proposed durable conclusions linked to source sessions
- Multi-provider adapter system (Claude, Codex, Kimi) with provider-agnostic transcript projection

## Why It Matters for RAG Builders
Obelisk provides a critical local evidence layer for AI agents to query their own session history, enabling self-improvement and context-aware decision-making without relying on external services.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Electron
Automated review identified **Electron** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Vue.js
Automated review identified **Vue.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FTS5 (Full-Text Search)
Automated review identified **FTS5 (Full-Text Search)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### better-sqlite3
Automated review identified **better-sqlite3** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### electron-vite
Automated review identified **electron-vite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
