---
title: "cuzfrog/docent-mcp"
content_type: "repo"
engine: "v2"
category: "Vector DB"
tech_stack: ["Rust", "MCP (Model Context Protocol)", "FastEmbed", "BM25", "Semantic Search", "HTTP", "In-Memory Indexing"]
quality_score: 8
rag_relevance: 9
deployment_complexity: "Medium"
tags: ["document search", "semantic indexing", "BM25 hybrid search", "MCP server", "markdown processing"]
source: "https://github.com/cuzfrog/docent-mcp"
stars: 1
language: "Rust"
last_updated: "2026-07-21T17:12:13Z"
discovered_at: "2026-07-21T17:16:46Z"
evaluated_by: "mistral-small-latest"
---

## Summary
docent is an experimental MCP server written in Rust that provides semantic and BM25 document search capabilities. It indexes markdown files in-memory, enabling agents to query document content with hybrid search methods while preserving document structure.

## Key Features
- Hybrid semantic + BM25 search for markdown documents
- In-memory indexing with auto-refresh on file changes
- Section-aware chunking preserving heading structure
- Streamable HTTP-based MCP server interface
- Configurable embedding models via FastEmbed

## Why It Matters for RAG Builders
It provides a lightweight, in-memory hybrid search solution for markdown documents, enabling agents to efficiently query and retrieve contextually relevant information for RAG pipelines.

## Tech Stack Deep Dive
### Rust
Automated review identified **Rust** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastEmbed
Automated review identified **FastEmbed** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### BM25
Automated review identified **BM25** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Semantic Search
Automated review identified **Semantic Search** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HTTP
Automated review identified **HTTP** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### In-Memory Indexing
Automated review identified **In-Memory Indexing** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
