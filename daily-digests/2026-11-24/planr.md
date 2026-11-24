---
title: "instructa/planr"
content_type: "repo"
engine: "v2"
category: "Orchestrator"
tech_stack: ["Rust", "SQLite", "Markdown", "CLI", "MCP (Model Context Protocol)", "TypeScript", "Node.js"]
quality_score: 9
rag_relevance: 9
deployment_complexity: "Medium"
tags: ["task orchestration", "agent coordination", "dependency graph", "evidence-based verification", "local-first"]
source: "https://github.com/instructa/planr"
stars: 43
language: "Rust"
last_updated: "2026-07-18T07:44:51Z"
discovered_at: "2026-07-18T07:47:11Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Planr is a local-first planning and execution coordination tool for coding agents that transforms chaotic agent workflows into a verified task graph. It enables agents like Codex, Claude Code, and Cursor to collaborate safely on structured work with dependency-aware planning, atomic task claims, and evidence-backed verification.

## Key Features
- Dependency-aware task graph modeling with atomic task claims to prevent race conditions
- Evidence-backed verification requiring logs, tests, or commands for task closure
- Cross-agent compatibility via CLI, MCP, and plugin integrations (Codex, Claude Code, Cursor)
- State persistence across sessions with Markdown plans and SQLite-backed task graphs
- Automated recovery and sweep tools for stale tasks, timeouts, and retries

## Why It Matters for RAG Builders
Planr provides a structured, dependency-aware framework for coordinating multiple AI agents and humans on complex tasks, ensuring safe parallel execution and verifiable outcomes essential for reliable RAG and AI-driven workflows.

## Tech Stack Deep Dive
### Rust
Automated review identified **Rust** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Markdown
Automated review identified **Markdown** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CLI
Automated review identified **CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
