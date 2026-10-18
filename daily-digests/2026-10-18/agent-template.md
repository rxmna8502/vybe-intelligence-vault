---
title: "Synforger/agent-template"
content_type: "repo"
engine: "v2"
category: "Agent Framework"
tech_stack: ["Shell", "Python", "Bash", "Git Hooks", "Anthropic SDK", "Claude Code"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Medium"
tags: ["agent scaffolding", "self-improving systems", "long-lived agents", "Claude Code", "Anthropic SDK"]
source: "https://github.com/Synforger/agent-template"
stars: 0
language: "Shell"
last_updated: "2026-07-15T20:01:45Z"
discovered_at: "2026-07-15T20:07:59Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A scaffold for creating long-lived, self-improving agents running on Claude Code or the Anthropic SDK. It provides a shared machinery base with structural templates, revision culture, and two-way sync capabilities to propagate improvements across derived agents while maintaining anonymity for public publication.

## Key Features
- Two-way sync between base template and derived agents via `sync-from-base.sh` and `promote-to-base.sh`
- Automated machinery improvements through `docs-check.sh`, `detect-duplicates.py`, and `detect-stale-rules.sh`
- Built-in revision culture with capacity management and self-extension loops
- Anonymity enforcement for public publication via guard-dispatcher (separate repo)
- Minimal constraints on derivations, allowing free customization of persona and projects

## Why It Matters for RAG Builders
It provides a robust framework for building and maintaining long-lived, self-improving agents with shared machinery and automated quality checks, reducing context overhead for RAG builders.

## Tech Stack Deep Dive
### Shell
Automated review identified **Shell** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Bash
Automated review identified **Bash** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Git Hooks
Automated review identified **Git Hooks** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Anthropic SDK
Automated review identified **Anthropic SDK** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Claude Code
Automated review identified **Claude Code** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
