---
title: "libraz/claude-coverwise"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["JavaScript", "Node.js (>=22)", "Yarn 4", "Biome (linting)", "Model Context Protocol (MCP)", "WASM (coverwise engine)", "TypeScript", "Claude Code"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Low"
tags: ["combinatorial testing", "pairwise coverage", "AI test generation", "MCP server", "constraint solver"]
source: "https://github.com/libraz/claude-coverwise"
stars: 0
language: "JavaScript"
last_updated: "2026-07-15T10:44:16Z"
discovered_at: "2026-07-15T10:48:44Z"
evaluated_by: "mistral-small-latest"
---

## Summary
claude-coverwise is a Claude Code plugin that enhances AI-written tests by ensuring combinatorial coverage for functions with multiple parameters. It integrates the coverwise WASM engine as an MCP server to analyze, generate, and extend test matrices for pairwise/t-wise coverage, addressing gaps in AI-generated test suites.

## Key Features
- MCP server exposing coverwise combinatorial test engine tools (generate, analyze_coverage, extend_tests, estimate_model)
- Slash commands (/cover-check, /cover-gen, /cover-extend) for iterative test improvement
- Constraint DSL for modeling parameter interactions and edge cases
- WASM-first engine with TypeScript fallback for performance and portability
- Automatic install and dependency management for seamless integration

## Why It Matters for RAG Builders
It ensures AI-generated tests achieve full combinatorial coverage, preventing missed interactions in complex parameter spaces and improving test reliability.

## Tech Stack Deep Dive
### JavaScript
Automated review identified **JavaScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js (>=22)
Automated review identified **Node.js (>=22)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Yarn 4
Automated review identified **Yarn 4** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Biome (linting)
Automated review identified **Biome (linting)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### WASM (coverwise engine)
Automated review identified **WASM (coverwise engine)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Claude Code
Automated review identified **Claude Code** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
