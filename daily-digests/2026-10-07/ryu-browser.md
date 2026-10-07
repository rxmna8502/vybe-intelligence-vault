---
title: "amajorai/ryu-browser"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Electron", "Chromium", "TypeScript", "Node.js", "HTTP API", "CDP (Chrome DevTools Protocol)"]
quality_score: 8
rag_relevance: 7
deployment_complexity: "Medium"
tags: ["browser automation", "sidecar service", "tab management", "AI agent integration", "Electron"]
source: "https://github.com/amajorai/ryu-browser"
stars: 0
language: "TypeScript"
last_updated: "2026-08-05T08:31:26Z"
discovered_at: "2026-08-05T08:35:59Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Ryu-Browser is a local sidecar Electron/Chromium browser that exposes a grant-gated control API for managing browser tabs, navigation, screenshots, and JavaScript evaluation. It integrates with the Ryu AI agent framework as a controllable capability.

## Key Features
- Local sidecar Electron/Chromium browser with loopback HTTP control server
- Grant-gated `browser.control` capability for secure agent interactions
- Tab management (list, open, close, navigate), screenshots, and accessibility snapshots
- Privileged JavaScript evaluation in tabs via synthetic input (click/type/scroll)
- Lazy-spawned process with idle timeout and strict security headers (CSRF/DNS rebinding protection)

## Why It Matters for RAG Builders
It provides a secure, controllable browser interface for AI agents to interact with web content programmatically, enabling advanced RAG workflows that require real-time web data extraction.

## Tech Stack Deep Dive
### Electron
Automated review identified **Electron** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Chromium
Automated review identified **Chromium** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HTTP API
Automated review identified **HTTP API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CDP (Chrome DevTools Protocol)
Automated review identified **CDP (Chrome DevTools Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
