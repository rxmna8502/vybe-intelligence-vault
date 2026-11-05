---
title: "MinishLab/semble"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Python", "Tree-sitter", "Model2Vec", "BM25", "Reciprocal Rank Fusion (RRF)", "CLI", "MCP Server", "Git"]
quality_score: 9
rag_relevance: 10
deployment_complexity: "Low"
tags: ["code search", "AI agents", "token efficiency", "MCP server", "local indexing"]
source: "https://github.com/MinishLab/semble"
stars: 5628
language: "Python"
last_updated: "2026-07-16T08:06:53Z"
discovered_at: "2026-07-16T08:10:18Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Semble is a high-performance code search library designed for AI agents, enabling instant retrieval of relevant code snippets with ~98% fewer tokens than traditional grep+read methods. It supports local and remote repositories, integrates with MCP-compatible agents, and operates entirely on CPU with no external dependencies.

## Key Features
- Ultra-fast indexing (~250ms per repo) and querying (~1.5ms) on CPU
- ~98% token reduction compared to grep+read while maintaining 99% retrieval quality
- Seamless integration with MCP-compatible agents (Claude Code, Cursor, Codex, etc.)
- Supports local paths, git URLs, and custom ignore files (.gitignore, .sembleignore)
- Adaptive ranking combining semantic (Model2Vec) and lexical (BM25) retrievers

## Why It Matters for RAG Builders
Semble drastically reduces token usage and latency for code retrieval in RAG pipelines, making it essential for building efficient and cost-effective AI-powered coding assistants.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Tree-sitter
Automated review identified **Tree-sitter** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model2Vec
Automated review identified **Model2Vec** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### BM25
Automated review identified **BM25** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Reciprocal Rank Fusion (RRF)
Automated review identified **Reciprocal Rank Fusion (RRF)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CLI
Automated review identified **CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP Server
Automated review identified **MCP Server** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Git
Automated review identified **Git** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
