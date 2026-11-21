---
title: "tools-for-agents/recall"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Node.js", "SQLite", "FTS5 (Full-Text Search)", "HTTP APIs", "MCP (Model Context Protocol)", "JavaScript/TypeScript"]
quality_score: 9
rag_relevance: 10
deployment_complexity: "Medium"
tags: ["federated search", "context retrieval", "agent memory", "token budgeting", "unified briefing"]
source: "https://github.com/tools-for-agents/recall"
stars: 0
language: "HTML"
last_updated: "2026-07-12T10:10:38Z"
discovered_at: "2026-07-12T10:26:42Z"
evaluated_by: "mistral-small-latest"
---

## Summary
recall is a federated search tool that unifies queries across an agent's distributed knowledge stores (cortex, agent-hq, scout, lens) into a single token-budgeted briefing. It enables agents to load relevant context at the start of a task, avoiding redundant re-derivation of known information.

## Key Features
- Federates search across multiple knowledge stores (cortex, agent-hq, scout, lens) into a single query.
- Provides a token-budgeted briefing with normalized, ranked results from all available sources.
- Offers a web console (`recall serve`) for interactive exploration and a CLI for programmatic use.
- Supports MCP server integration for seamless agent workflows.
- Tracks new results since last query and allows saving frequent searches for persistent access.

## Why It Matters for RAG Builders
recall eliminates the friction of manually searching scattered knowledge stores, enabling agents to efficiently load relevant context at task initiation and avoid redundant re-derivation of known information.

## Tech Stack Deep Dive
### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FTS5 (Full-Text Search)
Automated review identified **FTS5 (Full-Text Search)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HTTP APIs
Automated review identified **HTTP APIs** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JavaScript/TypeScript
Automated review identified **JavaScript/TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
