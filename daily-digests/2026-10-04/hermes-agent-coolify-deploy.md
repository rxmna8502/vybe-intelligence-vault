---
title: "yucel-yilmaz/hermes-agent-coolify-deploy"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Bash", "Docker", "Coolify", "Traefik", "SSH", "Python", "YAML", "Shell Scripting"]
quality_score: 8
rag_relevance: 7
deployment_complexity: "Medium"
tags: ["deployment", "coolify", "hermes-agent", "docker-compose", "vps"]
source: "https://github.com/yucel-yilmaz/hermes-agent-coolify-deploy"
stars: 0
language: "Shell"
last_updated: "2026-07-10T23:02:56Z"
discovered_at: "2026-07-10T23:08:26Z"
evaluated_by: "mistral-small-latest"
---

## Summary
This repository provides a deployment script to run the Hermes Agent (by NousResearch) on a Coolify-managed VPS, addressing compatibility issues like Docker network mode conflicts and Coolify's Traefik routing. It supports both private (SSH tunnel) and public (Traefik-routed) deployment modes with security best practices.

## Key Features
- Automated deployment of Hermes Agent on Coolify-managed VPS with pre-configured fixes for compatibility issues
- Supports two deployment modes: private (SSH tunnel) and public (Traefik-routed with dual auth layers)
- Handles security best practices like random credential generation, dual authentication, and API key protection
- Addresses upstream/Coolify incompatibilities (e.g., network_mode: host, image pull policies, and Coolify auto-generated env vars)
- Provides end-to-end health checks and connection info output for immediate use

## Why It Matters for RAG Builders
It simplifies the deployment of Hermes Agent on Coolify by resolving critical compatibility issues, ensuring secure and reliable setup for RAG/AI stack builders.

## Tech Stack Deep Dive
### Bash
Automated review identified **Bash** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Coolify
Automated review identified **Coolify** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Traefik
Automated review identified **Traefik** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SSH
Automated review identified **SSH** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### YAML
Automated review identified **YAML** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Shell Scripting
Automated review identified **Shell Scripting** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
