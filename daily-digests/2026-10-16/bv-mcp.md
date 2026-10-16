---
title: "MadaBurns/bv-mcp"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["TypeScript", "Cloudflare Workers", "Model Context Protocol (MCP)", "JSON-RPC 2.0", "Durable Objects", "D1/D2 Databases", "RDAP", "WHOIS", "DNS-over-HTTPS", "JWT Authentication"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Medium"
tags: ["DNS security", "email authentication", "MCP server", "security scanning", "compliance mapping"]
source: "https://github.com/MadaBurns/bv-mcp"
stars: 7
language: "TypeScript"
last_updated: "2026-07-20T03:29:18Z"
discovered_at: "2026-07-20T03:37:48Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A source-available DNS and email security scanner implemented as an MCP (Model Context Protocol) server, providing 80+ tools for domain security analysis, remediation guidance, and compliance mapping via Streamable HTTP, stdio, or legacy HTTP+SSE transports.

## Key Features
- 80+ MCP tools covering SPF, DMARC, DKIM, DNSSEC, SSL/TLS, and more for comprehensive domain security analysis
- Guided remediation with `generate` tool producing provider-aware prioritized action plans and ready-to-publish records
- Supply chain mapping and attack path simulation for third-party dependency risk assessment
- Self-tuning scoring and per-tier analytics with Cloudflare Workers-based telemetry
- Passive and read-only operation using public DNS-over-HTTPS with no authorization required from targets

## Why It Matters for RAG Builders
It provides essential security scanning and remediation capabilities for RAG builders to validate and harden domain configurations, reducing attack surfaces and improving data integrity in AI-driven workflows.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Cloudflare Workers
Automated review identified **Cloudflare Workers** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSON-RPC 2.0
Automated review identified **JSON-RPC 2.0** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Durable Objects
Automated review identified **Durable Objects** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### D1/D2 Databases
Automated review identified **D1/D2 Databases** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### RDAP
Automated review identified **RDAP** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### WHOIS
Automated review identified **WHOIS** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### DNS-over-HTTPS
Automated review identified **DNS-over-HTTPS** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JWT Authentication
Automated review identified **JWT Authentication** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
