---
title: "srichsun/performance-coach"
content_type: "repo"
engine: "v2"
category: "Agent Framework"
tech_stack: ["FastAPI", "LangChain", "Claude (ChatAnthropic)", "OpenAI Whisper", "ElevenLabs TTS", "Postgres + pgvector", "OpenAI embeddings", "Firebase Auth", "LangSmith", "React (Vite)", "Google Cloud (Cloud Run, Cloud SQL, Secret Manager)", "uv (packaging)", "Docker"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "High"
tags: ["AI life coach", "RAG", "voice AI", "memory system", "personalization"]
source: "https://github.com/srichsun/performance-coach"
stars: 0
language: "Python"
last_updated: "2026-07-19T11:54:41Z"
discovered_at: "2026-07-19T11:56:56Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Minerva is a voice-based AI life coach that engages users daily, remembers their history, and provides personalized reflections using a three-layer memory system. It combines speech-to-text, RAG with pgvector, and LLM-driven profile condensation to deliver context-aware coaching while maintaining bounded prompt sizes.

## Key Features
- Three-layer memory system (structured log, semantic recall, rolling profile) for scalable context retention
- Real-time voice interaction with Whisper (STT) and ElevenLabs (TTS)
- LangChain agent with dynamic tool integration (e.g., `search_past_entries`)
- Firebase Auth for secure user scoping and per-user data isolation
- LangSmith tracing for observability and debugging

## Why It Matters for RAG Builders
It demonstrates a practical implementation of long-term memory in AI agents using a scalable three-layer architecture, essential for building context-aware applications beyond stateless chatbots.

## Tech Stack Deep Dive
### FastAPI
Automated review identified **FastAPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### LangChain
Automated review identified **LangChain** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Claude (ChatAnthropic)
Automated review identified **Claude (ChatAnthropic)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenAI Whisper
Automated review identified **OpenAI Whisper** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### ElevenLabs TTS
Automated review identified **ElevenLabs TTS** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Postgres + pgvector
Automated review identified **Postgres + pgvector** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenAI embeddings
Automated review identified **OpenAI embeddings** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Firebase Auth
Automated review identified **Firebase Auth** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### LangSmith
Automated review identified **LangSmith** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### React (Vite)
Automated review identified **React (Vite)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Google Cloud (Cloud Run, Cloud SQL, Secret Manager)
Automated review identified **Google Cloud (Cloud Run, Cloud SQL, Secret Manager)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### uv (packaging)
Automated review identified **uv (packaging)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
