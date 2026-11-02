---
title: "richardfcampos/notify-hub"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["TypeScript", "Node.js >= 20", "Fastify", "Redis", "BullMQ", "SQLite", "Docker", "Docker Compose", "MCP (Model Context Protocol)", "HTML/CSS (Admin Panel)"]
quality_score: 9
rag_relevance: 7
deployment_complexity: "Medium"
tags: ["notification gateway", "multi-channel", "self-hosted", "async messaging", "Claude Code integration"]
source: "https://github.com/richardfcampos/notify-hub"
stars: 1
language: "TypeScript"
last_updated: "2026-07-17T05:41:01Z"
discovered_at: "2026-07-17T05:41:56Z"
evaluated_by: "mistral-small-latest"
---

## Summary
notify-hub is a self-hosted, multi-channel notification gateway that asynchronously fans out messages to various channels (e.g., ntfy, Telegram, Slack, email) via a Redis-backed queue. It decouples message sending from delivery, ensuring non-blocking operations and hot-reload configuration updates.

## Key Features
- Token-authenticated API for secure message submission with async processing via Redis/BullMQ queue
- Hot-reload configuration via SQLite (no restarts required for changes)
- Extensible channel adapter system supporting ntfy, Telegram, email, Slack, Discord, WhatsApp, and generic webhooks
- Admin panel for live management of channels, profiles, and test notifications
- MCP server support for integration with AI tools like Claude Code

## Why It Matters for RAG Builders
It provides a critical decoupling layer for AI workflows by enabling reliable, multi-channel notifications without blocking execution, essential for long-running tasks or agent-based systems.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js >= 20
Automated review identified **Node.js >= 20** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Fastify
Automated review identified **Fastify** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Redis
Automated review identified **Redis** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### BullMQ
Automated review identified **BullMQ** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker Compose
Automated review identified **Docker Compose** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HTML/CSS (Admin Panel)
Automated review identified **HTML/CSS (Admin Panel)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
