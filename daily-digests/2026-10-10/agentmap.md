---
title: "raymondchins/agentmap"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["TypeScript", "JavaScript", "ts-morph", "Node.js", "CLI", "MCP Server"]
quality_score: 9
rag_relevance: 10
deployment_complexity: "Medium"
tags: ["code mapping", "dependency resolution", "TypeScript compiler", "agent optimization", "local-first"]
source: "https://github.com/raymondchins/agentmap"
stars: 45
language: "JavaScript"
last_updated: "2026-08-04T15:29:13Z"
discovered_at: "2026-08-04T15:35:25Z"
evaluated_by: "mistral-small-latest"
---

## Summary
agentmap is a compiler-grade TypeScript/JavaScript repository mapping tool that helps coding agents efficiently locate relevant code files with 98%+ token savings compared to traditional methods like grep. It resolves TypeScript paths, aliases, and monorepo workspaces to provide accurate dependency and symbol resolution.

## Key Features
- Compiler-grade TypeScript/JavaScript resolution with ts-morph, supporting tsconfig paths, vite/webpack aliases, and monorepo workspaces
- 98%+ token savings for agents by replacing brute-force file dumps with ranked, queryable dependency graphs
- Self-refreshing map via post-commit hooks and agent-loop wiring to prevent stale data and encourage tool usage
- Published accuracy evaluations (EVAL.md) demonstrating 100% precision in dependency and symbol resolution vs. grep's ~60%
- Zero network calls, no vector DB, and no API keys required; fully local and privacy-preserving

## Why It Matters for RAG Builders
It drastically reduces token waste and improves accuracy for RAG/AI agents by providing compiler-grade dependency resolution, ensuring agents query the right files without bloating context.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JavaScript
Automated review identified **JavaScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### ts-morph
Automated review identified **ts-morph** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CLI
Automated review identified **CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP Server
Automated review identified **MCP Server** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
