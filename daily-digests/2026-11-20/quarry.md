---
title: "sait-turanalp/quarry"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Rust", "Tree-sitter", "Tantivy", "Model2Vec", "MCP (Model Context Protocol)", "Int8 static embedding engine"]
quality_score: 9
rag_relevance: 10
deployment_complexity: "Medium"
tags: ["semantic search", "code intelligence", "local processing", "AI agents", "MCP server"]
source: "https://github.com/sait-turanalp/quarry"
stars: 0
language: "Rust"
last_updated: "2026-08-05T22:13:06Z"
discovered_at: "2026-08-05T22:15:05Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Quarry is a local, privacy-preserving code intelligence engine designed for AI coding agents. It provides semantic search and structural analysis of codebases in 14 languages, enabling agents to retrieve relevant code snippets with high accuracy without relying on external APIs or uploading source code.

## Key Features
- Semantic search over 14 languages with 83% accuracy in top 20 results
- Local, private, and offline operation with no API calls or data uploads
- Sub-20ms query latency using int8 static embeddings and fused lexical/vector scoring
- Structural analysis tools (call graphs, impact analysis, type fields, module exports)
- MCP server integration for seamless agent interaction

## Why It Matters for RAG Builders
Quarry drastically reduces retrieval misses for AI agents, cutting the error rate from 1 in 3 to 1 in 6, which directly improves context quality and reduces token waste in RAG pipelines.

## Tech Stack Deep Dive
### Rust
Automated review identified **Rust** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Tree-sitter
Automated review identified **Tree-sitter** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Tantivy
Automated review identified **Tantivy** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model2Vec
Automated review identified **Model2Vec** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Int8 static embedding engine
Automated review identified **Int8 static embedding engine** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
