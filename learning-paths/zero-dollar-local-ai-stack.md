# The Zero-Dollar ($0) Local AI Engineering Stack

> How to build a frontier AI engineering rig with zero paid subscriptions, zero API credits, and 100% local privacy.

If you don't have Claude Pro, OpenAI ChatGPT Plus, or Cursor subscriptions, you do not need them. With modern open-weight models and the Model Context Protocol (MCP), you can run a state-of-the-art agentic development environment entirely offline on consumer hardware for $0/month.

---

## Architecture Overview

```
                      +------------------------------------------+
                      |         VS CODE (FREE / MIT)            |
                      |   + Continue.dev or Cline / Roo-Code     |
                      +--------------------+---------------------+
                                           |
                    +----------------------+----------------------+
                    |                                             |
                    v                                             v
     +------------------------------+             +------------------------------+
     |   LOCAL INFERENCE (OLLAMA)   |             |   VYBE INTELLIGENCE VAULT    |
     | DeepSeek-R1 • Qwen 2.5 Coder |             |   npx vybe-vault mcp (Stdio) |
     | Zero Cloud Cost • Private    |             |   Verified Architecture Nodes|
     +------------------------------+             +------------------------------+
```

---

## 1. The Inference Engine: Ollama (100% Free)

Install Ollama from [ollama.com](https://ollama.com):

```bash
# On macOS / Linux:
curl -fsSL https://ollama.ai/install.sh | sh

# On Windows:
# Download and install the Ollama Windows installer from ollama.com
```

### Recommended Free Models:

| Hardware Spec | Coding Model | Reasoning Model |
|---|---|---|
| **8 GB RAM (Entry)** | `ollama run qwen2.5-coder:1.5b` | `ollama run deepseek-r1:1.5b` |
| **16 GB RAM (Standard)** | `ollama run qwen2.5-coder:7b` | `ollama run deepseek-r1:7b` or `deepseek-r1:8b` |
| **32 GB+ RAM / GPU** | `ollama run qwen2.5-coder:14b` | `ollama run deepseek-r1:14b` |

---

## 2. The Free Agent IDE: VS Code + Continue.dev

Instead of paying $20/month for Cursor:
1. Open standard VS Code (Free).
2. Install the **Continue** extension (`Continue.continue`) or **Roo-Code** / **Cline**.
3. Configure `~/.continue/config.json` to point to your local Ollama instance:

```json
{
  "models": [
    {
      "title": "DeepSeek-R1 (Local)",
      "provider": "ollama",
      "model": "deepseek-r1:7b"
    },
    {
      "title": "Qwen 2.5 Coder (Local)",
      "provider": "ollama",
      "model": "qwen2.5-coder:7b"
    }
  ],
  "tabAutocompleteModel": {
    "title": "Qwen Coder 1.5B (Fast)",
    "provider": "ollama",
    "model": "qwen2.5-coder:1.5b"
  }
}
```

---

## 3. Connect Vybe Vault MCP Memory to Continue / Cline

Give your free local agent access to the entire 160,000+ node Vybe Vault:

Add the Vybe MCP server to your MCP configuration:

```json
{
  "mcpServers": {
    "vybe-vault": {
      "command": "npx",
      "args": ["-y", "vybe-vault", "mcp"]
    }
  }
}
```

Now, your local agent running DeepSeek-R1 can search cutting-edge papers, verified architecture patterns, and benchmarks without spending a single cent.

---

## 4. One-Line Project Optimization: `npx vybe-vault sync`

Before you write code in any new project, run:

```bash
npx vybe-vault sync
```

It scans your local dependencies and auto-generates `.cursorrules` and `AGENT.md` customized for your stack. Continue.dev and Cline automatically read these files as system instructions.

---

## 5. Cost Comparison

| Component | Paid Proprietary Stack | Vybe $0 Open Stack |
|---|---|---|
| **IDE / Editor** | Cursor ($20/mo) | VS Code + Continue ($0) |
| **LLM Inference** | Claude 3.5 Sonnet ($20/mo) | DeepSeek-R1 + Qwen 2.5 Coder ($0) |
| **Architecture Index** | Manual browsing / Google | Vybe Vault MCP ($0) |
| **Total Monthly Cost** | **$480 / year** | **$0 / year** |
