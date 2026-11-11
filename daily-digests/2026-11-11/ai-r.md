---
title: "pro-target/ai-r"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Python", "SQLite", "JSONL", "MCP (Model Context Protocol)", "CLI", "JSON-RPC", "Bash"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Medium"
tags: ["agent auditing", "session analysis", "multi-agent compatibility", "risk detection", "plan verification"]
source: "https://github.com/pro-target/ai-r"
stars: 3
language: "Python"
last_updated: "2026-07-14T05:20:57Z"
discovered_at: "2026-07-14T05:29:08Z"
evaluated_by: "mistral-small-latest"
---

## Summary
ai-r is a read-only tool that audits and analyzes session histories from multiple coding agents (Claude, Codex, OpenCode, Antigravity, Pi) to verify agent actions, detect risky commands, and extract structured entities like plans, intents, and authorship. It normalizes disparate agent log formats into a unified interface for auditing, memory building, and cross-agent continuity.

## Key Features
- Normalizes session logs from 5+ coding agents into a unified, agent-neutral stream
- Detects and flags dangerous commands (e.g., `rm -rf`, `curl|sh`) with optional rollback confirmation
- Extracts and compares plans vs. actual edits to verify agent adherence to intent
- Provides structured entities (plans, intents, authorship) for memory systems and audits
- Offers MCP server, CLI, and Python SDK for programmatic access and integration

## Why It Matters for RAG Builders
ai-r provides critical auditing and verification capabilities for RAG/AI stacks by ensuring agent actions are transparent, traceable, and free from hidden risks or misalignments.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSONL
Automated review identified **JSONL** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CLI
Automated review identified **CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSON-RPC
Automated review identified **JSON-RPC** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Bash
Automated review identified **Bash** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
