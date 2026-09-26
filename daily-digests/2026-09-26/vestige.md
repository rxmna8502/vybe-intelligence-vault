---
title: "samvallad33/vestige"
content_type: "repo"
engine: "v2"
category: "Agent Framework"
tech_stack: ["Rust", "MCP (Model Context Protocol)", "SQLite", "WebGPU", "Three.js", "SvelteKit", "FSRS (spaced repetition)", "Embedding models"]
quality_score: 9
rag_relevance: 10
deployment_complexity: "Low"
tags: ["memory", "MCP server", "local-first", "causal reasoning", "AI agents"]
source: "https://github.com/samvallad33/vestige"
stars: 596
language: "Rust"
last_updated: "2026-08-03T10:33:51Z"
discovered_at: "2026-08-03T10:44:07Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Vestige is a local-first, long-term memory system for AI agents that runs as an MCP server, enabling agents to remember decisions, detect contradictions, and trace failures back to root causes. It operates entirely offline after a one-time model download, storing data in a local SQLite file.

## Key Features
- Local-first memory storage with SQLite, ensuring data never leaves the machine
- Retroactive Salience Backfill for tracing failures to root causes, even when cause and symptom share no vocabulary
- Contradiction detection and resolution via `claim_contradicts_memory` status
- Prediction-Error Gating and FSRS-6 spaced repetition for efficient memory management
- 13 MCP tools for seamless integration with any MCP-capable agent

## Why It Matters for RAG Builders
Vestige solves the critical problem of AI agents repeating past mistakes by providing a local, causal memory system that can trace failures to their root causes, enabling more reliable and self-correcting AI workflows.

## Tech Stack Deep Dive
### Rust
Automated review identified **Rust** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### WebGPU
Automated review identified **WebGPU** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Three.js
Automated review identified **Three.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SvelteKit
Automated review identified **SvelteKit** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FSRS (spaced repetition)
Automated review identified **FSRS (spaced repetition)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Embedding models
Automated review identified **Embedding models** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
