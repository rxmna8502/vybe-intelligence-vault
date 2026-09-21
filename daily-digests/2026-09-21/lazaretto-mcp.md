---
title: "jamesdfinance-dev/lazaretto-mcp"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["JavaScript", "Node.js", "MCP (Model Context Protocol)", "HTTPS", "REST API"]
quality_score: 7
rag_relevance: 8
deployment_complexity: "Low"
tags: ["MCP server", "security scanning", "malicious artifact detection", "package verification", "agent tooling"]
source: "https://github.com/jamesdfinance-dev/lazaretto-mcp"
stars: 0
language: "JavaScript"
last_updated: "2026-07-16T16:24:25Z"
discovered_at: "2026-07-16T16:25:41Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A lightweight MCP server that acts as a client for the Lazaretto API, enabling agents to verify the safety of skills, tools, or packages before installation by checking against a known-bad artifact database or performing deterministic scans.

## Key Features
- Thin client for the Lazaretto API with no embedded detection logic, ensuring auditability
- Two primary tools: `known_bad_lookup` (exact-hash match) and `scan_artifact` (deterministic verdict with evidence)
- Supports scanning npm packages, GitHub repos, ClawHub skills, raw URLs, or inline text
- Free tier available for basic lookups; paid scans require API key or prepaid credits
- Deterministic verdicts (`malicious`, `flagged`, `clear`, `error`) with supporting evidence

## Why It Matters for RAG Builders
It provides a critical security layer for AI agents by verifying the safety of tools or packages before installation, reducing the risk of malicious artifacts in RAG or agent workflows.

## Tech Stack Deep Dive
### JavaScript
Automated review identified **JavaScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HTTPS
Automated review identified **HTTPS** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### REST API
Automated review identified **REST API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
