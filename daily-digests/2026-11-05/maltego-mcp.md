---
title: "lidless-labs/maltego-mcp"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["TypeScript", "Node.js", "Model Context Protocol (MCP)", "Maltego", "Python (for Phase B transforms)"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Medium"
tags: ["OSINT", "threat intelligence", "MCP server", "Maltego automation", "graph generation"]
source: "https://github.com/lidless-labs/maltego-mcp"
stars: 7
language: "TypeScript"
last_updated: "2026-08-09T01:25:22Z"
discovered_at: "2026-08-09T01:34:46Z"
evaluated_by: "mistral-small-latest"
---

## Summary
maltego-mcp is an MCP server that enables LLMs to programmatically author Maltego graph files and execute OSINT lookups (whois, DNS, ASN, crt.sh) for threat intelligence investigations. It bridges agent-driven automation with Maltego's graph-based OSINT workflows.

## Key Features
- 13 MCP tools for graph authoring (create, add entities/links, save/load graphs)
- Primitive OSINT lookups (whois, DNS, ASN, crt.sh) via MCP tools
- Phase A: TypeScript MCP server for agent-driven graph creation and enrichment
- Phase B: Python TRX transforms for in-Maltego Desktop pivots (optional)
- Basic plan compatibility via `.mtgx` file generation and import

## Why It Matters for RAG Builders
It enables LLMs to autonomously generate and enrich Maltego graphs for OSINT investigations, reducing manual point-and-click workflows and integrating threat intelligence directly into agent-driven pipelines.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Maltego
Automated review identified **Maltego** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Python (for Phase B transforms)
Automated review identified **Python (for Phase B transforms)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
