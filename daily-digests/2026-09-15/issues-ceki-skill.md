---
title: "Ceki-me/issues-ceki-skill"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Shell", "JavaScript/TypeScript", "CLI", "Node.js", "@ceki/sdk", "jq"]
quality_score: 7
rag_relevance: 6
deployment_complexity: "Medium"
tags: ["task management", "contract events", "AI agent workflows", "CLI integration", "lifecycle tracking"]
source: "https://github.com/Ceki-me/issues-ceki-skill"
stars: 0
language: "Shell"
last_updated: "2026-07-19T17:57:01Z"
discovered_at: "2026-07-19T17:58:53Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A skill for the Ceki platform that enables AI agents to manage tasks and contracts via a CLI-based task queue. It integrates with the `ceki` SDK to handle lifecycle events, roles, timelogging, and human escalation for agent workflows.

## Key Features
- Converts contracts into task queues for AI agents with a defined lifecycle (Pending → Approved → Done → Testing → Review → Closed)
- Supports roles (Hand, QA, Reviewer, Creator) and agent filters for task assignment
- Includes timelogging for tracking task duration and activity
- Provides global configuration via `~/.ceki/config` for shared defaults
- Enables human escalation for stuck tasks via `call-human` command

## Why It Matters for RAG Builders
It streamlines task and contract management for AI agents, enabling structured workflows, role-based task assignment, and seamless human escalation within the Ceki platform.

## Tech Stack Deep Dive
### Shell
Automated review identified **Shell** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JavaScript/TypeScript
Automated review identified **JavaScript/TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CLI
Automated review identified **CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### @ceki/sdk
Automated review identified **@ceki/sdk** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### jq
Automated review identified **jq** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
