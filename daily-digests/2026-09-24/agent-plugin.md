---
title: "smoke-signal-app/agent-plugin"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["TypeScript", "Node.js", "Webhooks", "MCP (Model Context Protocol)", "Shell Scripting"]
quality_score: 8
rag_relevance: 7
deployment_complexity: "Medium"
tags: ["AI agent notifications", "push notifications", "presence detection", "Claude Code plugin", "Codex plugin"]
source: "https://github.com/smoke-signal-app/agent-plugin"
stars: 0
language: "Shell"
last_updated: "2026-08-02T14:54:32Z"
discovered_at: "2026-08-02T15:02:57Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A plugin for AI coding agents like Claude Code and Codex that sends push notifications to your phone when the agent needs your attention, such as for permission prompts, questions, or long-running tasks. It includes presence detection and configurable grace windows to minimize unnecessary alerts.

## Key Features
- Real-time push notifications to mobile devices for agent prompts or long-running tasks
- Presence detection (macOS, Linux, Windows) to suppress alerts when actively using the machine
- Configurable grace windows and rate limits to avoid alert fatigue
- MCP server integration for `notify`, `ask`, `await_reply`, and `cancel_ask` functionalities
- Supports both Claude Code and Codex agents with dedicated setup commands

## Why It Matters for RAG Builders
It bridges the gap between AI agents and human oversight by ensuring critical agent interactions are never missed, even when away from the keyboard.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Webhooks
Automated review identified **Webhooks** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Shell Scripting
Automated review identified **Shell Scripting** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
