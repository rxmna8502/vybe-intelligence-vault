---
title: "0200project/base-tx-explain"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["TypeScript", "Node.js", "MCP (Model Context Protocol)", "Ethers.js", "Base RPC", "Chainlink", "Sourcify", "ScamSniffer", "MyEtherWallet"]
quality_score: 9
rag_relevance: 10
deployment_complexity: "Medium"
tags: ["transaction decoding", "deterministic", "risk assessment", "Base mainnet", "MCP tool"]
source: "https://github.com/0200project/base-tx-explain"
stars: 0
language: "TypeScript"
last_updated: "2026-09-04T02:07:05Z"
discovered_at: "2026-09-04T02:16:16Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A deterministic MCP tool that decodes Base mainnet transactions into structured, plain-English explanations with risk flags, asset movements, and gas costs. It operates without LLMs, ensuring consistent and hallucination-free outputs for any transaction hash.

## Key Features
- Strict JSON output with deterministic decoding for any Base mainnet transaction
- Identifies assets moved, counterparties, and risk flags (e.g., unverified contracts, known drainers)
- Calculates gas costs in USD, including L1 data fees and ETH price at transaction time
- Supports 40+ event formats (ERC-20/721/1155, Uniswap, Aave, bridges, etc.)
- Free tier (50 calls/IP/day) and paid tier ($0.02/call via x402) with self-hosting support

## Why It Matters for RAG Builders
It provides a reliable, non-hallucinatory way to parse Base transactions for RAG systems, ensuring accurate and structured data for downstream AI applications.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Ethers.js
Automated review identified **Ethers.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Base RPC
Automated review identified **Base RPC** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Chainlink
Automated review identified **Chainlink** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Sourcify
Automated review identified **Sourcify** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### ScamSniffer
Automated review identified **ScamSniffer** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MyEtherWallet
Automated review identified **MyEtherWallet** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
