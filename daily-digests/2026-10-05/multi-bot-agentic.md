---
title: "Francis1998/multi-bot-agentic"
content_type: "repo"
engine: "v2"
category: "Orchestrator"
tech_stack: ["Python", "SQLite", "OpenAI API", "Claude Code CLI", "Gemini API", "Kimi API", "Ruff", "Mypy", "Pytest"]
quality_score: 9
rag_relevance: 9
deployment_complexity: "Medium"
tags: ["deterministic agents", "multi-provider orchestration", "event logging", "safety controls", "rationale traces"]
source: "https://github.com/Francis1998/multi-bot-agentic"
stars: 17
language: "Python"
last_updated: "2026-08-03T16:20:40Z"
discovered_at: "2026-08-03T16:25:27Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A deterministic multi-provider AI agent orchestrator implementing explicit Observe -> Decide -> Act loops with durable event logging, rationale traces, and safety controls. It supports multiple LLM providers (GPT-5.5, Claude, Gemini, Kimi) via normalized adapters and includes allowlisted tool execution with structured artifact generation.

## Key Features
- Explicit Observe -> Decide -> Act runtime loop with deterministic decision engine
- Durable SQLite event logging with replay and reporting capabilities
- Provider-agnostic LLM adapters for GPT-5.5, Claude, Gemini, Kimi, and fake providers
- Safety policies bounding runtime, tools, and cancellations with rationale traces
- Allowlisted tool execution with structured artifact generation (checklist, JSON, YAML, TOML, calculator)

## Why It Matters for RAG Builders
It provides a production-grade framework for building auditable, safe, and multi-provider AI agents with explicit control loops and durable state tracking, critical for enterprise RAG deployments.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenAI API
Automated review identified **OpenAI API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Claude Code CLI
Automated review identified **Claude Code CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Gemini API
Automated review identified **Gemini API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Kimi API
Automated review identified **Kimi API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Ruff
Automated review identified **Ruff** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Mypy
Automated review identified **Mypy** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Pytest
Automated review identified **Pytest** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
