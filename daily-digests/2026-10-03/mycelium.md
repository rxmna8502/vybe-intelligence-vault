---
title: "yoda-digital/mycelium"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["TypeScript", "Bun runtime", "libsodium (XSalsa20-Poly1305, Ed25519)", "WebSocket", "Model Context Protocol (MCP)", "Zod", "Ed25519", "Curve25519"]
quality_score: 9
rag_relevance: 7
deployment_complexity: "Medium"
tags: ["end-to-end encryption", "zero-trust messaging", "perfect forward secrecy", "Claude Code integration", "secure relay"]
source: "https://github.com/yoda-digital/mycelium"
stars: 0
language: "TypeScript"
last_updated: "2026-07-18T09:19:34Z"
discovered_at: "2026-07-18T09:24:01Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Mycelium is a zero-trust, end-to-end encrypted messaging layer designed for secure communication between Claude Code instances. It ensures messages remain unreadable even if the relay is compromised, using ephemeral keys, Ed25519 signatures, and Curve25519 for perfect forward secrecy.

## Key Features
- Zero-trust architecture with no plaintext exposure even if relay is compromised
- Perfect forward secrecy via ephemeral Curve25519 keys per session
- TOFU (Trust-on-First-Use) identity pinning with out-of-band verification
- End-to-end delivery acknowledgements for unicast messages with 30s timeout
- Multi-relay failover support for high availability

## Why It Matters for RAG Builders
Mycelium provides a secure, zero-trust messaging layer critical for protecting sensitive AI workflows and Claude Code integrations from relay-based attacks.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Bun runtime
Automated review identified **Bun runtime** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### libsodium (XSalsa20-Poly1305, Ed25519)
Automated review identified **libsodium (XSalsa20-Poly1305, Ed25519)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### WebSocket
Automated review identified **WebSocket** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Zod
Automated review identified **Zod** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Ed25519
Automated review identified **Ed25519** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Curve25519
Automated review identified **Curve25519** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
