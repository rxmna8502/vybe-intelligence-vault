---
title: "CyberSecAuto-Labs/OpenVAS-MCP"
content_type: "repo"
engine: "v2"
category: "Agent Framework"
tech_stack: ["Python", "MCP (Model Context Protocol)", "OpenVAS/Greenbone Vulnerability Management (GVM)", "Docker", "GitHub Actions", "Cosign (for image signing)", "Syft (for SBOM generation)", "Grype (for vulnerability scanning)"]
quality_score: 9
rag_relevance: 7
deployment_complexity: "Medium"
tags: ["vulnerability scanning", "AI agent integration", "MCP server", "OpenVAS", "Greenbone"]
source: "https://github.com/CyberSecAuto-Labs/OpenVAS-MCP"
stars: 3
language: "Python"
last_updated: "2026-08-01T13:09:25Z"
discovered_at: "2026-08-01T13:16:49Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A self-hosted MCP server that provides AI agents with structured access to OpenVAS/Greenbone vulnerability scanning capabilities. It acts as a secure bridge between AI systems and GVM instances, enabling local-first vulnerability assessments without exposing credentials or sending data externally.

## Key Features
- Local-first architecture ensuring no external data exposure or telemetry
- Credential isolation via a single GVM service account managed by the MCP server
- Structured scan data output for seamless AI agent integration
- Support for multiple transport protocols (stdio, SSE, streamable-http)
- Comprehensive security practices including signed releases, SBOMs, and egress auditing

## Why It Matters for RAG Builders
It enables AI agents to securely and locally perform vulnerability assessments without exposing credentials or sending sensitive data to external services, bridging the gap between AI-driven security operations and robust vulnerability scanning tools.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenVAS/Greenbone Vulnerability Management (GVM)
Automated review identified **OpenVAS/Greenbone Vulnerability Management (GVM)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### GitHub Actions
Automated review identified **GitHub Actions** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Cosign (for image signing)
Automated review identified **Cosign (for image signing)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Syft (for SBOM generation)
Automated review identified **Syft (for SBOM generation)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Grype (for vulnerability scanning)
Automated review identified **Grype (for vulnerability scanning)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
