---
title: "RolfMasfelder/raspi-mcp"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Python", "Raspberry Pi GPIO", "DS18B20 1-Wire Sensors", "Model Context Protocol (MCP)", "FastAPI", "gpiozero", "systemd"]
quality_score: 9
rag_relevance: 7
deployment_complexity: "Medium"
tags: ["MCP server", "Raspberry Pi", "GPIO control", "temperature sensors", "hardware integration"]
source: "https://github.com/RolfMasfelder/raspi-mcp"
stars: 0
language: "Python"
last_updated: "2026-07-10T18:18:53Z"
discovered_at: "2026-07-10T18:22:48Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A Model Context Protocol (MCP) server for Raspberry Pi that exposes GPIO-controlled LEDs and DS18B20 temperature sensors as MCP tools over HTTP or stdio transport. It enables remote hardware interaction with authentication support for production deployments.

## Key Features
- Exposes GPIO LEDs and DS18B20 temperature sensors as MCP tools over HTTP/stdio transport
- Supports Bearer token authentication for secure HTTP deployments
- Provides systemd service configuration for production-ready deployment on Raspberry Pi
- Includes mock hardware support for local development and testing without physical hardware
- Offers comprehensive deployment scenarios (production, development, no hardware)

## Why It Matters for RAG Builders
It enables AI systems to interact with physical hardware like LEDs and temperature sensors via a standardized MCP interface, bridging the gap between software and real-world devices for RAG and agentic workflows.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Raspberry Pi GPIO
Automated review identified **Raspberry Pi GPIO** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### DS18B20 1-Wire Sensors
Automated review identified **DS18B20 1-Wire Sensors** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastAPI
Automated review identified **FastAPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### gpiozero
Automated review identified **gpiozero** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### systemd
Automated review identified **systemd** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
