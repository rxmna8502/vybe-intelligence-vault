---
title: "isdou/codeck"
content_type: "repo"
engine: "v2"
category: "Orchestrator"
tech_stack: ["TypeScript", "Node.js", "SQLite", "MCP (Model Context Protocol)", "CLI Tools (Gemini, Claude, Kimi, Grok, Antigravity)", "TOML (for configuration)", "Git"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Medium"
tags: ["context handoff", "multi-model orchestration", "AI development tools", "CLI integration", "project context packaging"]
source: "https://github.com/isdou/codeck"
stars: 2
language: "TypeScript"
last_updated: "2026-08-09T09:40:13Z"
discovered_at: "2026-08-09T09:44:57Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Codeck is a context handoff tool that packages and routes AI development tasks to specific local AI CLI tools like Gemini, Claude Code, Kimi, Grok, or Antigravity based on explicit user commands. It eliminates the need to manually re-explain project context when switching between AI tools.

## Key Features
- Zero-config context packaging: Automatically extracts Git status, diffs, project background, and constraints into a standardized handoff package.
- Explicit model triggering: Only routes tasks to specified AI tools (e.g., Gemini, Claude) when explicitly named in the task.
- MCP integration: Seamlessly integrates with Codex as an MCP server for natural language-driven task delegation.
- Project-level archiving: Stores all handoffs in a local SQLite archive with masked secrets, enabling search, replay, and export.
- Budget-controlled context: Limits context size to prevent AI window overflow and optimizes token usage for performance.

## Why It Matters for RAG Builders
Codeck streamlines AI-assisted development by eliminating redundant context re-explanation, enabling seamless switching between specialized AI tools while preserving project context.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CLI Tools (Gemini, Claude, Kimi, Grok, Antigravity)
Automated review identified **CLI Tools (Gemini, Claude, Kimi, Grok, Antigravity)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### TOML (for configuration)
Automated review identified **TOML (for configuration)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Git
Automated review identified **Git** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
