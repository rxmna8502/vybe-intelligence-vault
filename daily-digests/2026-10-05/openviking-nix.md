---
title: "Daaboulex/openviking-nix"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Nix", "NixOS", "Go", "Rust", "C++", "Python", "FastAPI", "pybind11", "systemd"]
quality_score: 9
rag_relevance: 7
deployment_complexity: "Medium"
tags: ["NixOS", "context database", "AI agents", "virtual filesystem", "systemd service"]
source: "https://github.com/Daaboulex/openviking-nix"
stars: 3
language: "Shell"
last_updated: "2026-08-07T14:15:05Z"
discovered_at: "2026-08-07T14:19:49Z"
evaluated_by: "mistral-small-latest"
---

## Summary
NixOS package and module for OpenViking, an agent-native context database for AI agents that organizes context through a virtual filesystem paradigm using the `viking://` protocol. The repository provides Nix-compatible builds and a systemd service for seamless deployment on NixOS.

## Key Features
- NixOS package and module for OpenViking with full stack support (Go, Rust, C++, Python)
- Systemd service with hardening options (DynamicUser, ProtectSystem, NoNewPrivileges)
- Declarative configuration via NixOS module with support for embedding providers (OpenAI, Volcengine, Jina, LiteLLM)
- AGFS server and CLI tools packaged for easy deployment
- Supports tiered context loading (L0/L1/L2) and hierarchical RAG

## Why It Matters for RAG Builders
It simplifies the deployment of OpenViking, a critical context database for AI agents, on NixOS with secure defaults and declarative configuration.

## Tech Stack Deep Dive
### Nix
Automated review identified **Nix** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### NixOS
Automated review identified **NixOS** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Go
Automated review identified **Go** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Rust
Automated review identified **Rust** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### C++
Automated review identified **C++** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastAPI
Automated review identified **FastAPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### pybind11
Automated review identified **pybind11** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### systemd
Automated review identified **systemd** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
