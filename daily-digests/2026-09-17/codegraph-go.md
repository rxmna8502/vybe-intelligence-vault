---
title: "seanb4t/codegraph-go"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Go", "Tree-sitter (CGo)", "MCP (Model Context Protocol)", "SLSA (Supply-chain Levels for Software Artifacts)", "Cosign (Sigstore)", "Git Hooks"]
quality_score: 9
rag_relevance: 9
deployment_complexity: "Medium"
tags: ["code navigation", "knowledge graph", "static binary", "supply chain security", "agent integration"]
source: "https://github.com/seanb4t/codegraph-go"
stars: 0
language: "Go"
last_updated: "2026-08-07T17:48:39Z"
discovered_at: "2026-08-07T17:52:09Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A pre-indexed code knowledge graph for coding agents that provides fast, local code navigation and analysis via a static binary. It enables agents to query symbol definitions, call paths, and impact analysis without runtime dependencies or network fetches.

## Key Features
- Single static binary with no runtime dependencies or network fetches during execution
- Incremental graph maintenance for fast symbol resolution and call path analysis
- MCP server mode for seamless agent integration (e.g., via `codegraph serve --mcp`)
- Verifiable supply chain with SLSA Level 3, cosign keyless signing, and SBOM generation
- Cross-language support (14 languages) with tiered extraction and resolution capabilities

## Why It Matters for RAG Builders
It eliminates the need for coding agents to rediscover code structure through slow grepping, enabling faster and more accurate context retrieval via a pre-indexed local graph.

## Tech Stack Deep Dive
### Go
Automated review identified **Go** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Tree-sitter (CGo)
Automated review identified **Tree-sitter (CGo)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SLSA (Supply-chain Levels for Software Artifacts)
Automated review identified **SLSA (Supply-chain Levels for Software Artifacts)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Cosign (Sigstore)
Automated review identified **Cosign (Sigstore)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Git Hooks
Automated review identified **Git Hooks** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
