---
title: "KryptosAI/mcp-seatbelt"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["TypeScript", "Node.js", "JSON-RPC 2.0", "YAML", "npm", "Express.js", "React", "SARIF 2.1.0"]
quality_score: 9
rag_relevance: 10
deployment_complexity: "Medium"
tags: ["MCP security", "runtime enforcement", "AI agent guardrails", "policy engine", "proxy server"]
source: "https://github.com/KryptosAI/mcp-seatbelt"
stars: 0
language: "TypeScript"
last_updated: "2026-07-15T22:56:39Z"
discovered_at: "2026-07-15T23:02:17Z"
evaluated_by: "mistral-small-latest"
---

## Summary
MCP Seatbelt provides runtime guardrails for AI agent tools by acting as a transparent proxy that intercepts and enforces policies on MCP server tool calls before they execute. It detects MCP configurations across 8+ AI agent clients and blocks dangerous operations in real-time.

## Key Features
- Detects MCP configs across 8+ AI agent clients automatically
- Runtime proxy with policy enforcement (allow/deny/warn/redact)
- 13 built-in risk rules covering shell, network, filesystem, and credentials
- Policy engine with time-windowed rules, learning mode, and rule inheritance
- Live dashboard, SARIF reports, and CI/CD integration

## Why It Matters for RAG Builders
It prevents destructive or malicious tool calls from AI agents by enforcing security policies at runtime, bridging the gap between static analysis and live enforcement for MCP servers.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSON-RPC 2.0
Automated review identified **JSON-RPC 2.0** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### YAML
Automated review identified **YAML** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### npm
Automated review identified **npm** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Express.js
Automated review identified **Express.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### React
Automated review identified **React** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SARIF 2.1.0
Automated review identified **SARIF 2.1.0** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
