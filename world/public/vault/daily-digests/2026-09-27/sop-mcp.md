---
title: "ValueArchitectsAI/sop-mcp"
content_type: "repo"
engine: "v2"
category: "Orchestrator"
tech_stack: ["Python", "MCP (Model Context Protocol)", "RFC 2119", "Markdown"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Low"
tags: ["MCP server", "Standard Operating Procedures", "AI agent control", "process automation", "auditability"]
source: "https://github.com/ValueArchitectsAI/sop-mcp"
stars: 3
language: "Python"
last_updated: "2026-07-11T15:51:38Z"
discovered_at: "2026-07-11T15:54:11Z"
evaluated_by: "mistral-small-latest"
---

## Summary
sop-mcp is an MCP server that enforces step-by-step execution of Standard Operating Procedures (SOPs) for AI agents, ensuring predictable and auditable behavior by forcing agents to complete each step before advancing. It aligns with the Agent SOPs standard for defining workflows using RFC 2119 requirements.

## Key Features
- Enforces step-by-step execution of SOPs to prevent LLM skipping or summarizing steps
- Integrates with Agent SOPs standard for defining workflows with RFC 2119 requirements
- Provides bundled SOPs for immediate testing (e.g., code review, employee onboarding)
- Supports dynamic discovery and execution of SOPs via MCP tools like `list_resources` and `run_sop`
- Includes tools for publishing, feedback submission, and resource management

## Why It Matters for RAG Builders
It ensures AI agents follow structured, auditable processes by enforcing step-by-step execution, reducing unpredictability in multi-step workflows.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### RFC 2119
Automated review identified **RFC 2119** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Markdown
Automated review identified **Markdown** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
