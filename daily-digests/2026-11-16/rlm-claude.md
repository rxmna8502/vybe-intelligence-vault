---
title: "EncrEor/rlm-claude"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Python", "Model Context Protocol (MCP)", "BM25", "FastEmbed", "Model2Vec", "Docker", "Git", "PyPI"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Medium"
tags: ["memory persistence", "Claude Code", "MCP server", "context management", "automated recall"]
source: "https://github.com/EncrEor/rlm-claude"
stars: 38
language: "Python"
last_updated: "2026-08-01T19:06:38Z"
discovered_at: "2026-08-01T19:19:21Z"
evaluated_by: "mistral-small-latest"
---

## Summary
RLM is an MCP server that provides persistent memory for Claude Code, solving the context loss issue during `/compact` operations by automatically saving insights, conversation chunks, and decisions across sessions.

## Key Features
- Auto-save before context loss triggered by `/compact` or auto-compact events
- Hybrid search combining BM25, semantic similarity, and fuzzy matching for robust recall
- Multi-project organization with smart retention policies (archive/purge/immunity)
- Sub-agent skills for parallel and isolated analysis of conversation chunks
- Zero-configuration installation with support for Docker, PyPI, and Git

## Why It Matters for RAG Builders
RLM ensures critical context and decisions are preserved across Claude Code sessions, eliminating repetitive explanations and enabling seamless long-term project memory for AI-driven workflows.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### BM25
Automated review identified **BM25** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastEmbed
Automated review identified **FastEmbed** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model2Vec
Automated review identified **Model2Vec** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Git
Automated review identified **Git** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PyPI
Automated review identified **PyPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
