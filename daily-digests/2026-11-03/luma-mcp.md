---
title: "JochenYang/luma-mcp"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["TypeScript", "Node.js", "MCP (Model Context Protocol)", "Docker", "HTTP/Streamable Transport", "Vision Models (GLM-4.6V, DeepSeek-OCR, Qwen3-VL-Flash, etc.)"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Medium"
tags: ["vision-understanding", "multi-model", "MCP-server", "image-analysis", "OCR"]
source: "https://github.com/JochenYang/luma-mcp"
stars: 98
language: "TypeScript"
last_updated: "2026-08-07T11:55:38Z"
discovered_at: "2026-08-07T11:56:20Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Luma MCP is a multi-model vision understanding MCP server that provides unified image analysis capabilities to AI assistants lacking native vision support. It supports multiple vision models (e.g., GLM-4.6V, DeepSeek-OCR) and offers standardized preprocessing, multi-crop handling, and MCP protocol integration for seamless deployment.

## Key Features
- Unified image analysis via `image_understand` tool supporting multiple vision models (GLM-4.6V, DeepSeek-OCR, Qwen3-VL-Flash, etc.)
- Automatic multi-crop and high-fidelity processing for complex screenshots, code snippets, and dense text scenarios
- Standardized preprocessing pipeline for local files, remote URLs, and Data URIs with SSRF protection
- HTTP/Docker deployment for multi-client sharing (v1.7.0+) with Bearer token authentication
- Built-in retries, compression, and meta-inclusion for debugging and performance tracking

## Why It Matters for RAG Builders
It enables AI assistants without native vision capabilities to perform unified image analysis and OCR, bridging a critical gap for RAG pipelines requiring visual context.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HTTP/Streamable Transport
Automated review identified **HTTP/Streamable Transport** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Vision Models (GLM-4.6V, DeepSeek-OCR, Qwen3-VL-Flash, etc.)
Automated review identified **Vision Models (GLM-4.6V, DeepSeek-OCR, Qwen3-VL-Flash, etc.)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
