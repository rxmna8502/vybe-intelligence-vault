---
title: "tonychen15/deputy"
content_type: "repo"
engine: "v2"
category: "Orchestrator"
tech_stack: ["Bash", "Git", "LLM APIs (Claude, Codex, Gemini)", "jq", "bubblewrap (bwrap)", "Shell scripting"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Medium"
tags: ["autonomous agents", "task orchestration", "LLM integration", "git worktrees", "priority scheduling"]
source: "https://github.com/tonychen15/deputy"
stars: 0
language: "Shell"
last_updated: "2026-07-15T20:07:31Z"
discovered_at: "2026-07-15T20:07:56Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Deputy is an autonomous, cron-driven backlog runner for code repositories that triages tasks, executes simple ones headlessly, and escalates complex ones for human input. It uses cross-LLM review, priority preemption, and isolated git worktrees to ensure safe and discerning task execution.

## Key Features
- Discernment-based task triage: executes simple tasks headlessly and escalates complex ones for human input
- Priority preemption: pauses lower-priority tasks to handle urgent ones, resuming later
- Cross-LLM review (xReview): gates design, plans, and commits using author-aware LLM routing
- Isolated git worktrees: runs each task in a dedicated branch with OS-enforced sandboxing
- Human-session back-off: detects active user sessions to avoid race conditions

## Why It Matters for RAG Builders
Deputy provides a robust framework for safely automating and orchestrating AI-driven tasks in code repositories, ensuring quality through LLM review and human escalation while maintaining isolation and resumability.

## Tech Stack Deep Dive
### Bash
Automated review identified **Bash** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Git
Automated review identified **Git** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### LLM APIs (Claude, Codex, Gemini)
Automated review identified **LLM APIs (Claude, Codex, Gemini)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### jq
Automated review identified **jq** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### bubblewrap (bwrap)
Automated review identified **bubblewrap (bwrap)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Shell scripting
Automated review identified **Shell scripting** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
