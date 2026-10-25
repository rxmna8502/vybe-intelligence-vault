---
title: "modarresi1913/shadow-db"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["TypeScript", "Node.js", "Firecrawl", "SQLite", "Qdrant", "Express", "WebSocket", "SHA-256 hashing", "DOM normalization"]
quality_score: 9
rag_relevance: 10
deployment_complexity: "Medium"
tags: ["delta detection", "semantic events", "web monitoring", "AI agent pipeline", "content reduction"]
source: "https://github.com/modarresi1913/shadow-db"
stars: 1
language: "TypeScript"
last_updated: "2026-08-09T05:53:12Z"
discovered_at: "2026-08-09T06:59:45Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Shadow-DB is a live-delta engine that transforms static web pages into a continuous stream of semantic events for AI agents, avoiding full-page re-extraction. It detects meaningful changes (e.g., price, availability) and emits typed, high-signal events with minimal payload size.

## Key Features
- Detects meaningful changes with 0 false positives/negatives
- Emits typed semantic events (price_change, availability_change) instead of raw HTML diffs
- Reduces event payload by 97.6% compared to full-page re-extraction
- Supports modular components (fetchers, classifiers, sinks) via interfaces
- Optional integration with Qdrant for RAG pipelines

## Why It Matters for RAG Builders
Shadow-DB drastically reduces token consumption and storage overhead for RAG pipelines by streaming only meaningful changes instead of re-processing entire web pages.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Firecrawl
Automated review identified **Firecrawl** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Qdrant
Automated review identified **Qdrant** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Express
Automated review identified **Express** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### WebSocket
Automated review identified **WebSocket** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SHA-256 hashing
Automated review identified **SHA-256 hashing** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### DOM normalization
Automated review identified **DOM normalization** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
