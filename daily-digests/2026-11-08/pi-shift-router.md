---
title: "green-dalii/pi-shift-router"
content_type: "repo"
engine: "v2"
category: "Orchestrator"
tech_stack: ["TypeScript", "Node.js", "LLM (Large Language Model) Judges", "JSON-mode Classification", "Exponential Backoff", "TUI (Terminal User Interface)", "REST API Integration", "Model Failover Chains"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Low"
tags: ["model routing", "LLM judge", "two-tier architecture", "failover automation", "cost optimization"]
source: "https://github.com/green-dalii/pi-shift-router"
stars: 1
language: "TypeScript"
last_updated: "2026-08-08T01:22:23Z"
discovered_at: "2026-08-08T01:26:16Z"
evaluated_by: "mistral-small-latest"
---

## Summary
pi-shift-router is a two-tier model router for the pi-coding-agent that dynamically classifies messages to route between a fast (cheap) and smart (premium) LLM tier based on message importance. It uses an LLM judge for classification and supports automatic failover, cooldowns, and zero runtime dependencies.

## Key Features
- Dynamic two-tier routing (fast vs. smart) based on LLM judge classification
- Instant upgrades for consequential messages and trend-based downgrades for routine ones
- Automatic failover with exponential backoff cooldown on 429/5xx errors
- Zero runtime dependencies and minimal configuration overhead
- Cross-provider native support with multi-model fallback chains

## Why It Matters for RAG Builders
It optimizes LLM usage costs by automatically routing routine tasks to cheaper models while ensuring critical tasks use higher-quality models, reducing expenses without sacrificing performance.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### LLM (Large Language Model) Judges
Automated review identified **LLM (Large Language Model) Judges** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSON-mode Classification
Automated review identified **JSON-mode Classification** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Exponential Backoff
Automated review identified **Exponential Backoff** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### TUI (Terminal User Interface)
Automated review identified **TUI (Terminal User Interface)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### REST API Integration
Automated review identified **REST API Integration** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Failover Chains
Automated review identified **Model Failover Chains** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
