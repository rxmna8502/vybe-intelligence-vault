---
title: "0xzr/freellmpool"
content_type: "repo"
engine: "v2"
category: "Orchestrator"
tech_stack: ["Python", "HTTPX", "OpenAI API", "Anthropic API", "CLI", "MCP (Model Context Protocol)", "Tailscale", "FastAPI (implied by proxy)", "Async/Await"]
quality_score: 9
rag_relevance: 10
deployment_complexity: "Medium"
tags: ["LLM aggregation", "free tier pooling", "failover routing", "OpenAI-compatible API", "MCP server"]
source: "https://github.com/0xzr/freellmpool"
stars: 40
language: "Python"
last_updated: "2026-07-19T22:37:49Z"
discovered_at: "2026-07-19T22:50:44Z"
evaluated_by: "mistral-small-latest"
---

## Summary
freellmpool aggregates free tiers from 22 LLM providers into a unified OpenAI-compatible endpoint, enabling keyless access, automatic failover, and cost-free LLM usage. It supports CLI, Python library, and local proxy deployment for seamless integration with existing AI tools and agents.

## Key Features
- Unified OpenAI-compatible endpoint for 22 LLM providers with 239 enabled routes and 397 models
- Automatic failover and keyless access to free tiers (e.g., Groq, Mistral, Cerebras)
- CLI, Python library, and local proxy deployment options with async support
- Built-in benchmarking, capacity monitoring, and provider health checks
- MCP server integration for agent frameworks and custom tooling

## Why It Matters for RAG Builders
It eliminates API key fragmentation and rate limits by pooling free LLM tiers into a single, failover-enabled endpoint, drastically reducing costs for RAG and AI stack builders.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HTTPX
Automated review identified **HTTPX** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenAI API
Automated review identified **OpenAI API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Anthropic API
Automated review identified **Anthropic API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CLI
Automated review identified **CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Tailscale
Automated review identified **Tailscale** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastAPI (implied by proxy)
Automated review identified **FastAPI (implied by proxy)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Async/Await
Automated review identified **Async/Await** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
