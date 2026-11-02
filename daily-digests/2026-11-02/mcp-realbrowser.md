---
title: "obbbba/mcp-realbrowser"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["TypeScript", "Node.js", "Chrome DevTools Protocol (CDP)", "Playwright", "Model Context Protocol (MCP)", "WebSocket"]
quality_score: 9
rag_relevance: 9
deployment_complexity: "Medium"
tags: ["MCP server", "browser automation", "CDP integration", "AI agent tools", "real browser sessions"]
source: "https://github.com/obbbba/mcp-realbrowser"
stars: 1
language: "TypeScript"
last_updated: "2026-07-19T13:14:35Z"
discovered_at: "2026-07-19T13:17:16Z"
evaluated_by: "mistral-small-latest"
---

## Summary
MCP-RealBrowser is an MCP server that connects AI agents (like Claude Code) to a user's existing Chrome/Chromium browser via the Chrome DevTools Protocol (CDP). It enables AI to interact with real browser sessions, preserving logins, cookies, and extensions, unlike other tools that launch fresh, blank browsers.

## Key Features
- Connects to an existing Chrome/Chromium browser via CDP, preserving all sessions, logins, and cookies
- Provides 20+ tools for AI agents to interact with the browser (navigate, click, type, extract, screenshot, etc.)
- Supports structured DOM snapshots for efficient context management in AI workflows
- Includes a diagnostic mode (--doctor) to troubleshoot CDP connectivity issues
- Disconnects from the browser without closing it, ensuring persistent sessions

## Why It Matters for RAG Builders
It enables AI agents to interact with real-world browser sessions, preserving user data and reducing the need for manual interventions like re-logins or captcha solving.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Chrome DevTools Protocol (CDP)
Automated review identified **Chrome DevTools Protocol (CDP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Playwright
Automated review identified **Playwright** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### WebSocket
Automated review identified **WebSocket** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
