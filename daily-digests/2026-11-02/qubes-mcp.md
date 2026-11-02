---
title: "alex-schose/qubes-mcp"
content_type: "repo"
engine: "v2"
category: "Orchestrator"
tech_stack: ["Python", "Qubes OS", "FastMCP", "qrexec", "dom0", "Linux", "Shell Scripting", "JSON"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "High"
tags: ["Qubes OS", "AI Sandboxing", "Trust Boundary", "Tag-Based Isolation", "dom0 Mediation"]
source: "https://github.com/alex-schose/qubes-mcp"
stars: 3
language: "Python"
last_updated: "2026-08-08T10:31:34Z"
discovered_at: "2026-08-08T10:34:55Z"
evaluated_by: "mistral-small-latest"
---

## Summary
qubes-mcp provides a FastMCP server that enables AI agents to operate within a Qubes OS sandbox, granting controlled access to qube lifecycle management, file transfers, and network operations while enforcing strict tag-based isolation and dom0-mediated trust boundaries.

## Key Features
- Tag-scoped trust boundary using Qubes' `ai-managed` tag to restrict AI agent access to only designated qubes
- dom0-mediated wrappers (`qmcp.*`) enforce invariants and mediate all privileged actions via qrexec
- Multi-stage rollout with reversible installation scripts and comprehensive testing for each stage
- Resource tiering (Stage I) to graduate AI agent authority within the sandbox, preventing destructive operations
- Opaque error handling and existence hiding to prevent leakage of system state or untagged qube existence

## Why It Matters for RAG Builders
It enables secure, isolated execution of AI agents within Qubes OS, ensuring strict trust boundaries and preventing unauthorized access to the host system or untagged resources.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Qubes OS
Automated review identified **Qubes OS** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastMCP
Automated review identified **FastMCP** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### qrexec
Automated review identified **qrexec** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### dom0
Automated review identified **dom0** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Linux
Automated review identified **Linux** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Shell Scripting
Automated review identified **Shell Scripting** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSON
Automated review identified **JSON** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
