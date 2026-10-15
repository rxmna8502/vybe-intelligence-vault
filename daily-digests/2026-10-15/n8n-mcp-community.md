---
title: "drzamarian/n8n-mcp-community"
content_type: "repo"
engine: "v2"
category: "Agent Framework"
tech_stack: ["TypeScript", "Node.js", "Model Context Protocol (MCP)", "n8n Public API", "npm", "CI/CD (GitHub Actions)", "Security Scanners (Gitleaks, Semgrep, Trivy)"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Medium"
tags: ["MCP Server", "n8n Integration", "Workflow Automation", "Security-First", "Self-Hosted"]
source: "https://github.com/drzamarian/n8n-mcp-community"
stars: 0
language: "TypeScript"
last_updated: "2026-07-21T03:51:18Z"
discovered_at: "2026-07-21T04:15:14Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A security-focused Model Context Protocol (MCP) server for self-hosted n8n Community Edition, enabling secure management of workflows, executions, credentials, and metadata through 44 bounded tools with progressive safety modes.

## Key Features
- 44 bounded tools for n8n management (workflows, executions, credentials, tags, users, diagnostics)
- Progressive safety modes (read-only, write, unsafe) with per-call confirmation gates for destructive operations
- Deterministic local introspection engine (23-rule) for diagnostics without executing workflows or contacting external models
- Surgical node updates with non-atomic concurrency guards and data minimization (no credential/raw execution values returned)
- Byte-reproducible artifacts, provenance attestations, and reproducible dependency-license gates

## Why It Matters for RAG Builders
It provides a secure, self-hosted interface to manage n8n workflows and metadata for AI agents while enforcing strict safety and data minimization policies.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### n8n Public API
Automated review identified **n8n Public API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### npm
Automated review identified **npm** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CI/CD (GitHub Actions)
Automated review identified **CI/CD (GitHub Actions)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Security Scanners (Gitleaks, Semgrep, Trivy)
Automated review identified **Security Scanners (Gitleaks, Semgrep, Trivy)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
