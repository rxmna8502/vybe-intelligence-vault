---
title: "edgecasehuman/droidsight"
content_type: "repo"
engine: "v2"
category: "Agent Framework"
tech_stack: ["Rust", "ADB (Android Debug Bridge)", "MCP (Model Context Protocol)", "H.264 video decoding", "OCR (Tesseract)", "JSON-RPC 2.0"]
quality_score: 8
rag_relevance: 9
deployment_complexity: "Medium"
tags: ["Android automation", "ADB control", "MCP server", "screen capture", "OCR"]
source: "https://github.com/edgecasehuman/droidsight"
stars: 0
language: "Rust"
last_updated: "2026-08-02T18:00:44Z"
discovered_at: "2026-08-02T18:02:34Z"
evaluated_by: "mistral-small-latest"
---

## Summary
droidsight is an MCP server that enables AI agents to control and interact with real Android devices over ADB. It provides a native binary with no external dependencies (beyond ADB) and offers real-time screen capture, OCR, and device control tools for automation and testing.

## Key Features
- Native binary with no Python/Appium/Node dependencies, running as a single executable
- Real-time H.264 screen streaming with in-process decoding and coordinate-aware image capture
- Thirty-one tools for device control, vision, diagnostics, and automation, including OCR for non-accessibility-tree UIs
- Coordinate space mapping for accurate tap and element interactions without manual scaling
- Secure by default with destructive operations requiring explicit confirmation

## Why It Matters for RAG Builders
It provides a lightweight, dependency-free way for AI agents to interact with real Android devices, enabling real-time automation, testing, and vision-based interactions critical for RAG systems requiring physical device control.

## Tech Stack Deep Dive
### Rust
Automated review identified **Rust** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### ADB (Android Debug Bridge)
Automated review identified **ADB (Android Debug Bridge)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### H.264 video decoding
Automated review identified **H.264 video decoding** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OCR (Tesseract)
Automated review identified **OCR (Tesseract)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSON-RPC 2.0
Automated review identified **JSON-RPC 2.0** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
