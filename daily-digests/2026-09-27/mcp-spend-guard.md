---
title: "waseemnasir2k26/mcp-spend-guard"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Python", "SQLite", "YAML", "JSON-RPC", "CLI"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Low"
tags: ["MCP", "cost control", "rate limiting", "agent safety", "budget enforcement"]
source: "https://github.com/waseemnasir2k26/mcp-spend-guard"
stars: 1
language: "Python"
last_updated: "2026-09-01T14:49:53Z"
discovered_at: "2026-09-04T02:20:06Z"
evaluated_by: "mistral-small-latest"
---

## Summary
mcp-spend-guard is a drop-in proxy that wraps any stdio MCP server to enforce spend caps, per-tool rate limits, circuit breakers, and kill switches, preventing runaway agent loops from burning budgets.

## Key Features
- Hard spend caps per tool and session with estimated USD limits
- Per-tool and per-minute rate limiting to prevent abuse
- Circuit breaker to halt sessions after consecutive tool errors
- Kill switch file for immediate manual intervention
- SQLite-backed counters for persistent session tracking across restarts

## Why It Matters for RAG Builders
It prevents runaway AI agents from exceeding budget limits by enforcing real-time spend and rate controls, ensuring cost predictability in production deployments.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### YAML
Automated review identified **YAML** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSON-RPC
Automated review identified **JSON-RPC** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CLI
Automated review identified **CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
