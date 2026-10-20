---
title: "oktopeak/clio-mcp"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["TypeScript", "Node.js", "Model Context Protocol (MCP)", "OAuth 2.0", "AES-256-GCM", "HTTP/SSE", "stdio", "npm"]
quality_score: 9
rag_relevance: 7
deployment_complexity: "Medium"
tags: ["MCP server", "Claude integration", "Clio connector", "legal tech", "compliance"]
source: "https://github.com/oktopeak/clio-mcp"
stars: 22
language: "TypeScript"
last_updated: "2026-09-02T08:11:41Z"
discovered_at: "2026-09-02T08:22:47Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Clio MCP Server is an open-source Model Context Protocol (MCP) connector that enables Claude to securely access live data from Clio Practice Management, including matters, contacts, tasks, and documents. It prioritizes compliance with ABA Opinion 512 and attorney-client privilege by logging all tool calls locally and encrypting OAuth tokens at rest.

## Key Features
- Secure OAuth 2.0 authentication with encrypted token storage (AES-256-GCM)
- Comprehensive audit logging for ABA Opinion 512 compliance
- Supports 34 Clio tools (read/write) across matters, tasks, contacts, and billing
- Local-first architecture with no relay server or cloud data retention
- Read-only mode and configurable write permissions for granular access control

## Why It Matters for RAG Builders
It enables secure, compliant integration of Clio's practice management data with AI workflows like Claude, ensuring attorney-client privilege and regulatory compliance while avoiding data exposure risks.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OAuth 2.0
Automated review identified **OAuth 2.0** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### AES-256-GCM
Automated review identified **AES-256-GCM** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HTTP/SSE
Automated review identified **HTTP/SSE** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### stdio
Automated review identified **stdio** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### npm
Automated review identified **npm** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
