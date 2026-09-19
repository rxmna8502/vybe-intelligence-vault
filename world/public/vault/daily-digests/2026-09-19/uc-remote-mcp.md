---
title: "b2dmx/uc-remote-mcp"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Python", "FastMCP", "HTTPX", "mDNS", "Claude Desktop", "Unfolded Circle Core API"]
quality_score: 9
rag_relevance: 7
deployment_complexity: "Medium"
tags: ["MCP server", "Unfolded Circle Remote", "Claude integration", "Home automation", "Natural language control"]
source: "https://github.com/b2dmx/uc-remote-mcp"
stars: 0
language: "Python"
last_updated: "2026-07-15T18:03:10Z"
discovered_at: "2026-07-15T18:06:22Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A Model Context Protocol (MCP) server that exposes the Unfolded Circle Remote 3/Remote Two's configuration and capabilities as conversational tools for AI assistants like Claude. Enables natural language control, configuration, and backup of the remote's UI, buttons, activities, and devices.

## Key Features
- Conversational tool integration for AI assistants (e.g., Claude) to control and configure the remote via plain language
- Discovery and setup of Unfolded Circle remotes via mDNS or direct IP
- Read-only tools for querying remote info, activities, devices, and UI pages
- Mutating tools for remapping buttons, updating UI pages, and restoring configurations with safety checks (dry-run by default)
- Automatic backups before any configuration changes and support for restoring previous states

## Why It Matters for RAG Builders
It enables AI assistants to directly interact with and configure physical devices like the Unfolded Circle Remote, bridging the gap between conversational AI and real-world hardware automation.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastMCP
Automated review identified **FastMCP** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HTTPX
Automated review identified **HTTPX** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### mDNS
Automated review identified **mDNS** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Claude Desktop
Automated review identified **Claude Desktop** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Unfolded Circle Core API
Automated review identified **Unfolded Circle Core API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
