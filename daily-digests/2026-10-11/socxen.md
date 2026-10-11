---
title: "open-agent-ai-security/socxen"
content_type: "repo"
engine: "v2"
category: "Agent Framework"
tech_stack: ["Python", "Claude Code", "Exabeam MCP", "Claude Code Plugin System", "Bash"]
quality_score: 8
rag_relevance: 7
deployment_complexity: "Medium"
tags: ["SOC automation", "Exabeam integration", "AI agent", "Security operations", "Governance guardrails"]
source: "https://github.com/open-agent-ai-security/socxen"
stars: 0
language: "Python"
last_updated: "2026-08-04T19:17:55Z"
discovered_at: "2026-08-04T19:32:27Z"
evaluated_by: "mistral-small-latest"
---

## Summary
socxen is an agentic SOC analyst skill for Claude Code that automates the investigation and triage of Exabeam New-Scale alerts and cases. It integrates with Exabeam's MCP, applies safety guardrails, and provides end-to-end evidence gathering and decision-making while enforcing human-in-the-loop controls.

## Key Features
- End-to-end investigation of Exabeam alerts/cases with real-time data access
- Safety-first design with dual governance gates (Claude Code permissions + skill confirmation)
- Built-in untrusted-telemetry guardrails to prevent malicious content execution
- High-performance audit logging (~16 µs/event) for compliance and debugging
- One-command install with bundled Exabeam MCP and auto-registration

## Why It Matters for RAG Builders
It provides a critical safety-first agentic framework for automating SOC operations while ensuring human oversight and compliance, making it essential for AI-driven security workflows.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Claude Code
Automated review identified **Claude Code** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Exabeam MCP
Automated review identified **Exabeam MCP** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Claude Code Plugin System
Automated review identified **Claude Code Plugin System** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Bash
Automated review identified **Bash** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
