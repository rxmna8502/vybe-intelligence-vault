---
title: "project-feldspar-resources/feldspar-scan"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Python 3.11+", "OSV.dev API", "Git", "Standard Library (json, re, urllib, etc.)"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Low"
tags: ["security scanning", "dependency vulnerability", "secret detection", "configuration checks", "deterministic"]
source: "https://github.com/project-feldspar-resources/feldspar-scan"
stars: 0
language: "Python"
last_updated: "2026-09-03T22:04:39Z"
discovered_at: "2026-09-03T22:05:25Z"
evaluated_by: "mistral-small-latest"
---

## Summary
feldspar-scan is a lightweight, deterministic repository scanner that detects dependency vulnerabilities, leaked secrets, and configuration issues without requiring external dependencies or telemetry. It integrates with OSV.dev for vulnerability advisories and supports CLI, GitHub Action, and hosted endpoint deployment methods.

## Key Features
- Scans for dependency vulnerabilities via OSV.dev advisories with severity mapping
- Detects leaked secrets using regex patterns (AWS keys, GitHub tokens, Stripe keys, etc.)
- Performs configuration checks (Dockerfile, .env files, GitHub workflows, etc.)
- Supports CLI, GitHub Action, and hosted endpoint deployment methods
- Deterministic output with stable manifest hashing for reproducibility

## Why It Matters for RAG Builders
It provides a fast, dependency-free way to preemptively identify security risks in repositories, reducing attack surfaces before deployment or merge.

## Tech Stack Deep Dive
### Python 3.11+
Automated review identified **Python 3.11+** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OSV.dev API
Automated review identified **OSV.dev API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Git
Automated review identified **Git** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Standard Library (json, re, urllib, etc.)
Automated review identified **Standard Library (json, re, urllib, etc.)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
