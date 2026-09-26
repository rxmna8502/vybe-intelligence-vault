---
title: "blackwell-systems/mcp-vst-sidechain"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Go", "C++", "JUCE", "VST3", "Audio Units (AU)", "MCP (Model Context Protocol)", "GCF (Generic Compact Format)", "JSON-RPC", "TCP/IP"]
quality_score: 7
rag_relevance: 9
deployment_complexity: "Medium"
tags: ["MCP bridge", "VST3/AU hosting", "AI plugin control", "real-time parameter automation", "GCF encoding"]
source: "https://github.com/blackwell-systems/mcp-vst-sidechain"
stars: 0
language: "Go"
last_updated: "2026-09-01T19:05:00Z"
discovered_at: "2026-09-01T19:07:55Z"
evaluated_by: "mistral-small-latest"
---

## Summary
mcp-vst-sidechain is a generic MCP bridge that hosts VST3/AU plugins and exposes their parameters to AI agents in realtime. It enables agents to enumerate, read, set, and save plugin parameters via a single MCP endpoint without requiring source code access to proprietary plugins.

## Key Features
- Hosts any VST3/AU plugin via standard APIs without redistributing binaries
- Exposes plugin parameters to AI agents via MCP for realtime control
- Supports GCF encoding for efficient serialization of large parameter sets (50-92% smaller than JSON)
- Provides tools for enumerating, reading, setting, and saving plugin states
- Cross-platform (macOS, Windows, Linux) with JUCE-based hosting

## Why It Matters for RAG Builders
It provides a critical bridge for AI agents to directly control and automate proprietary audio plugins in realtime, enabling conversational audio production workflows without requiring DAW integration.

## Tech Stack Deep Dive
### Go
Automated review identified **Go** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### C++
Automated review identified **C++** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JUCE
Automated review identified **JUCE** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### VST3
Automated review identified **VST3** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Audio Units (AU)
Automated review identified **Audio Units (AU)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### GCF (Generic Compact Format)
Automated review identified **GCF (Generic Compact Format)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSON-RPC
Automated review identified **JSON-RPC** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### TCP/IP
Automated review identified **TCP/IP** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
