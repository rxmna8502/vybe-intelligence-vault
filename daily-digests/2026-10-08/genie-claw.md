---
title: "GeniePod/genie-claw"
content_type: "repo"
engine: "v2"
category: "Agent Framework"
tech_stack: ["Rust", "SQLite", "LLM (llama.cpp)", "Home Assistant", "Jetson Orin (aarch64)", "CI/CD (GitHub Actions)", "HTTP API", "CLI", "BFCL (Benchmark for Local LLMs)"]
quality_score: 9
rag_relevance: 10
deployment_complexity: "Medium"
tags: ["on-device AI", "Jetson Orin", "deterministic grounding", "private homes", "low-latency"]
source: "https://github.com/GeniePod/genie-claw"
stars: 52
language: "Rust"
last_updated: "2026-07-12T13:33:58Z"
discovered_at: "2026-07-12T13:35:58Z"
evaluated_by: "mistral-small-latest"
---

## Summary
GenieClaw is a low-latency, limited-context AI harness designed for private on-device homes, specifically optimized for NVIDIA Jetson Orin hardware. It enables fast, accurate, and privacy-preserving local AI agents by leveraging deterministic grounding, family memory, and device state within a 4096-token context window.

## Key Features
- 4096-token Jetson baseline for local context with strict BFCL scoring
- Deterministic prompt assembly and memory retrieval for accuracy
- SQLite-based conversation history and family/household memory
- Home Assistant adapter with safety policies, rate limits, and audit logging
- Portable provider architecture with optional cloud escalation (opt-in)

## Why It Matters for RAG Builders
GenieClaw enables RAG builders to create fast, private, and accurate on-device AI agents by leveraging deterministic grounding and tight hardware constraints, eliminating the need for cloud dependency while maintaining high accuracy.

## Tech Stack Deep Dive
### Rust
Automated review identified **Rust** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### LLM (llama.cpp)
Automated review identified **LLM (llama.cpp)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Home Assistant
Automated review identified **Home Assistant** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Jetson Orin (aarch64)
Automated review identified **Jetson Orin (aarch64)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CI/CD (GitHub Actions)
Automated review identified **CI/CD (GitHub Actions)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HTTP API
Automated review identified **HTTP API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CLI
Automated review identified **CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### BFCL (Benchmark for Local LLMs)
Automated review identified **BFCL (Benchmark for Local LLMs)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
