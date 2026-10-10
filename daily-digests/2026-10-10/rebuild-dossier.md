---
title: "Parker-Fawcett/rebuild-dossier"
content_type: "repo"
engine: "v2"
category: "Agent Framework"
tech_stack: ["TypeScript", "Node.js", "MCP (Model Context Protocol)", "Playwright", "AST Parsing", "Mutation Testing", "Claude Code Integration"]
quality_score: 9
rag_relevance: 10
deployment_complexity: "Medium"
tags: ["MCP server", "agentic rebuild", "specification generation", "mutation testing", "contract enforcement"]
source: "https://github.com/Parker-Fawcett/rebuild-dossier"
stars: 2
language: "TypeScript"
last_updated: "2026-09-03T02:00:44Z"
discovered_at: "2026-09-03T02:23:41Z"
evaluated_by: "mistral-small-latest"
---

## Summary
An MCP server that reverse-engineers a locked rebuild specification (CLAUDE.md, .claude config, and mutation-tested tests) from an existing application, enabling coding agents to rebuild it reliably without ambiguity. It does not perform the rebuild itself but produces the contracts and tests needed for a separate agent to execute the rebuild cleanly.

## Key Features
- Reverse-engineers a locked rebuild spec (CLAUDE.md, .claude config) from an existing app without executing it
- Generates mutation-tested test suites to ensure behavioral equivalence
- Mechanically enforces contracts and rules via hooks (e.g., blocking edits to spec/, preventing untested contract builds)
- Interactive ambiguity resolution with MCP elicitation to avoid silent auto-resolution of critical decisions
- Produces a clean sibling directory with all artifacts for a fresh rebuild agent to consume

## Why It Matters for RAG Builders
It provides a critical missing piece for reliable agentic app rebuilds by generating enforceable specifications and tests that prevent silent behavioral drift, addressing a major failure mode in current AI-driven development pipelines.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Playwright
Automated review identified **Playwright** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### AST Parsing
Automated review identified **AST Parsing** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Mutation Testing
Automated review identified **Mutation Testing** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Claude Code Integration
Automated review identified **Claude Code Integration** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
