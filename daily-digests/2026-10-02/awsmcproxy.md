---
title: "winebarrel/awsmcproxy"
content_type: "repo"
engine: "v2"
category: "Orchestrator"
tech_stack: ["Go", "SigV4", "AWS MCP Server", "AWS SDK", "HTTP Transport"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Low"
tags: ["AWS", "MCP", "SigV4", "Multi-profile", "Proxy"]
source: "https://github.com/winebarrel/awsmcproxy"
stars: 3
language: "Go"
last_updated: "2026-09-03T02:10:42Z"
discovered_at: "2026-09-03T02:20:27Z"
evaluated_by: "mistral-small-latest"
---

## Summary
awsmcproxy is a multi-profile proxy for the AWS MCP Server that enables a single client connection to interact with multiple AWS accounts or profiles. It dynamically signs requests with SigV4 using credentials from specified AWS profiles, eliminating the need for additional configuration or tools like mcp-proxy-for-aws.

## Key Features
- Multi-profile support: Opens a SigV4-signed connection per AWS profile, allowing a single client to interact with multiple AWS identities.
- Dynamic credential handling: Reads AWS profiles from ~/.aws/config and ~/.aws/credentials, supporting SSO, assumed roles, and static keys.
- No configuration required: Profiles are dynamically listed and cached at request time, enabling immediate use of newly added profiles.
- Role narrowing: Supports overriding SSO roles per profile to restrict permissions without additional setup.
- Seamless integration: Works with the AWS MCP Server and requires no additional tools like mcp-proxy-for-aws or uvx.

## Why It Matters for RAG Builders
It enables AI agents to securely and dynamically interact with multiple AWS accounts or profiles through a single MCP connection, simplifying multi-account AWS operations.

## Tech Stack Deep Dive
### Go
Automated review identified **Go** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SigV4
Automated review identified **SigV4** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### AWS MCP Server
Automated review identified **AWS MCP Server** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### AWS SDK
Automated review identified **AWS SDK** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HTTP Transport
Automated review identified **HTTP Transport** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
