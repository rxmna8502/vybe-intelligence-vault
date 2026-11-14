---
title: "joker01-01/cursor-plan-build-judge"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Python", "Markdown", "GitHub Actions", "Cursor", "Claude Code"]
quality_score: 9
rag_relevance: 7
deployment_complexity: "Low"
tags: ["agent workflow", "spec-first development", "coding agent reliability", "human-in-the-loop", "evidence-based review"]
source: "https://github.com/joker01-01/cursor-plan-build-judge"
stars: 1
language: "Python"
last_updated: "2026-09-01T19:04:32Z"
discovered_at: "2026-09-01T19:05:47Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A reusable Agent Skill for Cursor and Claude Code that enforces a spec-first workflow (Planner → Builder → Judge) to prevent coding agents from drifting off-task. It requires explicit human approval, bounds execution to the approved scope, and judges results based on verifiable evidence rather than self-reported completion.

## Key Features
- Enforces a three-phase workflow: Planner, Builder, and Judge to ensure task clarity and execution bounds.
- Requires explicit human approval before implementation to prevent scope creep.
- Judge phase evaluates results using verifiable evidence (diffs, logs, tests) rather than self-reported completion.
- Cross-platform support for Cursor and Claude Code with automated validation to ensure consistency.
- Deliberately conservative design that stops workflow on failure rather than entering blind recursive repair loops.

## Why It Matters for RAG Builders
It provides a structured, human-in-the-loop approach to prevent coding agents from drifting off-task, ensuring reliable and verifiable outcomes for complex AI-driven development workflows.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Markdown
Automated review identified **Markdown** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### GitHub Actions
Automated review identified **GitHub Actions** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Cursor
Automated review identified **Cursor** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Claude Code
Automated review identified **Claude Code** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
