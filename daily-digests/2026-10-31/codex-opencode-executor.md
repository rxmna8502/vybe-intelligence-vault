---
title: "pradhankukiran/codex-opencode-executor"
content_type: "repo"
engine: "v2"
category: "Orchestrator"
tech_stack: ["Go", "MCP (Model Context Protocol)", "Git", "OpenCode", "STDIO", "HTTP API"]
quality_score: 7
rag_relevance: 8
deployment_complexity: "Medium"
tags: ["MCP integration", "Codex orchestrator", "OpenCode executor", "durable sessions", "Git worktrees"]
source: "https://github.com/pradhankukiran/codex-opencode-executor"
stars: 0
language: "Go"
last_updated: "2026-07-18T14:38:11Z"
discovered_at: "2026-07-18T14:50:48Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A local STDIO MCP server that bridges Codex with OpenCode models, enabling durable, isolated coding executors for delegated model sessions. Codex remains the orchestrator while OpenCode handles execution context and tools.

## Key Features
- Local STDIO MCP server for Codex integration
- Durable job state and workspace management
- Git worktree isolation for safe execution
- Configurable permission modes (inherit, ask, deny, yolo)
- Asynchronous job submission, polling, and cancellation

## Why It Matters for RAG Builders
It enables Codex to delegate coding tasks to external OpenCode models while maintaining control over orchestration, session management, and workspace isolation.

## Tech Stack Deep Dive
### Go
Automated review identified **Go** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Git
Automated review identified **Git** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenCode
Automated review identified **OpenCode** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### STDIO
Automated review identified **STDIO** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HTTP API
Automated review identified **HTTP API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
