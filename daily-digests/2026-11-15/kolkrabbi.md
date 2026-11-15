---
title: "onembyte/kolkrabbi"
content_type: "repo"
engine: "v2"
category: "Agent Framework"
tech_stack: ["Go", "OpenRouter API", "Ollama", "vLLM", "SSE (Server-Sent Events)", "JSONL", "Cosign (for release signing)"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Low"
tags: ["AI coding agent", "model-agnostic", "local dashboard", "terminal-based", "cost tracking"]
source: "https://github.com/onembyte/kolkrabbi"
stars: 1
language: "Go"
last_updated: "2026-09-04T02:12:05Z"
discovered_at: "2026-09-04T02:13:13Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Kolkrabbi is an open-source, model-agnostic AI coding agent CLI that supports chat, code, and agent modes. It enables users to interact with any AI model via OpenRouter, local endpoints (Ollama/vLLM), or direct subscriptions, while providing a local dashboard for tracking model performance, costs, and ratings.

## Key Features
- Three operational modes: chat (tool-free), code (Claude-Code style), and agent (task orchestration with dependencies)
- Effort dial for dynamic model tier selection and resource allocation (low/medium/high/max)
- 100% local cost and performance dashboard with JSONL-based stats tracking and manual ratings
- Checkpointing and undo functionality for file edits and conversation history
- Permission tiers (ask/auto-approve/full-auto) for controlled model interactions

## Why It Matters for RAG Builders
Kolkrabbi provides a lightweight, model-agnostic framework for AI-driven coding tasks with built-in cost tracking and performance analytics, making it ideal for RAG builders seeking a flexible, local-first agent system.

## Tech Stack Deep Dive
### Go
Automated review identified **Go** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenRouter API
Automated review identified **OpenRouter API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Ollama
Automated review identified **Ollama** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### vLLM
Automated review identified **vLLM** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SSE (Server-Sent Events)
Automated review identified **SSE (Server-Sent Events)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSONL
Automated review identified **JSONL** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Cosign (for release signing)
Automated review identified **Cosign (for release signing)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
