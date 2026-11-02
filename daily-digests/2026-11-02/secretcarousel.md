---
title: "jyswee/secretcarousel"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Node.js", "TypeScript", "AES-256-GCM", "MCP (Model Context Protocol)", "Stripe (for payments)", "REST APIs", "CLI", "Zero-Knowledge Encryption"]
quality_score: 8
rag_relevance: 9
deployment_complexity: "Medium"
tags: ["secret management", "agent security", "zero-knowledge", "credential handoff", "audit logging"]
source: "https://github.com/jyswee/secretcarousel"
stars: 0
language: "None"
last_updated: "2026-07-20T09:48:31Z"
discovered_at: "2026-07-20T09:59:45Z"
evaluated_by: "mistral-small-latest"
---

## Summary
SecretCarousel is an agent-first secret vault designed for coding agents to securely store, rotate, and share credentials without exposing plain-text values. It enables autonomous secret management with zero-knowledge encryption, one-time claim tokens for handoffs, and audit logging.

## Key Features
- Zero-knowledge encryption (client-side) with AES-256-GCM for secrets at rest
- One-time, scoped, expiring claim tokens for secure secret handoffs between agents or tenants
- Autonomous secret rotation with scheduled alerts and audit trails
- MCP server integration for seamless agent tooling (Claude Code, Cursor, etc.)
- Multi-environment support with `.env` export and promotion capabilities

## Why It Matters for RAG Builders
It eliminates the risk of credential leaks by ensuring secrets are never exposed as plain text, even during handoffs, while providing autonomous management for AI agents.

## Tech Stack Deep Dive
### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### AES-256-GCM
Automated review identified **AES-256-GCM** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Stripe (for payments)
Automated review identified **Stripe (for payments)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### REST APIs
Automated review identified **REST APIs** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CLI
Automated review identified **CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Zero-Knowledge Encryption
Automated review identified **Zero-Knowledge Encryption** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
