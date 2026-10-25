---
title: "nyx-builds/agent-budget"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Python", "Model Context Protocol (MCP)", "FastAPI", "SQLite", "Pydantic", "Click", "uvloop", "Jinja2", "Pytest"]
quality_score: 9
rag_relevance: 10
deployment_complexity: "Medium"
tags: ["cost management", "LLM guardrails", "autonomous agents", "budget tracking", "MCP server"]
source: "https://github.com/nyx-builds/agent-budget"
stars: 0
language: "Python"
last_updated: "2026-08-04T21:09:52Z"
discovered_at: "2026-08-04T21:15:09Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Agent Budget is an MCP server and CLI tool that provides real-time cost guardrails, spend optimization, and budget management for autonomous AI agents. It prevents runaway LLM costs through pre-flight checks, progressive throttling, anomaly detection, and kill switches, all without requiring external accounts.

## Key Features
- Real-time cost guardrails with pre-flight checks (ALLOW/WARN/BLOCK/THROTTLE decisions)
- Progressive spend throttling with tiered limits (60%, 75%, 90%) and model downgrade suggestions
- Multi-currency FX engine with rate drift detection and unified budget views
- Loop detection and anomaly detection for runaway agent costs
- Model cost optimizer with 30+ model comparisons and savings projections

## Why It Matters for RAG Builders
Agent Budget is essential for RAG/AI stack builders to prevent catastrophic cost overruns from autonomous agents while optimizing model selection and spend efficiency.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastAPI
Automated review identified **FastAPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Pydantic
Automated review identified **Pydantic** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Click
Automated review identified **Click** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### uvloop
Automated review identified **uvloop** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Jinja2
Automated review identified **Jinja2** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Pytest
Automated review identified **Pytest** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
