---
title: "xzawed/claude-grok-build-plugin"
content_type: "repo"
engine: "v2"
category: "Agent Framework"
tech_stack: ["TypeScript", "ES Modules (ESM)", "Node.js", "MCP (Model Context Protocol)", "Claude Code", "xAI Grok CLI", "Git Worktrees"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Medium"
tags: ["Claude Code", "Grok Integration", "MCP Server", "Delegation", "AI Orchestration"]
source: "https://github.com/xzawed/claude-grok-build-plugin"
stars: 0
language: "TypeScript"
last_updated: "2026-08-08T06:46:57Z"
discovered_at: "2026-08-08T06:52:39Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A Claude Code plugin that enables seamless delegation of coding tasks to xAI's Grok Build CLI, allowing Claude to orchestrate while Grok executes bulk or low-risk operations. It prioritizes subscription-based billing over metered API usage and ensures safety through strict auth checks and review gates.

## Key Features
- Delegates coding tasks from Claude to Grok with parallel execution (up to 8 subagents) and git-worktree isolation for safety.
- Prioritizes xAI subscription billing over metered API usage, stripping API keys in subscription mode to prevent accidental metered billing.
- Provides 15+ `/grok:*` commands for setup, delegation, planning, verification, and usage tracking, with clear billing feedback.
- Includes a PreToolUse auth-check hook to enforce safety contracts and prevent unauthorized delegations.
- Supports headless edits with `--always-approve` and isolated worktrees for riskier operations, ensuring no auto-commits.

## Why It Matters for RAG Builders
It bridges Claude Code with xAI's Grok, enabling safe and efficient delegation of coding tasks while maintaining billing control and review gates for AI stack builders.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### ES Modules (ESM)
Automated review identified **ES Modules (ESM)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Claude Code
Automated review identified **Claude Code** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### xAI Grok CLI
Automated review identified **xAI Grok CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Git Worktrees
Automated review identified **Git Worktrees** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
