---
title: "kaiser-data/kitsune-mcp"
content_type: "repo"
engine: "v2"
category: "Orchestrator"
tech_stack: ["Python", "FastMCP", "uvx", "npx", "MCP (Model Context Protocol)", "GitHub Actions", "Docker"]
quality_score: 9
rag_relevance: 10
deployment_complexity: "Medium"
tags: ["MCP gateway", "dynamic tool mounting", "token optimization", "server orchestration", "schema validation"]
source: "https://github.com/kaiser-data/kitsune-mcp"
stars: 0
language: "Python"
last_updated: "2026-07-11T13:06:58Z"
discovered_at: "2026-07-11T13:14:42Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Kitsune MCP is a dynamic gateway server that discovers, installs, and mounts over 130,000 MCP servers at runtime, reducing token overhead by up to 93% compared to always-on servers. It enables on-demand tool access with structured schemas while maintaining a low fixed token cost.

## Key Features
- On-demand mounting and unmounting of MCP servers via `shapeshift()` to minimize context bloat
- Supports 130,000+ servers across 7 registries (npm, PyPI, GitHub, Smithery, etc.)
- Fixed ~1,321-token overhead regardless of the number of active servers, enabling significant token savings
- Structured tool schemas for reliable long-tail CLI command execution with ~95% accuracy
- Built-in search, authentication, and auto-routing for seamless server discovery and usage

## Why It Matters for RAG Builders
Kitsune MCP is essential for RAG/AI stack builders because it drastically reduces token costs and context bloat while enabling reliable, schema-validated access to thousands of tools on demand.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastMCP
Automated review identified **FastMCP** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### uvx
Automated review identified **uvx** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### npx
Automated review identified **npx** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### GitHub Actions
Automated review identified **GitHub Actions** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
