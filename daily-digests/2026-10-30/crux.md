---
title: "CueCrux/Crux"
content_type: "repo"
engine: "v2"
category: "Vector DB"
tech_stack: ["Rust", "BM25", "Graph Retrieval", "Ed25519 Cryptography", "MCP (Model Context Protocol)", "Docker", "Protobuf", "Cosign (for SBOM/signing)", "SLSA Provenance"]
quality_score: 9
rag_relevance: 10
deployment_complexity: "Medium"
tags: ["memory management", "cryptographic receipts", "token-budgeted retrieval", "local-first", "agent identity"]
source: "https://github.com/CueCrux/Crux"
stars: 0
language: "Rust"
last_updated: "2026-07-10T21:54:20Z"
discovered_at: "2026-07-10T22:00:33Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Crux is a local-first memory daemon for AI agents, providing a versioned fact store with token-budgeted retrieval, cryptographic receipts, and policy enforcement. It operates entirely offline with no cloud dependency, ensuring data integrity and portability via Ed25519-signed receipts and self-certifying `.cruxpack` exports.

## Key Features
- Versioned fact store with deterministic decay for stale data management
- Token-budgeted BM25 + graph retrieval to minimize context window usage
- Ed25519-signed CROWN receipts for every write, enabling offline integrity verification
- Policy enforcement for organizational constraints and agent actions
- Self-certifying `.cruxpack` exports for portable, offline-verifiable memory transfer

## Why It Matters for RAG Builders
Crux provides a critical foundation for RAG systems by ensuring memory integrity, efficient retrieval, and strict token budgeting while operating entirely offline, eliminating cloud dependency and vendor lock-in.

## Tech Stack Deep Dive
### Rust
Automated review identified **Rust** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### BM25
Automated review identified **BM25** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Graph Retrieval
Automated review identified **Graph Retrieval** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Ed25519 Cryptography
Automated review identified **Ed25519 Cryptography** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Protobuf
Automated review identified **Protobuf** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Cosign (for SBOM/signing)
Automated review identified **Cosign (for SBOM/signing)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SLSA Provenance
Automated review identified **SLSA Provenance** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
