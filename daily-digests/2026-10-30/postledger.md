---
title: "shuaige121/postledger"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["TypeScript", "SQLite", "Node.js", "MCP (Model Context Protocol)", "CLI", "Unix tools"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Low"
tags: ["double-entry accounting", "idempotent writes", "tamper-evident ledger", "SQLite-based", "AI agent tooling"]
source: "https://github.com/shuaige121/postledger"
stars: 0
language: "TypeScript"
last_updated: "2026-08-08T01:21:33Z"
discovered_at: "2026-08-08T01:26:15Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Postledger is an idempotent, append-only double-entry ledger system designed for untrusted bookkeepers, including AI agents. It enforces immutability, balance, and tamper-evidence via SQLite triggers and a hash chain, ensuring no accidental or malicious modifications go undetected.

## Key Features
- Idempotent writes with atomic key claiming to prevent duplicate entries
- Immutability enforced by SQLite triggers (no UPDATE/DELETE allowed)
- Hash chain over entries and postings for tamper detection
- Balance enforced via triggers, not application code
- MCP server and Unix CLI for integration with AI agents and automation

## Why It Matters for RAG Builders
It provides a trustless, tamper-evident ledger system essential for AI agents performing financial operations, ensuring no accidental or malicious duplicates or modifications occur.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CLI
Automated review identified **CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Unix tools
Automated review identified **Unix tools** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
