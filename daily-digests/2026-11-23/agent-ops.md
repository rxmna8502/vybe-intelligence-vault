---
title: "tddh/agent-ops"
content_type: "repo"
engine: "v2"
category: "Orchestrator"
tech_stack: ["Rust", "QUIC", "MCP (Model Context Protocol)", "rmux (terminal multiplexer)", "SQLite", "YAML", "TLS/SSL"]
quality_score: 9
rag_relevance: 10
deployment_complexity: "Medium"
tags: ["terminal orchestration", "AI agent infrastructure", "audit logging", "multi-host management", "secure remote access"]
source: "https://github.com/tddh/agent-ops"
stars: 1
language: "Rust"
last_updated: "2026-07-15T02:01:00Z"
discovered_at: "2026-07-15T02:12:20Z"
evaluated_by: "mistral-small-latest"
---

## Summary
agent-ops provides secure infrastructure for AI agents and human operators to manage Linux hosts via persistent terminal sessions, full-chain audit logging, and MCP-native interfaces. It bridges AI agents and humans with a dual-channel architecture (MCP for AI, CLI PTY passthrough for humans) while ensuring reliability, auditability, and security.

## Key Features
- Persistent terminal sessions via rmux for reliable long-running tasks and uninterrupted operations
- Dual-channel architecture: MCP interface for AI agents and CLI PTY passthrough for human operators
- Full-chain audit logging with SQLite for compliance and traceability of all operations
- Multi-host orchestration with group/tag filtering and broadcast operations for scalable management
- Secure deployment with Bridge proxy, token authentication, TLS encryption, and exec safety checks to prevent command injection

## Why It Matters for RAG Builders
It bridges the critical gap between AI agent prototypes and production-ready infrastructure by providing persistent, auditable, and secure terminal access for both AI and human operators, enabling reliable and compliant AI-driven operations on Linux hosts.

## Tech Stack Deep Dive
### Rust
Automated review identified **Rust** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### QUIC
Automated review identified **QUIC** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### rmux (terminal multiplexer)
Automated review identified **rmux (terminal multiplexer)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### YAML
Automated review identified **YAML** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### TLS/SSL
Automated review identified **TLS/SSL** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
