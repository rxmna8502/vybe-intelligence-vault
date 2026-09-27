---
title: "kofujimura/tctc-mcp"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["TypeScript", "Node.js", "Ethereum", "ERC-7303", "ERC-1155", "ERC-721", "MCP (Model Context Protocol)", "Solidity", "npm"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Medium"
tags: ["AI agent permissions", "on-chain authorization", "ERC-7303", "MCP server", "gasless expiry"]
source: "https://github.com/kofujimura/tctc-mcp"
stars: 0
language: "TypeScript"
last_updated: "2026-07-11T21:39:16Z"
discovered_at: "2026-07-11T21:47:10Z"
evaluated_by: "mistral-small-latest"
---

## Summary
tctc-mcp is an MCP server that exposes ERC-7303 (Token-Controlled Token Circulation) roles to AI agents, enabling on-chain permission checks and management without requiring a separate permission server. Agents can verify their own permissions, while principals grant or revoke roles by minting or burning control tokens.

## Key Features
- Exposes ERC-7303 roles to AI agents via MCP, enabling self-verification of on-chain permissions.
- Supports timed roles with gasless auto-expiry, eliminating the need for manual revocation.
- Leverages IERC7303 auto-discovery for dynamic role introspection without static configuration.
- Integrates with ERC-8004 (Trustless Agents) and ERC-6551 (Token Bound Accounts) for agent identity resolution.
- Provides admin tools for granting and revoking roles, with security measures like private key isolation.

## Why It Matters for RAG Builders
It enables secure, decentralized permission management for AI agents, reducing reliance on centralized permission servers and improving trust in agent autonomy.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Ethereum
Automated review identified **Ethereum** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### ERC-7303
Automated review identified **ERC-7303** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### ERC-1155
Automated review identified **ERC-1155** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### ERC-721
Automated review identified **ERC-721** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Solidity
Automated review identified **Solidity** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### npm
Automated review identified **npm** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
