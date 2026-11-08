---
title: "aki0225/AgentToolGate"
content_type: "repo"
engine: "v2"
category: "Orchestrator"
tech_stack: ["Go", "React", "TypeScript", "PostgreSQL", "SQLite", "OpenTelemetry", "MCP (Model Context Protocol)", "REST", "YAML", "Docker"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Medium"
tags: ["AI Agent Governance", "Tool Call Interception", "Policy Enforcement", "Audit Logging", "Secret Management"]
source: "https://github.com/aki0225/AgentToolGate"
stars: 2
language: "Go"
last_updated: "2026-08-06T15:12:38Z"
discovered_at: "2026-08-06T15:18:25Z"
evaluated_by: "mistral-small-latest"
---

## Summary
AgentToolGate (ATG) is a local AI Agent tool governance gateway that intercepts and regulates high-risk tool calls before execution, ensuring policy enforcement, approval workflows, secret management, and audit logging for database queries, GitHub operations, HTTP requests, and MCP tool interactions.

## Key Features
- Pre-execution policy evaluation for high-risk tool calls (database, GitHub, HTTP, MCP)
- Approval workflows for sensitive operations with audit trails
- Connector secret injection and runtime management to prevent credential exposure
- Local action firewall for AI clients (Claude/Codex) to block high-risk filesystem operations
- OpenTelemetry integration for distributed tracing and observability

## Why It Matters for RAG Builders
AgentToolGate ensures AI agents cannot execute unauthorized or high-risk operations by enforcing governance policies before tool calls, reducing the attack surface for credential theft, data exfiltration, and persistent compromise in RAG and agentic systems.

## Tech Stack Deep Dive
### Go
Automated review identified **Go** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### React
Automated review identified **React** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PostgreSQL
Automated review identified **PostgreSQL** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenTelemetry
Automated review identified **OpenTelemetry** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### REST
Automated review identified **REST** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### YAML
Automated review identified **YAML** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
