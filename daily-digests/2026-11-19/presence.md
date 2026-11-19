---
title: "sara-star-quant/presence"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Python", "Rust", "MCP (Model Context Protocol)", "AGENTS.md", "JSON-RPC", "SQLite", "Git", "Bash"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Low"
tags: ["AI session continuity", "persistent context", "Claude Code plugin", "MCP server", "AGENTS.md adapter"]
source: "https://github.com/sara-star-quant/presence"
stars: 5
language: "Python"
last_updated: "2026-08-05T23:59:31Z"
discovered_at: "2026-08-06T00:02:30Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Presence is a Claude Code plugin that provides persistent, cross-session memory for AI coding assistants by maintaining a living project model, outcome telemetry, and event digests. It enables MCP-aware clients and AGENTS.md-aware tools to read its accumulated context, ensuring continuity across sessions without per-project setup.

## Key Features
- Living project model: Maintains and reuses notes about repositories across sessions to avoid re-deriving architecture.
- Outcome telemetry: Tracks changes, reverts, and failures to provide context for future sessions and prevent repeated mistakes.
- Event digest: Surfaces file changes, test failures, and build results between sessions to keep AI tools informed.
- Calibrated confidence: Validates success claims (e.g., 'fixed', 'done') against actual verification (tests, builds) and warns or blocks unverified actions.
- Zero-trust support: Optional AES-GCM encryption, tamper-evident audit logs, and fail-closed integrity checks for regulated workloads.

## Why It Matters for RAG Builders
Presence eliminates the cold-start problem for AI coding assistants by providing persistent, cross-session context, reducing redundant work and improving reliability in RAG and agentic workflows.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Rust
Automated review identified **Rust** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### AGENTS.md
Automated review identified **AGENTS.md** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSON-RPC
Automated review identified **JSON-RPC** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Git
Automated review identified **Git** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Bash
Automated review identified **Bash** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
