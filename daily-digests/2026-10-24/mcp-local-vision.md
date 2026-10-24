---
title: "jshsakura/mcp-local-vision"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["JavaScript", "Node.js", "llama.cpp", "CUDA", "Qwen3-VL", "GGUF", "MCP (Model Context Protocol)", "poppler-utils"]
quality_score: 9
rag_relevance: 9
deployment_complexity: "High"
tags: ["local vision", "PDF OCR", "GPU acceleration", "MCP server", "privacy-focused"]
source: "https://github.com/jshsakura/mcp-local-vision"
stars: 0
language: "JavaScript"
last_updated: "2026-08-05T05:45:53Z"
discovered_at: "2026-08-05T05:49:10Z"
evaluated_by: "mistral-small-latest"
---

## Summary
mcp-local-vision enables text-only LLMs to read images and PDFs by delegating vision tasks to a local VLM running on the user's GPU via llama.cpp. It ensures no data leaves the machine and integrates seamlessly with MCP clients like OpenCode and Claude Code.

## Key Features
- Delegates vision tasks to a local VLM without cloud dependency or API keys
- Supports both text-layer and scanned PDF extraction with poppler-utils
- Automatically manages GPU lifecycle (starts/stops llama-server on demand)
- Optimized for verbatim transcription with minimal latency and context usage
- Integrates with MCP clients like OpenCode and Claude Code for seamless AI workflows

## Why It Matters for RAG Builders
It enables text-only LLMs to process visual data locally, eliminating cloud dependencies and ensuring data privacy while expanding AI capabilities for RAG pipelines.

## Tech Stack Deep Dive
### JavaScript
Automated review identified **JavaScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### llama.cpp
Automated review identified **llama.cpp** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CUDA
Automated review identified **CUDA** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Qwen3-VL
Automated review identified **Qwen3-VL** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### GGUF
Automated review identified **GGUF** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### poppler-utils
Automated review identified **poppler-utils** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
