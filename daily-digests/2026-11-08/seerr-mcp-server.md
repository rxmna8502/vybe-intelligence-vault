---
title: "cyanheads/seerr-mcp-server"
content_type: "repo"
engine: "v2"
category: "Agent Framework"
tech_stack: ["TypeScript", "Bun", "Model Context Protocol (MCP)", "Jellyseerr", "Overseerr", "Node.js", "@cyanheads/mcp-ts-core"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Medium"
tags: ["MCP server", "media request automation", "Jellyseerr", "Overseerr", "guarded writes"]
source: "https://github.com/cyanheads/seerr-mcp-server"
stars: 1
language: "TypeScript"
last_updated: "2026-08-02T14:57:30Z"
discovered_at: "2026-08-02T15:02:56Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A Model Context Protocol (MCP) server that integrates with Jellyseerr/Overseerr to enable AI agents to search for media, check availability, and create guarded media requests. It acts as a safe, read-only and guarded-write interface for managing media requests without direct access to Radarr/Sonarr.

## Key Features
- Six tools for media discovery, confirmation, request creation, and status tracking with Jellyseerr/Overseerr
- Guarded write operations with preview mode and explicit confirmation for safety
- PII and infrastructure redaction to protect sensitive data
- Status decoding for human-readable error handling and guidance
- Supports both STDIO and Streamable HTTP transports for MCP clients

## Why It Matters for RAG Builders
It provides a secure, agent-friendly interface to manage media requests via Jellyseerr/Overseerr, enabling AI systems to safely interact with media libraries without exposing sensitive backend details.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Bun
Automated review identified **Bun** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Jellyseerr
Automated review identified **Jellyseerr** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Overseerr
Automated review identified **Overseerr** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### @cyanheads/mcp-ts-core
Automated review identified **@cyanheads/mcp-ts-core** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
