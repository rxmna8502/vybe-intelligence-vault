---
title: "seldonframe/reelier"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["TypeScript", "Node.js", "Docker", "GitHub Actions", "MCP (Model Context Protocol)", "JWT (for signed receipts)", "YAML/JSON (for configuration and traces)"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Medium"
tags: ["agent verification", "deterministic replay", "drift detection", "receipts", "dependency safety"]
source: "https://github.com/seldonframe/reelier"
stars: 1
language: "TypeScript"
last_updated: "2026-08-01T17:48:21Z"
discovered_at: "2026-08-01T18:00:19Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Reelier is a tool for recording, replaying, and verifying agent workflows deterministically, generating signed receipts that prove what an agent did and what changed. It enables drift detection, dependency safety checks, and audit trails for AI agent operations.

## Key Features
- Records agent tool-call workflows and compiles them into replayable skills (SKILL.md files) with 0 LLM calls.
- Replays recorded skills deterministically at 0 tokens, enabling byte-identical verification and drift detection.
- Generates signed receipts proving what ran and what changed, with optional timestamping and CI attestation.
- Integrates with GitHub to gate dependency bump PRs (Dependabot/Renovate) by replaying skills against updated dependencies.
- Supports self-hosting, Docker deployment, and CI/CD workflow generation for automated verification.

## Why It Matters for RAG Builders
Reelier provides verifiable proof of agent actions and change detection, critical for ensuring reliability and accountability in AI-driven workflows.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### GitHub Actions
Automated review identified **GitHub Actions** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JWT (for signed receipts)
Automated review identified **JWT (for signed receipts)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### YAML/JSON (for configuration and traces)
Automated review identified **YAML/JSON (for configuration and traces)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
