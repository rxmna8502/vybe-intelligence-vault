---
title: "wzslr321/torio"
content_type: "repo"
engine: "v2"
category: "Orchestrator"
tech_stack: ["Go", "Lima VM", "Linux", "Markdown", "SSH", "systemd", "Hermes", "Claude Code"]
quality_score: 9
rag_relevance: 7
deployment_complexity: "Medium"
tags: ["VM orchestration", "AI second brain", "credential management", "secure workflow", "local AI deployment"]
source: "https://github.com/wzslr321/torio"
stars: 3
language: "Go"
last_updated: "2026-08-08T20:23:49Z"
discovered_at: "2026-08-08T20:31:58Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Torio is a lightweight control plane for managing an AI second brain and repositories on a Linux VM controlled by the user. It orchestrates Lima VMs, runs backend services, and ensures secure, credential-free operations while maintaining user control over data and workflows.

## Key Features
- Creates and manages isolated Lima VMs for AI backends with no persistent state or credentials
- Supports multiple AI backends (e.g., Hermes, Claude Code) with distinct VMs for each identity
- Enforces read-only access for AI backends while enabling user-controlled write operations via SSH agent forwarding
- Provides a private Markdown-based second brain with versioned, searchable vaults
- Offers idempotent commands for VM initialization, bootstrapping, and project management

## Why It Matters for RAG Builders
Torio provides a secure, user-controlled environment for running AI backends and managing repositories, ensuring data privacy and operational transparency for RAG builders.

## Tech Stack Deep Dive
### Go
Automated review identified **Go** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Lima VM
Automated review identified **Lima VM** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Linux
Automated review identified **Linux** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Markdown
Automated review identified **Markdown** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SSH
Automated review identified **SSH** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### systemd
Automated review identified **systemd** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Hermes
Automated review identified **Hermes** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Claude Code
Automated review identified **Claude Code** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
