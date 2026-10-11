---
title: "chriswu727/agent-duet"
content_type: "repo"
engine: "v2"
category: "Orchestrator"
tech_stack: ["Electron", "Node.js", "JavaScript", "TypeScript", "Git", "Codex CLI", "Claude Code", "MCP (Model Context Protocol)", "pnpm"]
quality_score: 9
rag_relevance: 7
deployment_complexity: "Medium"
tags: ["AI agent collaboration", "code review automation", "local development", "subscription-based AI", "safety-bound workflows"]
source: "https://github.com/chriswu727/agent-duet"
stars: 0
language: "JavaScript"
last_updated: "2026-07-14T21:52:38Z"
discovered_at: "2026-07-14T21:56:25Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Duet is a desktop application that orchestrates a bounded collaboration loop between OpenAI's Codex (as the implementer) and Anthropic's Claude Code (as the reviewer) for AI-driven code changes. It ensures finite, inspectable, and asymmetric workflows with strict safety boundaries and credential isolation.

## Key Features
- Bounded collaboration loop with finite rounds and time limits to prevent unbounded agent debates
- Strict role separation: Codex as the sole writer, Claude Code as the read-only reviewer
- Clean Git tree enforcement and credential isolation to prevent API key exposure
- Compact handoffs between agents with capped findings and diff summaries
- Desktop-hardened Electron app with process cleanup, sandboxing, and fail-closed review policies

## Why It Matters for RAG Builders
It provides a structured, safe, and finite way to leverage dual AI agents for code changes while minimizing subscription waste and ensuring verifiable outcomes.

## Tech Stack Deep Dive
### Electron
Automated review identified **Electron** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JavaScript
Automated review identified **JavaScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Git
Automated review identified **Git** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Codex CLI
Automated review identified **Codex CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Claude Code
Automated review identified **Claude Code** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### pnpm
Automated review identified **pnpm** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
