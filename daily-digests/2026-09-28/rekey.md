---
title: "majiayu000/rekey"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Rust", "SQLite", "Argon2id", "AES-256-GCM", "Unix Domain Sockets", "TLS"]
quality_score: 8
rag_relevance: 9
deployment_complexity: "Medium"
tags: ["credential management", "agent security", "capability tokens", "local vault", "AI agent infrastructure"]
source: "https://github.com/majiayu000/rekey"
stars: 0
language: "Rust"
last_updated: "2026-09-02T19:07:11Z"
discovered_at: "2026-09-02T19:12:47Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Rekey is a local credential authority for AI agents that enables secure execution of pre-registered actions through short-lived capability tokens, ensuring real credentials are never exposed. It uses an encrypted SQLite vault managed by a broker process, communicating exclusively via permission-separated Unix sockets.

## Key Features
- Encrypted SQLite vault for secure credential storage with envelope encryption (AES-256-GCM)
- Short-lived capability tokens for agent actions, preventing exposure of real credentials
- Permission-separated Unix sockets for secure inter-process communication
- Default-deny typed policy snapshots for strict access control
- Local audit logging with redacted metadata for operational visibility

## Why It Matters for RAG Builders
Rekey ensures AI agents never handle real credentials, reducing the risk of credential leaks and enabling secure, controlled execution of pre-approved actions.

## Tech Stack Deep Dive
### Rust
Automated review identified **Rust** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Argon2id
Automated review identified **Argon2id** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### AES-256-GCM
Automated review identified **AES-256-GCM** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Unix Domain Sockets
Automated review identified **Unix Domain Sockets** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### TLS
Automated review identified **TLS** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
