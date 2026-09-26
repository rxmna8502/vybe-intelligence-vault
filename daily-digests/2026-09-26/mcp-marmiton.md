---
title: "smeet666/mcp-marmiton"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["TypeScript", "Node.js", "MCP (Model Context Protocol)", "npm", "JSON-LD", "schema.org"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Low"
tags: ["recipe search", "ingredient scaling", "MCP server", "structured data", "French recipes"]
source: "https://github.com/smeet666/mcp-marmiton"
stars: 0
language: "TypeScript"
last_updated: "2026-08-04T17:49:22Z"
discovered_at: "2026-08-04T17:50:53Z"
evaluated_by: "mistral-small-latest"
---

## Summary
An MCP server that provides read-only access to Marmiton, a French recipe website. It enables searching recipes, retrieving detailed ingredient lists and steps, and accurately scaling ingredient quantities to any number of servings with transparent rounding logic.

## Key Features
- Search recipes by dish or ingredient with no API key or account required
- Retrieve recipe details including ingredients, steps, and source URL
- Accurately scale ingredient quantities with transparent rounding logic (scaled, rounded, unscaled flags)
- Offline ingredient scaling via `scale_ingredients` tool for recipes from any source
- Structured data parsing from Marmiton's JSON-LD schema.org metadata for reliability

## Why It Matters for RAG Builders
It provides precise, reliable recipe scaling for RAG applications, eliminating common pitfalls like fractional ingredients or silent ingredient drops while ensuring attribution to original sources.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### npm
Automated review identified **npm** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSON-LD
Automated review identified **JSON-LD** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### schema.org
Automated review identified **schema.org** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
