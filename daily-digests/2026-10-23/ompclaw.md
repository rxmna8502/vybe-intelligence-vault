---
title: "wolfiesch/ompclaw"
content_type: "repo"
engine: "v2"
category: "Orchestrator"
tech_stack: ["Bun", "TypeScript", "Node.js", "SQLite", "Telegram Bot API", "WebSocket", "RPC", "CI/CD (GitHub Actions)"]
quality_score: 8
rag_relevance: 7
deployment_complexity: "Medium"
tags: ["remote access", "OMP gateway", "Telegram integration", "WebSocket authentication", "session management"]
source: "https://github.com/wolfiesch/ompclaw"
stars: 1
language: "TypeScript"
last_updated: "2026-09-01T09:06:29Z"
discovered_at: "2026-09-01T09:07:26Z"
evaluated_by: "mistral-small-latest"
---

## Summary
OmpClaw is a Bun-based package that provides authenticated remote access to persistent Oh My Pi (OMP) sessions via Telegram and WebSocket transports. It acts as a secure gateway, isolating credentials and managing state for operators needing remote OMP workspace control.

## Key Features
- Single RPC process managing persistent OMP sessions with serialized state
- Dual transport support: Telegram long polling and authenticated WebSocket
- SQLite-backed state management for principals, sessions, and bindings
- Transactional self-update with automatic rollback and post-update activation
- Optional per-topic OMP sessions and unattended automation with cron scheduling

## Why It Matters for RAG Builders
It provides a secure, credential-isolated gateway for remote operators to interact with persistent OMP sessions without exposing transport credentials or direct process access.

## Tech Stack Deep Dive
### Bun
Automated review identified **Bun** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Telegram Bot API
Automated review identified **Telegram Bot API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### WebSocket
Automated review identified **WebSocket** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### RPC
Automated review identified **RPC** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CI/CD (GitHub Actions)
Automated review identified **CI/CD (GitHub Actions)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
