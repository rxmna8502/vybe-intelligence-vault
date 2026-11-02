---
title: "A1-x-Tech/mcp-yandex-merchants"
content_type: "repo"
engine: "v2"
category: "Tooling"
tech_stack: ["TypeScript", "Node.js", "MCP (Model Context Protocol)", "OAuth 2.0", "REST API", "npm"]
quality_score: 9
rag_relevance: 8
deployment_complexity: "Low"
tags: ["MCP-\u0441\u0435\u0440\u0432\u0435\u0440", "\u042f\u043d\u0434\u0435\u043a\u0441 \u0422\u043e\u0432\u0430\u0440\u044b", "\u0446\u0435\u043d\u043e\u043e\u0431\u0440\u0430\u0437\u043e\u0432\u0430\u043d\u0438\u0435", "\u0442\u043e\u0432\u0430\u0440\u043d\u044b\u0435 \u0444\u0438\u0434\u044b", "AI-\u0438\u043d\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u044f"]
source: "https://github.com/A1-x-Tech/mcp-yandex-merchants"
stars: 0
language: "TypeScript"
last_updated: "2026-08-09T09:42:33Z"
discovered_at: "2026-08-09T09:43:13Z"
evaluated_by: "mistral-small-latest"
---

## Summary
MCP-сервер для интеграции с API Яндекс Товаров, позволяющий точечно обновлять цены, скидки и видимость товарных предложений без пересборки YML-фида. Предназначен для AI-клиентов (Claude, Cursor, Codex) и e-commerce команд.

## Key Features
- 9 специализированных инструментов для работы с API Яндекс Товаров (проверка доступа, управление ценами, скрытие/возврат товаров, raw-запросы)
- Поддержка точечных изменений без пересборки YML-фида (до 2000 изменений цен и 500 скрытий в одном запросе)
- Валидация входных данных (диапазон скидок, положительные цены, ограничения на ID) перед отправкой запросов
- Поддержка OAuth-токенов и интеграция с AI-клиентами (Claude, Cursor, Codex, VS Code) через MCP
- Обработка ошибок и идемпотентность: повторные запросы только для безопасных операций (GET), проверка статуса ответа API

## Why It Matters for RAG Builders
Позволяет e-commerce командам оперативно корректировать цены и видимость товаров в Яндекс Товарах напрямую из AI-клиентов, устраняя необходимость пересборки фидов и ускоряя реакцию на изменения.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OAuth 2.0
Automated review identified **OAuth 2.0** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### REST API
Automated review identified **REST API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### npm
Automated review identified **npm** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Please check the repository README for specific installation instructions.
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
