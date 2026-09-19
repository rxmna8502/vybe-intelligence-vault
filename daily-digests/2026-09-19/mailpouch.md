---
title: "chandshy/mailpouch"
content_type: "repo"
engine: "v2"
category: "Agent Framework"
tech_stack: ["TypeScript", "Node.js", "MCP SDK", "Proton Bridge", "IMAP/SMTP", "OAuth 2.1", "SQLite (FTS5)", "Rust (napi-rs)", "Vitest", "Tauri tray-icon", "HMAC", "CloudEvents", "SimpleLogin API", "Proton Pass CLI"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Medium"
tags: ["MCP server", "email access", "permission gating", "Proton Mail", "local processing"]
source: "https://github.com/chandshy/mailpouch"
stars: 8
language: "TypeScript"
last_updated: "2026-07-14T16:03:05Z"
discovered_at: "2026-07-14T16:14:20Z"
evaluated_by: "mistral-small-latest"
---

## Summary
mailpouch is an MCP server that provides AI agents with typed, permission-gated, and audit-logged access to private email providers like Proton Mail (via Proton Bridge) and IMAP. It ensures local, secure email handling with human-controlled permissions and no third-party data exposure.

## Key Features
- 86+ structured tools for email management with progressive tiering to control context bloat
- Human-gated permissions and escalation for destructive actions (delete, move, send) with MCP elicitation support
- Local FTS5 full-text search with BM25 ranking for secure, private email queries
- Multi-account support with per-agent OAuth grants, IP pinning, and rate limiting
- Native system tray UI, desktop notifications, and webhook dispatch for real-time updates

## Why It Matters for RAG Builders
It enables secure, private, and permission-controlled AI agent access to encrypted email inboxes without exposing data to third parties or requiring blanket OAuth scopes.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP SDK
Automated review identified **MCP SDK** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Proton Bridge
Automated review identified **Proton Bridge** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### IMAP/SMTP
Automated review identified **IMAP/SMTP** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OAuth 2.1
Automated review identified **OAuth 2.1** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite (FTS5)
Automated review identified **SQLite (FTS5)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Rust (napi-rs)
Automated review identified **Rust (napi-rs)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Vitest
Automated review identified **Vitest** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Tauri tray-icon
Automated review identified **Tauri tray-icon** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HMAC
Automated review identified **HMAC** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CloudEvents
Automated review identified **CloudEvents** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SimpleLogin API
Automated review identified **SimpleLogin API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Proton Pass CLI
Automated review identified **Proton Pass CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
