---
title: "tailoredtidings/ai-agent-tokenized-stock-os"
content_type: "repo"
engine: "v2"
category: "Orchestrator"
tech_stack: ["TypeScript", "MCP (Model Context Protocol)", "Node.js", "Ethereum/Viem", "Uniswap V3", "0x API", "Chainlink", "Morpho Earn", "Fly.io", "Jest (testing)"]
quality_score: 9
rag_relevance: 10
deployment_complexity: "Medium"
tags: ["tokenized stocks", "MCP server", "RWA", "agent guardrails", "on-chain execution"]
source: "https://github.com/tailoredtidings/ai-agent-tokenized-stock-os"
stars: 0
language: "TypeScript"
last_updated: "2026-07-16T18:04:15Z"
discovered_at: "2026-07-16T18:05:35Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A non-custodial MCP-based operating system enabling AI agents to discover, price, plan, and execute swaps for tokenized stocks on Robinhood Chain (4663). It integrates multi-venue liquidity (Uniswap, 0x RFQ, Chainlink), enforces agent guardrails, and supports Morpho Earn vaults for USDG deposits.

## Key Features
- Multi-venue liquidity aggregation (Uniswap, 0x RFQ, Chainlink) for tokenized stocks on Robinhood Chain (4663)
- Non-custodial executable swap plans with policy enforcement (allowlists, spend limits, simulate-first checks)
- Canonical registry of tokenized equities/ETFs and USDG/WETH pairs with Chainlink pricing
- Durable agent sessions with kill switches and policy management via `@aatos/policy`
- Integration with Morpho Earn for USDG deposits and Uniswap V3 for on-chain swaps

## Why It Matters for RAG Builders
It provides the critical infrastructure for AI agents to safely and correctly interact with tokenized stocks on-chain, bridging the gap between agentic trading and real-world asset (RWA) markets.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Ethereum/Viem
Automated review identified **Ethereum/Viem** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Uniswap V3
Automated review identified **Uniswap V3** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### 0x API
Automated review identified **0x API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Chainlink
Automated review identified **Chainlink** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Morpho Earn
Automated review identified **Morpho Earn** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Fly.io
Automated review identified **Fly.io** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Jest (testing)
Automated review identified **Jest (testing)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
