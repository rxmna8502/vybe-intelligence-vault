---
title: "tathagat22/plumb-mcp"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["TypeScript", "Node.js", "Figma Plugin API", "MCP (Model Context Protocol)", "REST API (secondary path)", "WebSocket", "Design Token Processing", "Computer Vision (for verification)"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Medium"
tags: ["Figma integration", "AI design generation", "Verification loop", "MCP server", "Design-to-code"]
source: "https://github.com/tathagat22/plumb-mcp"
stars: 67
language: "TypeScript"
last_updated: "2026-07-19T15:48:04Z"
discovered_at: "2026-07-19T15:56:54Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Plumb is a bidirectional Figma MCP server that enables two-way workflows: extracting compact design specs from Figma files for AI coding agents and generating on-brand Figma designs from text prompts. It includes verification tools to ensure generated code matches the original design.

## Key Features
- Bidirectional Figma ↔ AI workflow with verification tools (`plumb_verify`, `plumb_fit`) to ensure pixel-perfect alignment between design and code.
- Prompt-to-design generation with a self-critiquing director loop that iterates designs based on agent feedback without requiring external model keys.
- Compact Plumb Design Spec (PDS) output reduces token usage by 99% compared to raw Figma API JSON, making it ideal for coding agents.
- No REST rate limits or metered tool-call quotas when using the Figma plugin path, supporting all plans including Free.
- Multi-agent support allows multiple AI sessions to collaborate on the same Figma file simultaneously.

## Why It Matters for RAG Builders
Plumb bridges the gap between AI-driven design and development by providing verified, token-efficient Figma integration, enabling seamless design-to-code and prompt-to-design workflows for RAG/AI stack builders.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Figma Plugin API
Automated review identified **Figma Plugin API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### REST API (secondary path)
Automated review identified **REST API (secondary path)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### WebSocket
Automated review identified **WebSocket** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Design Token Processing
Automated review identified **Design Token Processing** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Computer Vision (for verification)
Automated review identified **Computer Vision (for verification)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
