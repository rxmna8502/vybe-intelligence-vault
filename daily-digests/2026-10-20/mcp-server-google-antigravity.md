---
title: "TurkerYakup/mcp-server-google-antigravity"
content_type: "repo"
engine: "v2"
category: "Orchestrator"
tech_stack: ["Node.js", "JavaScript", "MCP (Model Context Protocol)", "Google Antigravity CLI (`agy`)", "Gemini (Google's AI model)", "npm"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Medium"
tags: ["MCP server", "Google Antigravity", "Gemini integration", "asynchronous tasks", "AI delegation"]
source: "https://github.com/TurkerYakup/mcp-server-google-antigravity"
stars: 2
language: "JavaScript"
last_updated: "2026-07-12T22:42:19Z"
discovered_at: "2026-07-12T22:44:42Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A Model Context Protocol (MCP) server that exposes Google Antigravity's `agy` agent as a set of tools for MCP clients like Claude Desktop or Codex. It enables asynchronous, unlimited delegation of heavy tasks such as web search, repository analysis, and file edits to a background agent running Google's Gemini model.

## Key Features
- Exposes Google Antigravity's `agy` agent as MCP tools for seamless integration with clients like Claude Desktop or Codex
- Supports asynchronous job execution with immediate `jobId` return, enabling non-blocking workflows
- Provides filesystem tools (create, read, write, list) for direct file operations without permission prompts
- Offers live progress notifications via MCP logging for real-time job monitoring
- Cross-platform support (macOS, Windows, Linux) with auto-detection of `agy` binary paths and OS-specific optimizations

## Why It Matters for RAG Builders
It enables AI engineering teams to offload heavy, long-running tasks to a dedicated agent while keeping primary models lean, enhancing productivity and scalability in RAG and AI workflows.

## Tech Stack Deep Dive
### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JavaScript
Automated review identified **JavaScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Google Antigravity CLI (`agy`)
Automated review identified **Google Antigravity CLI (`agy`)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Gemini (Google's AI model)
Automated review identified **Gemini (Google's AI model)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### npm
Automated review identified **npm** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
