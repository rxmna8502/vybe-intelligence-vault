---
title: "jarmstrong158/context-keeper-remote"
content_type: "repo"
engine: "v2"
category: "Agent Framework"
tech_stack: ["TypeScript", "Cloudflare Workers", "Cloudflare D1", "Model Context Protocol (MCP)", "Streamable HTTP", "Wrangler", "Node.js"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Low"
tags: ["MCP server", "Cloudflare Workers", "Rationale store", "claude.ai connector", "self-hosted"]
source: "https://github.com/jarmstrong158/context-keeper-remote"
stars: 0
language: "TypeScript"
last_updated: "2026-08-02T13:38:30Z"
discovered_at: "2026-08-02T13:49:42Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A remote MCP server deployed on Cloudflare Workers that exposes a rationale store (decisions, pipelines, constraints) via Streamable HTTP. It functions as a claude.ai custom connector, enabling access to project context from any device without requiring a local machine to be running.

## Key Features
- One-click deployment to Cloudflare Workers with auto-provisioned D1 database
- Stateless MCP server with runtime schema migration and no Durable Objects dependency
- Secret-path authentication embedded in the URL for secure access
- Unified tools for recording, querying, and managing project context (decisions, pipelines, constraints)
- Bulk import/export and synchronization capabilities for existing local data

## Why It Matters for RAG Builders
It enables AI agents and users to access and manage project rationale and constraints remotely without infrastructure dependencies, enhancing collaboration and continuity across devices.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Cloudflare Workers
Automated review identified **Cloudflare Workers** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Cloudflare D1
Automated review identified **Cloudflare D1** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Streamable HTTP
Automated review identified **Streamable HTTP** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Wrangler
Automated review identified **Wrangler** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
