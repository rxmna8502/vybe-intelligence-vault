---
title: "dandovdub/residoo"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["JavaScript", "Node.js", "SARIF", "Base64 decoding", "Pattern matching"]
quality_score: 9
rag_relevance: 7
deployment_complexity: "Low"
tags: ["security", "secrets scanning", "AI agents", "transcript analysis", "retroactive detection"]
source: "https://github.com/dandovdub/residoo"
stars: 1
language: "JavaScript"
last_updated: "2026-09-03T02:15:33Z"
discovered_at: "2026-09-03T02:15:48Z"
evaluated_by: "mistral-small-latest"
---

## Summary
residoo is a security tool designed to scan AI coding agent session transcripts for leaked secrets, including API keys, private keys, and tokens. It retroactively identifies and reports high-confidence secrets in plaintext files left by tools like Claude Code or Cursor, addressing a gap not covered by traditional git secret scanners.

## Key Features
- Scans AI agent session transcripts for high-confidence secrets (API keys, tokens, private keys)
- Redacts findings in reports to protect sensitive data while providing actionable insights
- Supports SARIF output for integration with GitHub code scanning and CI/CD pipelines
- Includes agent config scanning for persistence threats and planted hooks
- Provides rotation runbooks for each finding to guide remediation

## Why It Matters for RAG Builders
It proactively identifies and mitigates security risks from secrets leaked in AI agent session histories, a critical blind spot for RAG and AI stack builders.

## Tech Stack Deep Dive
### JavaScript
Automated review identified **JavaScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SARIF
Automated review identified **SARIF** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Base64 decoding
Automated review identified **Base64 decoding** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Pattern matching
Automated review identified **Pattern matching** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
