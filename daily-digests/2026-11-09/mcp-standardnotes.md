---
title: "lozit/mcp-standardnotes"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["TypeScript", "Node.js", "Model Context Protocol (MCP)", "libsodium-wrappers-sumo", "Zod", "Argon2id", "XChaCha20-Poly1305 IETF"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Low"
tags: ["MCP server", "end-to-end encryption", "Standard Notes integration", "AI agent access", "local stdio transport"]
source: "https://github.com/lozit/mcp-standardnotes"
stars: 6
language: "TypeScript"
last_updated: "2026-08-09T18:41:16Z"
discovered_at: "2026-08-09T18:43:40Z"
evaluated_by: "mistral-small-latest"
---

## Summary
mcp-standardnotes is an MCP-compatible server that provides secure read/write access to Standard Notes vaults, enabling AI agents like Claude to interact with end-to-end encrypted notes while keeping the master key local. It leverages protocol 004 and libsodium for cryptographic operations.

## Key Features
- Secure read/write access to Standard Notes vaults with end-to-end encryption
- Local stdio-only transport ensuring no network exposure of master keys
- Full CRUD operations for notes and tags via MCP tools
- OS keychain integration for secure session storage
- Supports both official Standard Notes cloud and self-hosted instances

## Why It Matters for RAG Builders
It enables AI agents to securely interact with end-to-end encrypted note vaults without exposing sensitive data, bridging the gap between AI workflows and personal knowledge management.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### libsodium-wrappers-sumo
Automated review identified **libsodium-wrappers-sumo** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Zod
Automated review identified **Zod** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Argon2id
Automated review identified **Argon2id** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### XChaCha20-Poly1305 IETF
Automated review identified **XChaCha20-Poly1305 IETF** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
