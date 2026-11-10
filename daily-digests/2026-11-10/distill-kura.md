---
title: "lna-lab/distill-kura"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Python", "DeepSeek Harness", "MCP (Model Context Protocol)", "HTTP Service", "TOML/YAML for configuration"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Medium"
tags: ["long-term memory", "agent memory", "deterministic recall", "evidence-gated writing", "prefix caching"]
source: "https://github.com/lna-lab/distill-kura"
stars: 11
language: "Python"
last_updated: "2026-09-01T15:35:07Z"
discovered_at: "2026-09-01T15:56:30Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Distill-kura is a long-term memory system for agents that prioritizes recall by meaning and writing gated by evidence. It avoids traditional vector databases and embeddings, instead using deterministic recognition and gated distillation to ensure memory accuracy and relevance.

## Key Features
- Recall by meaning with a tiered recognition system (5 independent heads) for fast, accurate lookups (~2ms for direct questions)
- Writing gated by verbatim evidence quotes to prevent hallucinations and self-reinforcing errors
- Multi-modal memory classification ([USER], [TOOL], [ACT], [SELF]) to ensure traceability and accuracy
- Three-layer memory index (pinned, fresh, trigger) optimized for relevance and performance
- Supports multiple deployment modes: DeepSeek Harness plugin, MCP server, HTTP service, and Python library

## Why It Matters for RAG Builders
Distill-kura ensures agents maintain accurate, traceable long-term memory without relying on embeddings or vector databases, reducing hallucinations and improving reliability in RAG systems.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### DeepSeek Harness
Automated review identified **DeepSeek Harness** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HTTP Service
Automated review identified **HTTP Service** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### TOML/YAML for configuration
Automated review identified **TOML/YAML for configuration** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
