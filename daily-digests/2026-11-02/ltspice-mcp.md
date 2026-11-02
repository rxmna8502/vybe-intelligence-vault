---
title: "Cognitohazard/ltspice-mcp"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Python", "LTspice", "ngspice", "spicelib", "MCP (Model Context Protocol)", "TOML", "SQLite"]
quality_score: 8
rag_relevance: 7
deployment_complexity: "Medium"
tags: ["circuit simulation", "MCP server", "SPICE", "LLM integration", "schematic editing"]
source: "https://github.com/Cognitohazard/ltspice-mcp"
stars: 17
language: "Python"
last_updated: "2026-07-10T23:01:47Z"
discovered_at: "2026-07-10T23:08:32Z"
evaluated_by: "mistral-small-latest"
---

## Summary
An MCP server that enables LLMs to interact with LTspice and ngspice for circuit simulation, schematic editing, and structured data extraction. It bridges LLMs with real-world circuit design tools, allowing assistants to design, simulate, and iterate on circuits while returning measurable metrics like gain, phase margin, and operating-point parameters.

## Key Features
- Direct integration with LTspice and ngspice for simulation and analysis
- Structured extraction of circuit metrics (e.g., gain, phase margin, gm/ID) without rawfile parsing
- Real-time schematic editing (.asc) and netlist manipulation (.cir/.net)
- Support for Monte Carlo sweeps, parameter sweeps, and stability analysis
- Configurable tool profiles for different use cases (e.g., agentic vs. full automation)

## Why It Matters for RAG Builders
It enables LLMs to autonomously design, simulate, and verify electronic circuits using industry-standard tools, bridging the gap between AI-driven design and real-world engineering workflows.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### LTspice
Automated review identified **LTspice** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### ngspice
Automated review identified **ngspice** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### spicelib
Automated review identified **spicelib** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### TOML
Automated review identified **TOML** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
