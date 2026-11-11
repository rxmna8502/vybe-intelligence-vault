---
title: "LEAN-EnLAN/camofox-agent-kit"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Shell", "systemd", "MCP (Model Context Protocol)", "Node.js", "REST API", "Firefox (Camoufox fork)", "Playwright", "Juggler"]
quality_score: 8
rag_relevance: 7
deployment_complexity: "Medium"
tags: ["browser automation", "agent integration", "fingerprint spoofing", "systemd service", "MCP server"]
source: "https://github.com/LEAN-EnLAN/camofox-agent-kit"
stars: 0
language: "Shell"
last_updated: "2026-08-05T02:04:31Z"
discovered_at: "2026-08-05T02:18:47Z"
evaluated_by: "mistral-small-latest"
---

## Summary
camofox-agent-kit provides a systemd service and MCP server to integrate Camoufox (a Firefox fork with C++-level fingerprint spoofing) into AI agent workflows on Arch Linux. It replaces Playwright/Puppeteer with a stealthy, agent-friendly browser service that avoids detection by websites.

## Key Features
- Systemd-managed Camoufox browser service with lazy startup and idle timeout (~40MB footprint)
- MCP server adapter for seamless integration with AI agents (Claude Code, Cursor, etc.)
- Stealth browser via Camoufox's C++-level fingerprint spoofing (WebGL, WebRTC, hardwareConcurrency, etc.)
- Agent skill to replace Playwright/Puppeteer with stable, token-efficient accessibility snapshots
- Built-in health checks (`camofox-doctor`) and configuration management

## Why It Matters for RAG Builders
It enables AI agents to browse the real web undetected by anti-bot measures, replacing fragile headless browser setups with a reliable, system-integrated service.

## Tech Stack Deep Dive
### Shell
Automated review identified **Shell** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### systemd
Automated review identified **systemd** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### REST API
Automated review identified **REST API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Firefox (Camoufox fork)
Automated review identified **Firefox (Camoufox fork)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Playwright
Automated review identified **Playwright** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Juggler
Automated review identified **Juggler** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
