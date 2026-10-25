---
title: "SAP/aas-mcp-server"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Python", "FastMCP", "OpenAPI", "Docker", "OAuth 2.1", "YAML", "Model Context Protocol (MCP)"]
quality_score: 9
rag_relevance: 9
deployment_complexity: "Medium"
tags: ["MCP", "Asset Administration Shell", "OpenAPI", "LLM Integration", "Industrial IoT"]
source: "https://github.com/SAP/aas-mcp-server"
stars: 4
language: "Python"
last_updated: "2026-07-19T13:09:17Z"
discovered_at: "2026-07-19T13:17:26Z"
evaluated_by: "mistral-small-latest"
---

## Summary
An MCP (Model Context Protocol) server that bridges OpenAPI specifications for Asset Administration Shell (AAS) APIs, enabling LLM agents to interact with AAS-compliant backends through standardized MCP tools.

## Key Features
- Converts AAS OpenAPI specs into MCP tools for LLM agents
- Supports read-only and write operations with allowlist-based curation
- Provides OAuth 2.1 + PKCE authentication for secure HTTP transport
- Flattening and pruning of OpenAPI specs to resolve inheritance and circular references
- Docker and local deployment options with configurable components (aas-repo, submodel-repo, etc.)

## Why It Matters for RAG Builders
It enables seamless integration of AAS-compliant industrial IoT systems with LLM agents via the Model Context Protocol, unlocking contextual interactions with asset data for AI-driven automation.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastMCP
Automated review identified **FastMCP** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenAPI
Automated review identified **OpenAPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OAuth 2.1
Automated review identified **OAuth 2.1** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### YAML
Automated review identified **YAML** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
