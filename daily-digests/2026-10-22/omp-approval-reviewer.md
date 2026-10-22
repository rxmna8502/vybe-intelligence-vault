---
title: "warc0s/omp-approval-reviewer"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["TypeScript", "Bun", "Oh My Pi (OMP)", "LLM Integration", "JSONL Audit Logging"]
quality_score: 8
rag_relevance: 7
deployment_complexity: "Medium"
tags: ["security", "approval-gating", "audit-trail", "LLM-safety", "Bash-inspection"]
source: "https://github.com/warc0s/omp-approval-reviewer"
stars: 0
language: "TypeScript"
last_updated: "2026-08-09T10:35:52Z"
discovered_at: "2026-08-09T10:37:57Z"
evaluated_by: "mistral-small-latest"
---

## Summary
OMP Approval Reviewer is a security-focused extension for Oh My Pi (OMP) that acts as a policy-aware gatekeeper for Bash tool calls and sensitive operations. It inspects commands, enforces hard-coded safety policies, and optionally delegates to an LLM for structured allow/deny/escalate decisions while maintaining an auditable trail.

## Key Features
- Hard-coded emergency brake for destructive operations (e.g., root destruction, fork bombs) before any model call
- Isolated LLM review process with tools, sessions, and prewalk disabled for safety
- Append-only JSONL audit trail with redacted secrets and strict file permissions (0600)
- Static command/path analysis to classify actions as routine, denied, or requiring review
- Configurable trust boundaries with global and project-level hardening options

## Why It Matters for RAG Builders
It provides a critical safety layer for AI-driven shell environments by enforcing deterministic security policies and auditable LLM-backed approvals before executing sensitive commands.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Bun
Automated review identified **Bun** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Oh My Pi (OMP)
Automated review identified **Oh My Pi (OMP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### LLM Integration
Automated review identified **LLM Integration** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSONL Audit Logging
Automated review identified **JSONL Audit Logging** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
