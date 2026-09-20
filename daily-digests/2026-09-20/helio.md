---
title: "gethelio/helio"
content_type: "repo"
engine: "v2"
category: "Orchestrator"
tech_stack: ["TypeScript", "Node.js", "MCP (Model Context Protocol)", "YAML", "SQLite", "React", "Docker"]
quality_score: 9
rag_relevance: 10
deployment_complexity: "Medium"
tags: ["governance", "policy enforcement", "MCP proxy", "audit trail", "spend control"]
source: "https://github.com/gethelio/helio"
stars: 8
language: "TypeScript"
last_updated: "2026-07-21T10:16:47Z"
discovered_at: "2026-07-21T10:24:33Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Helio is an open-source governance proxy for AI agents that enforces policies, checks evidence, routes approvals, caps spend, and records every tool call without requiring changes to agent code or MCP servers. It acts as a transparent intermediary between agents and tools, ensuring compliance and auditability.

## Key Features
- Policy engine with declarative YAML rules for tool call governance, including rate limiting, spend caps, and approval workflows
- Cross-tool spend budgets with cumulative enforcement and break-glass approvals for overages
- Evidence grounding to require proof before high-stakes actions (e.g., refunds requiring prior order lookup)
- Self-repair feedback to agents with structured explanations and suggestions for blocked actions
- Built-in dashboard for real-time monitoring, audit trails, and policy management

## Why It Matters for RAG Builders
Helio is essential for RAG builders as it provides a robust governance layer to enforce policies, control costs, and ensure auditability across AI agent tool calls without modifying existing agent or MCP server code.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### YAML
Automated review identified **YAML** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### React
Automated review identified **React** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
