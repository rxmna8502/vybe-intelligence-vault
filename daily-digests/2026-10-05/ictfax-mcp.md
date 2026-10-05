---
title: "ictinnovations/ictfax-mcp"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["TypeScript", "Node.js", "Model Context Protocol (MCP)", "REST API", "JWT Authentication"]
quality_score: 8
rag_relevance: 7
deployment_complexity: "Low"
tags: ["MCP server", "fax automation", "ICTCore integration", "document management", "telephony"]
source: "https://github.com/ictinnovations/ictfax-mcp"
stars: 0
language: "TypeScript"
last_updated: "2026-09-01T08:59:11Z"
discovered_at: "2026-09-01T09:10:16Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A Model Context Protocol (MCP) server for ICTFax, enabling AI assistants to list, track, and manage fax transmissions via the ICTCore REST API. Supports read operations by default and optional write operations (document upload and fax sending) when explicitly enabled.

## Key Features
- Read-only access to fax transmissions and status via MCP tools (ictfax_list_faxes, ictfax_get_fax_status)
- Optional write access for document upload and fax sending (disabled by default for safety)
- Integration with ICTCore REST API for authentication (JWT) and fax operations
- Configurable via environment variables for base URL, credentials, and timeouts
- MIT licensed, open-source, and actively maintained

## Why It Matters for RAG Builders
It enables AI assistants to interact with fax systems for document transmission and tracking, bridging legacy telephony with modern AI workflows.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### REST API
Automated review identified **REST API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JWT Authentication
Automated review identified **JWT Authentication** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
