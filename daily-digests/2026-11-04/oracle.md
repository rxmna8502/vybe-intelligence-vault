---
title: "demi-hl/oracle"
content_type: "repo"
engine: "v2"
category: "Orchestrator"
tech_stack: ["JavaScript", "Node.js", "TypeScript", "EVM (Ethereum Virtual Machine)", "Solana", "Bitcoin", "Hyperliquid", "REST APIs", "JSON-RPC", "PSBT (Partially Signed Bitcoin Transactions)", "EIP-712", "DexScreener", "GeckoTerminal", "DeFiLlama"]
quality_score: 9
rag_relevance: 9
deployment_complexity: "Medium"
tags: ["multichain", "agent-control", "self-custody", "policy-bounded", "transaction-preparation"]
source: "https://github.com/demi-hl/oracle"
stars: 0
language: "JavaScript"
last_updated: "2026-08-01T20:48:00Z"
discovered_at: "2026-08-01T20:50:53Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Oracle is a prepare-only multichain agent control plane designed for policy-bounded intents, enabling self-custody by default. It facilitates agent-driven transactions where models propose actions, but users authorize and sign them via grants, ensuring no private keys are exposed or transactions broadcasted by the public package.

## Key Features
- Policy-bounded intents with signed grants for authorization, ensuring users retain full control over transactions.
- Self-custody by default: private keys never leave the user's machine, and the public package never signs or broadcasts transactions.
- Receipts and balance deltas required for proof of execution, ensuring transparency and accountability.
- Specialist agent profiles for multichain support (EVM, Solana, Bitcoin, Hyperliquid) with verified venues and fail-closed defaults for unconfigured chains.
- Modular architecture separating data, policy, and execution planes, with enforced boundaries to prevent unauthorized actions.

## Why It Matters for RAG Builders
Oracle enables secure, policy-driven multichain agent interactions by separating proposal, authorization, and execution, ensuring self-custody and transparency for RAG/AI stack builders.

## Tech Stack Deep Dive
### JavaScript
Automated review identified **JavaScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### EVM (Ethereum Virtual Machine)
Automated review identified **EVM (Ethereum Virtual Machine)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Solana
Automated review identified **Solana** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Bitcoin
Automated review identified **Bitcoin** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Hyperliquid
Automated review identified **Hyperliquid** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### REST APIs
Automated review identified **REST APIs** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSON-RPC
Automated review identified **JSON-RPC** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PSBT (Partially Signed Bitcoin Transactions)
Automated review identified **PSBT (Partially Signed Bitcoin Transactions)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### EIP-712
Automated review identified **EIP-712** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### DexScreener
Automated review identified **DexScreener** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### GeckoTerminal
Automated review identified **GeckoTerminal** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### DeFiLlama
Automated review identified **DeFiLlama** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
