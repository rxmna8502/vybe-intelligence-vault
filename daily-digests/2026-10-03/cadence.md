---
title: "manehorizons/cadence"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["TypeScript", "Node.js", "CLI", "MCP (Model Context Protocol)", "Git", "Jest (testing framework)"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Medium"
tags: ["AI agent verification", "quality gates", "acceptance criteria", "CI/CD control", "developer tooling"]
source: "https://github.com/manehorizons/cadence"
stars: 2
language: "TypeScript"
last_updated: "2026-07-17T23:51:09Z"
discovered_at: "2026-07-17T23:51:55Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Cadence is a TypeScript-based developer tool that enforces a DRAFT→BUILD→SETTLE loop to prevent AI agents from marking work as complete without verified acceptance criteria. It acts as a verification layer, re-checking declared criteria and refusing to settle until evidence meets the specified standards.

## Key Features
- DRAFT→BUILD→SETTLE loop enforces rigorous verification of work before marking it complete
- Configurable quality gates re-check acceptance criteria and refuse unverified work
- Supports multiple entry points: CLI, host adapters (Claude Code, Codex), and MCP server
- Offline mock verifier for testing, with optional real AI-based verification (Anthropic, Ollama, etc.)
- Optimistic concurrency control and tool-trust envelopes for secure MCP tool interactions

## Why It Matters for RAG Builders
Cadence provides a critical control layer for AI-assisted development workflows by ensuring agents cannot self-certify work completion without verified evidence, reducing the risk of unverified or flawed code being marked as done.

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

### Jest (testing framework)
Automated review identified **Jest (testing framework)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
