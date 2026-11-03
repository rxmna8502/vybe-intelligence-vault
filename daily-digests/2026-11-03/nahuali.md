---
title: "Arakiss/nahuali"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Rust", "SurrealDB", "SurrealKV", "Qdrant", "MCP (Model Context Protocol)", "HTTP API", "Ed25519 (cryptographic signing)", "Docker (optional)"]
quality_score: 9
rag_relevance: 10
deployment_complexity: "Medium"
tags: ["memory management", "trust layer", "tamper-evident", "agent memory", "deterministic recall"]
source: "https://github.com/Arakiss/nahuali"
stars: 2
language: "Rust"
last_updated: "2026-07-14T22:53:04Z"
discovered_at: "2026-07-14T22:56:06Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Nahuali is a trust layer for agent memory that provides evidence-backed recall, deterministic trust verdicts, and tamper-evident history management. It ensures agents can verify the safety and reliability of retrieved memories before use.

## Key Features
- Evidence-backed recall with deterministic trust verdicts (certify, advisory, warn, block)
- Append-only ledger with hash chaining and optional cryptographic signing for tamper detection
- Self-inspection for unsupported, stale, or contradictory memories without silent rewrites
- Local-first, source-available architecture with optional remote SurrealDB deployment
- MCP server, CLI, and HTTP API interfaces for integration with AI agents and workflows

## Why It Matters for RAG Builders
Nahuali ensures AI agents can trust retrieved memories by providing verifiable evidence and tamper detection, critical for reliable RAG systems and agentic workflows.

## Tech Stack Deep Dive
### Rust
Automated review identified **Rust** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SurrealDB
Automated review identified **SurrealDB** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SurrealKV
Automated review identified **SurrealKV** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Qdrant
Automated review identified **Qdrant** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HTTP API
Automated review identified **HTTP API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Ed25519 (cryptographic signing)
Automated review identified **Ed25519 (cryptographic signing)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker (optional)
Automated review identified **Docker (optional)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
