---
title: "20000419/fauxnix"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["TypeScript", "Node.js", "PowerShell", "Bash", "MCP (Model Context Protocol)", "CI/CD (GitHub Actions)"]
quality_score: 9
rag_relevance: 9
deployment_complexity: "Low"
tags: ["bash translation", "Windows compatibility", "AI agent tools", "MCP server", "deterministic execution"]
source: "https://github.com/20000419/fauxnix"
stars: 20
language: "TypeScript"
last_updated: "2026-09-03T02:16:42Z"
discovered_at: "2026-09-03T02:22:53Z"
evaluated_by: "mistral-small-latest"
---

## Summary
fauxnix is a deterministic bash-to-PowerShell translation layer for Windows, enabling AI agents to execute Linux-style commands natively without VMs or WSL. It translates commands, handles UTF-8/GBK encoding, and returns GNU-style output with bash-style errors and exit codes.

## Key Features
- Deterministic bash→PowerShell translation with zero LLM calls at runtime
- GNU-style output, bash-style errors, and exit codes for AI agent compatibility
- UTF-8/GBK encoding handling and automatic codepage conversion
- MCP stdio server for seamless integration with AI agent harnesses (Claude, Codex, OpenCode, etc.)
- Supports ~105 commands with CommandSpec for strict GNU compatibility and loud failure on unsupported features

## Why It Matters for RAG Builders
It bridges the gap between AI agent training environments (macOS/Linux) and Windows execution, enabling agents to run bash commands natively on Windows without VMs or WSL, reducing errors and improving performance.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PowerShell
Automated review identified **PowerShell** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Bash
Automated review identified **Bash** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CI/CD (GitHub Actions)
Automated review identified **CI/CD (GitHub Actions)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
