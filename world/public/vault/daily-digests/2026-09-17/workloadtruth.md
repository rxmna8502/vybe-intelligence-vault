---
title: "RudrenduPaul/WorkloadTruth"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Python", "PyPI", "NVML (NVIDIA Management Library)", "Click (CLI framework)", "MCP (Model Context Protocol)", "JSON", "GitHub Actions (CI/CD)"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Medium"
tags: ["GPU workload classification", "telemetry-based monitoring", "AI workload governance", "MCP server", "audit logging"]
source: "https://github.com/RudrenduPaul/WorkloadTruth"
stars: 0
language: "Python"
last_updated: "2026-07-20T02:42:52Z"
discovered_at: "2026-07-20T02:44:57Z"
evaluated_by: "mistral-small-latest"
---

## Summary
WorkloadTruth is a command-line tool and MCP server that classifies GPU workloads (TRAINING, INFERENCE, or IDLE) using only hardware telemetry like utilization, memory patterns, and power draw, without requiring code changes or self-reported job labels. It provides an audit trail and evasion-robustness benchmarking for AI workload governance.

## Key Features
- Classifies GPU workloads (TRAINING/INFERENCE/IDLE) from telemetry alone without code changes or self-reported labels
- Provides a hash-chained audit log for tamper-proof workload tracking
- Includes an evasion-robustness benchmark to test classifier resilience against adversarial workloads
- Offers both synthetic and real NVIDIA GPU backends for testing and production use
- Exposes an MCP server for agent-native integration and automation

## Why It Matters for RAG Builders
It enables AI infrastructure teams to automatically verify GPU workload types, preventing cost misallocation and unauthorized workload changes without requiring code modifications or manual declarations.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PyPI
Automated review identified **PyPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### NVML (NVIDIA Management Library)
Automated review identified **NVML (NVIDIA Management Library)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Click (CLI framework)
Automated review identified **Click (CLI framework)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSON
Automated review identified **JSON** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### GitHub Actions (CI/CD)
Automated review identified **GitHub Actions (CI/CD)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
