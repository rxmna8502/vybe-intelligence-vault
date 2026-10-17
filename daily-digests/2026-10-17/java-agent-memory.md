---
title: "Jiangxianze/java-agent-memory"
content_type: "repo"
engine: "v2"
category: "Agent Framework"
tech_stack: ["Java 21", "Spring Boot 4", "Spring AI 2", "Redis", "Milvus", "Maven", "Docker", "Swagger UI", "Spring Actuator"]
quality_score: 8
rag_relevance: 9
deployment_complexity: "Medium"
tags: ["memory engine", "Java AI agents", "Spring Boot", "explainable recall", "multi-tier memory"]
source: "https://github.com/Jiangxianze/java-agent-memory"
stars: 0
language: "Java"
last_updated: "2026-08-07T15:29:01Z"
discovered_at: "2026-08-07T16:03:36Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Java Agent Memory is an explainable, multi-level memory engine designed for Java AI agents, particularly within Spring applications. It provides a domain API for managing working, semantic, episodic, and procedural memories with support for both local and distributed storage backends like Redis and Milvus.

## Key Features
- Supports four memory types: working, semantic, episodic, and procedural with TTL semantics for working memory
- Explainable hybrid ranking with detailed score breakdowns (semantic, keyword, entity, recency, working memory boost)
- Zero-infrastructure local mode with seamless transition to Redis + Milvus for production
- Write strategies: APPEND_ONLY, RECONCILE, and DIRECT with auditable change events
- Scoped memory isolation by tenant, user, agent, and session

## Why It Matters for RAG Builders
It provides a native Java/Spring solution for managing AI agent memory with transparent recall and lifecycle control, critical for building explainable and auditable RAG systems.

## Tech Stack Deep Dive
### Java 21
Automated review identified **Java 21** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Spring Boot 4
Automated review identified **Spring Boot 4** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Spring AI 2
Automated review identified **Spring AI 2** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Redis
Automated review identified **Redis** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Milvus
Automated review identified **Milvus** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Maven
Automated review identified **Maven** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Swagger UI
Automated review identified **Swagger UI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Spring Actuator
Automated review identified **Spring Actuator** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
