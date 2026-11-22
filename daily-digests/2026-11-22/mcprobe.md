---
title: "tamish560/mcprobe"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Go", "MCP (Model Context Protocol)", "JSON-RPC", "CLI"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Low"
tags: ["MCP security", "prompt injection detection", "tool shadowing", "drift detection", "MCP introspection"]
source: "https://github.com/tamish560/mcprobe"
stars: 0
language: "Go"
last_updated: "2026-07-15T08:03:30Z"
discovered_at: "2026-07-15T08:06:03Z"
evaluated_by: "mistral-small-latest"
---

## Summary
mcprobe is a security scanner and introspection tool for MCP (Model Context Protocol) servers, designed to detect prompt injection patterns, tool shadowing, path traversal, and drift in server capabilities. It enables pre-integration security checks to prevent malicious or compromised MCP servers from manipulating AI agents.

## Key Features
- Detects 18+ prompt injection patterns in tool/prompt/resource descriptions
- Identifies tool shadowing vulnerabilities across multiple MCP servers
- Baseline snapshots and drift detection to catch rug-pull attacks
- Path traversal detection in resource URIs
- Supports multiple output formats (text, JSON, SARIF) for CI integration

## Why It Matters for RAG Builders
It provides critical security checks for MCP servers to prevent malicious manipulation of AI agents before integration, addressing vulnerabilities like prompt injection and tool shadowing.

## Tech Stack Deep Dive
### Go
Automated review identified **Go** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSON-RPC
Automated review identified **JSON-RPC** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CLI
Automated review identified **CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
