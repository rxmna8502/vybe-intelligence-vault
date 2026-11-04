---
title: "aahlijia/dekko"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Python", "tree-sitter", "Model Context Protocol (MCP)", "Claude Code", "Cline", "CLI", "JSON", "Markdown"]
quality_score: 9
rag_relevance: 10
deployment_complexity: "Medium"
tags: ["code indexing", "call graph", "LLM agent tools", "static analysis", "token efficiency"]
source: "https://github.com/aahlijia/dekko"
stars: 1
language: "Python"
last_updated: "2026-08-03T20:28:08Z"
discovered_at: "2026-08-03T20:28:38Z"
evaluated_by: "mistral-small-latest"
---

## Summary
dekko is a static code map generator and codebase indexer designed for LLM coding agents. It parses repositories using tree-sitter to create human-readable and machine-readable maps (MAP.md and map.json) that include call graphs, file outlines, and dependency rankings, enabling agents to answer targeted questions about codebases efficiently.

## Key Features
- Generates structured code maps (MAP.md and map.json) with call graphs and file outlines
- Supports 9+ Tier-1 languages (Python, Rust, Java, etc.) and 55+ additional languages via tree-sitter grammars
- Integrates with MCP for direct agent tooling (13 tools including symbol queries, context packs, and worksets)
- Claude Code and Cline plugin support for seamless agent workflows
- Demonstrated 3x–200x token savings over traditional Read/Grep workflows for codebase queries

## Why It Matters for RAG Builders
dekko drastically reduces token usage for LLM agents by providing structured, queryable codebase maps, enabling efficient navigation and context gathering without parsing entire files.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### tree-sitter
Automated review identified **tree-sitter** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Claude Code
Automated review identified **Claude Code** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Cline
Automated review identified **Cline** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CLI
Automated review identified **CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSON
Automated review identified **JSON** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Markdown
Automated review identified **Markdown** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
