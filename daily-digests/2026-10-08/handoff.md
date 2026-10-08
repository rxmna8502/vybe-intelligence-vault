---
title: "Xsxdot/handoff"
content_type: "repo"
engine: "v2"
category: "Orchestrator"
tech_stack: ["Go", "SQLite", "WebSocket", "CLI", "Git"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Medium"
tags: ["AI collaboration", "task orchestration", "remote execution", "code review", "agent framework"]
source: "https://github.com/Xsxdot/handoff"
stars: 19
language: "Go"
last_updated: "2026-09-04T02:02:56Z"
discovered_at: "2026-09-04T02:14:50Z"
evaluated_by: "mistral-small-latest"
---

## Summary
handoff is a CLI tool enabling coordinator-executor collaboration between AI agents (e.g., Claude Code, opencode, grok, codex) for task execution and review. It separates execution from review, persists state locally, and supports remote compute via direct WebSocket connections.

## Key Features
- Separates execution from review with a permission gate system
- Persists state locally (SQLite) for resilience across disconnections
- Supports remote compute via direct WebSocket connections
- No central server required; peer-to-peer architecture
- Battle-tested workflow for AI-driven development

## Why It Matters for RAG Builders
It enables safe, auditable AI agent collaboration by separating execution from review and persisting state, critical for RAG builders managing multi-agent workflows.

## Tech Stack Deep Dive
### Go
Automated review identified **Go** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### WebSocket
Automated review identified **WebSocket** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CLI
Automated review identified **CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Git
Automated review identified **Git** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
