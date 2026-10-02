---
title: "SimonMallas/agent-letterbox-tmux"
content_type: "repo"
engine: "v2"
category: "Orchestrator"
tech_stack: ["Shell", "tmux", "Bash", "Git", "Markdown"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Low"
tags: ["multi-agent coordination", "tmux integration", "durable messaging", "agent handoffs", "team memory"]
source: "https://github.com/SimonMallas/agent-letterbox-tmux"
stars: 1
language: "Shell"
last_updated: "2026-09-02T19:06:38Z"
discovered_at: "2026-09-02T19:13:02Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Agent Letterbox for tmux is a coordination layer that enables multi-agent AI coding teams to hand off tasks between tmux terminals as durable, inspectable messages while maintaining live notifications via doorbell rings. It transforms separate agent terminals into a coordinated team with persistent records of all communications.

## Key Features
- Durable task handoffs stored as Markdown files with sender/recipient metadata and timestamps
- Live tmux doorbell notifications for immediate agent wake-up without human relay
- ACK/NACK/RESULT lifecycle for explicit task ownership and progress tracking
- Self-registering agent panes in tmux for dynamic team scaling
- Cross-agent compatibility with standardized protocol (SPEC.md) and versioned releases

## Why It Matters for RAG Builders
It provides a lightweight, terminal-native way to coordinate multi-agent workflows while preserving a permanent record of all communications, reducing human relay work and enabling detached continuity for agent teams.

## Tech Stack Deep Dive
### Shell
Automated review identified **Shell** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### tmux
Automated review identified **tmux** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Bash
Automated review identified **Bash** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Git
Automated review identified **Git** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Markdown
Automated review identified **Markdown** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
