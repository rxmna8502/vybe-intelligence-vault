---
title: "h0n9/oh-my-graph"
content_type: "repo"
engine: "v2"
category: "Orchestrator"
tech_stack: ["Go", "Model Context Protocol (MCP)", "HTTP Server", "JSONL Storage", "Force-Directed Graph Visualization"]
quality_score: 9
rag_relevance: 10
deployment_complexity: "Medium"
tags: ["persistent context", "knowledge graph", "MCP server", "session continuity", "project understanding"]
source: "https://github.com/h0n9/oh-my-graph"
stars: 0
language: "Go"
last_updated: "2026-07-20T12:12:02Z"
discovered_at: "2026-07-20T12:22:20Z"
evaluated_by: "mistral-small-latest"
---

## Summary
oh-my-graph is a persistent knowledge graph server designed to maintain AI agent context across sessions by storing project understanding as nodes and edges in an append-only log. It enables agents to build on prior discoveries, decisions, and messages without re-explaining context.

## Key Features
- Append-only WAL storage for nodes and edges with never-modified records
- Shared knowledge across concurrent AI agents via topic-based graphs
- MCP-compatible HTTP server for seamless integration with AI clients
- Visual graph exploration and interactive force-directed rendering
- Asynchronous messaging via `message` nodes and `replies_to` edges

## Why It Matters for RAG Builders
It eliminates the need for AI agents to rediscover project context in every session, enabling continuous learning and collaboration across time and agents.

## Tech Stack Deep Dive
### Go
Automated review identified **Go** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HTTP Server
Automated review identified **HTTP Server** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSONL Storage
Automated review identified **JSONL Storage** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Force-Directed Graph Visualization
Automated review identified **Force-Directed Graph Visualization** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
