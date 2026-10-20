---
title: "rkchellah/Anzen"
content_type: "repo"
engine: "v2"
category: "Agent Framework"
tech_stack: ["Next.js", "TypeScript", "Vercel AI SDK", "Auth0", "Auth0 Token Vault", "DeepSeek", "Groq", "Octokit", "googleapis", "@slack/web-api", "Tailwind CSS", "shadcn/ui", "Radix Base UI", "CircleCI", "Vercel"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Medium"
tags: ["AI agents", "credential security", "token vault", "multi-tool integration", "zero-trust architecture"]
source: "https://github.com/rkchellah/Anzen"
stars: 1
language: "TypeScript"
last_updated: "2026-08-09T16:30:41Z"
discovered_at: "2026-08-09T16:38:34Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Anzen is an AI agent framework that executes tasks on behalf of users without ever storing or accessing their credentials. It leverages Auth0 Token Vault to fetch short-lived access tokens for each API call, ensuring credentials remain secure while enabling seamless interactions with GitHub, Gmail, and Slack.

## Key Features
- Zero-credential storage: Credentials are stored and managed exclusively by Auth0 Token Vault, with short-lived tokens fetched per API call.
- Multi-provider tool integration: Supports GitHub, Gmail, and Slack with read/write capabilities and explicit user confirmation for write actions.
- Model flexibility: Supports DeepSeek and Groq models with dynamic switching during sessions.
- Explicit access control: Per-provider permissions (read-only or read-write) with granular user approvals for write actions.
- Lightweight architecture: No backend database or credential storage; relies on Auth0 for authentication and token management.

## Why It Matters for RAG Builders
Anzen demonstrates a secure, zero-trust approach to AI agent design, ensuring credentials are never exposed while enabling seamless multi-tool integration for RAG builders.

## Tech Stack Deep Dive
### Next.js
Automated review identified **Next.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Vercel AI SDK
Automated review identified **Vercel AI SDK** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Auth0
Automated review identified **Auth0** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Auth0 Token Vault
Automated review identified **Auth0 Token Vault** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### DeepSeek
Automated review identified **DeepSeek** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Groq
Automated review identified **Groq** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Octokit
Automated review identified **Octokit** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### googleapis
Automated review identified **googleapis** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### @slack/web-api
Automated review identified **@slack/web-api** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Tailwind CSS
Automated review identified **Tailwind CSS** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### shadcn/ui
Automated review identified **shadcn/ui** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Radix Base UI
Automated review identified **Radix Base UI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CircleCI
Automated review identified **CircleCI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Vercel
Automated review identified **Vercel** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
