---
title: "kdowding/Stela"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Svelte 5", "SvelteKit", "TypeScript", "MCP (Model Context Protocol)", "SQLite", "Node.js", "OAuth 2.1", "CSP (Content Security Policy)", "Docker"]
quality_score: 9
rag_relevance: 7
deployment_complexity: "Medium"
tags: ["self-hosted", "MCP integration", "artifact management", "collaboration", "versioning"]
source: "https://github.com/kdowding/Stela"
stars: 0
language: "TypeScript"
last_updated: "2026-07-19T16:54:00Z"
discovered_at: "2026-07-19T16:57:54Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Stela is a self-hosted platform for publishing, versioning, and sharing AI agent-generated artifacts (e.g., dashboards, prototypes) with stable URLs, revision history, and pinned visual comments. It acts as a neutral hub for artifacts from any MCP-speaking agent, enabling collaboration and feedback loops without vendor lock-in.

## Key Features
- Publish artifacts from any MCP-speaking agent (Claude Code, ChatGPT, etc.) to a stable URL with full revision history.
- Three-tier sharing model: private, everyone (signed-in users), or restricted (named individuals).
- Pinned visual comments on artifacts with version-specific feedback threads.
- Safe rendering via sandboxed iframes with strict CSP to prevent network egress or malicious code execution.
- Zero heavy dependencies: uses SQLite (or Azure Table/Blob) for storage, deployable as a single Node process.

## Why It Matters for RAG Builders
Stela provides a vendor-neutral, self-hosted solution for managing and collaborating on AI-generated artifacts, ensuring control over access, versioning, and feedback without relying on proprietary platforms.

## Tech Stack Deep Dive
### Svelte 5
Automated review identified **Svelte 5** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SvelteKit
Automated review identified **SvelteKit** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OAuth 2.1
Automated review identified **OAuth 2.1** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CSP (Content Security Policy)
Automated review identified **CSP (Content Security Policy)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
