---
title: "AmrDab/clawdcursor"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["TypeScript", "Node.js", "MCP (Model Context Protocol)", "Accessibility APIs", "OCR (Tesseract)", "Electron", "WebView2", "Sharp", "Nut.js"]
quality_score: 9
rag_relevance: 9
deployment_complexity: "Medium"
tags: ["desktop automation", "AI agent control", "accessibility-based UI", "local MCP server", "action verification"]
source: "https://github.com/AmrDab/clawdcursor"
stars: 392
language: "TypeScript"
last_updated: "2026-08-09T07:57:00Z"
discovered_at: "2026-08-09T07:58:36Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Clawd Cursor is a local MCP server that enables AI agents to safely control desktop applications by compiling the screen into a stable UI map using accessibility trees and OCR, acting on elements by ID rather than pixels. It verifies actions and routes all operations through a single safety checkpoint.

## Key Features
- Compiles screen into a stable UI map using accessibility trees and OCR, reducing reliance on expensive vision models
- Acts on elements by stable IDs instead of pixel coordinates, ensuring reliability across screen resizes and DPI changes
- Verifies every action by re-checking the live screen and reporting deviations if the UI did not respond as expected
- Routes all operations through a single safety checkpoint (allow/confirm/block) to prevent unauthorized or unsafe actions
- Cross-platform support (Windows, macOS, Linux) with local-only execution for privacy and performance

## Why It Matters for RAG Builders
It provides a safe, efficient, and verifiable way for AI agents to interact with native desktop applications, bridging the gap between AI automation and real-world GUI control without relying on cloud-based vision models.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Accessibility APIs
Automated review identified **Accessibility APIs** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OCR (Tesseract)
Automated review identified **OCR (Tesseract)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Electron
Automated review identified **Electron** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### WebView2
Automated review identified **WebView2** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Sharp
Automated review identified **Sharp** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Nut.js
Automated review identified **Nut.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
