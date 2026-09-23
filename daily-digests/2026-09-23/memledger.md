---
title: "riktar/memledger"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Python", "SQLite", "LLM (e.g., Qwen, OpenAI-compatible models)", "Ollama (for local model inference)", "CLI tools", "YAML (for configuration)"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Medium"
tags: ["memory management", "auditable AI", "provenance tracking", "agent frameworks", "SQLite ledger"]
source: "https://github.com/riktar/memledger"
stars: 7
language: "Python"
last_updated: "2026-07-10T13:02:56Z"
discovered_at: "2026-07-10T13:11:05Z"
evaluated_by: "mistral-small-latest"
---

## Summary
MemLedger provides auditable, provenance-tracked memory management for AI agents, ensuring transparency in how memories are extracted, promoted, and retained. It uses an append-only SQLite ledger to log every memory operation, enabling debugging, regeneration, and anti-poisoning by design.

## Key Features
- Full provenance tracking for every memory with `memledger why` command
- Anti-poisoning via quarantined facts and multi-session confirmation
- Regeneration of memory from raw sources when better models are available
- Zero-cost deterministic filtering to reduce LLM extraction overhead
- Single SQLite file storage with no vendor lock-in

## Why It Matters for RAG Builders
MemLedger enables RAG builders to debug, audit, and improve memory reliability in AI agents by providing full transparency into how memories are formed and retained.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### LLM (e.g., Qwen, OpenAI-compatible models)
Automated review identified **LLM (e.g., Qwen, OpenAI-compatible models)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Ollama (for local model inference)
Automated review identified **Ollama (for local model inference)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CLI tools
Automated review identified **CLI tools** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### YAML (for configuration)
Automated review identified **YAML (for configuration)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
