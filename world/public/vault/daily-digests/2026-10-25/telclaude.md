---
title: "avivsinai/telclaude"
content_type: "repo"
engine: "v2"
category: "Orchestrator"
tech_stack: ["TypeScript", "Node.js", "Docker", "Telegram Bot API", "Claude Code", "Codex CLI", "MCP (Model Context Protocol)", "TOTP (Time-based One-Time Password)", "Octokit (GitHub API)", "SQLite (for memory storage)"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "High"
tags: ["secure agent orchestration", "LLM pre-screening", "Telegram integration", "credential isolation", "tiered permissions"]
source: "https://github.com/avivsinai/telclaude"
stars: 6
language: "TypeScript"
last_updated: "2026-07-18T09:19:39Z"
discovered_at: "2026-07-18T09:23:44Z"
evaluated_by: "mistral-small-latest"
---

## Summary
telclaude is a secure, isolation-first bridge between Telegram and AI agents (Claude Code, Codex) that enforces tiered permissions, LLM pre-screening, and human approvals. It ensures secure credential handling, runtime isolation, and audit logging for operator workflows.

## Key Features
- Mandatory isolation boundary with Docker firewall enforcement for all LLM/persona execution
- Tiered permission system (READ_ONLY, WRITE_LOCAL, SOCIAL, FULL_ACCESS) with human approvals for high-risk actions
- Credential vault with sidecar daemon for secure API key injection and redaction
- Relay-authoritative memory with semantic, episodic, and compiled working-set caches
- Hard defaults including secret redaction, rate limits, audit logs, and fail-closed chat allowlists

## Why It Matters for RAG Builders
It provides a critical security layer for RAG/AI stacks by enforcing strict isolation, permission tiers, and credential management in agent workflows.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Telegram Bot API
Automated review identified **Telegram Bot API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Claude Code
Automated review identified **Claude Code** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Codex CLI
Automated review identified **Codex CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### TOTP (Time-based One-Time Password)
Automated review identified **TOTP (Time-based One-Time Password)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Octokit (GitHub API)
Automated review identified **Octokit (GitHub API)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite (for memory storage)
Automated review identified **SQLite (for memory storage)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
