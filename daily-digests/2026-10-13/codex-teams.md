---
title: "GekkoQuest/codex-teams"
content_type: "repo"
engine: "v2"
category: "Orchestrator"
tech_stack: ["JavaScript", "Node.js", "MCP (Model Context Protocol)", "OpenAI Codex", "TypeScript (implied by modern JS practices)"]
quality_score: 8
rag_relevance: 9
deployment_complexity: "Medium"
tags: ["multi-agent orchestration", "Codex plugin", "task coordination", "MCP server", "agent teams"]
source: "https://github.com/GekkoQuest/codex-teams"
stars: 0
language: "JavaScript"
last_updated: "2026-07-20T19:49:45Z"
discovered_at: "2026-07-20T19:53:40Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Codex Teams is an open-source multi-agent orchestration plugin for OpenAI Codex that enables structured team coordination among native Codex subagents. It provides shared task management, direct mailbox communication, heartbeat monitoring, and recovery mechanisms inspired by Claude Code Agent Teams.

## Key Features
- Fixed-lead phase management with root-session identity and role-specific model profiles
- Shared work DAGs with dynamic dependencies, atomic claims, and revision-bound release gates
- Two-stage recovery system for handling missed heartbeats and idle agents
- Direct coordination via typed/prioritized mailboxes with retry deduplication and state tracking
- Live observation and post-run reporting with public activity excerpts and terminal dashboards

## Why It Matters for RAG Builders
It provides essential multi-agent coordination capabilities for RAG builders using Codex, enabling structured teamwork, task dependencies, and recovery mechanisms that enhance reliability and scalability of AI-driven workflows.

## Tech Stack Deep Dive
### JavaScript
Automated review identified **JavaScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenAI Codex
Automated review identified **OpenAI Codex** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### TypeScript (implied by modern JS practices)
Automated review identified **TypeScript (implied by modern JS practices)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
