---
title: "lidless-labs/cortex-mcp"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["TypeScript", "Node.js", "Model Context Protocol (MCP)", "REST API", "Cortex (StrangeBee/TheHive)"]
quality_score: 9
rag_relevance: 10
deployment_complexity: "Medium"
tags: ["MCP server", "Threat intelligence", "Automated analysis", "SOAR integration", "Observable enrichment"]
source: "https://github.com/lidless-labs/cortex-mcp"
stars: 1
language: "TypeScript"
last_updated: "2026-08-09T01:25:20Z"
discovered_at: "2026-08-09T01:34:37Z"
evaluated_by: "mistral-small-latest"
---

## Summary
cortex-mcp is an MCP server that bridges AI clients to Cortex, enabling automated observable analysis and threat intelligence enrichment. It exposes Cortex's domain model as 31 typed MCP tools, allowing AI agents to run analyzers, aggregate results, and manage responders programmatically.

## Key Features
- 31 typed MCP tools for Cortex operations (analyzers, jobs, responders, org/user management)
- Auto-detection of observable data types and bulk analysis with aggregated taxonomy results
- Secure destructive action handling (responders, deletes) with explicit confirmation gates
- Superadmin tools for organization and user management via MCP prompts
- Configurable fan-out limits and file path restrictions for safe file-based analysis

## Why It Matters for RAG Builders
It enables AI agents to autonomously perform complex threat analysis and enrichment via Cortex, reducing manual workflows and accelerating incident response.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### REST API
Automated review identified **REST API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Cortex (StrangeBee/TheHive)
Automated review identified **Cortex (StrangeBee/TheHive)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
