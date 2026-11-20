---
title: "quangdang46/fast_file_search"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Rust", "Tree-sitter", "SIMD", "Bloom filters", "Bigram indexing", "JSON-RPC", "MCP (Model Context Protocol)", "C ABI"]
quality_score: 9
rag_relevance: 9
deployment_complexity: "Medium"
tags: ["file search", "symbol navigation", "MCP server", "code-aware", "token-budget reader"]
source: "https://github.com/quangdang46/fast_file_search"
stars: 6
language: "Rust"
last_updated: "2026-07-11T02:18:15Z"
discovered_at: "2026-07-11T02:27:50Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A high-performance, code-aware file search CLI and MCP server that replaces traditional tools like `find`, `grep`, and `cat` with a single binary. It combines fuzzy file search, tree-sitter-powered symbol navigation, and token-budget-aware file reading for both humans and AI agents.

## Key Features
- Replaces multiple CLI tools (`find`, `grep`, `cat`) with a single binary for efficiency
- Tree-sitter-powered symbol indexing and navigation (definitions, callers, callees, refs, flow, impact)
- Frecency-ranked and typo-resistant fuzzy search for both files and content
- Token-budget-aware file reader for AI agents to avoid overwhelming context
- MCP server integration for seamless use with AI assistants like Claude Code or Cursor

## Why It Matters for RAG Builders
It streamlines file and symbol search for AI agents while reducing latency and context overhead, making it essential for building efficient RAG pipelines.

## Tech Stack Deep Dive
### Rust
Automated review identified **Rust** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Tree-sitter
Automated review identified **Tree-sitter** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SIMD
Automated review identified **SIMD** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Bloom filters
Automated review identified **Bloom filters** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Bigram indexing
Automated review identified **Bigram indexing** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSON-RPC
Automated review identified **JSON-RPC** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### C ABI
Automated review identified **C ABI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
