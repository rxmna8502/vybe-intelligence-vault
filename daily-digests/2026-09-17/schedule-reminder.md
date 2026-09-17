---
title: "DaizeDong/schedule-reminder"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Python", "SQLite", "Discord API", "CLI/JSON API", "Windows Task Scheduler", "Pytest"]
quality_score: 9
rag_relevance: 7
deployment_complexity: "Medium"
tags: ["task management", "reminder system", "state machine", "persistent storage", "Discord integration"]
source: "https://github.com/DaizeDong/schedule-reminder"
stars: 0
language: "Python"
last_updated: "2026-07-16T08:06:22Z"
discovered_at: "2026-07-16T08:10:03Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A persistent, crash-safe SQLite-based schedule and reminder system that tracks todos, events, and progress with a state machine. It provides a stable CLI/JSON API for other skills to interact with and fires due reminders via Discord.

## Key Features
- Crash-safe SQLite storage with WAL mode for concurrency and durability
- Stable CLI/JSON API with versioned contract (api_version 1.0.0) for downstream skills
- State machine for tasks (pending/doing/done/blocked/cancelled) with progress tracking
- Idempotent writes, at-least-once delivery, and unknown field preservation
- Due reminder dispatch via Discord with missed-fire catch-up on next run

## Why It Matters for RAG Builders
It provides a reliable, contract-first foundation for other AI skills to persistently track and manage tasks, events, and progress with built-in reminder capabilities.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Discord API
Automated review identified **Discord API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CLI/JSON API
Automated review identified **CLI/JSON API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Windows Task Scheduler
Automated review identified **Windows Task Scheduler** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Pytest
Automated review identified **Pytest** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
