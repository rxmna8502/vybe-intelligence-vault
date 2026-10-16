---
title: "Hosein-Abdollahi/mcp-injection-guard"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Python", "MCP (Model Context Protocol)", "FastMCP", "Taint tracking"]
quality_score: 9
rag_relevance: 9
deployment_complexity: "Low"
tags: ["prompt injection", "data provenance", "MCP server", "security", "agent safety"]
source: "https://github.com/Hosein-Abdollahi/mcp-injection-guard"
stars: 0
language: "Python"
last_updated: "2026-07-16T02:13:37Z"
discovered_at: "2026-07-16T02:26:01Z"
evaluated_by: "mistral-small-latest"
---

## Summary
An MCP server that prevents indirect prompt injection attacks by tracking data provenance rather than text patterns. It taints content from untrusted sources and blocks side-effectful actions that trace back to tainted data, ensuring agents cannot be manipulated by malicious instructions embedded in fetched content.

## Key Features
- Tracks data provenance to detect indirect prompt injection attacks
- Blocks side-effectful actions (e.g., sending emails, writing files) that trace back to untrusted content
- Zero false positives in evaluation against six injection styles
- Lightweight and fast with no model calls or API keys required
- Provides detailed security logs and status for debugging and auditing

## Why It Matters for RAG Builders
It provides a critical security layer for AI agents by preventing indirect prompt injection attacks through provenance tracking, ensuring agents cannot be manipulated by malicious instructions embedded in fetched content.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastMCP
Automated review identified **FastMCP** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Taint tracking
Automated review identified **Taint tracking** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
