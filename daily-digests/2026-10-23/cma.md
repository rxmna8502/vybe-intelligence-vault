---
title: "Clarethium/cma"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Bash", "Python", "JSON/JSONL", "MCP (Model Context Protocol)", "Shell scripting"]
quality_score: 9
rag_relevance: 7
deployment_complexity: "Medium"
tags: ["failure tracking", "practice loop", "evidence-based", "AI assistant integration", "methodology-agnostic"]
source: "https://github.com/Clarethium/cma"
stars: 0
language: "Python"
last_updated: "2026-07-16T14:59:11Z"
discovered_at: "2026-07-16T15:00:33Z"
evaluated_by: "mistral-small-latest"
---

## Summary
cma is an executable compound practice loop that captures failures, decisions, and preventions locally, surfaces relevant prior captures at action time, and tracks evidence of loop closure. It operates as a methodology-agnostic substrate for failure-mode tracking and prevention, integrating with AI assistants and shell environments.

## Key Features
- Captures failures, decisions, rejections, and preventions with texture preservation (contextual fields like `--intended`, `--corrected`, `--excerpt`).
- Surfaces relevant prior captures at action time via hooks for Claude Code, zsh, and bash environments.
- Computable evidence tracking with loop-closure rate metrics grounded in surface-event logs.
- MCP-compatible server (`cma-mcp`) for integration with other AI clients.
- Supports custom failure-mode classification via external classifiers for methodology-specific tagging.

## Why It Matters for RAG Builders
It provides a structured, local-first approach to capturing and preventing recurring failures, reducing blind spots in AI-driven development workflows by integrating actionable context at the point of decision-making.

## Tech Stack Deep Dive
### Bash
Automated review identified **Bash** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSON/JSONL
Automated review identified **JSON/JSONL** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Shell scripting
Automated review identified **Shell scripting** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
