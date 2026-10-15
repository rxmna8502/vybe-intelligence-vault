---
title: "draugr-dev/draugr"
content_type: "repo"
engine: "v2"
category: "Orchestrator"
tech_stack: ["Go", "YAML", "SARIF", "Trivy", "Gitleaks", "Semgrep", "Nuclei", "kube-bench", "Syft", "Cosign", "Model Context Protocol (MCP)"]
quality_score: 9
rag_relevance: 7
deployment_complexity: "Medium"
tags: ["Security scanning", "Compliance automation", "SARIF normalization", "CI/CD integration", "AI-assisted security"]
source: "https://github.com/draugr-dev/draugr"
stars: 2
language: "Go"
last_updated: "2026-08-01T03:20:23Z"
discovered_at: "2026-08-01T03:44:27Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Draugr is a developer-first, descriptor-driven security and compliance qualification tool that orchestrates multiple security scanners (SAST, SCA, secrets, IaC, DAST, etc.) through a single YAML descriptor file. It normalizes findings to SARIF and provides prioritized, actionable security reports for CI/CD pipelines and AI-assisted workflows.

## Key Features
- Single descriptor-driven configuration (`draugr.saga.yaml`) for all security and compliance checks
- Orchestrates multiple scanners (SAST, SCA, secrets, IaC, DAST, TLS, headers) with normalized SARIF output
- Prioritizes findings (P1-P4) based on severity, exposure, and criticality for actionable remediation
- Supports zero-config scans, discovery (survey), and policy-driven exclusions with audit trails
- Integrates with CI/CD (GitHub Actions), AI coding assistants (MCP), and IDEs via JSON Schema

## Why It Matters for RAG Builders
Draugr streamlines security and compliance validation for AI stack builders by unifying disparate scanner outputs into a single, prioritized SARIF report, reducing integration overhead and enabling consistent enforcement in CI/CD pipelines.

## Tech Stack Deep Dive
### Go
Automated review identified **Go** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### YAML
Automated review identified **YAML** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SARIF
Automated review identified **SARIF** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Trivy
Automated review identified **Trivy** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Gitleaks
Automated review identified **Gitleaks** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Semgrep
Automated review identified **Semgrep** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Nuclei
Automated review identified **Nuclei** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### kube-bench
Automated review identified **kube-bench** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Syft
Automated review identified **Syft** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Cosign
Automated review identified **Cosign** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
