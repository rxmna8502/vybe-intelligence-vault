---
title: "lszoszk/mcp-unhrdb"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Node.js", "JavaScript", "Model Context Protocol (MCP)", "Docker", "Streamable HTTP", "REST APIs"]
quality_score: 8
rag_relevance: 9
deployment_complexity: "Medium"
tags: ["UN human rights", "MCP server", "corpus access", "legal research", "AI tooling"]
source: "https://github.com/lszoszk/mcp-unhrdb"
stars: 0
language: "JavaScript"
last_updated: "2026-07-12T08:02:15Z"
discovered_at: "2026-07-12T08:15:47Z"
evaluated_by: "mistral-small-latest"
---

## Summary
mcp-unhrdb is an MCP (Model Context Protocol) server that provides read-only access to two UN human-rights corpora: UNHRDB paragraphs and UHRI recommendations. It exposes four tools over stdio or HTTP to enable native querying of these corpora in AI clients like Claude Desktop or Cowork.

## Key Features
- Exposes two distinct UN human-rights corpora (paragraphs and recommendations) as MCP tools without blending data
- Supports both stdio and HTTP transports for local and remote clients
- Provides verbatim, citable results from UN documents with full metadata
- Includes lookup tools for resolving citations and annotation IDs to full records
- Offers faceted search with filters for countries, bodies, themes, and years

## Why It Matters for RAG Builders
It enables AI systems to directly query and cite authoritative UN human-rights documents, ensuring accuracy and traceability in RAG applications.

## Tech Stack Deep Dive
### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JavaScript
Automated review identified **JavaScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Streamable HTTP
Automated review identified **Streamable HTTP** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### REST APIs
Automated review identified **REST APIs** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
