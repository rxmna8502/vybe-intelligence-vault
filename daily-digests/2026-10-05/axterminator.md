---
title: "MikkoParkkola/axterminator"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Rust", "macOS Accessibility API", "MCP (Model Context Protocol)", "AppleScript/JXA", "CoreDeviceProxy", "Kokoro/Piper TTS (optional)"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Medium"
tags: ["macOS automation", "GUI interaction", "MCP server", "Accessibility API", "AI agent tools"]
source: "https://github.com/MikkoParkkola/axterminator"
stars: 2
language: "Rust"
last_updated: "2026-08-03T06:23:10Z"
discovered_at: "2026-08-03T06:23:26Z"
evaluated_by: "mistral-small-latest"
---

## Summary
AXTerminator is an MCP server that enables AI agents to interact with and control macOS applications via the Accessibility API. It provides low-latency, semantic-based GUI automation tools for background interaction, audio capture, camera input, and virtual desktop management.

## Key Features
- 34+ MCP tools for GUI interaction, observation, verification, system control, audio capture, and camera input
- Sub-millisecond element access (~379µs) via AX semantic tree for reliable and fast automation
- AX-first with vision fallback for canvas apps, games, and surfaces lacking Accessibility API support
- Background interaction without visible cursor movement, enabling seamless multi-app automation
- Integration with popular AI clients (Claude Code, Cursor, Windsurf, VS Code Copilot) via MCP protocol

## Why It Matters for RAG Builders
It provides AI agents with a high-performance, semantic-based alternative to vision-first GUI automation for macOS, reducing latency, cost, and reliability issues while enabling background-safe interactions.

## Tech Stack Deep Dive
### Rust
Automated review identified **Rust** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### macOS Accessibility API
Automated review identified **macOS Accessibility API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### AppleScript/JXA
Automated review identified **AppleScript/JXA** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CoreDeviceProxy
Automated review identified **CoreDeviceProxy** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Kokoro/Piper TTS (optional)
Automated review identified **Kokoro/Piper TTS (optional)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
