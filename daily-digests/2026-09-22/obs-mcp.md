---
title: "rhobs/obs-mcp"
content_type: "repo"
engine: "v2"
category: "Agent Framework"
tech_stack: ["Go", "Model Context Protocol (MCP)", "Prometheus", "Thanos", "Alertmanager", "Loki", "Grafana Tempo", "OpenTelemetry Collector", "Kubernetes", "Docker"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Medium"
tags: ["MCP server", "observability", "LLM integration", "Kubernetes", "metrics"]
source: "https://github.com/rhobs/obs-mcp"
stars: 9
language: "Go"
last_updated: "2026-07-15T10:36:30Z"
discovered_at: "2026-07-15T10:48:54Z"
evaluated_by: "mistral-small-latest"
---

## Summary
obs-mcp is an MCP server that enables LLMs to query Prometheus, Thanos, Alertmanager, and optionally Loki, Grafana Tempo, and OpenTelemetry Collector in Kubernetes environments. It bridges observability tools with AI agents via the Model Context Protocol (MCP).

## Key Features
- Enables LLMs to query Prometheus/Thanos metrics and Alertmanager via MCP
- Supports optional integration with Loki (logs), Tempo (traces), and OpenTelemetry Collector
- Multiple authentication modes (kubeconfig, header, serviceaccount) for Kubernetes clusters
- Toolset-based configuration for granular control over available observability tools
- Comprehensive testing infrastructure with Kind cluster setup and E2E validation

## Why It Matters for RAG Builders
It provides a standardized way for AI agents to interact with critical observability data in Kubernetes, enabling real-time insights and automated decision-making.

## Tech Stack Deep Dive
### Go
Automated review identified **Go** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Prometheus
Automated review identified **Prometheus** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Thanos
Automated review identified **Thanos** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Alertmanager
Automated review identified **Alertmanager** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Loki
Automated review identified **Loki** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Grafana Tempo
Automated review identified **Grafana Tempo** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenTelemetry Collector
Automated review identified **OpenTelemetry Collector** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Kubernetes
Automated review identified **Kubernetes** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
