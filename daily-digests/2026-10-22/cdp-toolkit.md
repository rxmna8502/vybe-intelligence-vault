---
title: "sblattj/cdp-toolkit"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["TypeScript", "Node.js", "Bun", "Chrome DevTools Protocol (CDP)", "WebSocket", "MCP (Model Context Protocol)", "npm"]
quality_score: 9
rag_relevance: 9
deployment_complexity: "Low"
tags: ["Chrome automation", "DevTools Protocol", "MCP server", "network mocking", "agent reliability"]
source: "https://github.com/sblattj/cdp-toolkit"
stars: 1
language: "TypeScript"
last_updated: "2026-08-07T17:43:14Z"
discovered_at: "2026-08-07T17:52:16Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A lightweight MCP-compatible toolkit that drives specific Chrome tabs via the DevTools Protocol with bounded timeouts and no fan-out overhead. It avoids agent wedging by targeting one tab per call, supports network mocking, and enables multi-agent tab leasing for shared browser sessions.

## Key Features
- One-target-per-call architecture with bounded timeouts to prevent agent wedging
- Network mocking for UI testing without backend dependencies
- Tab leasing for multi-agent collaboration on a single browser
- Lazy CDP domain enabling to avoid known hangs like eager Network.enable
- Stateless element references and secret handling for credential injection

## Why It Matters for RAG Builders
It provides a reliable, low-overhead way to drive specific Chrome tabs for AI agents without risking agent hangs or requiring Puppeteer, making it essential for RAG builders who need robust browser automation.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Bun
Automated review identified **Bun** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Chrome DevTools Protocol (CDP)
Automated review identified **Chrome DevTools Protocol (CDP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### WebSocket
Automated review identified **WebSocket** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### npm
Automated review identified **npm** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
