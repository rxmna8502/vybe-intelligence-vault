---
title: "Harusame64/desktop-touch-mcp"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Rust", "TypeScript", "Node.js", "UI Automation (UIA)", "Windows API", "PowerShell", "napi-rs", "Windows-rs", "OCR (Windows OCR)", "SSE2 SIMD", "MCP (Model Context Protocol)"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Medium"
tags: ["Windows automation", "MCP server", "AI agent interaction", "UI Automation", "Rust native engine"]
source: "https://github.com/Harusame64/desktop-touch-mcp"
stars: 17
language: "TypeScript"
last_updated: "2026-09-02T22:06:02Z"
discovered_at: "2026-09-02T22:22:47Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A high-performance MCP server for Windows that enables AI agents like Claude or Cursor to interact with the desktop via semantic discover-then-act targeting, avoiding pixel-coordinate guessing. It combines a native Rust UIA engine with PowerShell fallbacks, Chrome CDP, and Key Locker for credential autofill.

## Key Features
- Semantic discover-then-act targeting with entity leases instead of pixel coordinates
- High-performance Rust native engine (UIA queries in 2ms, SSE2-accelerated image diffing)
- Per-action perception guards to prevent wrong-window typing or stale-coordinate clicks
- Key Locker for secure terminal credential autofill (SSH/sudo passwords)
- Zero-config PowerShell fallback and full CJK support

## Why It Matters for RAG Builders
It enables AI agents to reliably and efficiently interact with Windows desktops and applications through semantic targeting, reducing errors and improving automation precision for RAG systems.

## Tech Stack Deep Dive
### Rust
Automated review identified **Rust** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### UI Automation (UIA)
Automated review identified **UI Automation (UIA)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Windows API
Automated review identified **Windows API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PowerShell
Automated review identified **PowerShell** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### napi-rs
Automated review identified **napi-rs** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Windows-rs
Automated review identified **Windows-rs** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OCR (Windows OCR)
Automated review identified **OCR (Windows OCR)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SSE2 SIMD
Automated review identified **SSE2 SIMD** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
