---
title: "kugamon/linkedin-mcp-chrome"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Python", "FastMCP", "Chromium (Patchright)", "LinkedIn MCP Server", "uvx", "PyPI"]
quality_score: 8
rag_relevance: 7
deployment_complexity: "Medium"
tags: ["LinkedIn", "MCP", "Claude Desktop", "authentication", "dependency management"]
source: "https://github.com/kugamon/linkedin-mcp-chrome"
stars: 0
language: "Python"
last_updated: "2026-09-03T08:30:30Z"
discovered_at: "2026-09-03T08:37:36Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A defensive wrapper around the upstream `mcp-server-linkedin` package that pins `fastmcp<4.0` to prevent crashes from FastMCP 4.0 API changes. It provides a Chromium-based auth flow for LinkedIn integration with Claude Desktop, ensuring seamless and persistent LinkedIn tool access without manual dependency management.

## Key Features
- Defensive wrapper to prevent FastMCP 4.0 API breakage by pinning `fastmcp<4.0`
- Chromium-based auth flow with persistent session storage in `~/.linkedin-mcp/profile/`
- Zero runtime behavior changes—inherits all 17 LinkedIn tools from upstream
- Seamless integration with Claude Desktop via `uvx linkedin-mcp-chrome`
- Automated setup and troubleshooting guidance for local development

## Why It Matters for RAG Builders
It ensures stable, crash-free LinkedIn MCP tool access for AI agents by preventing upstream dependency breakage, reducing manual configuration overhead for developers.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastMCP
Automated review identified **FastMCP** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Chromium (Patchright)
Automated review identified **Chromium (Patchright)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### LinkedIn MCP Server
Automated review identified **LinkedIn MCP Server** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### uvx
Automated review identified **uvx** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PyPI
Automated review identified **PyPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
