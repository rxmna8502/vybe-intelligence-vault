---
title: "developerDesinger/ai-brain"
content_type: "repo"
engine: "v2"
category: "Orchestrator"
tech_stack: ["TypeScript", "Tree-sitter", "SQLite", "Node.js", "Claude API", "chokidar", "launchd/systemd", "MCP (Model Context Protocol)"]
quality_score: 9
rag_relevance: 10
deployment_complexity: "Medium"
tags: ["knowledge-graph", "AI-agent-orchestration", "project-local-context", "code-indexing", "cross-tool-consistency"]
source: "https://github.com/developerDesinger/ai-brain"
stars: 0
language: "TypeScript"
last_updated: "2026-07-20T23:53:17Z"
discovered_at: "2026-07-21T00:03:28Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A project-local AI knowledge brain that continuously indexes code and learns from project artifacts to provide a unified, traceable source of truth for AI coding agents. It enforces consistency across tools like Claude Code, Cursor, and Copilot by binding them to a shared project-specific contract.

## Key Features
- Continuous, token-free code indexing via AST and regex with debounced updates
- Project-local knowledge base committed to git, ensuring portability and versioning
- MCP server with 12 tools for AI agent integration (e.g., brain_entity, brain_code_search)
- Sub-agent system for specialized tasks like requirement refinement and style learning
- Enforcement of the 'Iron Law' contract across AI tools to ensure traceability and consistency

## Why It Matters for RAG Builders
It eliminates the need to re-explain projects to AI agents by providing a persistent, project-specific knowledge base that binds every coding tool to a shared source of truth, drastically improving consistency and reducing API costs.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Tree-sitter
Automated review identified **Tree-sitter** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Claude API
Automated review identified **Claude API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### chokidar
Automated review identified **chokidar** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### launchd/systemd
Automated review identified **launchd/systemd** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
