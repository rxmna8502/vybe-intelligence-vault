---
title: "own2pwn-fr/a2pwn"
content_type: "repo"
engine: "v2"
category: "Orchestrator"
tech_stack: ["Python", "LangGraph", "LangChain", "Claude Code SDK", "Burpwn", "Nuclei", "Katana", "Hydra", "Nmap", "FFUF", "SQLMap", "Subfinder", "Httpx", "Webcrack"]
quality_score: 8
rag_relevance: 7
deployment_complexity: "High"
tags: ["autonomous pentesting", "adversarial verification", "sandboxed traffic", "zero false positives", "LangGraph"]
source: "https://github.com/own2pwn-fr/a2pwn"
stars: 2
language: "Python"
last_updated: "2026-07-17T10:08:30Z"
discovered_at: "2026-07-17T10:46:19Z"
evaluated_by: "mistral-small-latest"
---

## Summary
a2pwn is an autonomous web-pentest orchestrator that dispatches adversarially-verified sub-agents to recon and exploit targets, ensuring clean history and zero false-positive findings through deterministic oracles and sandboxed traffic capture via burpwn.

## Key Features
- Clean history enforcement via append-only state and stateless sub-agents to prevent transcript leakage into master history.
- 0-FP evidence through deterministic oracles and sandboxed traffic capture, ensuring findings are re-derived and verified before inclusion in reports.
- Modular backend support for multiple AI providers (Claude Code, Anthropic, OpenAI, AWS Bedrock, Google Vertex AI, etc.).
- Comprehensive skill library covering deep web vulnerabilities (XSS, SQLi, SSRF, request smuggling, cache poisoning, JWT flaws, IDOR, etc.).
- Parallel dispatch of tasks, adversarial verification workflows, and automated evidence export (HAR) for findings.

## Why It Matters for RAG Builders
It provides a robust framework for autonomous, evidence-grounded web penetration testing with zero false positives, critical for validating AI-driven security tools and RAG systems in real-world scenarios.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### LangGraph
Automated review identified **LangGraph** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### LangChain
Automated review identified **LangChain** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Claude Code SDK
Automated review identified **Claude Code SDK** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Burpwn
Automated review identified **Burpwn** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Nuclei
Automated review identified **Nuclei** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Katana
Automated review identified **Katana** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Hydra
Automated review identified **Hydra** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Nmap
Automated review identified **Nmap** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FFUF
Automated review identified **FFUF** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLMap
Automated review identified **SQLMap** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Subfinder
Automated review identified **Subfinder** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Httpx
Automated review identified **Httpx** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Webcrack
Automated review identified **Webcrack** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
