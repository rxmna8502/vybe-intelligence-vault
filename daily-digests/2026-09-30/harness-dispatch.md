---
title: "fstubner/harness-dispatch"
content_type: "repo"
engine: "v2"
category: "Orchestrator"
tech_stack: ["TypeScript", "Node.js", "MCP (Model Context Protocol)", "YAML", "CLI", "Subprocess Management", "HTTP Server"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Medium"
tags: ["MCP server", "agent orchestration", "coding task routing", "billing-aware", "safety profiles"]
source: "https://github.com/fstubner/harness-dispatch"
stars: 0
language: "TypeScript"
last_updated: "2026-09-02T02:02:12Z"
discovered_at: "2026-09-02T02:13:30Z"
evaluated_by: "mistral-small-latest"
---

## Summary
harness-dispatch is a local MCP server that routes coding tasks to existing agent CLIs (Claude Code, Codex, Cursor, Antigravity) or custom endpoints, acting as a unified orchestrator without reimplementing functionality. It enables AI agents to call these tools directly via tool-calling interfaces, optimizing subscription quota usage and providing billing-aware, safety-constrained task execution.

## Key Features
- Routes coding tasks to existing agent CLIs without reimplementation, preserving their native behavior and billing models
- Supports multiple safety profiles (read_only, workspace_edit, full_auto) with configurable constraints per harness
- Handles billing classification and refuses routes without provider-side ceilings, preventing unexpected charges
- Provides a local HTTP surface for remote clients and long-running job management with status tracking
- Supports custom harnesses via a generic protocol for integrating arbitrary agent CLIs or endpoints

## Why It Matters for RAG Builders
It enables AI agents to directly call and optimize the use of existing agent CLIs, reducing redundancy and improving efficiency in RAG and AI workflows.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### YAML
Automated review identified **YAML** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CLI
Automated review identified **CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Subprocess Management
Automated review identified **Subprocess Management** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HTTP Server
Automated review identified **HTTP Server** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
