---
title: "LH8PPL/core-memory-kit"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["JavaScript/TypeScript", "SQLite", "FTS5 (Full-Text Search)", "Node.js", "MCP (Model Context Protocol)", "CLI tools", "Markdown", "Local embeddings (optional)"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Medium"
tags: ["persistent memory", "AI agent context", "local semantic search", "git-committed memory", "automatic recall"]
source: "https://github.com/LH8PPL/core-memory-kit"
stars: 2
language: "JavaScript"
last_updated: "2026-07-18T13:09:26Z"
discovered_at: "2026-07-18T13:09:57Z"
evaluated_by: "mistral-small-latest"
---

## Summary
core-memory-kit enables persistent, per-project memory for AI agents like Claude Code, Kiro, Cursor, and Codex by capturing decisions, preferences, and context in plain markdown files committed to the project's git repository. It automatically injects this memory at session start and recalls facts by meaning using local semantic search.

## Key Features
- Persistent per-project memory stored in plain markdown committed to git, ensuring context travels with the codebase.
- Automatic capture of decisions and preferences without manual prompts, with background LLM processing.
- Local semantic search (R@5 0.941) for recall by meaning, eliminating reliance on exact keyword matches.
- Privacy-preserving design with automated PII redaction and deterministic screening before commits.
- Cross-agent compatibility (Claude Code, Kiro, Cursor, Codex) and per-project memory isolation.

## Why It Matters for RAG Builders
It solves the critical problem of AI agents forgetting context between sessions by providing persistent, git-committed memory that enhances continuity and reduces redundant explanations for RAG and AI stack builders.

## Tech Stack Deep Dive
### JavaScript/TypeScript
Automated review identified **JavaScript/TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FTS5 (Full-Text Search)
Automated review identified **FTS5 (Full-Text Search)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CLI tools
Automated review identified **CLI tools** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Markdown
Automated review identified **Markdown** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Local embeddings (optional)
Automated review identified **Local embeddings (optional)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
