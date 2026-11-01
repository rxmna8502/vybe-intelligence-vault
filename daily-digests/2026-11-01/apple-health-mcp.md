---
title: "davidmosiah/apple-health-mcp"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["TypeScript", "Node.js", "Model Context Protocol (MCP)", "XML parsing", "CLI tooling"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Medium"
tags: ["Apple Health", "MCP server", "local-first", "health data", "AI agent integration"]
source: "https://github.com/davidmosiah/apple-health-mcp"
stars: 1
language: "TypeScript"
last_updated: "2026-08-08T12:43:40Z"
discovered_at: "2026-08-08T12:47:17Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Local-first MCP server that parses Apple Health export files (XML or ZIP) and exposes personal health data—such as activity, sleep, heart rate, HRV, and workouts—to AI agents without cloud dependency or token exposure.

## Key Features
- Parses local Apple Health exports (export.xml, export.zip, or unzipped folders) without cloud sync or OAuth
- Exposes health data via MCP-compatible tools for AI agents (e.g., daily/weekly summaries, records, workouts)
- Supports auto-import and watch-path for keeping data fresh without manual reconfiguration
- Privacy-first design with configurable privacy modes (summary, structured, raw) for sensitive health data
- Integrates with MCP clients like Claude Desktop, Cursor, and Hermes for seamless AI agent workflows

## Why It Matters for RAG Builders
It enables AI agents to securely access and analyze personal health data from Apple Health locally, empowering privacy-focused wellness insights and long-term trend analysis without cloud dependency.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### XML parsing
Automated review identified **XML parsing** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CLI tooling
Automated review identified **CLI tooling** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
