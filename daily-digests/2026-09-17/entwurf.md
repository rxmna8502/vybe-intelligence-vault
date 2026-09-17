---
title: "junghan0611/entwurf"
content_type: "repo"
engine: "v2"
category: "Orchestrator"
tech_stack: ["TypeScript", "Node.js", "npm", "MCP (Model Context Protocol)", "ACP (Agent Control Protocol)", "Shell scripting", "gRPC", "REST APIs"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Medium"
tags: ["garden-citizen", "agent orchestration", "cross-harness communication", "dispatch substrate", "meta-bridge"]
source: "https://github.com/junghan0611/entwurf"
stars: 25
language: "TypeScript"
last_updated: "2026-08-08T12:43:03Z"
discovered_at: "2026-08-08T12:47:09Z"
evaluated_by: "mistral-small-latest"
---

## Summary
`entwurf` is a garden-citizen dispatch substrate that enables cross-harness communication between agent frameworks (e.g., Claude Code, Antigravity, pi) using a shared 'garden id' address space, without centralizing control or transcripts. It acts as a thin bridge for existing agent harnesses to address one another transparently.

## Key Features
- Enables addressability between independent agent harnesses using a shared 'garden id' without centralizing control or transcripts
- Supports multiple backends (Claude Code, Snowflake Cortex, Antigravity, pi) via a unified dispatch surface (`entwurf_v2`)
- Provides lifecycle management for agents (e.g., `entwurf_fresh_call`, `entwurf_resume_call`) without hidden background processes
- Offers narrow tool surfaces for auto-approved operations to prevent unintended orchestration sprawl
- Includes managed installers and lifecycle hooks for native harnesses (Claude Code, Antigravity) to ensure garden-native meta-sessions

## Why It Matters for RAG Builders
`entwurf` enables seamless cross-harness communication for RAG builders by providing a standardized address space and dispatch substrate, reducing integration complexity and avoiding vendor lock-in.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### npm
Automated review identified **npm** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### ACP (Agent Control Protocol)
Automated review identified **ACP (Agent Control Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Shell scripting
Automated review identified **Shell scripting** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### gRPC
Automated review identified **gRPC** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### REST APIs
Automated review identified **REST APIs** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
