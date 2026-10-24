---
title: "mingfeng6684/nxopen-mcp"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Python", "MCP (Model Context Protocol)", "SQLite", "BGE-M3 (embedding model)", "sqlite-vec (vector search)", "FastMCP", "pythonnet (for DLL reflection)"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Medium"
tags: ["MCP server", "Siemens NXOpen", "API retrieval", "hybrid search", "AI coding agents"]
source: "https://github.com/mingfeng6684/nxopen-mcp"
stars: 0
language: "Python"
last_updated: "2026-07-15T08:00:12Z"
discovered_at: "2026-07-15T08:06:07Z"
evaluated_by: "mistral-small-latest"
---

## Summary
MCP server that provides AI coding agents (e.g., Claude Code, Codex) with accurate knowledge of the Siemens NXOpen .NET API by indexing local NX installation documentation. Eliminates hallucinated API calls through hybrid retrieval (dense + exact-name matching) and RRF fusion.

## Key Features
- Hybrid retrieval combining dense (BGE-M3) and exact-name matching for precise API lookups in English or Chinese
- Locally indexed NXOpen documentation from licensed NX installations, ensuring no external data exposure
- Four MCP tools: semantic search, class/member lookup, builder-to-code skeletons, and inheritance-aware queries
- RRF fusion for combining retrieval channels, with exact-name matches prioritized for reliability
- Offline-first design with optional pre-built index sharing within licensed organizations

## Why It Matters for RAG Builders
It eliminates hallucinated NXOpen API calls by grounding AI agents in real, locally indexed documentation, ensuring accurate and reliable code generation for Siemens NX automation.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### BGE-M3 (embedding model)
Automated review identified **BGE-M3 (embedding model)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### sqlite-vec (vector search)
Automated review identified **sqlite-vec (vector search)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastMCP
Automated review identified **FastMCP** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### pythonnet (for DLL reflection)
Automated review identified **pythonnet (for DLL reflection)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
