---
title: "sattyamjjain/ferrumdeck"
content_type: "repo"
engine: "v2"
category: "Orchestrator"
tech_stack: ["Rust", "Python", "TypeScript", "Next.js", "OpenTelemetry", "PostgreSQL", "Docker", "CI/CD (GitHub Actions)"]
quality_score: 9
rag_relevance: 10
deployment_complexity: "Medium"
tags: ["AI agent governance", "enforcement plane", "deny-by-default policies", "budget enforcement", "audit trail"]
source: "https://github.com/sattyamjjain/ferrumdeck"
stars: 7
language: "TypeScript"
last_updated: "2026-08-01T05:52:39Z"
discovered_at: "2026-08-01T06:29:26Z"
evaluated_by: "mistral-small-latest"
---

## Summary
FerrumDeck is a deterministic Rust-based enforcement plane for AI agents that blocks tool calls in-process, enforcing deny-by-default policies, budget limits, and runtime inspections before agent actions execute. It provides an immutable audit trail and integrates with OpenTelemetry for real-time governance and observability.

## Key Features
- In-process tool call enforcement with sub-millisecond latency (183-503 ns per decision)
- Deny-by-default tool allowlists and per-run budget enforcement to prevent unsafe actions
- Runtime inspection (Airlock RASP) and coherence-divergence detection for mid-run validation
- Immutable, tamper-evident audit trail with cryptographic hash-chaining for compliance
- Integration with OpenTelemetry GenAI spans for unified governance and observability

## Why It Matters for RAG Builders
FerrumDeck provides critical in-process enforcement for AI agents, preventing unsafe tool calls and budget overruns before they occur, which is essential for building secure and compliant RAG/AI systems.

## Tech Stack Deep Dive
### Rust
Automated review identified **Rust** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Next.js
Automated review identified **Next.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenTelemetry
Automated review identified **OpenTelemetry** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PostgreSQL
Automated review identified **PostgreSQL** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CI/CD (GitHub Actions)
Automated review identified **CI/CD (GitHub Actions)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
