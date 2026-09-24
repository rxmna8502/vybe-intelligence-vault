---
title: "Arsenyrud/antrophic_in_telegram"
content_type: "repo"
engine: "v2"
category: "Agent Framework"
tech_stack: ["TypeScript", "Node.js", "Telegram Bot API", "Claude Code SDK", "grammY (Telegram bot framework)", "systemd", "Bash", "Git"]
quality_score: 9
rag_relevance: 7
deployment_complexity: "High"
tags: ["Claude Code", "self-hosted", "Telegram bot", "autonomous agents", "code execution"]
source: "https://github.com/Arsenyrud/antrophic_in_telegram"
stars: 0
language: "TypeScript"
last_updated: "2026-07-16T20:00:28Z"
discovered_at: "2026-07-16T20:02:24Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A self-hosted Telegram bot that interfaces with Anthropic's Claude Code, enabling autonomous code execution, testing, and reporting via a VPS. Users send tasks in Telegram, and the agent executes them with full autonomy, handling long-running processes and session management.

## Key Features
- Full autonomous agent capabilities (Bash, file edits, git, etc.) with tools matching the Claude Code CLI.
- Named parallel sessions with independent task execution and report forwarding between sessions.
- Long-running tasks (24h+) that survive bot restarts and subscription limits via auto-resume.
- Live progress tracking in a single edited Telegram message with real-time updates.
- CLI-compatible sessions for resuming tasks directly from the server using `claude --resume`.

## Why It Matters for RAG Builders
It enables developers to integrate Anthropic's Claude Code agent into a self-hosted, autonomous workflow via Telegram, ideal for long-running tasks and multi-session collaboration.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Telegram Bot API
Automated review identified **Telegram Bot API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Claude Code SDK
Automated review identified **Claude Code SDK** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### grammY (Telegram bot framework)
Automated review identified **grammY (Telegram bot framework)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### systemd
Automated review identified **systemd** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Bash
Automated review identified **Bash** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Git
Automated review identified **Git** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
