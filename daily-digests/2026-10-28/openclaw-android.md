---
title: "8crsk/openclaw-android"
content_type: "repo"
engine: "v2"
category: "Agent Framework"
tech_stack: ["Kotlin", "Android SDK", "Node.js (embedded as libnode.so)", "LLM APIs (NVIDIA, OpenAI, Anthropic, Google Gemini)", "AccessibilityService", "WebSocket RPC", "Android Keystore", "Composio (for MCP tool integrations)"]
quality_score: 9
rag_relevance: 7
deployment_complexity: "Medium"
tags: ["on-device AI", "Android automation", "accessibility service", "agentic workflows", "privacy-focused"]
source: "https://github.com/8crsk/openclaw-android"
stars: 3
language: "Kotlin"
last_updated: "2026-07-21T12:19:57Z"
discovered_at: "2026-07-21T12:23:39Z"
evaluated_by: "mistral-small-latest"
---

## Summary
4AIs is an on-device AI agent for Android that autonomously performs tasks like opening apps, summarizing content, and automating workflows by reading the screen via AccessibilityService and executing actions like taps and typing. It runs entirely on the phone with no cloud backend, using your own API key for the LLM provider of your choice.

## Key Features
- Fully on-device execution with no cloud middleman; API keys are validated and stored in Android's encrypted keystore
- Real UI automation via AccessibilityService with occlusion filtering, stable element IDs, and post-action diffs
- Human-in-the-loop approval for risky actions and comprehensive on-device audit logging
- Supports 300+ app integrations via Composio MCP tools and scheduled proactive agent runs (Heartbeat)
- Bring-your-own-key model provider support with direct API calls from the device

## Why It Matters for RAG Builders
It enables fully private, on-device AI agents capable of complex mobile automation without relying on external servers or APIs, making it ideal for privacy-sensitive or offline use cases.

## Tech Stack Deep Dive
### Kotlin
Automated review identified **Kotlin** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Android SDK
Automated review identified **Android SDK** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js (embedded as libnode.so)
Automated review identified **Node.js (embedded as libnode.so)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### LLM APIs (NVIDIA, OpenAI, Anthropic, Google Gemini)
Automated review identified **LLM APIs (NVIDIA, OpenAI, Anthropic, Google Gemini)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### AccessibilityService
Automated review identified **AccessibilityService** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### WebSocket RPC
Automated review identified **WebSocket RPC** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Android Keystore
Automated review identified **Android Keystore** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Composio (for MCP tool integrations)
Automated review identified **Composio (for MCP tool integrations)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
