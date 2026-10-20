---
title: "open-latch/latch"
content_type: "repo"
engine: "v2"
category: "Orchestrator"
tech_stack: ["Python", "SQLite", "Claude Code", "Codex", "Cursor", "Git", "Bash/PowerShell"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Medium"
tags: ["decision enforcement", "agent gatekeeping", "local-first", "knowledge base", "project continuity"]
source: "https://github.com/open-latch/latch"
stars: 9
language: "Python"
last_updated: "2026-08-01T16:02:36Z"
discovered_at: "2026-08-01T16:06:56Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Latch is a local-first runtime gate that enforces ratified project decisions and rejected paths for AI agents, preventing them from revisiting or rebuilding previously dismissed solutions. It ensures decision continuity by checking agent actions against a knowledge base before any file changes occur.

## Key Features
- Runtime gate that checks agent actions against ratified decisions before file changes
- Local SQLite knowledge base for storing project decisions and rejected paths
- Cross-agent compatibility (Claude Code, Codex, Cursor) with shared decision continuity
- Receipt-based auditing with cited evidence for every gate decision
- Review-first seeding process to backfill existing project decisions

## Why It Matters for RAG Builders
Latch ensures AI agents adhere to project-specific decisions and constraints, reducing redundant work and preventing silent drift from ratified paths, which is critical for maintaining consistency in RAG and agent-based systems.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Claude Code
Automated review identified **Claude Code** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Codex
Automated review identified **Codex** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Cursor
Automated review identified **Cursor** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Git
Automated review identified **Git** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Bash/PowerShell
Automated review identified **Bash/PowerShell** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
