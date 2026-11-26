---
title: "88plug/amnesia"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Claude Code", "Shell", "Python", "Markdown", "Git", "MCP (Model Context Protocol)", "Claude API"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Low"
tags: ["context continuity", "Claude Code plugin", "agent memory", "compaction recovery", "structured handoff"]
source: "https://github.com/88plug/amnesia"
stars: 0
language: "Shell"
last_updated: "2026-07-19T08:04:42Z"
discovered_at: "2026-07-19T08:13:46Z"
evaluated_by: "mistral-small-latest"
---

## Summary
amnesia is a Claude Code plugin designed to maintain context continuity for AI agents by capturing structured handoffs before and after compaction events, ensuring working memory, file states, and user constraints remain intact across sessions.

## Key Features
- Background hooks for seamless context capture and restoration without user intervention
- Multi-layer handoff system (L1 mechanical, L2 Opus enrich, L3 Stop refine, preemptive snapshot) for robust memory retention
- Read-only MCP server for agent-driven retrieval of past context and handoffs
- Preemptive snapshot capture at ~75% context usage to prevent data loss
- Isolated summarization to avoid hallucinations from global context

## Why It Matters for RAG Builders
It ensures AI agents retain critical working state and context across compaction events, eliminating lossy memory summarization and improving task continuity in long-running sessions.

## Tech Stack Deep Dive
### Claude Code
Automated review identified **Claude Code** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Shell
Automated review identified **Shell** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Markdown
Automated review identified **Markdown** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Git
Automated review identified **Git** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Claude API
Automated review identified **Claude API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
