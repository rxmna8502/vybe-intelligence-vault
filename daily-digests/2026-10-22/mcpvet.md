---
title: "12122J/mcpvet"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["JavaScript", "Node.js", "MCP (Model Context Protocol)", "Sandboxing", "Static Analysis"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Medium"
tags: ["MCP security", "server vetting", "honeytoken", "sandboxing", "AI agent safety"]
source: "https://github.com/12122J/mcpvet"
stars: 0
language: "JavaScript"
last_updated: "2026-07-14T17:56:18Z"
discovered_at: "2026-07-14T18:02:03Z"
evaluated_by: "mistral-small-latest"
---

## Summary
mcpvet is a security scanner for Model Context Protocol (MCP) servers designed to vet servers before they are added to AI agents like Claude Code or Cursor. It grades servers A–F based on security risks, including credential theft, tool poisoning, and install-script payloads, by running them in a sealed sandbox with honeytoken secrets.

## Key Features
- Runs MCP servers in a sealed sandbox with honeytoken secrets to detect credential theft or exfiltration.
- Scans tool descriptions for hidden instructions or tool poisoning attacks.
- Checks provenance, install scripts, and typosquats to assess server reliability.
- Provides A–F security grades with machine-readable output for CI integration.
- Includes a broker mode to safely run vetted servers with real API keys replaced by honeytokens.

## Why It Matters for RAG Builders
It proactively prevents malicious MCP servers from compromising AI agents by detecting credential theft and hidden instructions before they are installed.

## Tech Stack Deep Dive
### JavaScript
Automated review identified **JavaScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Sandboxing
Automated review identified **Sandboxing** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Static Analysis
Automated review identified **Static Analysis** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
