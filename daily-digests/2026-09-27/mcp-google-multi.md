---
title: "bakissation/mcp-google-multi"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["TypeScript", "Node.js", "OAuth2", "AES-256-GCM", "REST APIs", "Model Context Protocol (MCP)"]
quality_score: 9
rag_relevance: 7
deployment_complexity: "Medium"
tags: ["Google Workspace", "Multi-account", "OAuth2", "MCP server", "AI tooling"]
source: "https://github.com/bakissation/mcp-google-multi"
stars: 6
language: "TypeScript"
last_updated: "2026-07-17T16:13:33Z"
discovered_at: "2026-07-17T16:14:52Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A local MCP server that enables Claude Code and other MCP clients to interact with multiple Google Workspace accounts (Gmail, Drive, Calendar, Sheets, Docs, etc.) via OAuth2 authentication, providing ~175 tools for cross-account operations with strict security controls.

## Key Features
- Multi-account support with alias-based switching across Google Workspace services
- Secure token encryption at rest (AES-256-GCM) with deny-by-default write policies
- ~175 tools spanning Gmail, Drive, Calendar, Sheets, Docs, Contacts, and more
- Discover-first tooling model to minimize context overload in AI clients
- Fine-grained write control via profiles (read-only, safe-writes, full-writes) and glob-based policies

## Why It Matters for RAG Builders
It provides secure, multi-account access to Google Workspace tools for AI agents, enabling seamless integration with enterprise workflows while maintaining strict security and control.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OAuth2
Automated review identified **OAuth2** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### AES-256-GCM
Automated review identified **AES-256-GCM** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### REST APIs
Automated review identified **REST APIs** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
