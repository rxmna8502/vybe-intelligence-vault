---
title: "dat999zx/knowl"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["TypeScript", "Node.js", "SQLite", "MCP (Model Context Protocol)", "Embedding models", "Tree-sitter"]
quality_score: 9
rag_relevance: 10
deployment_complexity: "Low"
tags: ["Agent memory", "Knowledge management", "Fact supersession", "MCP integration", "Local-first"]
source: "https://github.com/dat999zx/knowl"
stars: 27
language: "TypeScript"
last_updated: "2026-09-02T02:10:46Z"
discovered_at: "2026-09-02T02:12:26Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Knowl is a persistent memory system for AI agents that automatically retires outdated facts when new information supersedes them, ensuring agents work with current knowledge without manual intervention. It integrates with popular AI development environments via the Model Context Protocol (MCP) and operates locally with no API keys required.

## Key Features
- Automatic retirement of outdated facts via supersession, reducing retrieval errors
- Seamless integration with AI agents (Claude Code, Cursor, Codex, etc.) via MCP
- Local SQLite-based storage with no external API dependencies
- Real-time memory updates and conflict resolution for parallel agent sessions
- Benchmark-proven accuracy improvements (90% vs. 79% on MemoryAgentBench)

## Why It Matters for RAG Builders
Knowl eliminates the critical failure point in RAG systems where outdated or conflicting facts pollute the knowledge base, ensuring agents always retrieve the most current and accurate information.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Embedding models
Automated review identified **Embedding models** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Tree-sitter
Automated review identified **Tree-sitter** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
