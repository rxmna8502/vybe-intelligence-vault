---
title: "lemahq/lema-mcp"
content_type: "repo"
engine: "v2"
category: "Orchestrator"
tech_stack: ["Go", "Node.js", "MCP (Model Context Protocol)", "TypeScript", "Docker"]
quality_score: 9
rag_relevance: 10
deployment_complexity: "Medium"
tags: ["decision tracking", "MCP server", "RAG augmentation", "project rationale", "alternative analysis"]
source: "https://github.com/lemahq/lema-mcp"
stars: 1
language: "Go"
last_updated: "2026-07-21T17:08:03Z"
discovered_at: "2026-07-21T17:16:52Z"
evaluated_by: "mistral-small-latest"
---

## Summary
lema-mcp is an MCP (Model Context Protocol) server that provides agents with recorded rationales behind project decisions, including ruled-out alternatives and cited sources. It enables agents to query why a project made specific choices and whether proposed approaches were previously rejected.

## Key Features
- Cited rationales for project decisions with direct links to RFCs/PRs
- Typed verdicts (ruled_out, settled, no_recorded_ruling) for proposed approaches
- Local decision capture and enforcement via `.lema/decisions.jsonl`
- Guard hooks to prevent re-proposing rejected alternatives
- Supports public records for React, Kubernetes, and Rust out of the box

## Why It Matters for RAG Builders
lema-mcp ensures AI agents make informed decisions by providing verifiable, cited rationales and preventing the re-proposal of previously rejected approaches, significantly improving the reliability of RAG systems.

## Tech Stack Deep Dive
### Go
Automated review identified **Go** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
