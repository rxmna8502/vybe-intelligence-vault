---
title: "AgentSafe-AI/tooltrust-scanner"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Go", "MCP (Model Context Protocol)", "OSV (Open Source Vulnerabilities)", "GitHub Actions", "CLI", "Static Analysis"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Low"
tags: ["security scanning", "MCP tools", "supply chain security", "agent tool validation", "static analysis"]
source: "https://github.com/AgentSafe-AI/tooltrust-scanner"
stars: 17
language: "Go"
last_updated: "2026-07-17T21:47:36Z"
discovered_at: "2026-07-17T21:52:30Z"
evaluated_by: "mistral-small-latest"
---

## Summary
ToolTrust Scanner is a static security scanner for Model Context Protocol (MCP) tool definitions, assigning trust grades (A-F) to evaluate risks like prompt injection, privilege escalation, and supply-chain vulnerabilities before agents use tools.

## Key Features
- Assigns trust grades (A-F) to MCP tool definitions based on 16+ static security rules
- Detects critical risks like arbitrary code execution, tool poisoning, and supply-chain CVEs
- Operates as an MCP server, CLI, or CI tool for seamless integration into agent workflows
- Provides deterministic, reproducible scans with no LLM calls or external data exposure
- Includes a public ToolTrust Directory for real-time trust grade lookups and aggregated reports

## Why It Matters for RAG Builders
It ensures AI agents only use vetted, secure tools by statically analyzing MCP definitions for critical vulnerabilities before execution, reducing attack surfaces in agentic workflows.

## Tech Stack Deep Dive
### Go
Automated review identified **Go** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OSV (Open Source Vulnerabilities)
Automated review identified **OSV (Open Source Vulnerabilities)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### GitHub Actions
Automated review identified **GitHub Actions** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CLI
Automated review identified **CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Static Analysis
Automated review identified **Static Analysis** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
