---
title: "vilosource/vfkb"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["TypeScript", "Node.js", "JSONL", "Model Context Protocol (MCP)", "Zod", "Vitest"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Medium"
tags: ["git-native memory", "decision tracking", "AI agent substrate", "deterministic knowledge", "project rationale"]
source: "https://github.com/vilosource/vfkb"
stars: 0
language: "TypeScript"
last_updated: "2026-07-12T14:50:43Z"
discovered_at: "2026-07-12T14:54:48Z"
evaluated_by: "mistral-small-latest"
---

## Summary
vfkb is a git-native, append-only knowledge base for AI coding agents that preserves project decisions, rationale, and lifecycle metadata directly within the repository. It enables deterministic, offline memory injection for agent sessions without external dependencies.

## Key Features
- Append-only JSONL brain stored in `.vfkb/entries.jsonl` with git-native diffability and merge safety
- Structured entry types (fact, decision, gotcha, pattern, link) with provenance, lifecycle, and trust modeling
- Automatic session injection of filtered knowledge bundles (constitutional decisions, relevance-filtered entries)
- Supersede-based decision lifecycle with immutable records and ADR-style rationale tracking
- Multi-harness support (Claude Code hooks, Pi extension, MCP server) with zero runtime dependencies

## Why It Matters for RAG Builders
vfkb eliminates the critical gap between agent sessions by embedding project-specific engineering judgment directly in the codebase, ensuring continuity and reducing repetitive mistakes without relying on external memory systems.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSONL
Automated review identified **JSONL** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Zod
Automated review identified **Zod** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Vitest
Automated review identified **Vitest** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
