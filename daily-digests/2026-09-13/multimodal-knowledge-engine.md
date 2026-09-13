---
title: "iTao-AI/multimodal-knowledge-engine"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Python", "SQLite", "FastAPI", "MCP (Model Context Protocol)", "CLI", "FTS5 (Full-Text Search)", "CJK (Chinese, Japanese, Korean) retrieval strategies", "pytest", "ruff", "pyright"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Medium"
tags: ["local-first", "evidence-engine", "agent-tool", "document-retrieval", "CJK-retrieval"]
source: "https://github.com/iTao-AI/multimodal-knowledge-engine"
stars: 0
language: "Python"
last_updated: "2026-07-11T17:52:52Z"
discovered_at: "2026-07-11T17:54:37Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A local-first, Agent-callable Evidence engine for ingesting, searching, and querying documents and media with verifiable source processing and retrieval. It operates entirely within a local application boundary, avoiding hosted RAG or LLM answer generation.

## Key Features
- Local-only processing with verifiable evidence lifecycle (successful runs publish evidence; failures remain excluded)
- Agent-callable via CLI and stdio MCP server with shared application contract
- Active Publication Search returning stable, cited evidence without LLM generation
- Rebuildable retrieval projections and immutable assets/artifacts for auditability
- Built-in CJK retrieval strategies (e.g., cjk-active-scan-overlap-v1) for owner-startup use cases

## Why It Matters for RAG Builders
It provides a trustworthy, local-first foundation for RAG pipelines by ensuring evidence integrity and verifiable retrieval without external dependencies or hosted services.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastAPI
Automated review identified **FastAPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CLI
Automated review identified **CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FTS5 (Full-Text Search)
Automated review identified **FTS5 (Full-Text Search)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CJK (Chinese, Japanese, Korean) retrieval strategies
Automated review identified **CJK (Chinese, Japanese, Korean) retrieval strategies** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### pytest
Automated review identified **pytest** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### ruff
Automated review identified **ruff** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### pyright
Automated review identified **pyright** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
