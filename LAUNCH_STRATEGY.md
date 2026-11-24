# Vybe Intelligence Vault: Community Distribution & Engagement Playbook

An honest, developer-first distribution roadmap focused on authentic utility, verified reproducibility, and direct tool adoption across technical AI communities.

---

## The Core Problem & Value Proposition

> "Developers building with coding agents in Claude Desktop, Cursor, and Continue.dev constantly suffer from context rot and API hallucination. Static awesome-lists rot within weeks. Vybe Vault provides a zero-install stdio MCP server backed by an autonomous crawler that continuously stress-tests, reproduces, and indexes verified AI architectures and blueprints."

---

## 1. Directory Registries (Where Users Search for Tools)

- **Awesome MCP Servers (`punkpeye/awesome-mcp-servers`)**:
  - Pull Request: https://github.com/punkpeye/awesome-mcp-servers/pull/20589
  - Section: `Knowledge & Memory`
  - Backlink: Glama verification badge in repository README.
- **Glama MCP Registry (`glama.ai/mcp/servers`)**:
  - Listing: https://glama.ai/mcp/servers/rxmna8502/vybe-intelligence-vault
- **PulseMCP (`pulsemcp.com`)**:
  - Submission: Curated discovery directory for Claude, Cursor, and VS Code MCP servers.
- **Official Model Context Protocol Registry**:
  - Target: https://registry.modelcontextprotocol.io/

---

## 2. Community Room 1: r/ClaudeCode & r/mcp

Your exact target audience already uses Claude Desktop and Cursor every day. They want working tools, not sales pitches.

### Post Template:
```markdown
Title: I built a zero-install MCP server that queries 5,200+ verified AI repos and blueprints (no API key needed)

Hey everyone,

When building with Claude Desktop and Cursor, one persistent issue is agent hallucination of deprecated APIs or unmaintained libraries.

To solve this, I built Vybe Vault (`vybe-vault`), an open-source stdio MCP server that connects your agent to a live knowledge graph of 5,200+ verified AI repositories and 7-day sprint blueprints.

### What it exposes:
1. `vault_search`: Queries verified AI repos scored against automated Docker reproducibility and AST checks.
2. `get_blueprint`: Returns architecture blueprints for agent builders, RAG, and fine-tuning.
3. `get_verified_patterns`: Returns architectural patterns and anti-patterns for specific stacks (LangGraph, vLLM, FastMCP, etc.).

### Claude Desktop Setup (`claude_desktop_config.json`):
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

- GitHub: https://github.com/rxmna8502/vybe-intelligence-vault
- 3D Interactive Map: https://rxmna8502.github.io/vybe-intelligence-vault/
- NPM: https://www.npmjs.com/package/vybe-vault

Would love feedback on tool response times and what additional verification metrics would be most useful.
```

---

## 3. Community Room 2: r/LocalLLaMA

r/LocalLLaMA is the toughest room: they reject hype and examine methodology. Lead with the automated harvester and reproducibility evaluation, not the marketing claims.

### Post Focus:
- Explain the **Vybe Reproducibility Standard (VRS)**: how the automated GitHub Actions pipeline crawls GitHub every 4 hours, tests dependencies, checks commit authenticity, and flags abandonware.
- Share the **Zero-Dollar Local AI Stack Blueprint** (`learning-paths/zero-dollar-local-ai-stack.md`) using Ollama + DeepSeek-R1 + Qwen 2.5 Coder + VS Code.
- Invite contributors to improve the AST scoring filters.

---

## 4. Visual Walkthrough Screencast (60-90 Seconds)

A single shareable recording demonstrating the working pipeline:
1. **0:00 - 0:15**: Navigate the 3D WebGL neural lattice on GitHub Pages, zooming into clusters.
2. **0:15 - 0:40**: Run `npx vybe-vault sync` in a real project terminal, showing instantaneous framework detection and rules generation.
3. **0:40 - 1:15**: In Claude Desktop / Cursor, ask for a local inference pattern and demonstrate `vault_search` returning structured results over stdio.

---

## 5. Hacker News (Show HN)

Comes last, after real users from r/ClaudeCode and MCP registries have tested the server and reported feedback.

### Draft:
```markdown
Show HN: Vybe Vault - Automated reproducibility crawler & MCP memory for coding agents

Over the past two years, the explosion of AI repositories has created a major signal-to-noise problem: many trending projects rot within weeks, fail to compile, or feature mocked implementations.

We built Vybe Vault to solve this. An automated crawler runs every 4 hours, tests repositories against a reproducibility rubric (clean sandbox runs, real dependencies, active commits), and maps 5,200+ verified nodes.

For developers using Claude Desktop, Cursor, or Continue.dev, it exposes a native zero-install stdio MCP server (`npx -y vybe-vault mcp`) so agents can query verified patterns directly during code generation without leaving the editor.

GitHub: https://github.com/rxmna8502/vybe-intelligence-vault
Live 3D Map: https://rxmna8502.github.io/vybe-intelligence-vault/
NPM: https://www.npmjs.com/package/vybe-vault

Feedback on the crawler rubric and indexing approach is welcome.
```
