const { spawn } = require('child_process');
const path = require('path');
const readline = require('readline');

const MCP_SERVER = path.resolve(__dirname, '../bin/mcp-bridge.js');

console.log('[TEST] Starting MCP server process:', MCP_SERVER);

const server = spawn('node', [MCP_SERVER], {
  stdio: ['pipe', 'pipe', 'inherit']
});

const rl = readline.createInterface({
  input: server.stdout,
  terminal: false
});

let messageId = 1;
const pendingRequests = new Map();

function sendRequest(method, params) {
  const id = messageId++;
  const payload = {
    jsonrpc: '2.0',
    id,
    method,
    params
  };

  return new Promise((resolve, reject) => {
    pendingRequests.set(id, { resolve, reject, method });
    server.stdin.write(JSON.stringify(payload) + '\n');
  });
}

function sendNotification(method, params) {
  const payload = {
    jsonrpc: '2.0',
    method,
    params
  };
  server.stdin.write(JSON.stringify(payload) + '\n');
}

rl.on('line', (line) => {
  if (!line.trim()) return;
  try {
    const res = JSON.parse(line);
    if (res.id && pendingRequests.has(res.id)) {
      const { resolve, reject, method } = pendingRequests.get(res.id);
      pendingRequests.delete(res.id);
      if (res.error) {
        reject(new Error(`[${method}] Error: ${JSON.stringify(res.error)}`));
      } else {
        resolve(res.result);
      }
    }
  } catch (err) {
    console.error('[TEST] Failed to parse line:', line, err);
  }
});

async function runTests() {
  try {
    console.log('[TEST 1/6] Sending initialize...');
    const initRes = await sendRequest('initialize', {
      protocolVersion: '2024-11-05',
      capabilities: {},
      clientInfo: { name: 'mcp-test-runner', version: '1.0.0' }
    });
    console.log('[PASS] initialize response received:');
    console.log(JSON.stringify(initRes, null, 2));

    sendNotification('notifications/initialized', {});

    console.log('\n[TEST 2/6] Sending tools/list...');
    const toolsRes = await sendRequest('tools/list', {});
    const toolNames = (toolsRes.tools || []).map(t => t.name);
    console.log('[PASS] tools/list received: Available tools =', toolNames.join(', '));
    if (!toolNames.includes('vault_search') || !toolNames.includes('get_blueprint') || !toolNames.includes('get_verified_patterns')) {
      throw new Error('Missing expected tools in tools/list');
    }

    console.log('\n[TEST 3/6] Calling tool vault_search ("deepseek")...');
    const searchRes = await sendRequest('tools/call', {
      name: 'vault_search',
      arguments: { query: 'deepseek', limit: 2 }
    });
    console.log('[PASS] vault_search output:');
    console.log(searchRes.content[0].text);

    console.log('\n[TEST 4/6] Calling tool get_blueprint ("agent-builder")...');
    const blueprintRes = await sendRequest('tools/call', {
      name: 'get_blueprint',
      arguments: { name: 'agent-builder' }
    });
    const bpLength = blueprintRes.content[0].text.length;
    console.log(`[PASS] get_blueprint output received: Length = ${bpLength} characters`);
    console.log('Sample snippet:', blueprintRes.content[0].text.slice(0, 200).replace(/\n/g, ' '));

    console.log('\n[TEST 5/6] Calling tool get_verified_patterns ("vllm")...');
    const patternsRes = await sendRequest('tools/call', {
      name: 'get_verified_patterns',
      arguments: { stack: 'vllm' }
    });
    console.log('[PASS] get_verified_patterns output:');
    console.log(patternsRes.content[0].text);

    console.log('\n[TEST 6/6] Testing resources/list & resources/read...');
    const resourcesList = await sendRequest('resources/list', {});
    console.log('[PASS] resources/list received:', JSON.stringify(resourcesList));
    const resourceRead = await sendRequest('resources/read', { uri: 'vault://index' });
    console.log('[PASS] resources/read received:', JSON.stringify(resourceRead));

    console.log('\n========================================');
    console.log('ALL MCP TESTS PASSED SUCCESSFULLY (6/6)');
    console.log('========================================');

    server.kill();
    process.exit(0);
  } catch (err) {
    console.error('\n[FAIL] Test encountered an error:', err);
    server.kill();
    process.exit(1);
  }
}

server.on('error', (err) => {
  console.error('[TEST] Server process error:', err);
  process.exit(1);
});

runTests();
