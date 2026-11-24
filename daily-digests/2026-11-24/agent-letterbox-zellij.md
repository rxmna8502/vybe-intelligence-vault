---
title: "SimonMallas/agent-letterbox-zellij"
content_type: "repo"
engine: "v2"
category: "Orchestrator"
tech_stack: ["Bash", "Zellij", "Git", "Shell scripting", "Markdown"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Medium"
tags: ["multi-agent coordination", "durable task handoffs", "Zellij integration", "agent memory", "terminal multiplexing"]
source: "https://github.com/SimonMallas/agent-letterbox-zellij"
stars: 1
language: "Shell"
last_updated: "2026-09-02T19:10:33Z"
discovered_at: "2026-09-02T19:13:01Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Agent Letterbox for Zellij is a coordination layer that enables durable, inspectable task handoffs between AI coding agents running in Zellij panes. It ensures work is tracked as persistent 'letters' on disk while optionally providing live terminal notifications (doorbells) to wake agents.

## Key Features
- Durable task handoffs stored as Markdown letters on disk, preserving context and history
- Optional live terminal notifications (doorbells) to wake agents in Zellij panes
- Explicit ACK/NACK/RESULT lifecycle for task ownership and progress tracking
- Addressable doorbells with 8-hex tokens for targeted agent wake-ups
- Cross-terminal compatibility with the Agent Letterbox protocol family

## Why It Matters for RAG Builders
It provides a reliable, inspectable way to coordinate multiple AI agents in Zellij without losing task context or requiring human relay work.

## Tech Stack Deep Dive
### Bash
Automated review identified **Bash** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Zellij
Automated review identified **Zellij** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Git
Automated review identified **Git** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Shell scripting
Automated review identified **Shell scripting** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Markdown
Automated review identified **Markdown** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
