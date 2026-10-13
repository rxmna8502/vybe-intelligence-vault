---
title: "gugug168/cc-delegate"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Python", "WorkBuddy", "Claude Code CLI", "MCP (Model Context Protocol)", "Bash scripting", "Node.js (for MCP bridge)"]
quality_score: 8
rag_relevance: 7
deployment_complexity: "Medium"
tags: ["task delegation", "context preservation", "long-running workflows", "session management", "Claude Code integration"]
source: "https://github.com/gugug168/cc-delegate"
stars: 0
language: "Python"
last_updated: "2026-07-12T14:53:10Z"
discovered_at: "2026-07-12T14:54:42Z"
evaluated_by: "mistral-small-latest"
---

## Summary
cc-delegate is a WorkBuddy skill designed to delegate long-running tasks to the local Claude Code CLI while preserving context across sessions. It enables seamless task handoffs, real-time monitoring, and stateful resumption using session IDs or handoff documents, ensuring continuity for multi-stage or interrupted workflows.

## Key Features
- Stateful task resumption using session IDs (--resume) to preserve Claude Code's memory across calls
- Handoff documents (STATUS: DONE/IN_PROGRESS) for fallback context retention
- Real-time monitoring and precise process termination to avoid collateral damage
- Session registry for tracking project progress and enabling remote continuation
- Windowed polling (30s intervals) for long tasks to maintain continuity in a single WorkBuddy window

## Why It Matters for RAG Builders
It enables reliable delegation of long or multi-stage tasks to Claude Code while preserving context, reducing the need for monolithic prompts and improving workflow continuity for AI-driven development.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### WorkBuddy
Automated review identified **WorkBuddy** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Claude Code CLI
Automated review identified **Claude Code CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Bash scripting
Automated review identified **Bash scripting** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js (for MCP bridge)
Automated review identified **Node.js (for MCP bridge)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
