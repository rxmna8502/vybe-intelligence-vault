---
title: "amscotti/hermes-meshtastic-adapter"
content_type: "repo"
engine: "v2"
category: "Agent Framework"
tech_stack: ["Python", "Meshtastic", "Hermes Agent", "LoRa", "SQLite", "Serial Communication", "TCP/IP"]
quality_score: 8
rag_relevance: 7
deployment_complexity: "Medium"
tags: ["LoRa mesh", "Hermes Agent", "bidirectional communication", "chunked messaging", "telemetry storage"]
source: "https://github.com/amscotti/hermes-meshtastic-adapter"
stars: 5
language: "Python"
last_updated: "2026-08-01T03:42:39Z"
discovered_at: "2026-08-01T03:43:36Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A Hermes Agent platform plugin that bridges Meshtastic LoRa mesh networks with the Hermes AI agent framework. It enables bidirectional text communication between mesh nodes and Hermes sessions, handling direct messages, channel broadcasts, and long-reply chunking for LoRa-safe delivery.

## Key Features
- Bridges Meshtastic text messages into Hermes Agent sessions for direct messages and channel broadcasts
- Splits long replies into numbered LoRa-safe chunks with configurable byte limits and delays
- Exposes mesh tools for node management, signal quality checks, and telemetry queries
- Stores telemetry, position, and signal history in SQLite for analysis and retention
- Supports both USB serial and TCP/IP connections to gateway nodes

## Why It Matters for RAG Builders
It enables AI agents to interact with LoRa mesh networks, expanding AI applications to offline or low-bandwidth environments where traditional internet connectivity is unreliable or unavailable.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Meshtastic
Automated review identified **Meshtastic** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Hermes Agent
Automated review identified **Hermes Agent** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### LoRa
Automated review identified **LoRa** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Serial Communication
Automated review identified **Serial Communication** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### TCP/IP
Automated review identified **TCP/IP** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
