---
title: "yihui504/TestVDB"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Python", "Claude Code", "Docker", "Multi-agent LLM systems", "JSON/YAML configuration", "Bash scripting", "AST parsing", "GitHub Actions (implied for CI/CD)"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "High"
tags: ["vector database testing", "automated defect mining", "multi-agent LLM", "Claude Code plugin", "Docker sandboxing"]
source: "https://github.com/yihui504/TestVDB"
stars: 0
language: "Python"
last_updated: "2026-08-08T06:34:00Z"
discovered_at: "2026-08-08T06:53:36Z"
evaluated_by: "mistral-small-latest"
---

## Summary
TestVDB is an LLM-powered Claude Code plugin that automates defect discovery in vector databases by reverse-engineering structured contracts from documentation, generating attack scripts via multi-agent debate, and executing them in Docker sandboxes to produce verified defect reports with evidence chains.

## Key Features
- Three decoupled commands (/contract, /intel, /mine) for modular defect discovery workflows
- Smart cache reuse (D-judgment) to optimize pipeline execution and avoid redundant work
- Anti-shortcut pipeline gate enforcing quality checks (e.g., document coverage, no hallucinations)
- Cross-turn state machine with checkpoint recovery for long-running mining sessions
- Defect taxonomy with MECE classification (Illegal Success, Poor Diagnostics, Runtime Failure, State/Logic Violation)

## Why It Matters for RAG Builders
TestVDB automates the tedious and error-prone process of discovering compliance defects in vector databases, enabling AI stack builders to proactively identify and address vulnerabilities before deployment.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Claude Code
Automated review identified **Claude Code** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Multi-agent LLM systems
Automated review identified **Multi-agent LLM systems** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSON/YAML configuration
Automated review identified **JSON/YAML configuration** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Bash scripting
Automated review identified **Bash scripting** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### AST parsing
Automated review identified **AST parsing** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### GitHub Actions (implied for CI/CD)
Automated review identified **GitHub Actions (implied for CI/CD)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
