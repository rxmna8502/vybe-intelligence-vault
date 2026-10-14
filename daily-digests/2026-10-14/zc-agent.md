---
title: "Harshbhargav45/zc-agent"
content_type: "repo"
engine: "v2"
category: "Orchestrator"
tech_stack: ["Rust", "Solana", "WASM", "Squads Multisig", "SHA-256", "Python (x402 Payment Gateway)", "TypeScript (Squads setup scripts)", "CLI Tools"]
quality_score: 8
rag_relevance: 7
deployment_complexity: "High"
tags: ["bug bounty", "Solana", "WASM plugins", "multisig", "escrow"]
source: "https://github.com/Harshbhargav45/zc-agent"
stars: 0
language: "Rust"
last_updated: "2026-08-06T15:09:34Z"
discovered_at: "2026-08-06T15:18:35Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A ZeroClaw autonomous agent that manages a bug bounty escrow system on Solana, ensuring secure and immutable reward commitments. It locks in payout tiers via on-chain hashing, enforces strict caps, and requires human approval via Squads multisig for fund releases.

## Key Features
- On-chain commitment of reward tiers via SHA-256 hashing to prevent post-discovery renegotiation
- Hard payout caps enforced by WASM plugins to limit financial exposure
- Squads multisig integration for human-approved fund releases
- Standalone CLI for independent verification of payout claims
- Prompt injection defense with documented test cases

## Why It Matters for RAG Builders
It provides a tamper-proof mechanism for managing bug bounty payouts on Solana, ensuring fairness and transparency for both hunters and protocol teams.

## Tech Stack Deep Dive
### Rust
Automated review identified **Rust** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Solana
Automated review identified **Solana** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### WASM
Automated review identified **WASM** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Squads Multisig
Automated review identified **Squads Multisig** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SHA-256
Automated review identified **SHA-256** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Python (x402 Payment Gateway)
Automated review identified **Python (x402 Payment Gateway)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### TypeScript (Squads setup scripts)
Automated review identified **TypeScript (Squads setup scripts)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CLI Tools
Automated review identified **CLI Tools** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
