---
title: "benitolopez/ker"
content_type: "repo"
engine: "v2"
category: "Agent Framework"
tech_stack: ["TypeScript", "Node.js", "OpenAI API", "HTTP/HTTPS", "SSE (Server-Sent Events)", "OAuth"]
quality_score: 7
rag_relevance: 6
deployment_complexity: "Medium"
tags: ["minimal agent", "conversation memory", "streaming LLM", "OpenAI integration", "TypeScript"]
source: "https://github.com/benitolopez/ker"
stars: 0
language: "TypeScript"
last_updated: "2026-07-10T18:14:54Z"
discovered_at: "2026-07-10T18:22:34Z"
evaluated_by: "mistral-small-latest"
---

## Summary
ker is a minimalist TypeScript-based coding agent that provides a long-lived daemon for streaming model responses over HTTP. It currently supports OpenAI's Responses API or ChatGPT subscriptions for single-turn conversations with conversation memory.

## Key Features
- Long-lived daemon with persistent conversation memory across sessions
- Supports both OpenAI API keys and ChatGPT subscriptions via OAuth
- Streaming model responses with retry/backoff for transient failures
- Disposable CLI client for seamless interaction with the daemon
- Modular monorepo structure with CI for build, format, and test checks

## Why It Matters for RAG Builders
It provides a lightweight foundation for building conversational AI agents with persistent memory and streaming capabilities, essential for RAG systems requiring multi-turn interactions.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenAI API
Automated review identified **OpenAI API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HTTP/HTTPS
Automated review identified **HTTP/HTTPS** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SSE (Server-Sent Events)
Automated review identified **SSE (Server-Sent Events)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OAuth
Automated review identified **OAuth** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
