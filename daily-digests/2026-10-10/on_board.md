---
title: "swisspra/On_Board"
content_type: "repo"
engine: "v2"
category: "Orchestrator"
tech_stack: ["Python", "MCP (Model Context Protocol)", "Rust (for dependencies)", "Bash (for setup scripts)", "JSON (for configuration)"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Medium"
tags: ["multi-agent coordination", "shared memory", "MCP server", "agent handoffs", "local-first"]
source: "https://github.com/swisspra/On_Board"
stars: 2
language: "Python"
last_updated: "2026-08-01T13:07:39Z"
discovered_at: "2026-08-01T13:16:52Z"
evaluated_by: "mistral-small-latest"
---

## Summary
On_Board is a local MCP server that enables shared project memory and coordination for AI agents across multiple IDEs and clients. It allows agents to wake each other, eliminating the need for human relay in multi-agent workflows.

## Key Features
- Agent-to-agent wake-up mechanism via `memory_wait_for_event` for real-time coordination
- Project-local memory storage in `.agent-mem/` for shared context across agents
- Ticket queue and handoff history for structured workflow management
- Role-based access control to prevent unauthorized actions (e.g., solo agents cannot approve their own work)
- Supports 29 MCP tools for agent lifecycle, memory management, and event handling

## Why It Matters for RAG Builders
It enables seamless multi-agent collaboration with shared context, reducing human relay overhead and accelerating workflows like code review and bug fixing.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Rust (for dependencies)
Automated review identified **Rust (for dependencies)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Bash (for setup scripts)
Automated review identified **Bash (for setup scripts)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSON (for configuration)
Automated review identified **JSON (for configuration)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
