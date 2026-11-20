#!/usr/bin/env node

/**
 * VYBE VAULT NATIVE MCP STDIO SERVER (Node.js)
 * Zero-dependency Model Context Protocol server for Claude Desktop, Cursor, and Windsurf.
 */

const fs = require('fs');
const path = require('path');
const readline = require('readline');
const https = require('https');

const VAULT_ROOT = path.resolve(__dirname, '..');
const LOCAL_INDEX_PATH = path.join(VAULT_ROOT, 'vault-index.json');
const RAW_INDEX_URL = 'https://raw.githubusercontent.com/rxmna8502/vybe-intelligence-vault/main/vault-index.json';

let cachedIndex = null;

function loadIndex() {
  if (cachedIndex) return Promise.resolve(cachedIndex);
  
  if (fs.existsSync(LOCAL_INDEX_PATH)) {
    try {
      cachedIndex = JSON.parse(fs.readFileSync(LOCAL_INDEX_PATH, 'utf8'));
      return Promise.resolve(cachedIndex);
    } catch (e) {}
  }

  return new Promise((resolve) => {
    https.get(RAW_INDEX_URL, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          cachedIndex = JSON.parse(data);
          resolve(cachedIndex);
        } catch (e) {
          resolve({ nodes: [], edges: [] });
        }
      });
    }).on('error', () => resolve({ nodes: [], edges: [] }));
  });
}

function sendResponse(id, result) {
  const msg = JSON.stringify({
    jsonrpc: '2.0',
    id: id,
    result: result
  });
  process.stdout.write(msg + '\n');
}

function sendError(id, code, message) {
  const msg = JSON.stringify({
    jsonrpc: '2.0',
    id: id,
    error: { code, message }
  });
  process.stdout.write(msg + '\n');
}

async function handleRequest(request) {
  const { id, method, params } = request;

  if (method === 'initialize') {
    return sendResponse(id, {
      protocolVersion: '2024-11-05',
      capabilities: {
        tools: {},
        resources: {}
      },
      serverInfo: {
        name: 'vybe-intelligence-vault',
        version: '2.1.0'
      }
    });
  }

  if (method === 'notifications/initialized') {
    return;
  }

  if (method === 'tools/list') {
    return sendResponse(id, {
      tools: [
        {
          name: 'vault_search',
          description: 'Query the Vybe Intelligence Vault across 160k+ verified AI nodes, papers, MCP servers, and blueprints.',
          inputSchema: {
            type: 'object',
            properties: {
              query: { type: 'string', description: 'Search term or technical topic (e.g. "RAG", "Agent memory", "vLLM", "MCP")' },
              category: { type: 'string', description: 'Optional category filter: skills, maps, ai, learning-paths' },
              limit: { type: 'number', description: 'Maximum number of results to return (default 5)' }
            },
            required: ['query']
          }
        },
        {
          name: 'get_blueprint',
          description: 'Retrieve a production-grade 7-day sprint blueprint or system architecture map.',
          inputSchema: {
            type: 'object',
            properties: {
              name: { 
                type: 'string', 
                description: 'Sprint track name: "agent-builder", "ai-engineering", "ai-frontend", "rag-builder", "mcp-builder", "llmops"' 
              }
            },
            required: ['name']
          }
        },
        {
          name: 'get_verified_patterns',
          description: 'Get verified architecture patterns, anti-patterns, and prompt standards for a given tech stack.',
          inputSchema: {
            type: 'object',
            properties: {
              stack: { type: 'string', description: 'Tech stack name: e.g. "langgraph", "nextjs", "vllm", "fastmcp", "threejs"' }
            },
            required: ['stack']
          }
        }
      ]
    });
  }

  if (method === 'tools/call') {
    const { name, arguments: args } = params || {};
    const index = await loadIndex();
    const nodes = (index && index.nodes) ? index.nodes : [];

    if (name === 'vault_search') {
      const q = (args.query || '').toLowerCase();
      const limit = args.limit || 5;
      const cat = (args.category || '').toLowerCase();

      const results = nodes
        .filter(n => {
          if (cat && n.category && n.category.toLowerCase() !== cat) return false;
          const matchTitle = (n.title || '').toLowerCase().includes(q);
          const matchSummary = (n.summary || '').toLowerCase().includes(q);
          const matchTags = Array.isArray(n.tags) && n.tags.some(t => t.toLowerCase().includes(q));
          return matchTitle || matchSummary || matchTags;
        })
        .slice(0, limit)
        .map(n => ({
          title: n.title,
          category: n.category,
          quality_score: n.quality_score,
          summary: n.summary,
          tags: n.tags,
          url: `https://github.com/rxmna8502/vybe-intelligence-vault/blob/main/${n.id}`
        }));

      return sendResponse(id, {
        content: [
          {
            type: 'text',
            text: JSON.stringify({ count: results.length, query: args.query, results }, null, 2)
          }
        ]
      });
    }

    if (name === 'get_blueprint') {
      const blueprintName = (args.name || '').toLowerCase();
      const blueprintFile = `learning-paths/7-day-${blueprintName}.md`;
      const localPath = path.join(VAULT_ROOT, blueprintFile);
      
      if (fs.existsSync(localPath)) {
        const text = fs.readFileSync(localPath, 'utf8');
        return sendResponse(id, {
          content: [{ type: 'text', text }]
        });
      }

      return sendResponse(id, {
        content: [{
          type: 'text',
          text: `Blueprint "${args.name}" available online at: https://github.com/rxmna8502/vybe-intelligence-vault/tree/main/learning-paths`
        }]
      });
    }

    if (name === 'get_verified_patterns') {
      const targetStack = (args.stack || '').toLowerCase();
      const matched = nodes
        .filter(n => {
          const inTags = Array.isArray(n.tags) && n.tags.some(t => t.toLowerCase().includes(targetStack));
          const inTech = Array.isArray(n.tech_stack) && n.tech_stack.some(t => t.toLowerCase().includes(targetStack));
          return inTags || inTech;
        })
        .slice(0, 5)
        .map(n => ({
          title: n.title,
          summary: n.summary,
          quality_score: n.quality_score,
          tags: n.tags
        }));

      return sendResponse(id, {
        content: [
          {
            type: 'text',
            text: JSON.stringify({ stack: args.stack, matched_patterns: matched }, null, 2)
          }
        ]
      });
    }

    return sendError(id, -32601, `Unknown tool: ${name}`);
  }

  if (method === 'resources/list') {
    return sendResponse(id, {
      resources: [
        {
          uri: 'vault://index',
          name: 'Vybe Vault Master Index',
          description: 'Summary of all indexed nodes, categories, and tags.',
          mimeType: 'application/json'
        }
      ]
    });
  }

  if (method === 'resources/read') {
    const { uri } = params || {};
    if (uri === 'vault://index') {
      const index = await loadIndex();
      return sendResponse(id, {
        contents: [
          {
            uri: 'vault://index',
            mimeType: 'application/json',
            text: JSON.stringify({
              total_nodes: (index && index.nodes) ? index.nodes.length : 0,
              version: '2.1.0'
            })
          }
        ]
      });
    }
    return sendError(id, -32602, `Resource not found: ${uri}`);
  }

  // Fallback for unhandled methods
  sendError(id, -32601, `Method not implemented: ${method}`);
}

function start() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
  });

  rl.on('line', (line) => {
    if (!line.trim()) return;
    try {
      const parsed = JSON.parse(line);
      handleRequest(parsed).catch(err => {
        if (parsed.id) {
          sendError(parsed.id, -32603, err.message || 'Internal error');
        }
      });
    } catch (e) {
      // JSON parse error
    }
  });
}

if (require.main === module) {
  start();
}

module.exports = { start };
