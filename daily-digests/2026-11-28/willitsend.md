---
title: "abryfs/willitsend"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["TypeScript", "Node.js", "MCP (Model Context Protocol)", "CLI", "Browser-based playground", "GitHub Actions (CI)"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Low"
tags: ["SMS compliance", "preflight validation", "segment math", "carrier filtering", "AI agent tooling"]
source: "https://github.com/abryfs/willitsend"
stars: 0
language: "TypeScript"
last_updated: "2026-07-16T02:22:42Z"
discovered_at: "2026-07-16T02:25:54Z"
evaluated_by: "mistral-small-latest"
---

## Summary
willitsend is a deterministic preflight tool that validates SMS/iMessage messages before sending, ensuring compliance with carrier rules and preventing silent filtering. It performs segment math, checks for opt-out instructions, brand identification, and other compliance requirements without making API calls or storing data.

## Key Features
- Deterministic preflight checks for SMS/iMessage compliance before sending
- Exact segment math for GSM-7/UCS-2 encoding with parity to Twilio's calculator
- MCP-native server for integration with AI agents (e.g., Claude Code)
- CLI and library support for programmatic use
- Cited findings with severity levels (block/warn/info) and fix suggestions

## Why It Matters for RAG Builders
It prevents silent carrier filtering and wasted API calls by validating messages for compliance before sending, ensuring reliable delivery for AI agents sending SMS/iMessage at scale.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CLI
Automated review identified **CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Browser-based playground
Automated review identified **Browser-based playground** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### GitHub Actions (CI)
Automated review identified **GitHub Actions (CI)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
