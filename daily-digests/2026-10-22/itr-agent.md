---
title: "Sagargupta16/itr-agent"
content_type: "repo"
engine: "v2"
category: "Agent Framework"
tech_stack: ["TypeScript", "Node.js", "Model Context Protocol (MCP)", "Zod (schema validation)", "Jest (testing)", "JSON (rule packs)", "AES-256-CBC (AIS decryption)", "PBKDF2 (password hashing)"]
quality_score: 9
rag_relevance: 7
deployment_complexity: "Low"
tags: ["Indian tax filing", "local-first", "deterministic computation", "MCP server", "document reconciliation"]
source: "https://github.com/Sagargupta16/itr-agent"
stars: 8
language: "TypeScript"
last_updated: "2026-09-03T08:23:01Z"
discovered_at: "2026-09-03T08:39:17Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Local-first MCP server for Indian income tax filing that guides users through an ITR filing interview, computes tax deterministically on-device, and reconciles documents like Form 26AS and AIS without uploading data to the cloud. It integrates with Claude Desktop/Code to automate tax computation and form selection.

## Key Features
- Guided ITR filing interview with one-question-at-a-time flow via `file_my_itr` MCP prompt
- Deterministic tax computation engine for FY 2025-26 (AY 2026-27) with regime comparison (old vs new)
- Document parsing and reconciliation (Form 26AS, AIS, Form 16) to prevent filing notices
- Automated ITR form recommendation (ITR-1/2/3/4) with rule-by-rule reasoning and loss-continuity awareness
- Advance tax planning and interest computation (Sections 234A/234B/234C) with statutory safe harbors

## Why It Matters for RAG Builders
It provides a privacy-preserving, local-first alternative for Indian tax filing that automates complex computations and reconciliations, reducing manual errors and notice risks for RAG/AI stack builders integrating tax compliance tools.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Zod (schema validation)
Automated review identified **Zod (schema validation)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Jest (testing)
Automated review identified **Jest (testing)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSON (rule packs)
Automated review identified **JSON (rule packs)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### AES-256-CBC (AIS decryption)
Automated review identified **AES-256-CBC (AIS decryption)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PBKDF2 (password hashing)
Automated review identified **PBKDF2 (password hashing)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
