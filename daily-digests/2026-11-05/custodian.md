---
title: "indigokarasu/custodian"
content_type: "repo"
engine: "v2"
category: "Agent Framework"
tech_stack: ["Python", "Hermes Agent", "OCAS", "Cron Jobs", "Logging Systems"]
quality_score: 7
rag_relevance: 6
deployment_complexity: "Medium"
tags: ["autonomous monitoring", "auto-repair", "agent operations", "failure detection", "quiet-hour maintenance"]
source: "https://github.com/indigokarasu/custodian"
stars: 0
language: "Python"
last_updated: "2026-07-21T04:04:32Z"
discovered_at: "2026-07-21T04:14:59Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Custodian is an autonomous operations monitoring and auto-repair plugin for Hermes Agent, designed to detect, classify, and repair agent platform failures during quiet hours by monitoring gateway logs, cron jobs, skill journals, and OCAS data directories.

## Key Features
- Lifecycle hooks for session management (post_tool_call, on_session_start, etc.)
- Built-in tools for status checks, scanning, and issue management (custodian_status, custodian_scan, custodian_issues)
- Slash commands for real-time operations (/custodian status, /custodian scan, /custodian repair)
- Tiered failure response with escalation for low-confidence issues
- OCAS data directory and skill journal monitoring

## Why It Matters for RAG Builders
Custodian ensures agent platform reliability by autonomously detecting and repairing failures, reducing downtime and manual intervention for RAG/AI stack builders.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Hermes Agent
Automated review identified **Hermes Agent** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OCAS
Automated review identified **OCAS** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Cron Jobs
Automated review identified **Cron Jobs** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Logging Systems
Automated review identified **Logging Systems** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
