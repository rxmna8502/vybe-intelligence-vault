---
title: "Pharma-Py/Sentinella_mail-IT-"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Python 3.12", "MLX (Apple Silicon)", "llama.cpp (Intel fallback)", "Qwen2.5-14B-Instruct LLM", "IMAP", "AppleScript", "Keychain", "holidays library"]
quality_score: 9
rag_relevance: 6
deployment_complexity: "High"
tags: ["local LLM", "email processing", "calendar automation", "privacy-first", "macOS daemon"]
source: "https://github.com/Pharma-Py/Sentinella_mail-IT-"
stars: 0
language: "Python"
last_updated: "2026-08-08T06:50:51Z"
discovered_at: "2026-08-08T06:52:27Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A privacy-focused macOS daemon that monitors IMAP mailboxes using a fully local LLM (Qwen2.5-14B-Instruct) to classify emails, filter spam, and auto-create calendar events for work-related messages without cloud dependency or data sharing.

## Key Features
- 100% local LLM inference with no cloud API dependency
- Two-layer spam filtering (deterministic blocklist + LLM classification)
- Italian holiday-aware scheduling for calendar event creation
- Hardened security with restrictive permissions, prompt-injection guardrails, and atomic file writes
- Apple Silicon-optimized MLX backend with Intel fallback via llama.cpp

## Why It Matters for RAG Builders
It demonstrates a practical, privacy-first approach to integrating local LLMs with real-world workflows like email processing and calendar automation, offering a blueprint for secure, offline AI-driven tooling.

## Tech Stack Deep Dive
### Python 3.12
Automated review identified **Python 3.12** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MLX (Apple Silicon)
Automated review identified **MLX (Apple Silicon)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### llama.cpp (Intel fallback)
Automated review identified **llama.cpp (Intel fallback)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Qwen2.5-14B-Instruct LLM
Automated review identified **Qwen2.5-14B-Instruct LLM** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### IMAP
Automated review identified **IMAP** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### AppleScript
Automated review identified **AppleScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Keychain
Automated review identified **Keychain** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### holidays library
Automated review identified **holidays library** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
