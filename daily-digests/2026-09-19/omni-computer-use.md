---
title: "Jason26214/omni-computer-use"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Python 3.11+", "MCP (Model Context Protocol) SDK", "FastMCP", "MSS (screenshot library)", "Pillow (image processing)", "PyWin32 (Windows API bindings)", "ctypes", "uv (package manager)", "Hatchling (build system)"]
quality_score: 9
rag_relevance: 10
deployment_complexity: "Medium"
tags: ["Windows automation", "MCP server", "desktop control", "multi-monitor", "RAG tooling"]
source: "https://github.com/Jason26214/omni-computer-use"
stars: 0
language: "Python"
last_updated: "2026-07-16T20:00:48Z"
discovered_at: "2026-07-16T20:02:22Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A 1:1 replica of Anthropic's official `computer-use` tool surface implemented as a Windows MCP server, enabling the Claude Code CLI or any MCP client to drive desktop automation via screenshots, mouse/keyboard input, clipboard access, and multi-monitor support. Faithfully replicates Anthropic's desktop tool's behavior, parameters, and coordinate semantics for seamless agent integration.

## Key Features
- 1:1 replica of Anthropic's `computer-use` tool surface with identical tool names, parameters, and coordinate semantics
- Full desktop automation capabilities: screenshots, mouse/keyboard input, clipboard access, and multi-monitor support
- Faithful visual replication of Claude Desktop's on-screen affordances (glow, pill, terminal shrinking) for accurate agent interaction
- Multi-monitor support with self-describing screenshots and cross-monitor launch hints
- Keyboard self-harm guard to prevent synthetic keystrokes from interfering with the agent's own interface

## Why It Matters for RAG Builders
It enables AI agents to perform faithful desktop automation on Windows, bridging the gap between Anthropic's restricted `computer-use` tool and open-source MCP clients for testing, GUI automation, and RAG workflows.

## Tech Stack Deep Dive
### Python 3.11+
Automated review identified **Python 3.11+** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol) SDK
Automated review identified **MCP (Model Context Protocol) SDK** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastMCP
Automated review identified **FastMCP** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MSS (screenshot library)
Automated review identified **MSS (screenshot library)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Pillow (image processing)
Automated review identified **Pillow (image processing)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PyWin32 (Windows API bindings)
Automated review identified **PyWin32 (Windows API bindings)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### ctypes
Automated review identified **ctypes** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### uv (package manager)
Automated review identified **uv (package manager)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Hatchling (build system)
Automated review identified **Hatchling (build system)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
