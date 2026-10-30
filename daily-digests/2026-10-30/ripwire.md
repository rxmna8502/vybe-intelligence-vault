---
title: "redhat-et/ripwire"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["C++23", "tree-sitter", "CMake", "Personalized PageRank", "MCP (Model Context Protocol)"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Medium"
tags: ["code analysis", "call graph", "deterministic retrieval", "agent tooling", "zero-dependency"]
source: "https://github.com/redhat-et/ripwire"
stars: 0
language: "C++"
last_updated: "2026-08-02T15:01:15Z"
discovered_at: "2026-08-02T15:02:50Z"
evaluated_by: "mistral-small-latest"
---

## Summary
ripwire is a zero-dependency C++23 CLI tool that maps codebases into a ranked, deterministic call graph for coding agents, enabling fast retrieval and structural analysis. It provides orientation, blast radius assessment, test identification, and quality metrics with full transparency on its limitations.

## Key Features
- Builds a ranked call graph from source code using tree-sitter for symbol extraction and Personalized PageRank for ranking
- Provides deterministic, minified XML output with full transparency on counts and limitations (e.g., 'counts_floor' labels)
- Offers 123+ commands for codebase navigation, quality assessment, and agent integration via MCP server
- Includes honesty contracts (e.g., `--test-gate`, `--edit-check`) to validate changes and assess impact
- Achieves median 0.074s warm retrieval time with high accuracy (60.9% strict file@10 on LocBench)

## Why It Matters for RAG Builders
It enables AI agents to perform fast, accurate, and transparent codebase analysis without external dependencies or embeddings, reducing token waste and improving reliability in RAG pipelines.

## Tech Stack Deep Dive
### C++23
Automated review identified **C++23** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### tree-sitter
Automated review identified **tree-sitter** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CMake
Automated review identified **CMake** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Personalized PageRank
Automated review identified **Personalized PageRank** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
