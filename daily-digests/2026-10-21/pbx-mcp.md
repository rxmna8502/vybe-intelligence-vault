---
title: "ictinnovations/pbx-mcp"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["TypeScript", "Node.js", "MCP (Model Context Protocol)", "Asterisk AMI", "FreeSWITCH ESL", "Docker"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Medium"
tags: ["PBX", "Asterisk", "FreeSWITCH", "MCP server", "Telephony"]
source: "https://github.com/ictinnovations/pbx-mcp"
stars: 2
language: "TypeScript"
last_updated: "2026-08-10T13:02:01Z"
discovered_at: "2026-08-10T13:09:03Z"
evaluated_by: "mistral-small-latest"
---

## Summary
pbx-mcp is an MCP server that enables AI assistants to inspect and control Asterisk and FreeSWITCH PBX systems via a unified interface. It abstracts the complexity of PBX command sets, allowing models to query live system status, endpoints, and dialplans without manual context switching.

## Key Features
- Unified tool surface for Asterisk (AMI) and FreeSWITCH (ESL) with read-only and write-mode capabilities
- Safety mechanisms including read-only defaults, command allow-lists, word-level scanning, and output clamping
- Prebuilt Docker image for easy deployment without Node.js on the PBX host
- Environment variable-driven configuration for seamless integration with MCP clients
- Zero third-party dependencies for the core PBX protocol clients

## Why It Matters for RAG Builders
It bridges the gap between AI assistants and live PBX systems, enabling real-time troubleshooting and automation without manual intervention or deep PBX expertise.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Asterisk AMI
Automated review identified **Asterisk AMI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FreeSWITCH ESL
Automated review identified **FreeSWITCH ESL** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
