---
title: "vshulcz/deja-vu"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Go", "SQLite", "MCP (Model Context Protocol)", "JSONL", "CLI", "Bash", "npm"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Low"
tags: ["memory layer", "agent recall", "session search", "secret redaction", "local indexing"]
source: "https://github.com/vshulcz/deja-vu"
stars: 236
language: "Go"
last_updated: "2026-07-16T07:58:26Z"
discovered_at: "2026-07-16T08:10:22Z"
evaluated_by: "mistral-small-latest"
---

## Summary
deja-vu is a zero-dependency memory layer for coding agents that indexes local session logs from tools like Claude Code, Codex, and opencode. It enables fast search, auto-recall, and secure sharing of past debugging sessions while redacting sensitive data.

## Key Features
- Retroactive search across gigabytes of agent session logs in 7-9ms
- Auto-recall MCP tool for agents to reference past solutions without re-debugging
- Secure redaction of API keys, JWTs, and private keys at index time
- Cross-machine sync via append-only JSONL exports/imports or SSH
- Compact session sharing with secrets already scrubbed

## Why It Matters for RAG Builders
It enables AI agents to instantly recall and reuse past debugging sessions without re-implementing solutions, drastically improving productivity and reducing redundant work.

## Tech Stack Deep Dive
### Go
Automated review identified **Go** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSONL
Automated review identified **JSONL** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CLI
Automated review identified **CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Bash
Automated review identified **Bash** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### npm
Automated review identified **npm** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
