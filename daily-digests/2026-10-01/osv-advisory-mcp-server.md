---
title: "cyanheads/osv-advisory-mcp-server"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["TypeScript", "Bun", "Model Context Protocol (MCP)", "OSV.dev API", "Docker", "Node.js"]
quality_score: 9
rag_relevance: 10
deployment_complexity: "Low"
tags: ["vulnerability scanning", "dependency audit", "MCP server", "OSV.dev", "security"]
source: "https://github.com/cyanheads/osv-advisory-mcp-server"
stars: 1
language: "TypeScript"
last_updated: "2026-07-11T17:43:21Z"
discovered_at: "2026-07-11T17:54:59Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A Model Context Protocol (MCP) server that queries the OSV.dev vulnerability database to fetch package advisories, perform batch dependency audits, and retrieve full vulnerability records. Supports both STDIO and Streamable HTTP transports for seamless integration with AI agents and development tools.

## Key Features
- Query single package vulnerabilities with `osv_query_package` tool
- Batch audit dependencies or SBOMs with `osv_query_batch` tool (supports 1-1000 packages per call)
- Fetch full advisory records by OSV ID using `osv_get_vulnerability` tool
- List supported ecosystems with `osv_list_ecosystems` tool for validation
- No API key required; OSV.dev is fully public and keyless

## Why It Matters for RAG Builders
This MCP server is essential for RAG builders as it provides a standardized, agent-friendly interface to query and retrieve vulnerability data from OSV.dev, enabling secure and efficient dependency auditing and security analysis in AI-driven workflows.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Bun
Automated review identified **Bun** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OSV.dev API
Automated review identified **OSV.dev API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
