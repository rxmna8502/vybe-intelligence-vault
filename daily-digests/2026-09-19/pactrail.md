---
title: "AKMessi/pactrail"
content_type: "repo"
engine: "v2"
category: "Agent Framework"
tech_stack: ["Rust", "SQLite", "BLAKE3", "OpenAI Chat Completions API", "Git", "JSON Schema", "LLM Providers (Ollama, OpenAI, llama.cpp, vLLM, etc.)"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Medium"
tags: ["coding agent", "verification-native", "tamper-evident", "durable traces", "model-agnostic"]
source: "https://github.com/AKMessi/pactrail"
stars: 3
language: "Rust"
last_updated: "2026-07-18T09:21:14Z"
discovered_at: "2026-07-18T09:23:39Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Pactrail is a verification-native coding-agent harness written in Rust that enforces strict, model-agnostic execution contracts for software changes. It ensures every edit is isolated, tamper-evident, and reviewable before applying to the workspace, with durable traces and integrity-checked receipts.

## Key Features
- Isolated, contract-bound transactions for all edits with explicit apply/receipt steps
- Tamper-evident, hash-linked execution traces and integrity-protected receipts
- Strict policy enforcement via Rust-based capability policies and path confinement
- Durable memory and provenance tracking using SQLite with full synchronization
- Model portability across local and hosted OpenAI-compatible endpoints with HTTPS enforcement

## Why It Matters for RAG Builders
Pactrail provides a rigorous, auditable framework for AI-driven code generation that ensures safety, transparency, and reproducibility in RAG pipelines by enforcing strict, tamper-evident change contracts.

## Tech Stack Deep Dive
### Rust
Automated review identified **Rust** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### BLAKE3
Automated review identified **BLAKE3** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenAI Chat Completions API
Automated review identified **OpenAI Chat Completions API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Git
Automated review identified **Git** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSON Schema
Automated review identified **JSON Schema** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### LLM Providers (Ollama, OpenAI, llama.cpp, vLLM, etc.)
Automated review identified **LLM Providers (Ollama, OpenAI, llama.cpp, vLLM, etc.)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
