---
title: "rasatpetabit/masterplan"
content_type: "repo"
engine: "v2"
category: "Orchestrator"
tech_stack: ["JavaScript", "Claude Code", "Codex CLI", "YAML", "Git", "Node.js", "Workflow Automation"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Medium"
tags: ["workflow automation", "multi-phase development", "state persistence", "Claude Code plugin", "Codex CLI"]
source: "https://github.com/rasatpetabit/masterplan"
stars: 9
language: "JavaScript"
last_updated: "2026-07-13T20:10:26Z"
discovered_at: "2026-07-13T20:14:07Z"
evaluated_by: "mistral-small-latest"
---

## Summary
masterplan is a CLI plugin for Claude Code and Codex CLI that orchestrates a durable multi-phase development lifecycle (brainstorm → plan → execute → finish) using the obra/superpowers skills suite. It ensures state persistence on disk, enabling seamless resumption after crashes or session compactions.

## Key Features
- Durable state management with disk-based run bundles (`docs/masterplan/<slug>/`)
- Deterministic planning via LLM-generated task fragments merged into a canonical `plan.index.json`
- Wave-based execution with scope verification and out-of-scope file reverts
- Automatic finish flow with verification, retrospective, and branch-finish gate
- Doctor module for structural linting and repair across run bundles

## Why It Matters for RAG Builders
It provides a robust, stateful orchestration layer for AI-driven development workflows, ensuring continuity and reliability in long-running engineering tasks.

## Tech Stack Deep Dive
### JavaScript
Automated review identified **JavaScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Claude Code
Automated review identified **Claude Code** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Codex CLI
Automated review identified **Codex CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### YAML
Automated review identified **YAML** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Git
Automated review identified **Git** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Workflow Automation
Automated review identified **Workflow Automation** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
