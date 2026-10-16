---
title: "kyu-softmatter/agentic-microscope"
content_type: "repo"
engine: "v2"
category: "Agent Framework"
tech_stack: ["Python", "LLM (Claude-specific packaging)", "Micro-Manager (pymmcore-plus)", "YAML", "CLI", "MCP (Model Context Protocol)", "Hardware drivers (piezo stage, optical tweezers, laser systems)"]
quality_score: 8
rag_relevance: 7
deployment_complexity: "High"
tags: ["scientific instrumentation", "agentic systems", "microscopy", "hardware validation", "research automation"]
source: "https://github.com/kyu-softmatter/agentic-microscope"
stars: 1
language: "Python"
last_updated: "2026-09-01T02:45:15Z"
discovered_at: "2026-09-01T02:50:47Z"
evaluated_by: "mistral-small-latest"
---

## Summary
An agentic system that translates research goals into valid microscope configurations by validating proposals against hardware limits, prior acquisitions, and scientific constraints. It enforces refusal paths when evidence for a setting is missing, ensuring measurement validity over hardware feasibility.

## Key Features
- Validates microscope configurations against hardware limits and scientific constraints using 8 review lenses and 32 deterministic gates
- Enforces refusal paths when evidence for a setting is missing, preventing invalid measurements
- Uses provenance tracking to distinguish measured vs. assumed inputs
- Integrates with real hardware (piezo stage, optical tweezers) and simulation agents
- Provides CLI and MCP surface for interaction and tool integration

## Why It Matters for RAG Builders
It ensures scientific validity in automated microscopy by rigorously validating configurations against hardware and measurement constraints, preventing biased or invalid data collection.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### LLM (Claude-specific packaging)
Automated review identified **LLM (Claude-specific packaging)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Micro-Manager (pymmcore-plus)
Automated review identified **Micro-Manager (pymmcore-plus)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### YAML
Automated review identified **YAML** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CLI
Automated review identified **CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Hardware drivers (piezo stage, optical tweezers, laser systems)
Automated review identified **Hardware drivers (piezo stage, optical tweezers, laser systems)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
