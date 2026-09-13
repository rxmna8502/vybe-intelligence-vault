---
title: "frsorrentino/chrome-bridge"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["JavaScript", "Node.js", "Chrome Extension API (Manifest V3)", "WebSocket", "MCP (Model Context Protocol)", "Chromium", "TypeScript (implied by modern JS practices)"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Medium"
tags: ["browser automation", "MCP server", "Chrome extension", "visual regression", "CI/CD"]
source: "https://github.com/frsorrentino/chrome-bridge"
stars: 1
language: "JavaScript"
last_updated: "2026-07-10T16:17:22Z"
discovered_at: "2026-07-10T16:24:16Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Chrome Bridge is an MCP server that enables Claude Code to interact with a real, logged-in Chrome browser via a WebSocket bridge and a Chrome extension, providing 59 specialized web-development tools for automation, auditing, and testing without requiring CDP debugging ports or paid plans.

## Key Features
- Connects Claude Code to a real Chrome browser via WebSocket bridge and extension, enabling direct interaction with logged-in sessions
- Provides 59 specialized tools for navigation, DOM inspection, audits, network mocking, and visual regression testing
- Supports ChromeOS/Crostini with real host Chrome sessions, unlike containerized alternatives
- Token-efficient design with capped outputs, small default tool surface, and zero-token escape hatches for CLI usage
- Includes launch mode for headless CI environments with isolated Chromium instances and ephemeral profiles

## Why It Matters for RAG Builders
Chrome Bridge enables AI agents like Claude Code to interact with real, logged-in Chrome browsers for accurate web automation, auditing, and testing without relying on paid plans or containerized environments, making it essential for RAG builders needing real-world browser interactions.

## Tech Stack Deep Dive
### JavaScript
Automated review identified **JavaScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Chrome Extension API (Manifest V3)
Automated review identified **Chrome Extension API (Manifest V3)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### WebSocket
Automated review identified **WebSocket** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Chromium
Automated review identified **Chromium** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### TypeScript (implied by modern JS practices)
Automated review identified **TypeScript (implied by modern JS practices)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
