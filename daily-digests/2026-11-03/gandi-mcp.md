---
title: "themkn/gandi-mcp"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["TypeScript", "Node.js", "Model Context Protocol (MCP)", "Gandi LiveDNS API", "Zod", "Hono", "PNPM"]
quality_score: 9
rag_relevance: 7
deployment_complexity: "Low"
tags: ["DNS management", "MCP server", "Gandi LiveDNS", "automation", "backup"]
source: "https://github.com/themkn/gandi-mcp"
stars: 3
language: "TypeScript"
last_updated: "2026-07-21T12:17:23Z"
discovered_at: "2026-07-21T12:23:56Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A Model Context Protocol (MCP) server for Gandi LiveDNS that enables DNS record management, domain listing, and zone snapshots directly from MCP-compatible clients like Claude Code. It provides secure, timestamped backups for all DNS mutations and integrates seamlessly with Gandi's API.

## Key Features
- 8 MCP tools for DNS operations (list, add, update, delete records, manage snapshots)
- Automatic local JSON backups before every DNS mutation with configurable auto-backup
- One-file JSON configuration with strict permissions (0600) for secure API key storage
- Supports Gandi Personal Access Tokens (PATs) with scoped domain permissions
- Integration with Claude Code and other MCP clients for seamless DNS automation

## Why It Matters for RAG Builders
It enables secure, automated DNS management within AI workflows, reducing manual intervention and improving reliability for RAG systems that rely on accurate DNS configurations.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Gandi LiveDNS API
Automated review identified **Gandi LiveDNS API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Zod
Automated review identified **Zod** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Hono
Automated review identified **Hono** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PNPM
Automated review identified **PNPM** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
