---
title: "JohannsenLum/linkedin-api-mcp"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Python", "MCP (Model Context Protocol)", "Playwright (via patchright)", "uv (package manager)", "OS keyring (for credential storage)"]
quality_score: 9
rag_relevance: 7
deployment_complexity: "Medium"
tags: ["LinkedIn automation", "MCP server", "headless browser", "agent integration", "social media API"]
source: "https://github.com/JohannsenLum/linkedin-api-mcp"
stars: 1
language: "Python"
last_updated: "2026-08-09T10:33:15Z"
discovered_at: "2026-08-09T10:38:01Z"
evaluated_by: "mistral-small-latest"
---

## Summary
An MCP server that enables AI agents to interact with LinkedIn via a headless browser using a user's authenticated session. It provides read-only access to profiles, companies, jobs, and messages, as well as limited write actions like sending messages or connection requests.

## Key Features
- Provides 14 tools for reading LinkedIn data (profiles, companies, jobs, messages) and limited write actions (messages, connection requests)
- Uses a real browser session with authenticated cookies for reliable access
- Enforces rate limiting via a queue system to prevent account restrictions
- Supports secure credential storage in OS keyring or environment variables
- Designed for seamless integration with AI agents via MCP protocol

## Why It Matters for RAG Builders
It enables AI agents to safely and securely interact with LinkedIn data and perform limited actions, bridging the gap between AI automation and real-world social media integration.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Playwright (via patchright)
Automated review identified **Playwright (via patchright)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### uv (package manager)
Automated review identified **uv (package manager)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OS keyring (for credential storage)
Automated review identified **OS keyring (for credential storage)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
