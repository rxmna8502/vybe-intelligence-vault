---
title: "TimWongUp/agentnave"
content_type: "repo"
engine: "v2"
category: "Orchestrator"
tech_stack: ["Python", "MCP (Model Context Protocol)", "STDIO", "uv (Python package manager)", "POSIX process management"]
quality_score: 8
rag_relevance: 7
deployment_complexity: "Medium"
tags: ["MCP server", "subagent orchestration", "AI workflows", "process supervision", "local agent management"]
source: "https://github.com/TimWongUp/agentnave"
stars: 0
language: "Python"
last_updated: "2026-09-03T01:57:51Z"
discovered_at: "2026-09-03T02:24:33Z"
evaluated_by: "mistral-small-latest"
---

## Summary
AgentNave is a local STDIO MCP server designed to launch and supervise subagents like Antigravity CLI, Claude Code, CodeBuddy, or Grok CLI for AI agent workflows. It delegates planning, parallelism, and worktree management to the calling Agent Manager while providing lifecycle control and structured invocation results.

## Key Features
- Launches and supervises subagents (Antigravity, Claude Code, CodeBuddy, Grok) via STDIO MCP
- Provides lifecycle control tools: start_agent, wait_agent, cancel_agent
- Isolated Python 3.12 runtime via uv for clean dependency management
- Structured JSON Schema-based input/output for agent-correctable errors
- No durable user data; delegates authentication and permissions to provider CLIs

## Why It Matters for RAG Builders
AgentNave enables AI agents to dynamically spawn and manage specialized subagents for complex tasks, streamlining multi-agent workflows without reinventing process supervision.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### STDIO
Automated review identified **STDIO** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### uv (Python package manager)
Automated review identified **uv (Python package manager)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### POSIX process management
Automated review identified **POSIX process management** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
