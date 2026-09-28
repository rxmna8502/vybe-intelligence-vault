---
title: "recla93/NeuRAG"
content_type: "repo"
engine: "v2"
category: "Vector DB"
tech_stack: ["Python", "MCP (Model Context Protocol)", "FastEmbed", "TF-IDF", "SQLite/libSQL", "Turso", "AST (Abstract Syntax Tree) parsing", "Jaccard similarity", "RRF (Reciprocal Rank Fusion)", "MMR (Maximal Marginal Relevance)"]
quality_score: 9
rag_relevance: 10
deployment_complexity: "Medium"
tags: ["hierarchical knowledge base", "MCP server", "vector search", "cross-linking", "permanent vault"]
source: "https://github.com/recla93/NeuRAG"
stars: 0
language: "Python"
last_updated: "2026-08-04T15:32:26Z"
discovered_at: "2026-08-04T15:34:41Z"
evaluated_by: "mistral-small-latest"
---

## Summary
NeuRAG is a local-first MCP server that provides LLMs with a structured, permanent knowledge base. It indexes directories, organizes content into a hierarchical node graph, and enables hybrid semantic/lexical search with cross-linking for enhanced retrieval.

## Key Features
- Hierarchical node organization (godnode → fundamental → specialization) for structured knowledge storage
- Hybrid search combining semantic (FastEmbed) and lexical (TF-IDF) retrieval with RRF fusion
- Automatic cross-linking between nodes using tag overlap and source file metadata with weighted evidence
- Adaptive chunking (AST-aware for code, heading splits for Markdown, page breaks for PDF) for optimized indexing
- Turso/libSQL native vector search with SQLite fallback, supporting standalone or gateway-managed deployments

## Why It Matters for RAG Builders
NeuRAG provides a permanent, structured, and searchable knowledge vault for LLMs, eliminating the need for repeated context injection and enabling long-term memory with cross-referenced relationships.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastEmbed
Automated review identified **FastEmbed** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### TF-IDF
Automated review identified **TF-IDF** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite/libSQL
Automated review identified **SQLite/libSQL** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Turso
Automated review identified **Turso** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### AST (Abstract Syntax Tree) parsing
Automated review identified **AST (Abstract Syntax Tree) parsing** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Jaccard similarity
Automated review identified **Jaccard similarity** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### RRF (Reciprocal Rank Fusion)
Automated review identified **RRF (Reciprocal Rank Fusion)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MMR (Maximal Marginal Relevance)
Automated review identified **MMR (Maximal Marginal Relevance)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
