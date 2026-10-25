---
title: "cloudnewbie/SUBSENTRY"
content_type: "repo"
engine: "v2"
category: "Agent Framework"
tech_stack: ["Python", "Strands Agents SDK", "AWS Bedrock (Claude models)", "Ollama (local LLM)", "FastAPI", "SQLite", "Typer (CLI)", "Pytest"]
quality_score: 9
rag_relevance: 7
deployment_complexity: "Medium"
tags: ["autonomous agents", "bill management", "subscription monitoring", "human-in-the-loop", "deterministic detection"]
source: "https://github.com/cloudnewbie/SUBSENTRY"
stars: 0
language: "Python"
last_updated: "2026-09-03T02:10:29Z"
discovered_at: "2026-09-03T02:16:36Z"
evaluated_by: "mistral-small-latest"
---

## Summary
SubSentry is an autonomous background agent built with the Strands Agents SDK that monitors bank and card statements to detect recurring payments, price hikes, zombie subscriptions, and late fees. It drafts and dispatches emails for bill management but requires human approval before any action is taken, ensuring minimal user intervention.

## Key Features
- Deterministic recurring payment detection with pure math (no LLM dependency)
- Multi-agent Strands graph for triage, drafting, and dispatching emails
- HumanInTheLoop approval gate for all outbound actions
- Offline/local operation with Ollama or cloud-based with AWS Bedrock
- Full audit trail with session persistence and synthetic data demo

## Why It Matters for RAG Builders
SubSentry automates tedious bill and subscription management while ensuring critical decisions require human approval, reducing financial leaks and saving time for RAG/AI stack builders.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Strands Agents SDK
Automated review identified **Strands Agents SDK** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### AWS Bedrock (Claude models)
Automated review identified **AWS Bedrock (Claude models)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Ollama (local LLM)
Automated review identified **Ollama (local LLM)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastAPI
Automated review identified **FastAPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Typer (CLI)
Automated review identified **Typer (CLI)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Pytest
Automated review identified **Pytest** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
