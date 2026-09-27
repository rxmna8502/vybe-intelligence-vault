---
title: "Fino-wind/tether-mcp"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["Python", "Model Context Protocol (MCP)", "Curve25519 ECDH", "HKDF-SHA256", "AES-GCM", "Apple HealthKit", "QR Code Authentication", "HTTP/STDIO Transport"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Medium"
tags: ["end-to-end encryption", "Apple Health integration", "MCP server", "AI agent interface", "health data privacy"]
source: "https://github.com/Fino-wind/tether-mcp"
stars: 0
language: "Python"
last_updated: "2026-07-16T10:56:58Z"
discovered_at: "2026-07-16T10:58:00Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Tether MCP Server is a local Model Context Protocol (MCP) server that enables AI agents to securely access end-to-end encrypted Apple Health data (sleep, heart rate, menstrual cycle, weight, water, symptoms) without exposing raw data to the cloud. It acts as a bridge between the Tether iOS app and user-controlled AI agents like Claude Code or Desktop.

## Key Features
- Secure local decryption of Apple Health data using end-to-end encryption (Curve25519 ECDH + AES-GCM)
- MCP-compliant interface for seamless integration with AI agents like Claude Code/Desktop
- QR code-based pairing for secure device authorization and key exchange
- Cache-first data access with configurable TTL for low-latency queries
- Strict privacy controls with opt-in for sensitive data (menstrual cycle, symptoms, notes)

## Why It Matters for RAG Builders
It enables AI agents to securely and privately access sensitive health data from Apple Health without compromising user privacy or relying on cloud-based AI services.

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

### QR Code Authentication
Automated review identified **QR Code Authentication** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HTTP/STDIO Transport
Automated review identified **HTTP/STDIO Transport** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
