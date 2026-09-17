---
title: "lidless-labs/librenmsctrl"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["TypeScript", "Node.js", "LibreNMS API", "Model Context Protocol (MCP)", "TypeBox (schema validation)", "Jest (testing)"]
quality_score: 8
rag_relevance: 7
deployment_complexity: "Medium"
tags: ["network monitoring", "MCP adapter", "CLI tool", "LibreNMS integration", "safety-gated writes"]
source: "https://github.com/lidless-labs/librenmsctrl"
stars: 1
language: "TypeScript"
last_updated: "2026-07-17T02:42:22Z"
discovered_at: "2026-07-17T02:52:18Z"
evaluated_by: "mistral-small-latest"
---

## Summary
librenmsctrl is a CLI and MCP-compatible adapter for interacting with LibreNMS, an open-source network monitoring system. It provides typed command surfaces for inspecting devices, ports, alerts, and events via API-token authentication, with safety-gated write operations for agent workflows.

## Key Features
- Read-only CLI for LibreNMS monitoring (devices, ports, alerts, events)
- MCP-compatible adapter for agent workflows with structured tool output
- Three-tier write-gating system (reads, safe writes, destructive ops) with confirmation flags
- Input validation via TypeBox schemas and URL-encoded parameters to prevent injection
- API token redactor to mask credentials in logs and error output

## Why It Matters for RAG Builders
It provides a secure, validated control surface for LibreNMS, enabling safe agent interactions with network monitoring data while preventing accidental or malicious state changes.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### LibreNMS API
Automated review identified **LibreNMS API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### TypeBox (schema validation)
Automated review identified **TypeBox (schema validation)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Jest (testing)
Automated review identified **Jest (testing)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
