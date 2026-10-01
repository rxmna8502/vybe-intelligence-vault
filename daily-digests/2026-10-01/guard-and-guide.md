---
title: "kawarimidoll/guard-and-guide"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Rust", "Nix", "TOML", "JSON", "Claude Code", "Gemini CLI"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Low"
tags: ["AI agent security", "sandboxing", "rule-based enforcement", "coding agent protection", "safety middleware"]
source: "https://github.com/kawarimidoll/guard-and-guide"
stars: 8
language: "Rust"
last_updated: "2026-07-20T06:12:00Z"
discovered_at: "2026-07-20T06:16:49Z"
evaluated_by: "mistral-small-latest"
---

## Summary
guard-and-guide is a security tool designed to intercept and block dangerous operations performed by AI coding agents while providing clear guidance on safer alternatives. It acts as a middleware between the agent and system operations, enforcing customizable rules to prevent unintended actions.

## Key Features
- Blocks dangerous operations (e.g., git push, .env file access) based on customizable rules
- Provides clear, actionable feedback to agents on why an operation was blocked and what to do instead
- Supports multiple AI coding agents (Claude Code, Gemini CLI) with agent-specific tool mapping
- Lightweight and fast, designed to integrate seamlessly into existing workflows
- Uses regex patterns for flexible rule definition and canonical tool names for consistency

## Why It Matters for RAG Builders
It prevents AI agents from executing harmful operations by enforcing safety rules, reducing security risks in automated coding environments.

## Tech Stack Deep Dive
### Rust
Automated review identified **Rust** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Nix
Automated review identified **Nix** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### TOML
Automated review identified **TOML** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSON
Automated review identified **JSON** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Claude Code
Automated review identified **Claude Code** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Gemini CLI
Automated review identified **Gemini CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
