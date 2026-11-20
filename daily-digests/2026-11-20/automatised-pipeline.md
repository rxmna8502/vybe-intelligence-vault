---
title: "cdeust/automatised-pipeline"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Rust", "MCP (Model Context Protocol)", "LadybugDB (property graph database)", "tree-sitter (AST parsing)", "Leiden community detection", "BM25 + TF-IDF + RRF hybrid search", "Tantivy (search engine)", "Cypher (graph query language)", "LSP (Language Server Protocol) integration"]
quality_score: 9
rag_relevance: 10
deployment_complexity: "Medium"
tags: ["codebase intelligence", "MCP server", "property graph", "call chain resolution", "community detection"]
source: "https://github.com/cdeust/automatised-pipeline"
stars: 2
language: "Rust"
last_updated: "2026-07-11T18:53:07Z"
discovered_at: "2026-07-11T19:00:00Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A Rust-based MCP server that indexes multi-language codebases into a property graph, resolves call chains, detects functional communities, and exposes 24 tools for AI agents to query code structure, impact, and relationships without modifying code.

## Key Features
- Indexes 10 languages (Rust, Python, TypeScript, Java, Kotlin, Swift, Objective-C, C, C++, Go) into a property graph
- Resolves imports and call chains across files with confidence scoring
- Detects functional communities using Leiden-class algorithms and traces execution flows
- Provides hybrid search (BM25 + sparse TF-IDF + RRF) for precise codebase queries
- Exposes 24 MCP tools for AI agents to analyze code structure, impact, and relationships

## Why It Matters for RAG Builders
It provides the critical read-only intelligence layer that enables AI agents to accurately understand code structure, dependencies, and impact before generating fixes or PRDs, eliminating hallucinations and reducing bugs.

## Tech Stack Deep Dive
### Rust
Automated review identified **Rust** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### LadybugDB (property graph database)
Automated review identified **LadybugDB (property graph database)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### tree-sitter (AST parsing)
Automated review identified **tree-sitter (AST parsing)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Leiden community detection
Automated review identified **Leiden community detection** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### BM25 + TF-IDF + RRF hybrid search
Automated review identified **BM25 + TF-IDF + RRF hybrid search** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Tantivy (search engine)
Automated review identified **Tantivy (search engine)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Cypher (graph query language)
Automated review identified **Cypher (graph query language)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### LSP (Language Server Protocol) integration
Automated review identified **LSP (Language Server Protocol) integration** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
