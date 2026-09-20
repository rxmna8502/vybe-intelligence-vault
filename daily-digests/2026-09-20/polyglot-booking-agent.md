---
title: "abiotov/polyglot-booking-agent"
content_type: "repo"
engine: "v2"
category: "Agent Framework"
tech_stack: ["Python", "OpenAI (gpt-4o-mini)", "Deepgram (nova-3 STT)", "Cartesia (Sonic TTS)", "LiveKit Agents (WebRTC)", "Vapi (telephony)", "Telegram Bot API", "CalDAV (iCloud, Google, Radicale)", "Ruff (code style)", "Hypothesis (property-based testing)", "Opik (observability)"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Medium"
tags: ["voice AI", "appointment scheduling", "multilingual", "deterministic scheduling", "CalDAV integration"]
source: "https://github.com/abiotov/polyglot-booking-agent"
stars: 1
language: "Python"
last_updated: "2026-07-15T21:56:22Z"
discovered_at: "2026-07-15T21:58:59Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A multilingual voice AI agent for booking, rescheduling, and canceling appointments across phone, browser (WebRTC), and Telegram. It uses a deterministic scheduling engine with a CalDAV calendar as the single source of truth, ensuring no hallucinated bookings and compact schedule management.

## Key Features
- Deterministic scheduling engine with compact slot ranking to preserve schedule usability
- Multi-channel support (phone, WebRTC, Telegram) with language switching mid-conversation
- CalDAV calendar integration as the single source of truth with read-before-write safety
- Strict tool-based LLM interactions to prevent hallucinated bookings
- Provider-agnostic architecture with swappable LLM, STT, TTS, and telephony backends

## Why It Matters for RAG Builders
It provides a reliable, auditable, and vendor-agnostic framework for building voice-based AI agents that require precise scheduling and calendar integration without hallucinations.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenAI (gpt-4o-mini)
Automated review identified **OpenAI (gpt-4o-mini)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Deepgram (nova-3 STT)
Automated review identified **Deepgram (nova-3 STT)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Cartesia (Sonic TTS)
Automated review identified **Cartesia (Sonic TTS)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### LiveKit Agents (WebRTC)
Automated review identified **LiveKit Agents (WebRTC)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Vapi (telephony)
Automated review identified **Vapi (telephony)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Telegram Bot API
Automated review identified **Telegram Bot API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CalDAV (iCloud, Google, Radicale)
Automated review identified **CalDAV (iCloud, Google, Radicale)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Ruff (code style)
Automated review identified **Ruff (code style)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Hypothesis (property-based testing)
Automated review identified **Hypothesis (property-based testing)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Opik (observability)
Automated review identified **Opik (observability)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
