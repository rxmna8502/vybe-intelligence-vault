---
title: "GoSlowPoke168/hermes-openrouter-free-rotator"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Python", "Hermes Agent", "OpenRouter API", "YAML", "Cron"]
quality_score: 9
rag_relevance: 7
deployment_complexity: "Medium"
tags: ["model rotation", "free models", "OpenRouter", "Hermes Agent", "privacy-respecting"]
source: "https://github.com/GoSlowPoke168/hermes-openrouter-free-rotator"
stars: 1
language: "Python"
last_updated: "2026-07-20T06:09:09Z"
discovered_at: "2026-07-20T06:16:52Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A Hermes Agent plugin that automatically selects and rotates the best free, privacy-respecting OpenRouter models for default and fallback configurations, ensuring continuous availability as models expire or become unsuitable.

## Key Features
- Automatically ranks and selects free OpenRouter models based on privacy, tool capability, uptime, and expiry
- Preserves user-added fallback providers while managing plugin-owned entries
- Idempotent sync with dry-run support to preview changes
- Daily cron-based updates with atomic config writes and backups
- Privacy tier prioritization and real-usage ranking for model selection

## Why It Matters for RAG Builders
It ensures RAG pipelines using Hermes Agent always have reliable, high-quality free models available by automatically rotating expiring or unsuitable models without manual intervention.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Hermes Agent
Automated review identified **Hermes Agent** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenRouter API
Automated review identified **OpenRouter API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### YAML
Automated review identified **YAML** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Cron
Automated review identified **Cron** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
