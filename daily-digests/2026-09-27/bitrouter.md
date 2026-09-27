---
title: "bitrouter/bitrouter"
content_type: "repo"
engine: "v2"
category: "Orchestrator"
tech_stack: ["Rust", "YAML", "MCP (Model Context Protocol)", "ACP (Agent Client Protocol)", "Prometheus", "OTLP (OpenTelemetry Protocol)", "OpenTelemetry", "HTTP/REST", "CLI", "Git"]
quality_score: 9
rag_relevance: 10
deployment_complexity: "Medium"
tags: ["model routing", "cost optimization", "agent orchestration", "context-aware", "self-improving"]
source: "https://github.com/bitrouter/bitrouter"
stars: 222
language: "Rust"
last_updated: "2026-09-01T09:00:43Z"
discovered_at: "2026-09-01T09:10:04Z"
evaluated_by: "mistral-small-latest"
---

## Summary
BitRouter is an open-source, context-aware model router designed to optimize AI agent workflows by dynamically selecting the most cost-effective models, tools, and sub-agents based on the agent's current step in the loop. It reduces production costs by routing calls to cheaper alternatives without sacrificing accuracy.

## Key Features
- Context-aware routing based on the agent's current step in the workflow, not just the prompt
- Dynamic model, tool, and sub-agent selection to minimize costs while maintaining accuracy
- Self-improving loop with evaluation, observation, and policy adaptation via `policy-lock.yaml`
- Supports multiple providers (OpenAI, Anthropic, Google) and protocols (Chat Completions, Responses, Messages)
- Integrates with MCP and ACP gateways for unified tool and sub-agent routing

## Why It Matters for RAG Builders
BitRouter directly addresses the critical challenge of token-inefficient routing in production AI systems, enabling significant cost reductions while maintaining performance through adaptive, context-aware decision-making.

## Tech Stack Deep Dive
### Rust
Automated review identified **Rust** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### YAML
Automated review identified **YAML** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### ACP (Agent Client Protocol)
Automated review identified **ACP (Agent Client Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Prometheus
Automated review identified **Prometheus** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OTLP (OpenTelemetry Protocol)
Automated review identified **OTLP (OpenTelemetry Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenTelemetry
Automated review identified **OpenTelemetry** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HTTP/REST
Automated review identified **HTTP/REST** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CLI
Automated review identified **CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Git
Automated review identified **Git** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
