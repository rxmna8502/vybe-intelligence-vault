---
title: "manishk753/claude-model-router"
content_type: "repo"
engine: "v2"
category: "Orchestrator"
tech_stack: ["Python", "Claude API", "MCP (Model Context Protocol)", "JSON", "Shell Scripting"]
quality_score: 8
rag_relevance: 7
deployment_complexity: "Medium"
tags: ["model routing", "cost optimization", "Claude API", "MCP server", "dynamic tier selection"]
source: "https://github.com/manishk753/claude-model-router"
stars: 0
language: "Python"
last_updated: "2026-07-21T15:02:15Z"
discovered_at: "2026-07-21T15:03:41Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A cost-optimized model router that dynamically selects the cheapest Claude model tier capable of handling a task while maintaining quality, reducing total costs by up to 65% compared to always using top-tier models. It includes a skill for Claude Code, an MCP server for integration, and a dispatcher for API/SDK usage.

## Key Features
- Hybrid routing strategy combining deterministic heuristics and a Haiku classifier for tie-breaking
- Configurable tier cutoffs, weights, and escalation paths via `config.json`
- Built-in evaluation tool (`eval/run_eval.py`) for tuning and accuracy validation
- Supports Claude Code skill, MCP server, and API dispatcher for flexible integration
- Auto-escalation on failure with one-tier-up fallback to ensure quality

## Why It Matters for RAG Builders
It enables RAG builders to dynamically optimize model selection for cost efficiency without sacrificing answer quality, reducing operational expenses while maintaining performance.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Claude API
Automated review identified **Claude API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSON
Automated review identified **JSON** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Shell Scripting
Automated review identified **Shell Scripting** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
