---
title: "xerj-org/xerj"
content_type: "repo"
engine: "v2"
category: "Vector DB"
tech_stack: ["Rust", "Elasticsearch API", "Tree-sitter", "ONNX", "SQLite", "PDF/DOCX parsers"]
quality_score: 9
rag_relevance: 10
deployment_complexity: "Low"
tags: ["search engine", "AI agents", "Elasticsearch-compatible", "vector search", "AST-aware indexing"]
source: "https://github.com/xerj-org/xerj"
stars: 1209
language: "Rust"
last_updated: "2026-08-07T09:53:49Z"
discovered_at: "2026-08-07T10:05:39Z"
evaluated_by: "mistral-small-latest"
---

## Summary
XERJ is a lightweight, Elasticsearch-compatible search engine designed for AI agents, enabling fast indexing and querying of code, documents, logs, and PDFs without token waste. It eliminates the need for agents to read entire files by providing structured, AST-aware retrieval via a single binary with no dependencies.

## Key Features
- Elasticsearch API compatibility with 1360/1363 conformance tests passed
- Auto-indexing of code, docs, logs, and PDFs with AST-aware parsing (Tree-sitter)
- Hybrid full-text, vector, and structured search in a single query
- Single static binary with no JVM or dependencies, prebuilt for multiple platforms
- Agent memory and knowledge graph capabilities via `/_graph` endpoints

## Why It Matters for RAG Builders
XERJ enables AI agents to efficiently query large codebases and documents without bloating context windows, making it essential for scalable RAG and agentic workflows.

## Tech Stack Deep Dive
### Rust
Automated review identified **Rust** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Elasticsearch API
Automated review identified **Elasticsearch API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Tree-sitter
Automated review identified **Tree-sitter** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### ONNX
Automated review identified **ONNX** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PDF/DOCX parsers
Automated review identified **PDF/DOCX parsers** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
