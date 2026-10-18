---
title: "phasespace-labs/palinode"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Python", "SQLite", "SQLite-vec", "FTS5", "Ollama", "BGE-M3", "Git", "MCP (Model Context Protocol)", "REST API", "CLI", "Docker"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Medium"
tags: ["auditable memory", "git-versioned", "MCP server", "agent memory", "hybrid search"]
source: "https://github.com/phasespace-labs/palinode"
stars: 27
language: "Python"
last_updated: "2026-08-01T23:45:37Z"
discovered_at: "2026-08-01T23:57:21Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Palinode provides auditable, git-versioned memory for AI agents by storing facts as markdown files in a git repository, indexed with hybrid search (BM25 + vector) and served via MCP. It enables human-readable, diffable, and rollback-able agent memory with zero external dependencies beyond SQLite and Ollama.

## Key Features
- Git-versioned markdown memory files with YAML frontmatter for human readability and auditability
- Hybrid search combining BM25 keyword and vector search (BGE-M3 embeddings) for precision and recall
- MCP-first architecture enabling seamless integration with multiple IDEs and agent frameworks
- Automated compaction and session capture with git commit history for rollback and provenance
- Single SQLite database file with zero external dependencies for indexing and storage

## Why It Matters for RAG Builders
Palinode enables RAG builders to create auditable, human-readable agent memory that can be diffed, blamed, and rolled back, ensuring transparency and reliability in AI-driven workflows.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite-vec
Automated review identified **SQLite-vec** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FTS5
Automated review identified **FTS5** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Ollama
Automated review identified **Ollama** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### BGE-M3
Automated review identified **BGE-M3** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Git
Automated review identified **Git** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### REST API
Automated review identified **REST API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CLI
Automated review identified **CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
