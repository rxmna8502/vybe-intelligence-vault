---
title: "dogrucanemek-alt/conarium"
content_type: "repo"
engine: "v2"
category: "Orchestrator"
tech_stack: ["TypeScript", "Node.js", "Model Context Protocol (MCP)", "Ed25519 cryptographic signing", "PostgreSQL (for reconciliation)", "Docker (for deployment)"]
quality_score: 9
rag_relevance: 10
deployment_complexity: "Medium"
tags: ["data governance", "PII masking", "audit logging", "AI security", "compliance"]
source: "https://github.com/dogrucanemek-alt/conarium"
stars: 2
language: "HTML"
last_updated: "2026-08-08T13:40:26Z"
discovered_at: "2026-08-08T13:48:47Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Conarium is a self-hosted governance layer that acts as a secure proxy between AI coding assistants and company databases, enforcing data access policies, masking PII in real-time, and generating verifiable audit receipts for every access. It ensures AI tools like Cursor or Copilot never see raw sensitive data while providing immutable logs for compliance.

## Key Features
- Inline PII masking with deterministic rules (emails, IDs, cards, secrets redacted before AI sees data)
- Allow/deny policy enforcement with row limits and per-user masking profiles
- Ed25519-signed, offline-verifiable receipts for every access (proving what was *not* seen)
- Coverage reconciliation against database query counters to detect bypassed access
- MCP-native integration with Cursor, Copilot, Claude, and Windsurf

## Why It Matters for RAG Builders
Conarium provides a critical security layer for RAG/AI stacks by ensuring AI assistants never access raw sensitive data while generating tamper-proof audit trails, making it essential for enterprises handling regulated or confidential information.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Ed25519 cryptographic signing
Automated review identified **Ed25519 cryptographic signing** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PostgreSQL (for reconciliation)
Automated review identified **PostgreSQL (for reconciliation)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker (for deployment)
Automated review identified **Docker (for deployment)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
