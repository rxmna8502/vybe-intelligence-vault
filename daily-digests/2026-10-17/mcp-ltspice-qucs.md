---
title: "RFingAdam/mcp-ltspice-qucs"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Python", "Model Context Protocol (MCP)", "LTspice", "ngspice", "Qucs-S", "Xyce", "scikit-rf", "Touchstone", "Ruff", "AGPL-3.0"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "High"
tags: ["RF design", "EMC compliance", "AI agent integration", "circuit synthesis", "MCP server"]
source: "https://github.com/RFingAdam/mcp-ltspice-qucs"
stars: 4
language: "Python"
last_updated: "2026-08-10T14:57:42Z"
discovered_at: "2026-08-10T15:04:44Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A three-server Model Context Protocol (MCP) suite enabling AI-driven RF filter and SMPS-EMC design by integrating LTspice, Qucs-S, and scikit-rf. It allows agents to iterate at the design-intent layer, automating synthesis, optimization, and compliance checks for RF circuits and electromagnetic compatibility.

## Key Features
- Three MCP servers (mcp-ltspice, mcp-qucs-s, mcp-rf-analysis) driving real simulators and analytical models for RF filter and SMPS-EMC design.
- Closed-form synthesis and optimization for LC ladders, active filters, distributed microstrip filters, and couplers with 16 substrate presets.
- AI-native workflows enabling agents to iterate at the design-intent layer (e.g., 'place a zero at 1.85 GHz') via MCP clients.
- Coexistence-driven design with victim-weighted transmission-zero placement and multi-radio band analysis against FCC/ETSI/3GPP standards.
- CISPR-aware conducted and radiated emission prediction, Monte Carlo yield analysis, and real-simulator integration tests for validation.

## Why It Matters for RAG Builders
It enables AI agents to automate and optimize RF circuit design and EMC compliance, reducing manual iteration time from hours to minutes for RAG/AI stack builders.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### LTspice
Automated review identified **LTspice** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### ngspice
Automated review identified **ngspice** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Qucs-S
Automated review identified **Qucs-S** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Xyce
Automated review identified **Xyce** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### scikit-rf
Automated review identified **scikit-rf** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Touchstone
Automated review identified **Touchstone** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Ruff
Automated review identified **Ruff** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### AGPL-3.0
Automated review identified **AGPL-3.0** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
