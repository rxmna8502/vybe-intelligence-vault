---
title: "zouyuanqing/codex-vision-bridge"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Python", "MCP (Model Context Protocol)", "JSON-RPC 2.0", "Pillow (PIL)", "Xiaomi MiMo V2.5 API", "OpenAI Compatible API"]
quality_score: 9
rag_relevance: 9
deployment_complexity: "Medium"
tags: ["MCP server", "vision primitives", "multimodal interaction", "image annotation", "OCR"]
source: "https://github.com/zouyuanqing/codex-vision-bridge"
stars: 0
language: "Python"
last_updated: "2026-08-01T17:57:15Z"
discovered_at: "2026-08-01T18:00:13Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Codex Vision Bridge is an MCP server that enables text-only LLMs (e.g., DeepSeek) to interact with images through structured vision primitives. It provides a 13-tool suite for tasks like image description, object localization, OCR, annotation, cropping, and automated anomaly scanning, powered by Xiaomi MiMo V2.5's multimodal API.

## Key Features
- 13 built-in vision tools for structured image interaction (e.g., locate_object, ocr_image, annotate_image, scan_anomalies)
- Supports text-only LLMs (Codex, DeepSeek) to perform vision tasks via MCP protocol
- Zero third-party runtime dependencies (single-file Python implementation)
- Automated anomaly scanning with multi-candidate verification and structured reporting
- Multi-image reasoning (compare_infer) and interactive graph-based workflows (reason_graph)

## Why It Matters for RAG Builders
It bridges the gap between text-only LLMs and multimodal capabilities, enabling RAG systems to process, analyze, and annotate images with structured outputs for richer AI interactions.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSON-RPC 2.0
Automated review identified **JSON-RPC 2.0** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Pillow (PIL)
Automated review identified **Pillow (PIL)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Xiaomi MiMo V2.5 API
Automated review identified **Xiaomi MiMo V2.5 API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenAI Compatible API
Automated review identified **OpenAI Compatible API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
