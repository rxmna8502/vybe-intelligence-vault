---
title: "cdeust/ai-architect-mcp-codebase"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Rust", "MCP (Model Context Protocol)", "LadybugDB (property graph database)", "Tree-sitter (AST parsing)", "Leiden algorithm (community detection)", "BM25", "TF-IDF", "RRF (rank fusion)", "CMake", "Git"]
quality_score: 9
rag_relevance: 10
deployment_complexity: "Medium"
tags: ["code intelligence", "MCP server", "property graph", "impact analysis", "multi-language indexing"]
source: "https://github.com/cdeust/ai-architect-mcp-codebase"
stars: 2
language: "Rust"
last_updated: "2026-08-07T15:56:22Z"
discovered_at: "2026-08-07T16:02:40Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A cross-platform Rust MCP server providing codebase intelligence for AI coding assistants like Claude Code, Codex, and Cursor. It indexes multi-language codebases into a property graph, resolves call chains, detects communities, and exposes 26 tools for hybrid search, impact analysis, and validation without modifying code.

## Key Features
- Indexes 11 languages (Rust, Python, TypeScript, Java, Kotlin, Swift, Objective-C, C, C++, Go, Ruby) into a property graph with community detection via Leiden algorithm
- Hybrid search combining BM25, sparse TF-IDF, and RRF fusion for precise codebase queries
- Provides 26 MCP tools including `analyze_codebase`, `search_codebase`, `get_context`, `get_impact`, and `validate_prd_against_graph` for comprehensive codebase understanding
- Supports cross-platform integration with AI coding assistants (Claude Code, Codex, Gemini CLI, Cursor, VS Code, Zed) via MCP protocol
- Includes automated installation, configuration, and idempotent setup for MCP hosts with optional fail-open hooks for enhanced workflows

## Why It Matters for RAG Builders
It provides essential, read-only codebase intelligence that eliminates hallucinations and enables accurate RAG pipelines by resolving structural dependencies and impact analysis across multi-language codebases.

## Tech Stack Deep Dive
### Rust
Automated review identified **Rust** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### LadybugDB (property graph database)
Automated review identified **LadybugDB (property graph database)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Tree-sitter (AST parsing)
Automated review identified **Tree-sitter (AST parsing)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Leiden algorithm (community detection)
Automated review identified **Leiden algorithm (community detection)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### BM25
Automated review identified **BM25** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### TF-IDF
Automated review identified **TF-IDF** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### RRF (rank fusion)
Automated review identified **RRF (rank fusion)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CMake
Automated review identified **CMake** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Git
Automated review identified **Git** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
