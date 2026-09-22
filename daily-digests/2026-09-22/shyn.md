---
title: "shyn-labs/shyn"
content_type: "repo"
engine: "v2"
category: "Orchestrator"
tech_stack: ["TypeScript", "SQLite", "Whisper (for transcription)", "MCP (Model Context Protocol)", "Homebrew (for distribution)", "macOS System APIs (Screen Recording, Accessibility, Calendar, Microphone)", "Elastic License 2.0"]
quality_score: 9
rag_relevance: 10
deployment_complexity: "Medium"
tags: ["local-first", "privacy-focused", "memory-companion", "MCP-server", "on-device-embeddings"]
source: "https://github.com/shyn-labs/shyn"
stars: 0
language: "TypeScript"
last_updated: "2026-08-05T05:46:25Z"
discovered_at: "2026-08-05T05:48:19Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Shyn is a local-first memory companion for macOS (Apple Silicon) that captures, indexes, and provides instant recall of your screen content, meetings, browsing history, and notes via an encrypted on-device database. It enables AI assistants to query your personal history with total recall while ensuring privacy and zero cloud dependency.

## Key Features
- Hybrid search (keyword + semantic) over encrypted local SQLite index for millisecond recall
- Ambient screen capture and meeting transcription with on-device Whisper, purging audio immediately after transcription
- MCP-compatible JSON-RPC server for seamless integration with AI assistants like Claude
- Consent-first capture with granular controls (pause, exclude apps, delete with byte-level honesty)
- Zero cloud dependency; all data encrypted at rest in macOS Keychain

## Why It Matters for RAG Builders
Shyn provides a critical privacy-preserving memory layer for RAG systems, enabling AI assistants to ground responses in a user's personal history without exposing data to the cloud.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Whisper (for transcription)
Automated review identified **Whisper (for transcription)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Homebrew (for distribution)
Automated review identified **Homebrew (for distribution)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### macOS System APIs (Screen Recording, Accessibility, Calendar, Microphone)
Automated review identified **macOS System APIs (Screen Recording, Accessibility, Calendar, Microphone)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Elastic License 2.0
Automated review identified **Elastic License 2.0** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
