---
title: "natiixnt/redcon"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Python", "MCP (Model Context Protocol)", "VS Code Extension (TypeScript/React)", "SQLite", "Git", "CLI (Click, Typer)", "Benchmarking (pytest, custom evaluators)"]
quality_score: 9
rag_relevance: 10
deployment_complexity: "Medium"
tags: ["context compression", "token budgeting", "AI coding agents", "deterministic ranking", "MCP integration"]
source: "https://github.com/natiixnt/redcon"
stars: 8
language: "Python"
last_updated: "2026-07-10T18:20:30Z"
discovered_at: "2026-07-10T18:22:28Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Redcon is a deterministic context budgeting tool for AI coding agents that ranks, compresses, and packs repository context to minimize token waste. It replaces blind repo dumps with language-aware compression strategies and provides MCP tools for on-demand context retrieval.

## Key Features
- Language-aware file ranking with deterministic scoring (keywords, imports, git history, file roles)
- Multi-strategy compression (full, snippet, symbol extraction, summary) with 16+ command output compressors
- MCP server integration for on-demand context retrieval (6 tools: rank, overview, compress, search, budget, run)
- Cross-call session compression layers (path aliases, symbol aliases, delta snapshots, invariant certs) for 8-15% additional savings
- Open benchmarking suite (context-eval) with empirical validation against baselines

## Why It Matters for RAG Builders
Redcon directly addresses the critical bottleneck of token waste in RAG pipelines by ensuring agents receive only the most relevant, compressed context, drastically reducing costs and improving accuracy.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### VS Code Extension (TypeScript/React)
Automated review identified **VS Code Extension (TypeScript/React)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Git
Automated review identified **Git** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CLI (Click, Typer)
Automated review identified **CLI (Click, Typer)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Benchmarking (pytest, custom evaluators)
Automated review identified **Benchmarking (pytest, custom evaluators)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
