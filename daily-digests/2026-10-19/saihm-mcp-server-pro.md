---
title: "SAIHM-Admin/saihm-mcp-server-pro"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["TypeScript", "Node.js", "MCP (Model Context Protocol)", "Post-Quantum Cryptography (ML-DSA-65, ML-KEM-768)", "AES-256-GCM", "JWT", "Stripe (for payments)"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Medium"
tags: ["non-custodial memory", "client-side encryption", "post-quantum cryptography", "MCP server", "GDPR compliance"]
source: "https://github.com/SAIHM-Admin/saihm-mcp-server-pro"
stars: 1
language: "TypeScript"
last_updated: "2026-08-02T08:11:30Z"
discovered_at: "2026-08-02T08:23:02Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A production-grade thin-client MCP server for SAIHM non-custodial memory, enabling agents to securely store, recall, and manage encrypted memory cells client-side while leveraging a blind endpoint for storage and sharing. It ensures end-to-end encryption with post-quantum cryptography and GDPR-compliant crypto-shred erasure.

## Key Features
- Client-side sealing and decryption of memory cells using high-assurance cryptography (ML-DSA-65, ML-KEM-768, AES-256-GCM)
- Blind endpoint storage that never holds plaintext or keys, ensuring zero-trust architecture
- GDPR-compliant crypto-shred erasure via `saihm_forget` for irreversible data deletion
- Self-onboarding flow with zero-config free tier and seamless upgrade path to paid tiers
- MCP-compliant tooling with annotated actions (e.g., `readOnlyHint`, `destructiveHint`) for agent-friendly interactions

## Why It Matters for RAG Builders
It enables AI agents to securely persist and retrieve context across sessions without exposing plaintext to external services, reducing token usage and ensuring compliance with privacy regulations.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Post-Quantum Cryptography (ML-DSA-65, ML-KEM-768)
Automated review identified **Post-Quantum Cryptography (ML-DSA-65, ML-KEM-768)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### AES-256-GCM
Automated review identified **AES-256-GCM** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JWT
Automated review identified **JWT** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Stripe (for payments)
Automated review identified **Stripe (for payments)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
