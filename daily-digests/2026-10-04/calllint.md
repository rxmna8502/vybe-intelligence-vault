---
title: "calllint/calllint"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["TypeScript", "Node.js", "MCP (Model Context Protocol)", "Static Analysis", "CLI", "JSON Schema"]
quality_score: 9
rag_relevance: 9
deployment_complexity: "Low"
tags: ["security", "linting", "agent-tools", "pre-flight-checks", "risk-assessment"]
source: "https://github.com/calllint/calllint"
stars: 0
language: "TypeScript"
last_updated: "2026-07-15T10:46:25Z"
discovered_at: "2026-07-15T10:48:39Z"
evaluated_by: "mistral-small-latest"
---

## Summary
CallLint is a pre-flight risk linter for MCP and agent-tool configurations that statically analyzes tool permissions and metadata to assess blast radius before execution. It provides evidence-backed verdicts (SAFE/REVIEW/BLOCK/UNKNOWN) to help AI engineers evaluate risks like filesystem access, network connections, or prompt poisoning without executing the tools.

## Key Features
- Static analysis of MCP and agent-tool configurations without execution
- Thirteen detectors for risks like filesystem access, network connections, prompt poisoning, and financial actions
- Evidence-backed verdicts (SAFE/REVIEW/BLOCK/UNKNOWN) with detailed explanations
- Baseline drift detection to flag rug-pulls in previously approved tools
- Supports multiple output formats (JSON, SARIF, Markdown, HTML) for CI/CD integration

## Why It Matters for RAG Builders
CallLint ensures AI engineers can proactively identify and mitigate risks in agent tool configurations before deployment, reducing the blast radius of potential security or operational failures.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Static Analysis
Automated review identified **Static Analysis** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CLI
Automated review identified **CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSON Schema
Automated review identified **JSON Schema** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
