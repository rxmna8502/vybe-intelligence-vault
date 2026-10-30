---
title: "hua226529-ctrl/sub2api-account-scheduler"
content_type: "repo"
engine: "v2"
category: "Orchestrator"
tech_stack: ["Go", "SQLite", "Vue.js", "Docker", "Docker Compose", "Caddy", "AES-256-GCM", "HTTPS", "CI/CD"]
quality_score: 9
rag_relevance: 7
deployment_complexity: "Medium"
tags: ["account scheduling", "load balancing", "failover", "Sub2API", "AI operations"]
source: "https://github.com/hua226529-ctrl/sub2api-account-scheduler"
stars: 0
language: "Go"
last_updated: "2026-07-18T08:06:30Z"
discovered_at: "2026-07-18T08:09:22Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A standalone account scheduler for Sub2API that dynamically manages account states, load balancing, and token group failover without modifying Sub2API's source code or database. It integrates channel monitoring, real requests, balance, multiplier, and account status to automate pauses, recoveries, and disaster recovery.

## Key Features
- Automated account state management (pause, resume, load adjustment) based on real-time monitoring and historical data
- Multi-tier token group failover (primary, backup, emergency) for disaster recovery
- Embedded Vue.js management UI with strict permission controls
- Deterministic scheduling with dry-run mode for safe initial deployment
- Smart agent for persistent business logic, policy versioning, and automated operations

## Why It Matters for RAG Builders
It provides critical runtime orchestration for AI inference pipelines by ensuring high availability and efficient resource utilization without modifying upstream systems.

## Tech Stack Deep Dive
### Go
Automated review identified **Go** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Vue.js
Automated review identified **Vue.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker Compose
Automated review identified **Docker Compose** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Caddy
Automated review identified **Caddy** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### AES-256-GCM
Automated review identified **AES-256-GCM** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HTTPS
Automated review identified **HTTPS** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CI/CD
Automated review identified **CI/CD** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
