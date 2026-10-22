---
title: "repairman29/chump"
content_type: "repo"
engine: "v2"
category: "Orchestrator"
tech_stack: ["Rust", "SQLite", "Ollama", "vLLM", "mistral.rs", "Axum", "Git", "GitHub API", "ACP (Agent Client Protocol)", "Tauri", "PWA (Progressive Web App)", "Discord Bot", "CLI"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Medium"
tags: ["multi-agent coordination", "self-hosted AI", "local LLM", "code agent framework", "persistent memory"]
source: "https://github.com/repairman29/chump"
stars: 0
language: "Shell"
last_updated: "2026-07-18T23:47:10Z"
discovered_at: "2026-07-18T23:52:38Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Chump is a self-hosted multi-agent fleet coordinator and gap registry designed for AI coding agents. It enables concurrent agent sessions on the same repository without conflicts, offering both a coordinator layer for external agents and an optional built-in agent with local LLM support, persistent memory, and 30+ governed tools.

## Key Features
- File-based leases and SQLite gap registry for concurrent agent session management without conflicts
- Built-in agent with local-first inference (Ollama, vLLM, mistral.rs), persistent SQLite memory, and 30+ governed tools
- Linked worktrees and merge-queue ship pipeline for isolated, conflict-free code changes and automated PRs
- Ambient.jsonl peripheral vision stream for real-time visibility into agent activities and system state
- Supports external agents (Claude Code, opencode, Aider, etc.) via a pure coordinator mode

## Why It Matters for RAG Builders
Chump provides a critical orchestration layer for scaling AI coding agents while ensuring conflict-free collaboration, making it essential for building robust, multi-agent RAG systems.

## Tech Stack Deep Dive
### Rust
Automated review identified **Rust** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Ollama
Automated review identified **Ollama** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### vLLM
Automated review identified **vLLM** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### mistral.rs
Automated review identified **mistral.rs** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Axum
Automated review identified **Axum** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Git
Automated review identified **Git** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### GitHub API
Automated review identified **GitHub API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### ACP (Agent Client Protocol)
Automated review identified **ACP (Agent Client Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Tauri
Automated review identified **Tauri** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PWA (Progressive Web App)
Automated review identified **PWA (Progressive Web App)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Discord Bot
Automated review identified **Discord Bot** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CLI
Automated review identified **CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
