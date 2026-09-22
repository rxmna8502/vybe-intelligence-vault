---
title: "marvinrez/vibe-security-check"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Shell", "Semgrep", "Bash Scripting", "AI Agent Integration", "CI/CD"]
quality_score: 9
rag_relevance: 7
deployment_complexity: "Medium"
tags: ["security audit", "AI-generated code", "vulnerability detection", "offline tooling", "CI integration"]
source: "https://github.com/marvinrez/vibe-security-check"
stars: 0
language: "Shell"
last_updated: "2026-09-01T15:00:12Z"
discovered_at: "2026-09-01T15:53:50Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A security audit toolkit for AI-built applications that identifies vulnerabilities in both the application code and the AI pipeline used to generate it. It provides offline, account-free checks for common security flaws introduced by AI-generated code.

## Key Features
- Two specialized skills for different security perspectives: `vibe-security-check` (data exposure) and `vibe-lint` (maintainability)
- Four executable scripts that produce evidence-based findings (e.g., `anon-key-probe.sh`, `bundle-secrets.sh`)
- Thirteen Semgrep rules tailored for AI-generated code vulnerabilities (e.g., hardcoded secrets, mass assignment, taint analysis)
- Tool-aware routing to map generator-specific vulnerabilities (e.g., builders, editors, agents)
- Methodology enforcing executable proof and trust boundary analysis for findings

## Why It Matters for RAG Builders
It proactively identifies critical security flaws in AI-generated applications before deployment, reducing the risk of data breaches and maintenance issues.

## Tech Stack Deep Dive
### Shell
Automated review identified **Shell** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Semgrep
Automated review identified **Semgrep** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Bash Scripting
Automated review identified **Bash Scripting** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### AI Agent Integration
Automated review identified **AI Agent Integration** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CI/CD
Automated review identified **CI/CD** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
