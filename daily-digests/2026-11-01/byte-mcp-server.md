---
title: "0rkz/byte-mcp-server"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["TypeScript", "JavaScript", "Model Context Protocol (MCP)", "Ethereum (Base mainnet, Arbitrum Sepolia)", "USDC (real and mock)", "EIP-712", "x402 Payment Protocol", "Node.js", "npm"]
quality_score: 9
rag_relevance: 10
deployment_complexity: "Medium"
tags: ["MCP server", "pay-per-byte", "EIP-712 attestations", "x402 protocol", "AI data integrity"]
source: "https://github.com/0rkz/byte-mcp-server"
stars: 1
language: "JavaScript"
last_updated: "2026-08-07T18:51:50Z"
discovered_at: "2026-08-07T18:57:49Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A Model Context Protocol (MCP) server providing AI agents with cryptographically attested, provenance-verifiable data feeds via PayPerByte. It enables pay-per-call access to real-time data (e.g., weather, security, markets) with EIP-712 receipts for integrity verification, supporting both on-chain subscriptions and x402 pay-per-use models.

## Key Features
- Cryptographically attested data feeds with EIP-712 `PayloadAttestation` receipts for integrity verification
- Dual payment rails: x402 pay-per-call (Base mainnet, real USDC) and on-chain subscriptions (Arbitrum Sepolia, testnet MockUSDC)
- 15 MCP tools for discovery, subscription, publishing, and verification (e.g., `byte_buy_data`, `byte_verify_payload`)
- Zero-setup buy mode with real-time USDC settlement and no API keys required
- Built-in verification tools to ensure data integrity before acting on responses

## Why It Matters for RAG Builders
It provides a secure, verifiable, and pay-per-use mechanism for AI agents to access real-time data feeds with cryptographic proof of integrity, eliminating trust issues in RAG pipelines.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JavaScript
Automated review identified **JavaScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Ethereum (Base mainnet, Arbitrum Sepolia)
Automated review identified **Ethereum (Base mainnet, Arbitrum Sepolia)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### USDC (real and mock)
Automated review identified **USDC (real and mock)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### EIP-712
Automated review identified **EIP-712** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### x402 Payment Protocol
Automated review identified **x402 Payment Protocol** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### npm
Automated review identified **npm** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
