---
title: "mateo-cuello/orchestrator-claude--agy"
content_type: "repo"
engine: "v2"
category: "Orchestrator"
tech_stack: ["JavaScript", "Node.js", "MCP (Model Context Protocol)", "Google Antigravity CLI", "Claude Code"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Medium"
tags: ["MCP server", "Claude Code integration", "parallel task execution", "structured output", "Gemini sub-agents"]
source: "https://github.com/mateo-cuello/orchestrator-claude--agy"
stars: 2
language: "JavaScript"
last_updated: "2026-08-09T03:28:24Z"
discovered_at: "2026-08-09T03:45:39Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A bridge MCP server that integrates Google Antigravity's CLI (`agy`) as sub-agents for Claude Code, enabling parallel task execution, background jobs, and structured output delegation. It enhances context retention and reduces Claude's context window load by offloading high-ratio tasks to specialized workers.

## Key Features
- Parallel task fan-out with `agy_fanout` for concurrent worker execution
- Background job management with `agy_start`, `agy_result`, and `agy_jobs`
- Structured output parsing and trace logging for transparency
- Native subagents (`agy-researcher`, `agy-auditor`, etc.) for specialized tasks
- Silent failure detection and permission/quota error handling

## Why It Matters for RAG Builders
It enables AI engineers to offload high-context-ratio tasks to specialized workers, reducing Claude's context window load and improving session efficiency for complex workflows.

## Tech Stack Deep Dive
### JavaScript
Automated review identified **JavaScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Google Antigravity CLI
Automated review identified **Google Antigravity CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Claude Code
Automated review identified **Claude Code** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
