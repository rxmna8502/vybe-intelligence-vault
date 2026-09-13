---
title: "nethinwei/sql-mcp-server"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Go", "PostgreSQL", "MySQL", "OceanBase", "Docker", "Docker Compose", "OpenTelemetry", "RBAC", "ACL"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Medium"
tags: ["SQL governance", "AI agent security", "data access control", "policy enforcement", "deterministic execution"]
source: "https://github.com/nethinwei/sql-mcp-server"
stars: 0
language: "Go"
last_updated: "2026-07-12T05:50:43Z"
discovered_at: "2026-07-12T05:56:17Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A governed SQL gateway that enforces strict access control and policy-based governance for untrusted AI agents, enabling deterministic and cost-bounded access to PostgreSQL, MySQL, and OceanBase without accepting arbitrary SQL or DDL operations.

## Key Features
- Enforces field-level and row-level access control via RBAC, ACLs, row policies, and data masking
- Prevents arbitrary SQL execution and DDL operations by design
- Implements cost controls including EXPLAIN pre-screening, result limits, timeouts, and tenant budgets
- Provides deterministic execution through whitelisted IR and tool combinations
- Supports auditing with hot-reloadable configurations, async audit logs, and OpenTelemetry hooks

## Why It Matters for RAG Builders
It provides a critical security layer for RAG systems by ensuring AI agents can only access and manipulate data in controlled, policy-enforced ways, reducing risks of data leaks or malicious queries.

## Tech Stack Deep Dive
### Go
Automated review identified **Go** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PostgreSQL
Automated review identified **PostgreSQL** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MySQL
Automated review identified **MySQL** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OceanBase
Automated review identified **OceanBase** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker Compose
Automated review identified **Docker Compose** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenTelemetry
Automated review identified **OpenTelemetry** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### RBAC
Automated review identified **RBAC** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### ACL
Automated review identified **ACL** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
