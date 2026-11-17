---
title: "maxgfr/codeindex"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["TypeScript", "Tree-sitter", "Web Workers", "Regex Parsing", "Protobuf", "CLI", "MCP Server"]
quality_score: 9
rag_relevance: 9
deployment_complexity: "Medium"
tags: ["repository indexing", "symbol extraction", "link graph", "deterministic parsing", "zero-dependency"]
source: "https://github.com/maxgfr/codeindex"
stars: 0
language: "TypeScript"
last_updated: "2026-08-01T06:17:28Z"
discovered_at: "2026-08-01T06:29:16Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A zero-dependency, deterministic repository indexing engine that performs file walking, language detection, symbol/import extraction, and builds a typed cross-file link-graph with analytics. Designed for downstream tools to vendor the engine as a single file rather than installing as a dependency.

## Key Features
- Deterministic file walking with configurable constraints (e.g., ignore lists, binary/lockfile skips, size caps)
- Multi-language symbol extraction with complete signatures, doc comments, and line spans using Tree-sitter AST or regex fallback
- Cross-file import resolution across languages (TypeScript, Go, Rust, Java, etc.)
- Typed link-graph generation with analytics (PageRank, Louvain communities, type hierarchies) and SCIP index output
- Vendorable single-file engine (`engine.mjs`) with optional grammar tiers for precision without external dependencies

## Why It Matters for RAG Builders
It provides a lightweight, deterministic, and vendorable way to extract structured code intelligence from repositories, enabling RAG systems to build accurate, cross-file context without heavy external dependencies.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Tree-sitter
Automated review identified **Tree-sitter** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Web Workers
Automated review identified **Web Workers** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Regex Parsing
Automated review identified **Regex Parsing** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Protobuf
Automated review identified **Protobuf** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CLI
Automated review identified **CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP Server
Automated review identified **MCP Server** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
