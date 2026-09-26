---
title: "mex-memory/mex"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["TypeScript", "Node.js", "CLI", "MCP (Model Context Protocol)", "YAML", "Markdown", "JSON"]
quality_score: 9
rag_relevance: 9
deployment_complexity: "Medium"
tags: ["AI memory", "context management", "drift detection", "agent scaffolding", "MCP server"]
source: "https://github.com/mex-memory/mex"
stars: 1157
language: "TypeScript"
last_updated: "2026-07-14T17:58:46Z"
discovered_at: "2026-07-14T18:02:03Z"
evaluated_by: "mistral-small-latest"
---

## Summary
mex is a CLI tool and MCP server that provides persistent project memory for AI coding agents, enabling structured context retention between sessions. It creates and maintains a scaffold of markdown files and automates drift detection to keep agent instructions aligned with the codebase.

## Key Features
- Structured markdown scaffold for persistent agent memory (e.g., AGENTS.md, ROUTER.md, context/patterns/)
- Drift detection with 11 automated checkers to validate scaffold against the codebase
- CLI commands for setup, sync, logging, and health checks (e.g., mex setup, mex check, mex sync)
- MCP server integration for native tool calls in AI agents (e.g., mex_check, mex_log, mex_read_file)
- Cross-platform support with Windows compatibility and global/local installation options

## Why It Matters for RAG Builders
It eliminates context window bloat and token waste for AI agents by maintaining persistent, structured project memory and automated drift detection.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CLI
Automated review identified **CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### YAML
Automated review identified **YAML** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Markdown
Automated review identified **Markdown** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSON
Automated review identified **JSON** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
