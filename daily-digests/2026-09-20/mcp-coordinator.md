---
title: "swoofer/mcp-coordinator"
content_type: "repo"
engine: "v2"
category: "Orchestrator"
tech_stack: ["TypeScript", "Node.js", "MQTT (Aedes)", "MCP (Model Context Protocol)", "Docker", "OAuth 2.1", "React (Dashboard)", "Git", "JWT", "CI/CD (GitHub Actions)"]
quality_score: 9
rag_relevance: 9
deployment_complexity: "Medium"
tags: ["multi-agent coordination", "conflict resolution", "AI coding agents", "real-time collaboration", "MCP server"]
source: "https://github.com/swoofer/mcp-coordinator"
stars: 1
language: "TypeScript"
last_updated: "2026-07-11T16:49:59Z"
discovered_at: "2026-07-11T16:56:01Z"
evaluated_by: "mistral-small-latest"
---

## Summary
mcp-coordinator is a daemon that prevents conflicts between AI coding agents (e.g., Claude Code, Cursor) by providing a shared coordination layer over MQTT. It enables agents to announce their intentions before modifying files, detect potential conflicts, and resolve them collaboratively in real-time.

## Key Features
- Embedded MQTT broker for real-time event streaming between agents
- 26 MCP tools for agent coordination, including `announce_work`, `post_to_thread`, and `register_agent`
- Impact scoring system to detect and resolve conflicts before code is written
- Support for polling and push-based event delivery (via Channels)
- Comprehensive authentication (OAuth 2.1, 4 IdPs) and audit logging for regulated environments

## Why It Matters for RAG Builders
It eliminates AI agent conflicts in collaborative coding environments by providing a shared coordination layer, ensuring agents work in harmony without overwriting each other's changes.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MQTT (Aedes)
Automated review identified **MQTT (Aedes)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OAuth 2.1
Automated review identified **OAuth 2.1** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### React (Dashboard)
Automated review identified **React (Dashboard)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Git
Automated review identified **Git** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JWT
Automated review identified **JWT** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CI/CD (GitHub Actions)
Automated review identified **CI/CD (GitHub Actions)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
