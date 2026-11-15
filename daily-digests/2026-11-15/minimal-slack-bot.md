---
title: "ratacat/minimal-slack-bot"
content_type: "repo"
engine: "v2"
category: "Agent Framework"
tech_stack: ["TypeScript", "Bun", "Claude Agent SDK", "Slack API", "Socket Mode", "SQLite", "pm2", "Anthropic API"]
quality_score: 9
rag_relevance: 7
deployment_complexity: "Low"
tags: ["Slack integration", "self-hosted AI agent", "Claude SDK", "code editing", "approval workflows"]
source: "https://github.com/ratacat/minimal-slack-bot"
stars: 0
language: "TypeScript"
last_updated: "2026-07-14T22:54:53Z"
discovered_at: "2026-07-14T22:55:59Z"
evaluated_by: "mistral-small-latest"
---

## Summary
minimal-slack-bot is a lightweight, self-hosted AI agent for Slack built on the Claude Agent SDK. It operates as a single Bun process on your local machine, connecting to Slack via Socket Mode without requiring a public URL or server deployment. The bot enables real-time repository access, code editing, and command execution with Slack-based approval workflows.

## Key Features
- Single-process deployment with Bun and pm2, no cloud dependencies
- Channel and thread-scoped Claude sessions with durable memory via SQLite
- Real repository access with permission gating and Bash safety hooks
- Slack-based approval workflows for file edits and command execution
- Support for multiple Anthropic-compatible providers and model aliases

## Why It Matters for RAG Builders
It provides a minimal, auditable self-hosted AI agent framework for Slack that integrates directly with local repositories and enforces permission controls, ideal for teams prioritizing privacy and control over cloud-based solutions.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Bun
Automated review identified **Bun** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Claude Agent SDK
Automated review identified **Claude Agent SDK** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Slack API
Automated review identified **Slack API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Socket Mode
Automated review identified **Socket Mode** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### pm2
Automated review identified **pm2** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Anthropic API
Automated review identified **Anthropic API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
