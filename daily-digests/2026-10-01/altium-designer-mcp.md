---
title: "embedded-society/altium-designer-mcp"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Rust", "Model Context Protocol (MCP)", "Altium Designer", "OLE Compound File Format", "JSON", "CI/CD (GitHub Actions)", "Code Coverage (codecov)"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Medium"
tags: ["Altium Designer", "MCP server", "PCB library automation", "schematic symbol generation", "AI-assisted design"]
source: "https://github.com/embedded-society/altium-designer-mcp"
stars: 50
language: "Rust"
last_updated: "2026-09-01T15:38:57Z"
discovered_at: "2026-09-01T15:56:37Z"
evaluated_by: "mistral-small-latest"
---

## Summary
An MCP server that enables AI assistants to read, write, and manipulate Altium Designer component libraries (PCB footprints and schematic symbols) by handling the undocumented binary file formats. It bridges AI-driven engineering with Altium's ecosystem, allowing AI to create and maintain any component without manual file editing.

## Key Features
- 34 MCP tools for reading, writing, and editing Altium `.PcbLib` and `.SchLib` files
- Byte-identical file output to Altium's native format, ensuring compatibility
- Supports all footprint primitives (pads, vias, tracks, arcs, regions, text, fills, 3D models) and schematic primitives (pins, shapes, text, parameters)
- Automatic backups and validation to prevent file corruption
- Cross-platform support (Windows, Linux, macOS) for MCP clients like Claude Code, Cursor, and VS Code Copilot

## Why It Matters for RAG Builders
It enables AI assistants to directly generate and maintain Altium component libraries, eliminating manual file editing and accelerating PCB design workflows.

## Tech Stack Deep Dive
### Rust
Automated review identified **Rust** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Altium Designer
Automated review identified **Altium Designer** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OLE Compound File Format
Automated review identified **OLE Compound File Format** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSON
Automated review identified **JSON** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CI/CD (GitHub Actions)
Automated review identified **CI/CD (GitHub Actions)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Code Coverage (codecov)
Automated review identified **Code Coverage (codecov)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
