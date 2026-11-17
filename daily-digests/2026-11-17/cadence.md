---
title: "thomas-powers-jr/cadence"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["TypeScript", "Node.js", "CLI", "MCP (Model Context Protocol)", "Git", "Jest (implied by test references)"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Medium"
tags: ["AI agent verification", "quality gates", "acceptance criteria", "DRAFT\u2192BUILD\u2192SETTLE loop", "MCP server"]
source: "https://github.com/thomas-powers-jr/cadence"
stars: 2
language: "TypeScript"
last_updated: "2026-08-02T22:54:26Z"
discovered_at: "2026-08-02T22:56:13Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Cadence is a TypeScript-based developer tool that enforces quality gates for AI-assisted software workflows using a DRAFT→BUILD→SETTLE loop. It prevents AI agents from self-certifying work completion by re-verifying acceptance criteria against real evidence before marking tasks as done.

## Key Features
- DRAFT→BUILD→SETTLE loop enforces disciplined workflows for AI agents
- Re-verifies declared acceptance criteria against real evidence (tests, diffs, state)
- Refuses to settle unverified work, even if CI is green
- Supports CLI, host adapters (Claude Code, Codex), and MCP server for flexible integration
- Configurable gate profiles per change to balance rigor and overhead

## Why It Matters for RAG Builders
Cadence provides a critical verification layer for AI engineering stacks by ensuring AI agents cannot self-certify work completion without real evidence, reducing the risk of unverified or gamed outputs.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CLI
Automated review identified **CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Git
Automated review identified **Git** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Jest (implied by test references)
Automated review identified **Jest (implied by test references)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
