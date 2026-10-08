---
title: "0xfreak0/sui-mcp"
content_type: "repo"
engine: "v2"
category: "Agent Framework"
tech_stack: ["TypeScript", "Node.js", "MCP (Model Context Protocol)", "Sui Blockchain", "GraphQL", "RPC", "Move (Sui smart contract language)", "SQLite", "Rust (for optional decompiler)"]
quality_score: 9
rag_relevance: 9
deployment_complexity: "Medium"
tags: ["Sui blockchain", "fund tracing", "forensic analysis", "MCP server", "on-chain investigation"]
source: "https://github.com/0xfreak0/sui-mcp"
stars: 1
language: "TypeScript"
last_updated: "2026-09-03T21:55:57Z"
discovered_at: "2026-09-03T22:11:00Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A read-only MCP server for investigating on-chain activity on the Sui blockchain, specializing in fund tracing, wallet attribution, and forensic analysis of transaction flows. It provides 60 tools for wallet overviews, DeFi positions, NFTs, and protocol-specific analytics with a focus on coordinated cluster detection and address attribution.

## Key Features
- 60 tools for Sui blockchain analysis, including fund tracing, wallet attribution, and protocol-specific analytics
- Dynamic tool loading with runtime switching via `enable_tools` or environment variables (e.g., `SUI_TOOLS`)
- Protocol-aware transaction decoding for major Sui DeFi protocols (e.g., Cetus, Suilend, NAVI, DeepBook)
- Address fan-out analysis with flow shape metrics (e.g., out/in ratio) to distinguish coordinated clusters from noise
- No wallet or API keys required; operates entirely on public endpoints with read-only access

## Why It Matters for RAG Builders
This MCP server provides essential forensic and attribution tools for RAG builders to analyze Sui blockchain activity, enabling accurate fund tracing and coordinated cluster detection without requiring private keys or API keys.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Sui Blockchain
Automated review identified **Sui Blockchain** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### GraphQL
Automated review identified **GraphQL** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### RPC
Automated review identified **RPC** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Move (Sui smart contract language)
Automated review identified **Move (Sui smart contract language)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Rust (for optional decompiler)
Automated review identified **Rust (for optional decompiler)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
