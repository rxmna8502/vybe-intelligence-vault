---
title: "ihorponom/agentpack"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["TypeScript", "Node.js", "MCP (Model Context Protocol)", "CLI", "Git Hooks"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Medium"
tags: ["task continuity", "AI coding agents", "MCP server", "local state management", "agent handoff"]
source: "https://github.com/ihorponom/agentpack"
stars: 17
language: "TypeScript"
last_updated: "2026-08-02T15:01:13Z"
discovered_at: "2026-08-02T15:02:47Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Agentpack provides local-first task continuity for AI coding agents by maintaining a durable task state ledger in the repository. It enables seamless session resumption across different agents or clients without rebuilding context from scratch.

## Key Features
- Local-first task state ledger stored in `.agentpack/` for reviewability and privacy
- MCP server and CLI tools for seamless agent session resumption and state recording
- Task Passport lifecycle with explicit start, park, switch, and finalize states
- Task gate to prevent scope drift and enforce write boundaries
- Zero telemetry, zero network calls, and minimal dependencies for security

## Why It Matters for RAG Builders
Agentpack ensures AI coding agents retain critical task context across sessions, reducing redundant work and improving continuity for long-running or collaborative tasks.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CLI
Automated review identified **CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Git Hooks
Automated review identified **Git Hooks** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
