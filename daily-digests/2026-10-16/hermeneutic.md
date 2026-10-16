---
title: "hermes-labs-ai/hermeneutic"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Python", "Regex", "Embeddings (Ollama with nomic-embed-text)", "CLI", "JSONL", "MIT License"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Medium"
tags: ["drift detection", "AI correction mining", "epistemic gate", "interpretation failure", "evidence-based validation"]
source: "https://github.com/hermes-labs-ai/hermeneutic"
stars: 4
language: "Python"
last_updated: "2026-08-01T08:41:01Z"
discovered_at: "2026-08-01T09:06:53Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Hermeneutic is an evidence-first drift detection tool for AI agents that mines user corrections from chat logs to identify recurring interpretation failures and applies a fixed epistemic gate to outgoing AI responses to flag unverifiable claims before they are trusted or shipped.

## Key Features
- Mines correction episodes from AI chat logs (prompt → assistant → user correction → repair) to build a local corpus of user-specific interpretation failures.
- Applies a fixed, deterministic epistemic gate to outgoing AI responses, flagging unverifiable claims (e.g., completion with counts, universal quantifiers like 'all') before they are trusted.
- Optional retrieval layer uses embeddings to surface relevant prior corrections as advisory context for similar future tasks.
- Zero dependencies for the standalone gate, designed for offline use and script integration with exit codes for automation.
- Supports multiple AI log formats (Claude Code, Codex, OpenAI) and offers optional integrations (e.g., Claude Code hooks, Python Router for advanced composition).

## Why It Matters for RAG Builders
It prevents AI drift and unverifiable claims from propagating in production workflows by leveraging user corrections and enforcing evidence-based validation before responses are trusted.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Regex
Automated review identified **Regex** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Embeddings (Ollama with nomic-embed-text)
Automated review identified **Embeddings (Ollama with nomic-embed-text)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CLI
Automated review identified **CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSONL
Automated review identified **JSONL** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MIT License
Automated review identified **MIT License** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
