---
title: "KincaidYang/whois"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Go", "RDAP", "WHOIS", "Docker", "Redis", "Prometheus", "OpenAPI 3.1", "MCP (Model Context Protocol)", "REST API"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Medium"
tags: ["WHOIS", "RDAP", "IP lookup", "ASN lookup", "self-hosted"]
source: "https://github.com/KincaidYang/whois"
stars: 62
language: "Go"
last_updated: "2026-07-11T09:26:31Z"
discovered_at: "2026-07-11T09:27:26Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A self-hostable WHOIS/RDAP API and MCP server that unifies domain, IPv4/v6, CIDR prefix, and ASN queries into a consistent JSON response. It prioritizes RDAP (RFC 9083) with WHOIS fallback, supports authentication, caching, and batch operations.

## Key Features
- Unified query interface for domains, IPs (including CIDR), and ASNs with RDAP-first responses
- Supports MCP integration for AI assistants via `/mcp` endpoint
- Configurable caching (memory or Redis) with negative caching and rate limiting
- Compliance with ICANN temporary gTLD policy and GDPR (omits privacy-sensitive fields)
- OpenAPI 3.1 documentation, Prometheus metrics, and health check endpoints

## Why It Matters for RAG Builders
Provides a reliable, self-hostable WHOIS/RDAP API that simplifies domain and IP intelligence gathering for AI and RAG systems while ensuring compliance and scalability.

## Tech Stack Deep Dive
### Go
Automated review identified **Go** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### RDAP
Automated review identified **RDAP** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### WHOIS
Automated review identified **WHOIS** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Redis
Automated review identified **Redis** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Prometheus
Automated review identified **Prometheus** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenAPI 3.1
Automated review identified **OpenAPI 3.1** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### REST API
Automated review identified **REST API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
