---
title: "davidvornholt/mail-mcp"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["TypeScript", "Bun", "Effect", "IMAP", "MCP (Model Context Protocol)", "CLI", "OS Keyring (Secret Service API)"]
quality_score: 8
rag_relevance: 6
deployment_complexity: "Medium"
tags: ["IMAP", "MCP server", "draft management", "Thunderbird integration", "CLI tool"]
source: "https://github.com/davidvornholt/mail-mcp"
stars: 1
language: "TypeScript"
last_updated: "2026-07-13T18:34:45Z"
discovered_at: "2026-07-13T18:43:21Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A draft-only IMAP helper for Thunderbird workflows, exposed as an MCP server and CLI tool. It enables searching, reading, and managing drafts with HTML and attachments, but does not send emails—drafts sync into Thunderbird for review and sending.

## Key Features
- MCP server for AI clients (Codex, Claude) to interact with mail via standardized tools
- CLI for manual mail operations (login, search, draft creation)
- Supports HTML drafts with attachments
- Secure secret handling via OS keyring (no plaintext storage)
- Shared Effect core for both MCP server and CLI functionality

## Why It Matters for RAG Builders
It bridges AI workflows with Thunderbird's draft system, enabling secure, review-first email interactions for AI agents without sending emails directly.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Bun
Automated review identified **Bun** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Effect
Automated review identified **Effect** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### IMAP
Automated review identified **IMAP** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CLI
Automated review identified **CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OS Keyring (Secret Service API)
Automated review identified **OS Keyring (Secret Service API)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
