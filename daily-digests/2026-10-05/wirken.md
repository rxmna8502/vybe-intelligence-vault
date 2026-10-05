---
title: "gebruder/wirken"
content_type: "repo"
engine: "v2"
category: "Orchestrator"
tech_stack: ["Rust", "Ed25519", "Cap'n Proto", "XChaCha20-Poly1305", "Docker", "gVisor", "Wasm", "OpenTelemetry", "Datadog", "Splunk", "Microsoft Sentinel", "Mermaid (for diagrams)"]
quality_score: 9
rag_relevance: 9
deployment_complexity: "Medium"
tags: ["agent orchestration", "multi-channel messaging", "security isolation", "audit logging", "MCP integration"]
source: "https://github.com/gebruder/wirken"
stars: 158
language: "Rust"
last_updated: "2026-07-18T20:43:20Z"
discovered_at: "2026-07-18T20:43:58Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Wirken is a secure, multi-channel agent orchestration framework that routes messages from platforms like Telegram, Discord, and Slack to AI agents while enforcing strict security, audit, and isolation controls. It operates as a single static Rust binary and integrates with major LLM providers and MCP servers.

## Key Features
- Per-channel process isolation with Ed25519 authentication over Unix domain sockets
- Tamper-evident, hash-chained audit logs with Ed25519 attestation for session integrity
- XChaCha20-Poly1305 encrypted credential vault with OS keychain integration and per-credential expiry
- Out-of-process MCP proxy for credential isolation and sandboxed tool execution
- Multi-tier permission system with capability-attenuated child agents and hard runtime limits

## Why It Matters for RAG Builders
Wirken provides enterprise-grade security and auditability for AI agent deployments, ensuring safe multi-channel interactions while preventing credential leaks and lateral movement in compromised environments.

## Tech Stack Deep Dive
### Rust
Automated review identified **Rust** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Ed25519
Automated review identified **Ed25519** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Cap'n Proto
Automated review identified **Cap'n Proto** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### XChaCha20-Poly1305
Automated review identified **XChaCha20-Poly1305** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### gVisor
Automated review identified **gVisor** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Wasm
Automated review identified **Wasm** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenTelemetry
Automated review identified **OpenTelemetry** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Datadog
Automated review identified **Datadog** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Splunk
Automated review identified **Splunk** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Microsoft Sentinel
Automated review identified **Microsoft Sentinel** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Mermaid (for diagrams)
Automated review identified **Mermaid (for diagrams)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
