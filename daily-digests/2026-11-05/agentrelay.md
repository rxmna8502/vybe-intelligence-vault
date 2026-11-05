---
title: "MalyStern/agentrelay"
content_type: "repo"
engine: "v2"
category: "Orchestrator"
tech_stack: ["Rust", "Tauri", "Claude Code", "ACP (Agent Communication Protocol)", "MCP (Model Context Protocol)", "Git", "TypeScript (for plugin/ui)"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Medium"
tags: ["AI agent supervision", "overnight automation", "guardrails", "evidence-gated completion", "git checkpointing"]
source: "https://github.com/MalyStern/agentrelay"
stars: 1
language: "Rust"
last_updated: "2026-08-02T10:37:21Z"
discovered_at: "2026-08-02T10:41:37Z"
evaluated_by: "mistral-small-latest"
---

## Summary
AgentRelay is a local supervisor for AI coding agents (e.g., Claude Code) designed to run unattended overnight while enforcing strict guardrails. It blocks forbidden tool calls, validates completion via real test suites, checkpoints work to git for easy undo, caps spending, and generates a sourced morning report to distinguish evidence from guesses.

## Key Features
- PreToolUse hook to block forbidden tool calls before execution
- Evidence-gated 'done' validation using real test suites (e.g., npm test, cargo test)
- Undoable git checkpoints that commit only the agent's work, preserving user edits
- Spending budget kill-switch checked before each agent turn
- Sourced morning reports with tags (VERIFIED/RECORDED/ESTIMATED) for auditability

## Why It Matters for RAG Builders
AgentRelay ensures AI coding agents operate deterministically and safely overnight by enforcing guardrails, validation, and auditability, reducing the risk of costly or irreversible errors in autonomous workflows.

## Tech Stack Deep Dive
### Rust
Automated review identified **Rust** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Tauri
Automated review identified **Tauri** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Claude Code
Automated review identified **Claude Code** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### ACP (Agent Communication Protocol)
Automated review identified **ACP (Agent Communication Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Git
Automated review identified **Git** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### TypeScript (for plugin/ui)
Automated review identified **TypeScript (for plugin/ui)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
