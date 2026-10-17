---
title: "RudrenduPaul/TruthRoute"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["TypeScript", "Node.js", "FastEmbed", "OpenAI API", "Anthropic API", "Gemini API", "MCP (Model Context Protocol)", "CLI"]
quality_score: 9
rag_relevance: 9
deployment_complexity: "Low"
tags: ["LLM comparison", "divergence scoring", "model evaluation", "MCP server", "CLI tool"]
source: "https://github.com/RudrenduPaul/TruthRoute"
stars: 0
language: "TypeScript"
last_updated: "2026-07-20T03:35:32Z"
discovered_at: "2026-07-20T03:37:44Z"
evaluated_by: "mistral-small-latest"
---

## Summary
TruthRoute is a CLI and MCP server tool that compares responses from multiple LLMs (OpenAI, Anthropic, Gemini) to the same prompt and computes a validated divergence score using local sentence embeddings. It provides a stateless, scriptable primitive for evaluating model disagreement without hosted infrastructure.

## Key Features
- Computes validated divergence scores (0.0-1.0) using local sentence embeddings (BGESmallENV15) with a hand-labeled test set for accuracy.
- Supports OpenAI, Anthropic, and Gemini models via CLI or MCP server for agent integration.
- Provides `--dry-run` for cost estimation and `--repeats` for confidence bands to account for run-to-run variance.
- Excludes refusals and normalizes responses (markdown/formatting stripped) to focus on substantive disagreement.
- Stateless design with no hosted infrastructure, deployable via `npm install -g` or `npx`.

## Why It Matters for RAG Builders
TruthRoute provides a lightweight, validated way to quantify LLM disagreement for RAG pipelines, enabling automated evaluation of model consistency without relying on proprietary or hosted solutions.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastEmbed
Automated review identified **FastEmbed** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenAI API
Automated review identified **OpenAI API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Anthropic API
Automated review identified **Anthropic API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Gemini API
Automated review identified **Gemini API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CLI
Automated review identified **CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
