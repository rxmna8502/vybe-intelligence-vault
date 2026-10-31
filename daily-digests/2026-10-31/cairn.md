---
title: "Vellixia/Cairn"
content_type: "repo"
engine: "v2"
category: "Orchestrator"
tech_stack: ["Rust", "SQLite", "PostgreSQL", "Axum", "Next.js", "Docker", "Git", "MCP (Model Context Protocol)"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Medium"
tags: ["agent memory", "context persistence", "AI coding assistants", "local-first", "multi-session sync"]
source: "https://github.com/Vellixia/Cairn"
stars: 0
language: "Rust"
last_updated: "2026-08-09T08:35:05Z"
discovered_at: "2026-08-09T08:45:20Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Cairn provides persistent, project-aware memory for AI coding agents, enabling sessions to resume work without restarting from scratch by capturing structured facts, decisions, and context from previous interactions.

## Key Features
- Project-aware memory that persists across sessions and devices
- Structured fact capture and scoped memory (project, branch, task, session)
- Local-first architecture with optional team sharing via PostgreSQL and web UI
- Privacy-first design with automatic redaction of secrets and no unbounded data capture
- Integration with AI coding agents (e.g., Claude Code) via MCP server and hooks

## Why It Matters for RAG Builders
Cairn eliminates redundant context rebuilding in AI coding sessions by preserving structured memory, significantly improving agent efficiency and continuity for long-running or multi-session tasks.

## Tech Stack Deep Dive
### Rust
Automated review identified **Rust** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PostgreSQL
Automated review identified **PostgreSQL** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Axum
Automated review identified **Axum** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Next.js
Automated review identified **Next.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Git
Automated review identified **Git** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
