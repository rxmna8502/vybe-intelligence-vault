---
title: "marktoda/zj-radar"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Rust", "Zellij", "WASM", "KDL (for configuration)", "CLI (installation and setup)", "JSON (status payloads)", "Shell (installation scripts)"]
quality_score: 9
rag_relevance: 7
deployment_complexity: "Medium"
tags: ["Zellij", "AI agent monitoring", "sidebar plugin", "real-time status", "terminal multiplexing"]
source: "https://github.com/marktoda/zj-radar"
stars: 33
language: "Rust"
last_updated: "2026-09-01T22:09:40Z"
discovered_at: "2026-09-01T22:18:40Z"
evaluated_by: "mistral-small-latest"
---

## Summary
zj-radar is a Zellij sidebar plugin that provides real-time visibility into AI-agent statuses (e.g., Claude Code, Codex, Opencode) across all tabs in a Zellij session. It enables quick navigation to agent panes needing attention and supports cross-session status tracking without requiring a new terminal or agent orchestrator.

## Key Features
- Live per-tab AI-agent status (working, waiting, done, error) with elapsed time and last message
- One-click navigation to agent panes needing attention via `attention-next` binding
- Cross-session badge for tracking status across multiple Zellij sessions on the same machine
- Push-driven updates via `zellij pipe` (no polling, minimal performance overhead)
- Support for Claude Code, Codex, Opencode, and custom producers via JSON payloads

## Why It Matters for RAG Builders
It provides critical visibility into AI-agent states within existing Zellij workflows, reducing context switching and improving productivity for developers managing multiple AI-driven tasks.

## Tech Stack Deep Dive
### Rust
Automated review identified **Rust** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Zellij
Automated review identified **Zellij** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### WASM
Automated review identified **WASM** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### KDL (for configuration)
Automated review identified **KDL (for configuration)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CLI (installation and setup)
Automated review identified **CLI (installation and setup)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSON (status payloads)
Automated review identified **JSON (status payloads)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Shell (installation scripts)
Automated review identified **Shell (installation scripts)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
