---
title: "shreeve1/symphony"
content_type: "repo"
engine: "v2"
category: "Orchestrator"
tech_stack: ["Python", "SQLite", "Git", "tmux", "Alembic", "WebSockets", "Docker", "FastAPI (implied by web UI)"]
quality_score: 8
rag_relevance: 9
deployment_complexity: "High"
tags: ["AI agent orchestration", "self-hosted", "infrastructure automation", "git worktrees", "human-in-the-loop"]
source: "https://github.com/shreeve1/symphony"
stars: 0
language: "Python"
last_updated: "2026-07-12T20:37:54Z"
discovered_at: "2026-07-12T20:42:47Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Symphony is a self-hosted AI-agent dispatcher that converts issues from a tracker (Podium) into completed work via pluggable coding agents (Pi or Claude) in isolated git worktrees. It automates infrastructure remediation and task execution with human review gates and structured verdicts.

## Key Features
- Tracker-driven dispatch with Podium integration for issue polling and workflow templating
- Pluggable agent support (Pi or Claude) with common adapter seam for multi-agent execution
- Isolated git worktrees for safe, concurrent task execution with auto-merge and reconciliation
- Structured verdict system (done/review/blocked) for deterministic follow-up actions
- Durable state management with SQLite, Alembic migrations, and recovery mechanisms for orphaned runs

## Why It Matters for RAG Builders
Symphony provides a critical orchestration layer for RAG builders by automating agent-driven task completion with human oversight and structured outputs.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Git
Automated review identified **Git** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### tmux
Automated review identified **tmux** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Alembic
Automated review identified **Alembic** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### WebSockets
Automated review identified **WebSockets** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastAPI (implied by web UI)
Automated review identified **FastAPI (implied by web UI)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
