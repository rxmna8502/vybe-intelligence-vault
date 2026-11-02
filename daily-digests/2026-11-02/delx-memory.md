---
title: "davidmosiah/delx-memory"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["TypeScript", "SQLite", "MCP (Model Context Protocol)", "Node.js", "FTS5 (Full-Text Search)", "JWT validation", "CLI tools"]
quality_score: 9
rag_relevance: 10
deployment_complexity: "Low"
tags: ["persistent memory", "MCP server", "SQLite", "context continuity", "privacy-focused"]
source: "https://github.com/davidmosiah/delx-memory"
stars: 0
language: "TypeScript"
last_updated: "2026-08-08T12:43:28Z"
discovered_at: "2026-08-08T12:47:18Z"
evaluated_by: "mistral-small-latest"
---

## Summary
delx-memory is a local-first persistent memory MCP server that provides a shared SQLite-based key/value store for AI agents. It enables cross-session and cross-tool context continuity by exposing a secure, secret-blocking memory layer that any MCP-speaking client can read or write.

## Key Features
- Shared SQLite store for cross-agent context persistence
- Secret-blocking to prevent accidental credential storage
- Full-text search (FTS5) with BM25 ranking and stemming
- TTL support for lazy expiry of ephemeral data
- Explicit user intent requirement for mutations to prevent unauthorized writes

## Why It Matters for RAG Builders
delx-memory enables seamless context continuity across AI agents and sessions, eliminating the need to repeatedly provide the same context and ensuring privacy by blocking sensitive data storage.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FTS5 (Full-Text Search)
Automated review identified **FTS5 (Full-Text Search)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JWT validation
Automated review identified **JWT validation** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CLI tools
Automated review identified **CLI tools** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
