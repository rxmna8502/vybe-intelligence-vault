---
title: "ellmos-ai/open-compute"
content_type: "repo"
engine: "v2"
category: "Orchestrator"
tech_stack: ["Python", "Anthropic SDK", "OpenAI SDK", "mss", "Pillow", "watchdog", "ctypes", "pytest"]
quality_score: 9
rag_relevance: 10
deployment_complexity: "Medium"
tags: ["computer-use agents", "agent loop", "GUI automation", "model-agnostic", "safety gate"]
source: "https://github.com/ellmos-ai/open-compute"
stars: 2
language: "Python"
last_updated: "2026-08-03T16:19:27Z"
discovered_at: "2026-08-03T16:25:32Z"
evaluated_by: "mistral-small-latest"
---

## Summary
open-compute is a lightweight, model-agnostic Python core for building computer-use agents that automate GUI, desktop, and browser tasks. It provides a unified agent loop (perception → reasoning → action → feedback) with swappable backends, normalized coordinates, and a central safety gate, enabling seamless integration with models like Anthropic Claude and OpenAI CUA.

## Key Features
- Unified agent loop with perception, reasoning, action, and feedback stages
- Backend abstraction layer supporting Claude, OpenAI CUA, and mock backends
- Normalized coordinate system (0..1) with backend-specific denormalization
- Centralized safety gate for risk mitigation (confirmation, allow/deny lists)
- Hybrid perception interface (screenshots, accessibility, DOM) for semantic targeting

## Why It Matters for RAG Builders
It provides a standardized, model-agnostic foundation for building computer-use agents, enabling RAG builders to integrate GUI automation seamlessly with minimal vendor lock-in.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Anthropic SDK
Automated review identified **Anthropic SDK** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenAI SDK
Automated review identified **OpenAI SDK** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### mss
Automated review identified **mss** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Pillow
Automated review identified **Pillow** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### watchdog
Automated review identified **watchdog** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### ctypes
Automated review identified **ctypes** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### pytest
Automated review identified **pytest** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
