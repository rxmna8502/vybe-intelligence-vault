---
title: "zbl1998-sdjn/MASE-agent-memory"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Python", "SQLite", "FTS5", "Markdown", "Ollama", "LLM (qwen2.5:7b)", "FastAPI", "Pydantic", "Pytest"]
quality_score: 9
rag_relevance: 10
deployment_complexity: "Medium"
tags: ["memory governance", "agent memory", "fact verification", "long-context LLM", "auditable AI"]
source: "https://github.com/zbl1998-sdjn/MASE-agent-memory"
stars: 0
language: "Python"
last_updated: "2026-07-10T23:02:06Z"
discovered_at: "2026-07-10T23:08:23Z"
evaluated_by: "mistral-small-latest"
---

## Summary
MASE is a dual-whitebox memory engine for LLM agents that prioritizes governance, transparency, and correctness over opaque vector-based retrieval. It splits memory into an append-only Event Log and a structured Entity Fact Sheet, with a governance layer ensuring provable facts, conflict resolution, and auditability.

## Key Features
- Dual-layer memory system (Event Log + Entity Fact Sheet) for structured and append-only recall
- Governance layer with Fact Contracts, Admission Gate, Conflict Resolver, Evidence Pack Compiler, and Answer Claim Verifier for provable and correctable memory
- Crash-safe storage with SQLite WAL for persistent memory across restarts
- Multimodal ingestion pipeline for images, PDFs, and audio with byte-level provenance chains
- Hybrid recall combining keyword search, structured facts, and LLM-assisted filtering

## Why It Matters for RAG Builders
MASE transforms agent memory from an opaque retrieval problem into an engineering surface, enabling verifiable, correctable, and auditable long-lived memory for LLM agents.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FTS5
Automated review identified **FTS5** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Markdown
Automated review identified **Markdown** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Ollama
Automated review identified **Ollama** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### LLM (qwen2.5:7b)
Automated review identified **LLM (qwen2.5:7b)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastAPI
Automated review identified **FastAPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Pydantic
Automated review identified **Pydantic** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Pytest
Automated review identified **Pytest** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
