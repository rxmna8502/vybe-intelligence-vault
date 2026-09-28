---
title: "juan-sibbo/gam-seller-mcp-node"
content_type: "repo"
engine: "v2"
category: "Orchestrator"
tech_stack: ["TypeScript", "Model Context Protocol (MCP)", "Node.js", "RS256 (JWT)", "Docker", "GitHub Actions", "SOAP (for GAM adapter)", "Vitest (testing)"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Medium"
tags: ["MCP Server", "Ad Inventory", "Governed Access", "AI Agent Interface", "Audit Logging"]
source: "https://github.com/juan-sibbo/gam-seller-mcp-node"
stars: 0
language: "TypeScript"
last_updated: "2026-08-03T21:54:46Z"
discovered_at: "2026-08-03T22:09:39Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A governed Model Context Protocol (MCP) server that exposes sell-side ad inventory (e.g., Google Ad Manager) to buyer-side AI agents with strict security, privacy, and audit controls. It provides discovery, firm pricing, and a buyer-scoped soft commitment primitive while preventing data over-exposure, accidental writes, and unauthorized access.

## Key Features
- Governed MCP server exposing sell-side ad inventory with default-deny security model
- Discovery of product families and firm pricing without exposing sensitive data (e.g., deal IDs, floor prices)
- Buyer-scoped soft commitment primitive (create/revoke intents) with TTL expiry for controlled transactions
- Hash-chained audit ledger with pseudonymized buyer identities for GDPR compliance and accountability
- Synthetic catalog and forecast data with a planned GAM adapter for real-time inventory integration

## Why It Matters for RAG Builders
This project provides a critical governed interface for AI agents to safely interact with sell-side ad inventory, ensuring data privacy, auditability, and controlled transactional capabilities without exposing sensitive systems or enabling unauthorized writes.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### RS256 (JWT)
Automated review identified **RS256 (JWT)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### GitHub Actions
Automated review identified **GitHub Actions** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SOAP (for GAM adapter)
Automated review identified **SOAP (for GAM adapter)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Vitest (testing)
Automated review identified **Vitest (testing)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
