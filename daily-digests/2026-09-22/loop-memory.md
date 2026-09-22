---
title: "smartfind/loop-memory"
content_type: "repo"
engine: "v2"
category: "Orchestrator"
tech_stack: ["Python", "SQLite", "FastAPI", "BM25", "Semantic Search", "MCP (Model Context Protocol)", "JSON/JSONL", "CLI", "Web UI", "Git"]
quality_score: 9
rag_relevance: 10
deployment_complexity: "Medium"
tags: ["agent memory", "local-first", "knowledge distillation", "multi-agent", "persistent context"]
source: "https://github.com/smartfind/loop-memory"
stars: 1
language: "Python"
last_updated: "2026-08-09T12:47:57Z"
discovered_at: "2026-08-09T12:50:02Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Loop Memory is a local-first, agent-agnostic memory system that captures, scores, and distills agent conversations into a curated wiki, enabling persistent knowledge across sessions. It supports multiple AI agents (Codex, Claude, Hermes, OpenClaw) via hooks or a generic watcher CLI, and re-injects distilled knowledge into future interactions.

## Key Features
- Multi-agent capture via hooks or generic watcher CLI for any agent with on-disk transcripts
- Hybrid recall system combining BM25, semantic search, and entity-based retrieval with temporal reasoning
- Four-stage evolution pipeline: capture, score, cluster, distill, and re-inject knowledge into future sessions
- Local-first SQLite storage with zero external dependencies, ensuring privacy and offline functionality
- Dashboard and Web UI for real-time monitoring, manual consolidation, and interactive exploration of distilled knowledge

## Why It Matters for RAG Builders
Loop Memory provides a critical bridge for RAG systems by enabling persistent, evolving context across agent sessions without relying on external services, ensuring privacy and seamless integration with local AI workflows.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastAPI
Automated review identified **FastAPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### BM25
Automated review identified **BM25** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Semantic Search
Automated review identified **Semantic Search** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSON/JSONL
Automated review identified **JSON/JSONL** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CLI
Automated review identified **CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Web UI
Automated review identified **Web UI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Git
Automated review identified **Git** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
