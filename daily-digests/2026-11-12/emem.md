---
title: "Vortx-AI/emem"
content_type: "repo"
engine: "v2"
category: "Orchestrator"
tech_stack: ["Rust", "Model Context Protocol (MCP)", "ed25519 cryptographic signatures", "REST API", "HTTP servers", "Content-addressable storage", "Merkle proofs", "Satellite Earth observation data"]
quality_score: 9
rag_relevance: 10
deployment_complexity: "Medium"
tags: ["multi-agent systems", "shared memory", "cryptographic verification", "persistent facts", "trustless verification"]
source: "https://github.com/Vortx-AI/emem"
stars: 52
language: "Rust"
last_updated: "2026-08-05T05:35:49Z"
discovered_at: "2026-08-05T05:49:12Z"
evaluated_by: "mistral-small-latest"
---

## Summary
emem is a shared memory layer for multi-agent systems that enables agents to store, retrieve, and verify signed facts persistently across sessions, model swaps, and handoffs. It provides content-addressed, cryptographically verifiable tokens for facts, entities, and traces, ensuring trustless verification and long-term memory integrity.

## Key Features
- Signed, content-addressed facts that survive context compaction and model swaps
- Offline verification of facts using ed25519 receipts and Merkle proofs
- Support for multiple token types (fact, bundle, entity, raster, cube, trace, attestation)
- Device enrollment and platform attestation for provenance tracking
- Open protocol with Apache 2.0 license, no account or key required for reads

## Why It Matters for RAG Builders
emem enables RAG and AI systems to maintain persistent, verifiable facts across sessions and agents, eliminating paraphrase drift and enabling trustless collaboration without relying on vendor-specific memory.

## Tech Stack Deep Dive
### Rust
Automated review identified **Rust** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### ed25519 cryptographic signatures
Automated review identified **ed25519 cryptographic signatures** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### REST API
Automated review identified **REST API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HTTP servers
Automated review identified **HTTP servers** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Content-addressable storage
Automated review identified **Content-addressable storage** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Merkle proofs
Automated review identified **Merkle proofs** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Satellite Earth observation data
Automated review identified **Satellite Earth observation data** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
