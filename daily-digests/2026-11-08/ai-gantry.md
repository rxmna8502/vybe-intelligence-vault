---
title: "shotah/ai-gantry"
content_type: "repo"
engine: "v2"
category: "Agent Framework"
tech_stack: ["Go", "Distroless", "SQLite", "MCP (Model Context Protocol)", "OpenAI-compatible LLM APIs", "Telegram/Discord/Slack SDKs"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Medium"
tags: ["personal agents", "MCP tools", "static binary", "outbound-only chat", "self-hosted"]
source: "https://github.com/shotah/ai-gantry"
stars: 0
language: "Go"
last_updated: "2026-08-04T04:00:04Z"
discovered_at: "2026-08-04T04:15:27Z"
evaluated_by: "mistral-small-latest"
---

## Summary
ai-gantry is a minimalist, static Go binary that acts as a lightweight runtime for personal AI agents, enabling outbound-only chat via platforms like Telegram, Discord, or Slack. It focuses on simplicity, security, and portability by avoiding dashboards, config UIs, or open ports, while leveraging MCP tools for extensibility.

## Key Features
- Single static Go binary with no external dependencies beyond MCP tools
- Outbound-only chat via Telegram, Discord, or Slack with no open ports
- SQLite-based memory for structured, inspectable data storage
- MCP tool integration for extensibility without built-in tool implementations
- Minimalist design focused on simplicity, portability, and security

## Why It Matters for RAG Builders
It provides a lightweight, secure, and portable runtime for personal AI agents that prioritizes simplicity and outbound-only communication, making it ideal for self-hosters and local LLM operators.

## Tech Stack Deep Dive
### Go
Automated review identified **Go** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Distroless
Automated review identified **Distroless** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenAI-compatible LLM APIs
Automated review identified **OpenAI-compatible LLM APIs** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Telegram/Discord/Slack SDKs
Automated review identified **Telegram/Discord/Slack SDKs** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
