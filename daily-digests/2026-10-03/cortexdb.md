---
title: "liliang-cn/cortexdb"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Go", "SQLite", "RDF/SPARQL", "HNSW/IVF/Flat (vector indexes)", "gRPC", "MCP (Model Context Protocol)", "FTS5 (full-text search)", "RDFS/SHACL"]
quality_score: 9
rag_relevance: 10
deployment_complexity: "Medium"
tags: ["embedded AI memory", "knowledge graph", "RAG", "SQLite", "MCP tools"]
source: "https://github.com/liliang-cn/cortexdb"
stars: 246
language: "Go"
last_updated: "2026-08-08T03:16:41Z"
discovered_at: "2026-08-08T03:28:14Z"
evaluated_by: "mistral-small-latest"
---

## Summary
CortexDB is a pure-Go, single-file AI memory and knowledge graph library designed for embedded use in agent projects. It combines vector storage, lexical/RAG search, scoped memory, and an RDF/SPARQL knowledge graph within a SQLite file, supporting both local and remote deployments via gRPC.

## Key Features
- Single-file SQLite storage for vectors, memory, and knowledge graph
- Hybrid retrieval (lexical + vector search) with no embedder required
- Full RDF/SPARQL/RDFS/SHACL support for structured knowledge
- MCP server and plugin integration for agents like Claude Code and Codex
- gRPC sidecar for multi-language and multi-agent access

## Why It Matters for RAG Builders
CortexDB provides an all-in-one, embeddable memory and knowledge graph layer that eliminates the need for separate vector databases or graph services, making it ideal for local-first RAG and agent workflows.

## Tech Stack Deep Dive
### Go
Automated review identified **Go** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### RDF/SPARQL
Automated review identified **RDF/SPARQL** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HNSW/IVF/Flat (vector indexes)
Automated review identified **HNSW/IVF/Flat (vector indexes)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### gRPC
Automated review identified **gRPC** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FTS5 (full-text search)
Automated review identified **FTS5 (full-text search)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### RDFS/SHACL
Automated review identified **RDFS/SHACL** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
