---
title: "aislon/uizze-mcp"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["MCP (Model Context Protocol)", "HTTP/REST APIs", "Bearer Token Authentication", "OCR (Optical Character Recognition)", "Structured Data Contracts"]
quality_score: 8
rag_relevance: 7
deployment_complexity: "Low"
tags: ["UI design", "coding agents", "MCP server", "design validation", "anti-slop"]
source: "https://github.com/aislon/uizze-mcp"
stars: 0
language: "None"
last_updated: "2026-07-11T22:39:33Z"
discovered_at: "2026-07-11T22:45:02Z"
evaluated_by: "mistral-small-latest"
---

## Summary
UIZZE MCP provides an anti-slop UI context layer for coding agents, enabling them to inspect real UI references before implementation. It offers a hosted MCP workflow with design contracts, validation, audits, and critiques to improve UI development accuracy and reduce generic guesses.

## Key Features
- Public catalog of real web and iOS UI references for visual context
- Structured design contracts and implementation manifests for agents
- Hosted MCP workflow with validation, audits, and critiques
- Bearer token-based authentication for secure agent access
- Integration with popular coding agents like Codex, Claude Code, and Cursor

## Why It Matters for RAG Builders
It enables coding agents to avoid generic UI implementations by providing real-world visual context and structured validation workflows.

## Tech Stack Deep Dive
### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HTTP/REST APIs
Automated review identified **HTTP/REST APIs** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Bearer Token Authentication
Automated review identified **Bearer Token Authentication** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OCR (Optical Character Recognition)
Automated review identified **OCR (Optical Character Recognition)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Structured Data Contracts
Automated review identified **Structured Data Contracts** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
npx skills add aislon/uizze-mcp --skill uizze-ui-research
```

The hosted MCP endpoint is https://uizze.com/mcp and requires full access plus an `Authorization: Bearer <UIZZE agent token>` header. Supported setup details are at https://uizze.com/docs.

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
