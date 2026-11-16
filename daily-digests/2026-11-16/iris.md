---
title: "tools-for-agents/iris"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["JavaScript", "Node.js", "Chrome DevTools Protocol (CDP)", "WebSocket", "fetch API", "Model Context Protocol (MCP)"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Medium"
tags: ["visual testing", "UI feedback", "design validation", "browser automation", "agent tooling"]
source: "https://github.com/tools-for-agents/iris"
stars: 0
language: "JavaScript"
last_updated: "2026-07-12T10:25:54Z"
discovered_at: "2026-07-12T10:26:39Z"
evaluated_by: "mistral-small-latest"
---

## Summary
iris is a CLI and MCP tool that acts as an agent's visual feedback mechanism, rendering web pages and games in real browsers to detect layout, design, and functional issues that automated tests miss. It measures visual defects like overflow, contrast, and animation, and evaluates design consistency such as type scales and spacing grids.

## Key Features
- Renders pages/games in real browsers to detect visual and functional defects (e.g., overflow, clipping, contrast, frozen animations)
- Measures design consistency (type scales, spacing grids, corner radii) and identifies drift from declared systems
- Supports games with canvas pixel analysis for readability, blur, and input responsiveness
- Integrates with MCP for AI agent workflows, returning screenshots and defect reports
- Zero dependencies by using native Node.js WebSocket and fetch to interface with CDP

## Why It Matters for RAG Builders
It provides critical visual feedback for AI agents building interfaces or games, ensuring outputs meet basic usability and design standards before deployment.

## Tech Stack Deep Dive
### JavaScript
Automated review identified **JavaScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Chrome DevTools Protocol (CDP)
Automated review identified **Chrome DevTools Protocol (CDP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### WebSocket
Automated review identified **WebSocket** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### fetch API
Automated review identified **fetch API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
