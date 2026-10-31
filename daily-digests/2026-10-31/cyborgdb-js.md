---
title: "cyborginc/cyborgdb-js"
content_type: "repo"
engine: "v2"
category: "Vector DB"
tech_stack: ["TypeScript", "JavaScript", "Node.js", "Docker", "AWS KMS", "Secrets Manager", "REST API"]
quality_score: 9
rag_relevance: 10
deployment_complexity: "Medium"
tags: ["encrypted vector search", "client-side encryption", "TypeScript SDK", "KMS integration", "metadata filtering"]
source: "https://github.com/cyborginc/cyborgdb-js"
stars: 7
language: "TypeScript"
last_updated: "2026-08-07T19:13:22Z"
discovered_at: "2026-08-07T19:59:16Z"
evaluated_by: "mistral-small-latest"
---

## Summary
The CyborgDB JavaScript/TypeScript SDK provides a client library for interacting with CyborgDB, an encrypted vector database that enables similarity search directly on ciphertext. The SDK supports client-side key management, metadata filtering, and integration with KMS for enhanced security.

## Key Features
- Search on encrypted data with client-side keys, ensuring only query results are decrypted
- Disk-backed encrypted DiskIVF index with near-plaintext recall performance
- Support for metadata filtering (equality and range predicates) on encrypted data
- Bring Your Own Key (BYOK) and Hold Your Own Key (HYOK) options via AWS KMS or Secrets Manager
- Per-tenant key isolation with cryptographic RBAC for secure multi-tenancy

## Why It Matters for RAG Builders
It enables secure, encrypted vector search for RAG systems, ensuring data privacy while maintaining high performance and flexibility in key management.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JavaScript
Automated review identified **JavaScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### AWS KMS
Automated review identified **AWS KMS** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Secrets Manager
Automated review identified **Secrets Manager** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### REST API
Automated review identified **REST API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
