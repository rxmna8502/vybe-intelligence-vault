---
title: "lidless-labs/adguardctrl"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["TypeScript", "Node.js", "Model Context Protocol (MCP)", "AdGuard Home API", "npm", "CLI", "REST API", "Jest (for testing)"]
quality_score: 9
rag_relevance: 7
deployment_complexity: "Low"
tags: ["DNS filtering", "AdGuard Home", "MCP adapter", "CLI tool", "network management"]
source: "https://github.com/lidless-labs/adguardctrl"
stars: 2
language: "TypeScript"
last_updated: "2026-07-17T02:42:19Z"
discovered_at: "2026-07-17T02:52:18Z"
evaluated_by: "mistral-small-latest"
---

## Summary
adguardctrl is a CLI and Model Context Protocol (MCP) adapter for managing AdGuard Home, a self-hosted DNS sinkhole. It provides a typed control surface for inspecting and controlling DNS filtering across multiple AdGuard Home instances, with safety gates for write operations.

## Key Features
- CLI and MCP adapter for AdGuard Home with 28+ tools for read, safe-write, and destructive operations
- Tiered safety model: reads are open, writes require `confirm: true`, and destructive ops require `destructive: true`
- Supports multiple AdGuard Home instances with environment-based configuration
- Integrates with AdGuardHome Sync for multi-instance management
- Designed for shell, cron, CI, and AI assistant workflows

## Why It Matters for RAG Builders
It provides a secure, programmatic interface to manage AdGuard Home instances, enabling AI agents and automation tools to safely inspect and control DNS filtering without direct API exposure.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### AdGuard Home API
Automated review identified **AdGuard Home API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### npm
Automated review identified **npm** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CLI
Automated review identified **CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### REST API
Automated review identified **REST API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Jest (for testing)
Automated review identified **Jest (for testing)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
