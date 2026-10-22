---
title: "sattyamjjain/mnemo"
content_type: "repo"
engine: "v2"
category: "Vector DB"
tech_stack: ["Rust", "DuckDB", "PostgreSQL", "SHA-256", "MCP (Model Context Protocol)", "ONNX", "Ollama", "Apache-2.0"]
quality_score: 9
rag_relevance: 10
deployment_complexity: "Medium"
tags: ["auditable memory", "MCP-native", "on-prem", "compliance", "tamper-evident"]
source: "https://github.com/sattyamjjain/mnemo"
stars: 4
language: "Rust"
last_updated: "2026-08-08T08:37:47Z"
discovered_at: "2026-08-08T08:43:33Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Mnemo is an on-prem, MCP-native embedded database designed for regulated AI deployments, offering cryptographically auditable memory primitives (REMEMBER, RECALL, FORGET, SHARE) with SHA-256 hash-chained write logs for tamper-evident verification. It supports DuckDB and PostgreSQL backends and integrates with AI agents via the Model Context Protocol (MCP).

## Key Features
- SHA-256 hash-chained memory write logs for offline verification by external auditors
- MCP-native integration enabling AI agents to directly interact with memory primitives (REMEMBER, RECALL, FORGET, SHARE)
- Hybrid vector and lexical search with support for multiple embedders (e.g., nomic-embed-text, ONNX MiniLM)
- Regulatory compliance features for EU AI Act, India DPDP, and HIPAA with signed audit logs and consent records
- Measured security benchmarks against memory poisoning and tampering attacks (ASI06 compliance)

## Why It Matters for RAG Builders
Mnemo provides a critical foundation for building trustworthy, auditable RAG systems in regulated environments by ensuring memory integrity and compliance without relying on hosted tiers.

## Tech Stack Deep Dive
### Rust
Automated review identified **Rust** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### DuckDB
Automated review identified **DuckDB** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PostgreSQL
Automated review identified **PostgreSQL** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SHA-256
Automated review identified **SHA-256** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### ONNX
Automated review identified **ONNX** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Ollama
Automated review identified **Ollama** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Apache-2.0
Automated review identified **Apache-2.0** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
