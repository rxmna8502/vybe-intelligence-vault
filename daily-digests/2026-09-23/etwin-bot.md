---
title: "AliceLJY/etwin-bot"
content_type: "repo"
engine: "v2"
category: "Agent Framework"
tech_stack: ["JavaScript", "Node.js", "Telegram Bot API", "Claude Agent SDK", "Codex SDK", "Bun", "Grammy (Telegram bot framework)", "Launchd (macOS service manager)"]
quality_score: 9
rag_relevance: 7
deployment_complexity: "Medium"
tags: ["proactive AI companion", "Telegram bot", "model-led cadence", "Claude/Codex backend", "personalization"]
source: "https://github.com/AliceLJY/etwin-bot"
stars: 0
language: "JavaScript"
last_updated: "2026-07-21T14:58:42Z"
discovered_at: "2026-07-21T15:03:37Z"
evaluated_by: "mistral-small-latest"
---

## Summary
etwin-bot is a single-user, proactive Telegram companion that periodically wakes, gathers conversation context, and uses an LLM (Claude or Codex) to decide whether to initiate interaction. It enforces deterministic owner overrides, supports swappable backends, and prioritizes model-led cadence with a focus on personalization and security.

## Key Features
- Model-led proactive messaging with configurable intervals and LLM-driven decisions
- Swappable backends (Claude Agent SDK or Codex) with instance-specific configurations
- Deterministic owner override via `/quiet` command blocking proactive ticks for 24 hours
- Personal persona customization through gitignored `.local.md` files and persona templates
- Secure single-user boundary enforced via `ALICE_CHAT_ID` and strict permission checks

## Why It Matters for RAG Builders
It provides a robust framework for building personalized, proactive AI companions with model-led decision-making and secure single-user boundaries, critical for privacy-focused RAG applications.

## Tech Stack Deep Dive
### JavaScript
Automated review identified **JavaScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Telegram Bot API
Automated review identified **Telegram Bot API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Claude Agent SDK
Automated review identified **Claude Agent SDK** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Codex SDK
Automated review identified **Codex SDK** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Bun
Automated review identified **Bun** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Grammy (Telegram bot framework)
Automated review identified **Grammy (Telegram bot framework)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Launchd (macOS service manager)
Automated review identified **Launchd (macOS service manager)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
