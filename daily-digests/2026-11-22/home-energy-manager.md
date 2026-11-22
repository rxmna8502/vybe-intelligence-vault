---
title: "albinati/home-energy-manager"
content_type: "repo"
engine: "v2"
category: "Orchestrator"
tech_stack: ["Python", "PuLP (MILP solver)", "CBC (LP solver)", "Preact (UI)", "Docker", "SQLite", "Octopus Agile API", "Fox ESS Scheduler V3", "Daikin Altherma (Onecta)", "SmartThings", "Open Climate Fix Quartz (PV forecast)", "Model Context Protocol (MCP)", "ESPHome (for sensor integration)", "Nginx"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Medium"
tags: ["home energy management", "MILP optimization", "heat pump control", "LLM explainability", "self-hosted"]
source: "https://github.com/albinati/home-energy-manager"
stars: 0
language: "Python"
last_updated: "2026-07-11T09:27:07Z"
discovered_at: "2026-07-11T09:27:26Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A self-hosted home energy optimization system that uses a MILP solver to autonomously manage a Fox ESS battery, Daikin Altherma heat pump, hot-water tank, and appliances against real-time UK electricity tariffs. It integrates an LLM interface for decision explainability and runs as a standalone Docker container without requiring Home Assistant.

## Key Features
- Autonomous MILP-based energy optimization for battery, heat pump, and appliances over a 24-48 hour horizon
- Closed-loop replay and regression testing for decision accuracy and robustness
- 80-tool MCP interface enabling LLMs (e.g., Claude) to inspect, explain, and optionally approve dispatch decisions
- Self-hosted PV forecasting via Open Climate Fix Quartz with no API keys required
- Real-time hardware control with soft constraints for comfort, cycling, and inverter stress

## Why It Matters for RAG Builders
It provides a transparent, solver-driven approach to home energy optimization with LLM explainability, making it valuable for AI engineers building RAG systems that require interpretable decision-making in complex, real-world environments.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PuLP (MILP solver)
Automated review identified **PuLP (MILP solver)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CBC (LP solver)
Automated review identified **CBC (LP solver)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Preact (UI)
Automated review identified **Preact (UI)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Octopus Agile API
Automated review identified **Octopus Agile API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Fox ESS Scheduler V3
Automated review identified **Fox ESS Scheduler V3** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Daikin Altherma (Onecta)
Automated review identified **Daikin Altherma (Onecta)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SmartThings
Automated review identified **SmartThings** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Open Climate Fix Quartz (PV forecast)
Automated review identified **Open Climate Fix Quartz (PV forecast)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### ESPHome (for sensor integration)
Automated review identified **ESPHome (for sensor integration)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Nginx
Automated review identified **Nginx** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
