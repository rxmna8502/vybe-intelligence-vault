---
title: "furkanyesildag/llm-uav-pilot-assistant"
content_type: "repo"
engine: "v2"
category: "Orchestrator"
tech_stack: ["Python 3.10+", "LLM (DeepSeek, Hermes 3, Ollama)", "Flask (web UI)", "JSONL/CSV logging", "Pytest (optional for unit tests)", "Ollama (local inference)"]
quality_score: 9
rag_relevance: 7
deployment_complexity: "Medium"
tags: ["UAV control", "LLM safety layer", "natural language to action", "deterministic fallback", "zero-dependency core"]
source: "https://github.com/furkanyesildag/llm-uav-pilot-assistant"
stars: 0
language: "Python"
last_updated: "2026-07-20T15:06:31Z"
discovered_at: "2026-07-20T15:10:49Z"
evaluated_by: "mistral-small-latest"
---

## Summary
An end-to-end prototype that translates natural language commands into safe, auditable UAV control actions using a deterministic rule-based layer to validate LLM outputs before execution. Supports both cloud-based (DeepSeek) and local (Hermes 3/Ollama) LLMs with a zero-dependency core and a web-based ground control interface.

## Key Features
- Dual-mode LLM integration (cloud/local) with automatic fallback to rule-based parsing
- Mandatory safety validation layer that rejects unsafe commands with Turkish explanations
- Web-based ground control interface with live telemetry and task planning
- Comprehensive logging (JSONL + CSV) for all commands, decisions, and outcomes
- Zero external dependencies for the core system, ensuring reproducibility

## Why It Matters for RAG Builders
It demonstrates a critical safety-first approach to integrating LLMs with real-world control systems by enforcing strict validation layers that prevent unsafe actions, which is essential for building reliable RAG-powered AI agents in high-stakes environments.

## Tech Stack Deep Dive
### Python 3.10+
Automated review identified **Python 3.10+** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### LLM (DeepSeek, Hermes 3, Ollama)
Automated review identified **LLM (DeepSeek, Hermes 3, Ollama)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Flask (web UI)
Automated review identified **Flask (web UI)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSONL/CSV logging
Automated review identified **JSONL/CSV logging** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Pytest (optional for unit tests)
Automated review identified **Pytest (optional for unit tests)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Ollama (local inference)
Automated review identified **Ollama (local inference)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
