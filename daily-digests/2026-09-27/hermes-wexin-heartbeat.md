---
title: "geekma/hermes-wexin-heartbeat"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Python", "Cron Scheduler", "Docker", "Linux", "macOS"]
quality_score: 8
rag_relevance: 7
deployment_complexity: "Medium"
tags: ["WeChat iLink", "rate-limiting", "heartbeat", "task recovery", "Hermes Agent"]
source: "https://github.com/geekma/hermes-wexin-heartbeat"
stars: 0
language: "Python"
last_updated: "2026-08-03T16:24:17Z"
discovered_at: "2026-08-03T16:25:21Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A heartbeat and task recovery system for WeChat iLink channels in the Hermes Agent ecosystem, designed to prevent rate-limiting by sending periodic zero-token messages and automatically resuming interrupted tasks without user intervention.

## Key Features
- Zero-token heartbeat pushes every 5 minutes to prevent WeChat iLink rate-limiting
- Dual-cron architecture for proactive channel maintenance and LLM-powered task continuation
- Automatic detection and resumption of unfinished tasks without user input
- Retry queue with exponential backoff for failed message deliveries
- Configurable timezone and deployment-agnostic path handling (Docker/Host)

## Why It Matters for RAG Builders
It ensures uninterrupted WeChat iLink communication for AI agents by preventing rate-limiting and automating task recovery, critical for maintaining long-running RAG interactions.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Cron Scheduler
Automated review identified **Cron Scheduler** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Linux
Automated review identified **Linux** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### macOS
Automated review identified **macOS** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
