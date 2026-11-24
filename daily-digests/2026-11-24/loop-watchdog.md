---
title: "bevinkatti/Loop-Watchdog"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Python", "FastAPI", "Cloudflare Workers", "D1 (Cloudflare's SQL database)", "Slack API", "Resend (email service)", "OpenAPI", "JavaScript/TypeScript (for Cloudflare Worker)"]
quality_score: 9
rag_relevance: 7
deployment_complexity: "Medium"
tags: ["AI agent monitoring", "runaway agent prevention", "loop detection", "token burn control", "session pausing"]
source: "https://github.com/bevinkatti/Loop-Watchdog"
stars: 2
language: "Python"
last_updated: "2026-08-09T14:36:43Z"
discovered_at: "2026-08-09T14:37:39Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Loop Watchdog is a runaway-agent kill switch designed to monitor AI coding sessions for repeated fix-break behavior, pausing token consumption before credits are wasted and alerting operators via Slack, email, or a control plane. It acts as a proxy between AI agents and model endpoints, detecting edit-error oscillations and high-overlap retries.

## Key Features
- Real-time detection of edit-error oscillations and repeated retries in AI coding sessions
- Local-first proxy that pauses model calls before excessive token consumption occurs
- Structured alerting via Slack, email, or a Cloudflare Worker control plane
- Persistent session state with local storage and optional cloud-based incident tracking
- Dashboard for live monitoring, incident management, and operator controls

## Why It Matters for RAG Builders
Loop Watchdog prevents costly token waste in AI coding sessions by detecting and halting runaway agent behavior, ensuring efficient resource usage for RAG and AI stack builders.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastAPI
Automated review identified **FastAPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Cloudflare Workers
Automated review identified **Cloudflare Workers** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### D1 (Cloudflare's SQL database)
Automated review identified **D1 (Cloudflare's SQL database)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Slack API
Automated review identified **Slack API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Resend (email service)
Automated review identified **Resend (email service)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenAPI
Automated review identified **OpenAPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JavaScript/TypeScript (for Cloudflare Worker)
Automated review identified **JavaScript/TypeScript (for Cloudflare Worker)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
