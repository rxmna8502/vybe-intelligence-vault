---
title: "sebastienrousseau/rousseau-agent"
content_type: "repo"
engine: "v2"
category: "Agent Framework"
tech_stack: ["Go", "Podman", "SQLite", "MCP (Model Context Protocol)", "SLSA (Supply-chain Levels for Software Artifacts)", "Cosign", "CycloneDX", "Bubble Tea (TUI)", "Systemd Quadlet", "Seccomp", "Golangci-lint"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Medium"
tags: ["self-hosted", "coding agent", "multi-transport", "MCP server", "supply-chain security"]
source: "https://github.com/sebastienrousseau/rousseau-agent"
stars: 0
language: "Go"
last_updated: "2026-07-16T14:57:04Z"
discovered_at: "2026-07-16T15:00:24Z"
evaluated_by: "mistral-small-latest"
---

## Summary
rousseau-agent is a self-hosted, container-native coding agent designed for teams that require on-premises or air-gapped environments. It supports nine chat transports, five LLM providers, and integrates with MCP servers, cron schedulers, and skills loaders while enforcing strict supply-chain security standards.

## Key Features
- Supports nine chat transports (WhatsApp, Slack, Discord, Email, etc.) and five LLM providers (Claude CLI, Anthropic, AWS Bedrock, Google Vertex, OpenAI-compatible).
- Runs as a rootless Podman container with SLSA-3 provenance, cosign-signed releases, and CycloneDX SBOM for enterprise-grade security.
- Includes an MCP server for integration with IDEs and other agents, a cron scheduler for automated tasks, and a skills loader for extensibility.
- Features a TUI client, session store with SQLite, and approval policies for controlled tool execution.
- Designed for air-gapped environments with no telemetry, no SaaS control plane, and minimal outbound traffic.

## Why It Matters for RAG Builders
It enables secure, self-hosted AI coding assistance with enterprise-grade supply-chain controls, making it ideal for teams with strict data sovereignty requirements.

## Tech Stack Deep Dive
### Go
Automated review identified **Go** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Podman
Automated review identified **Podman** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SLSA (Supply-chain Levels for Software Artifacts)
Automated review identified **SLSA (Supply-chain Levels for Software Artifacts)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Cosign
Automated review identified **Cosign** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CycloneDX
Automated review identified **CycloneDX** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Bubble Tea (TUI)
Automated review identified **Bubble Tea (TUI)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Systemd Quadlet
Automated review identified **Systemd Quadlet** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Seccomp
Automated review identified **Seccomp** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Golangci-lint
Automated review identified **Golangci-lint** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
