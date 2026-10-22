---
title: "eidetic-works/nucleus-mcp"
content_type: "repo"
engine: "v2"
category: "Orchestrator"
tech_stack: ["Python", "Model Context Protocol (MCP)", "SQLite", "JSON", "Markdown", "CLI", "Telemetry (anonymous, opt-in)"]
quality_score: 9
rag_relevance: 9
deployment_complexity: "Medium"
tags: ["persistent memory", "AI governance", "execution verification", "MCP server", "compliance tracking"]
source: "https://github.com/eidetic-works/nucleus-mcp"
stars: 4
language: "Python"
last_updated: "2026-07-21T03:55:47Z"
discovered_at: "2026-07-21T04:15:10Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A portable decision log and governance tool for AI agents, providing persistent memory, execution verification, and compliance tracking via an MCP server. It enables AI tools to remember decisions across sessions and includes a local depth tracker for focus management.

## Key Features
- Portable `.brain` folder for storing AI decisions and context in plain files (JSON/Markdown), enabling cross-session memory without vendor lock-in.
- Three-tier reliability system (GROUND, ALIGN, COMPOUND) for verifying AI outputs, recording corrections, and compounding learning over time.
- 114 MCP tools covering memory management, task orchestration, governance, and compliance checks for regulatory frameworks (EU DORA, MAS TRM, SOC2).
- Local-first architecture with optional remote relay for multi-host AI fleet synchronization, ensuring data privacy and control.
- Built-in depth tracker (`nucleus-rabbithole`) for focus management, context-switch detection, and weekly reviews via SQLite.

## Why It Matters for RAG Builders
It provides a critical layer for RAG builders by enabling persistent, verifiable memory and governance across AI sessions, reducing context loss and improving reliability.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSON
Automated review identified **JSON** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Markdown
Automated review identified **Markdown** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CLI
Automated review identified **CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Telemetry (anonymous, opt-in)
Automated review identified **Telemetry (anonymous, opt-in)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
