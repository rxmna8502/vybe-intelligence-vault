---
title: "vk0dev/agent-cost-mcp"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["TypeScript", "Node.js", "Model Context Protocol (MCP)", "JSONL", "npm"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Low"
tags: ["cost monitoring", "Claude Code", "local-first", "guardrails", "token attribution"]
source: "https://github.com/vk0dev/agent-cost-mcp"
stars: 0
language: "TypeScript"
last_updated: "2026-07-13T06:09:12Z"
discovered_at: "2026-07-13T06:15:39Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A local-first cost monitoring and guardrail tool for AI agents in Claude Code that analyzes JSONL session logs to attribute token spend by provider, model, tool, or subagent, detect anomalies, and forecast future costs without requiring a hosted control plane.

## Key Features
- Parses local Claude Code JSONL session logs to attribute spend by tool, model, or subagent
- Detects cost anomalies and trends using local baselines tied to assistant-row timestamps
- Provides forward-looking cost forecasts and run-time estimates to prevent budget overruns
- Offers machine-readable optimization suggestions and budget cap configurations
- Supports signed monitor-webhook alerts for proactive guardrails without cloud dependency

## Why It Matters for RAG Builders
It enables AI engineers to locally audit, attribute, and prevent cost overruns in agentic workflows without relying on external dashboards or cloud services.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSONL
Automated review identified **JSONL** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### npm
Automated review identified **npm** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
