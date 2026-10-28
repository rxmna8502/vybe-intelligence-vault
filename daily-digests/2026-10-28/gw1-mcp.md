---
title: "Graphmaxer/gw1-mcp"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["TypeScript", "Node.js", "Model Context Protocol (MCP)", "Cloudflare Workers", "Hono", "pnpm", "GitHub Actions"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Low"
tags: ["MCP server", "Guild Wars 1", "build validation", "template encoding", "game data"]
source: "https://github.com/Graphmaxer/gw1-mcp"
stars: 0
language: "TypeScript"
last_updated: "2026-07-13T21:43:25Z"
discovered_at: "2026-07-13T21:55:16Z"
evaluated_by: "mistral-small-latest"
---

## Summary
gw1-mcp is an MCP (Model Context Protocol) server that provides deterministic, accurate knowledge of Guild Wars 1 builds to LLMs, enabling reliable skill data lookup, template code encoding/decoding, and build validation without hallucinations.

## Key Features
- Precise skill data lookup (1484 skills, Reforged balance)
- Official template code encoding/decoding (verified against in-game formats)
- Build validation against GW1 rules (point budget, elite limits, etc.)
- Stateless deployment (Cloudflare Workers, Node.js)
- Integration with LLMs (Claude, ChatGPT, Cursor) via MCP

## Why It Matters for RAG Builders
It ensures LLMs generate accurate, playable Guild Wars 1 builds by providing verified game data and encoding, eliminating hallucinations in template codes and skill selections.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Cloudflare Workers
Automated review identified **Cloudflare Workers** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Hono
Automated review identified **Hono** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### pnpm
Automated review identified **pnpm** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### GitHub Actions
Automated review identified **GitHub Actions** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
