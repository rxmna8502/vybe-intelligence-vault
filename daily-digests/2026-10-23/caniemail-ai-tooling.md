---
title: "shbernal/caniemail-ai-tooling"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["JavaScript", "Node.js", "MCP (Model Context Protocol)", "Claude Skills", "HTML/CSS Parsing", "JSON-RPC"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Medium"
tags: ["email compatibility", "AI agent tooling", "MCP server", "Claude skill", "HTML/CSS linting"]
source: "https://github.com/shbernal/caniemail-ai-tooling"
stars: 0
language: "JavaScript"
last_updated: "2026-08-04T17:46:43Z"
discovered_at: "2026-08-04T17:51:01Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A Claude skill and MCP server providing AI agents with accurate email client HTML/CSS compatibility data from caniemail.com. It enables agents to lint, check, and search email markup for client-specific rendering issues before sending.

## Key Features
- Three specialized tools for email compatibility: `lint_email`, `check_feature_support`, and `search_features` to avoid overwhelming agent context
- Accurate four-verdict system (supported, unsupported, mitigated, untested) for precise rendering guidance
- Offline-capable with bundled dataset snapshots and live-fetch fallback for data freshness
- Feature detection and parsing implemented from scratch to avoid upstream package defects and limitations
- Supports multiple deployment modes: local skill, MCP server over stdio/HTTP, and direct CLI usage

## Why It Matters for RAG Builders
It enables AI agents to generate email markup that renders correctly across diverse clients, reducing broken emails and improving reliability for automated communication workflows.

## Tech Stack Deep Dive
### JavaScript
Automated review identified **JavaScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Claude Skills
Automated review identified **Claude Skills** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HTML/CSS Parsing
Automated review identified **HTML/CSS Parsing** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSON-RPC
Automated review identified **JSON-RPC** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
