---
title: "phoodul/secretbank"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Rust", "Tauri v2", "React 19", "TypeScript", "SQLite", "age (X25519 + ChaCha20-Poly1305)", "Yjs / SecSync CRDT", "Cloudflare Workers", "Tailwind CSS", "shadcn/ui", "Radix UI"]
quality_score: 9
rag_relevance: 7
deployment_complexity: "Medium"
tags: ["secrets management", "dependency graph", "zero-knowledge encryption", "supply-chain security", "open-core"]
source: "https://github.com/phoodul/secretbank"
stars: 0
language: "TypeScript"
last_updated: "2026-08-04T03:58:31Z"
discovered_at: "2026-08-04T04:15:22Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Secretbank is an open-core secrets manager that tracks API keys and their dependencies across projects, deployments, and URLs, enabling users to assess blast radius before revoking or rotating credentials. It combines zero-knowledge encryption with a dependency graph and incident feed for supply-chain risk management.

## Key Features
- Zero-knowledge vault with on-device encryption (age crate)
- Dependency graph mapping Issuer → Credential → Usage → Project → Deployment → URL
- Blast radius preview for credential revocation decisions
- Supply-chain risk detection via OSV.dev and NVD/GitHub Advisory matching
- Multi-device E2EE sync using Yjs CRDT and Cloudflare Workers relay

## Why It Matters for RAG Builders
It provides critical context for credential management in AI workflows by mapping dependencies and risks, reducing blind spots in secret rotation and supply-chain vulnerabilities.

## Tech Stack Deep Dive
### Rust
Automated review identified **Rust** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Tauri v2
Automated review identified **Tauri v2** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### React 19
Automated review identified **React 19** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### age (X25519 + ChaCha20-Poly1305)
Automated review identified **age (X25519 + ChaCha20-Poly1305)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Yjs / SecSync CRDT
Automated review identified **Yjs / SecSync CRDT** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Cloudflare Workers
Automated review identified **Cloudflare Workers** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Tailwind CSS
Automated review identified **Tailwind CSS** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### shadcn/ui
Automated review identified **shadcn/ui** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Radix UI
Automated review identified **Radix UI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
