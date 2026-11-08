---
title: "Herrscherd/herrscher-cursor-backend"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Go", "Cursor Agent CLI", "Herrscher Framework", "JSON/Stream JSON protocols"]
quality_score: 7
rag_relevance: 8
deployment_complexity: "Low"
tags: ["Cursor Agent", "Herrscher", "Backend Plugin", "Stream Processing", "Local AI"]
source: "https://github.com/Herrscherd/herrscher-cursor-backend"
stars: 0
language: "Go"
last_updated: "2026-07-31T12:48:14Z"
discovered_at: "2026-08-04T13:03:46Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A backend plugin for the Herrscher framework that integrates with the local Cursor Agent CLI to process prompts and generate responses. It operates in either stream or oneshot mode, leveraging the locally installed `cursor-agent` binary for headless execution.

## Key Features
- Integrates with local Cursor Agent CLI for headless prompt processing
- Supports both stream and oneshot modes for flexible response handling
- Session resume capability via `ResumeToken` for continuity in multi-turn interactions
- Forwards context and attachments to the Cursor Agent via stdin
- Publishes model catalog through `Manifest.Models` for host discovery

## Why It Matters for RAG Builders
It enables seamless integration of Cursor Agent's local AI capabilities into Herrscher-based RAG systems, providing a lightweight and secure backend for prompt processing without external API dependencies.

## Tech Stack Deep Dive
### Go
Automated review identified **Go** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Cursor Agent CLI
Automated review identified **Cursor Agent CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Herrscher Framework
Automated review identified **Herrscher Framework** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSON/Stream JSON protocols
Automated review identified **JSON/Stream JSON protocols** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
