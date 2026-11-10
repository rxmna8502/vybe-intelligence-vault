---
title: "USHIKUNDESUYO/sekisho"
content_type: "repo"
engine: "v2"
category: "Orchestrator"
tech_stack: ["TypeScript", "Next.js", "Gemini API (gemini-2.5-flash)", "Google Cloud Run", "Firestore", "GitHub Actions", "Docker"]
quality_score: 8
rag_relevance: 9
deployment_complexity: "Medium"
tags: ["AI gatekeeping", "human-in-the-loop", "audit trail", "counter-evidence", "CI/CD security"]
source: "https://github.com/USHIKUNDESUYO/sekisho"
stars: 0
language: "TypeScript"
last_updated: "2026-07-11T07:46:37Z"
discovered_at: "2026-07-11T07:52:28Z"
evaluated_by: "mistral-small-latest"
---

## Summary
SEKISHO is a CI/CD gatekeeper AI agent that enforces human accountability in AI-driven code reviews by rejecting AI approvals and requiring human judgment on generated counter-evidence. It ensures audit trails with SHA-256 hash chains and Firestore persistence.

## Key Features
- Multi-agent architecture (番人, 目付, 照合方) for counter-evidence generation and validation
- Human-only approval with structured reasoning and SHA-256 hash chain logging
- GitHub Actions integration blocking AI-approved changes unless human-verified
- Firestore-backed immutable audit logs for compliance and tamper detection
- Sample diff mode for local testing without API keys

## Why It Matters for RAG Builders
It enforces human accountability in AI-driven CI/CD pipelines by structurally preventing AI approvals and ensuring all decisions are auditable with immutable evidence.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Next.js
Automated review identified **Next.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Gemini API (gemini-2.5-flash)
Automated review identified **Gemini API (gemini-2.5-flash)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Google Cloud Run
Automated review identified **Google Cloud Run** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Firestore
Automated review identified **Firestore** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### GitHub Actions
Automated review identified **GitHub Actions** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
