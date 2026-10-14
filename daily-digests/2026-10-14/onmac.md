---
title: "WontaeKim89/onmac"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["TypeScript", "Node.js", "MLX", "llama.cpp", "macOS APIs", "Hardlink snapshots", "APFS", "TOML (configuration)"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Medium"
tags: ["AI safety", "policy engine", "filesystem access", "transaction rollback", "offline LLM"]
source: "https://github.com/WontaeKim89/onmac"
stars: 0
language: "TypeScript"
last_updated: "2026-09-02T02:08:54Z"
discovered_at: "2026-09-02T02:10:14Z"
evaluated_by: "mistral-small-latest"
---

## Summary
onmac is a policy engine and consent gate that enables AI agents to safely interact with a user's Mac filesystem and settings. It enforces strict offline operation, transaction-based rollbacks, and tamper-evident audit logs to ensure safety even when the AI model is compromised or misled.

## Key Features
- Offline-by-construction architecture with no network access, ensuring data never leaves the machine
- Strict policy engine with deny-by-default rules and path normalization to prevent privilege escalation
- Transaction-based rollback system with atomic writes and hardlink snapshots for instant reversibility
- Tamper-evident audit logging with hash-chained records to detect log tampering
- Multi-backend LLM support (MLX and llama.cpp) with unified policy enforcement

## Why It Matters for RAG Builders
It provides a critical safety layer for AI agents interacting with local filesystems, enabling secure and reversible operations without exposing data to external networks.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MLX
Automated review identified **MLX** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### llama.cpp
Automated review identified **llama.cpp** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### macOS APIs
Automated review identified **macOS APIs** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Hardlink snapshots
Automated review identified **Hardlink snapshots** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### APFS
Automated review identified **APFS** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### TOML (configuration)
Automated review identified **TOML (configuration)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
