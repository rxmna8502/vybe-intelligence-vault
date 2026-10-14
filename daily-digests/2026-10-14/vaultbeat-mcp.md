---
title: "Fino-wind/vaultbeat-mcp"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Python", "Model Context Protocol (MCP)", "Curve25519 ECDH", "HKDF-SHA256", "AES-GCM", "Apple HealthKit", "QR code authentication"]
quality_score: 9
rag_relevance: 7
deployment_complexity: "Medium"
tags: ["MCP server", "end-to-end encryption", "Apple Health", "AI agent integration", "health data"]
source: "https://github.com/Fino-wind/vaultbeat-mcp"
stars: 1
language: "Python"
last_updated: "2026-08-07T11:03:59Z"
discovered_at: "2026-08-07T11:04:23Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A local MCP server that bridges end-to-end encrypted Apple Health data to AI agents, enabling privacy-preserving access to health metrics like sleep, heart rate, and menstrual cycles without exposing raw data to the cloud.

## Key Features
- Local decryption of health data using E2EE keys stored on your machine
- 26 MCP tools for accessing and writing health metrics (sleep, weight, workouts, etc.)
- QR-based binding for secure pairing with the Vaultbeat iOS app
- Cache-first reads for low-latency responses with optional fresh data fetch
- Supports both stdio and HTTP transport with bearer-token authentication

## Why It Matters for RAG Builders
It enables AI agents to securely and privately access sensitive health data from Apple Health without exposing raw data to the cloud, ensuring end-to-end encryption and user control.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Curve25519 ECDH
Automated review identified **Curve25519 ECDH** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HKDF-SHA256
Automated review identified **HKDF-SHA256** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### AES-GCM
Automated review identified **AES-GCM** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Apple HealthKit
Automated review identified **Apple HealthKit** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### QR code authentication
Automated review identified **QR code authentication** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
