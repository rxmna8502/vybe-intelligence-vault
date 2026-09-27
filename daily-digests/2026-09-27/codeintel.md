---
title: "phuongddx/codeintel"
content_type: "repo"
engine: "v2"
category: "Agent Framework"
tech_stack: ["Python", "SCIP", "Zoekt", "SQLite", "MCP (Model Context Protocol)", "TypeScript", "Python (scip-python)", "Java/Kotlin (scip-java)", "Swift (scip-swift)", "LanceDB", "Sentence Transformers", "Tree-sitter"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Medium"
tags: ["local-first", "code navigation", "semantic search", "MCP server", "offline indexing"]
source: "https://github.com/phuongddx/codeintel"
stars: 0
language: "Python"
last_updated: "2026-08-01T06:25:01Z"
discovered_at: "2026-08-01T06:29:14Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A local-first MCP server providing code intelligence tools like go-to-definition, semantic search, and cross-repo dependency analysis for coding agents. It operates entirely offline, using precomputed SCIP navigation and Zoekt lexical search via a single stdio process.

## Key Features
- Precomputed SCIP-based navigation (go-to-definition, find-references, call hierarchy)
- Zoekt-powered lexical and regex search with optional repo filtering
- Semantic search via vector embeddings fused with lexical results
- Cross-repo dependency analysis (blast radius) for package impact assessment
- Atomic, versioned indexing with no server or network dependencies

## Why It Matters for RAG Builders
It enables coding agents to perform precise, offline code navigation and semantic search without relying on external APIs, reducing latency and privacy concerns while improving agent productivity.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SCIP
Automated review identified **SCIP** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Zoekt
Automated review identified **Zoekt** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Python (scip-python)
Automated review identified **Python (scip-python)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Java/Kotlin (scip-java)
Automated review identified **Java/Kotlin (scip-java)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Swift (scip-swift)
Automated review identified **Swift (scip-swift)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### LanceDB
Automated review identified **LanceDB** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Sentence Transformers
Automated review identified **Sentence Transformers** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Tree-sitter
Automated review identified **Tree-sitter** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
