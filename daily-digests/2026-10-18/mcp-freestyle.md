---
title: "lozit/mcp-freestyle"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["TypeScript", "Node.js (\u226520)", "Model Context Protocol (MCP)", "LibreLinkUp API (unofficial)", "OS Keychain (for credential storage)"]
quality_score: 9
rag_relevance: 7
deployment_complexity: "Medium"
tags: ["glucose monitoring", "MCP server", "diabetes management", "real-time data", "health informatics"]
source: "https://github.com/lozit/mcp-freestyle"
stars: 0
language: "TypeScript"
last_updated: "2026-08-09T17:28:05Z"
discovered_at: "2026-08-09T17:35:36Z"
evaluated_by: "mistral-small-latest"
---

## Summary
mcp-freestyle is an MCP (Model Context Protocol) server that reads glucose data from Abbott's FreeStyle LibreLinkUp cloud service via an unofficial API. It integrates with MCP clients like Claude to provide real-time and historical glucose readings for diabetes management.

## Key Features
- Reads current glucose levels and historical data from FreeStyle sensors via LibreLinkUp cloud
- Secure credential storage using OS keychain (no secrets in config files)
- Provides tools for `get_current_glucose` and `get_glucose_history` with accurate time-in-range reporting
- Honest about data coverage and truncation (avoids misleading interpolations)
- Integrates seamlessly with MCP clients like Claude Desktop and Claude Code

## Why It Matters for RAG Builders
It enables AI assistants to access real-time and historical glucose data for diabetes management, bridging the gap between health IoT devices and AI-driven insights.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js (≥20)
Automated review identified **Node.js (≥20)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### LibreLinkUp API (unofficial)
Automated review identified **LibreLinkUp API (unofficial)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OS Keychain (for credential storage)
Automated review identified **OS Keychain (for credential storage)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
