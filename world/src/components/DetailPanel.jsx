import { useState, useEffect } from 'react';
import { X, Copy, Cpu, BookOpen, Clock, ExternalLink, Zap, Check, AlertTriangle } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { formatQualityScore } from '../utils';

const IS_PROD = window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1';
const VAULT_REPO_URL = 'https://raw.githubusercontent.com/rxmna8502/vybe-intelligence-vault/main';

export default function DetailPanel({ node, indexData, onSelectNode, onClose }) {
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [injected, setInjected] = useState(false);

  useEffect(() => {
    if (!node) return;
    
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setLoading(true);
    setContent('');
    setCopied(false);
    setInjected(false);

    const fileUrl = IS_PROD
      ? `${VAULT_REPO_URL}/${node.path}`
      : `/vault/${node.path}`;

    fetch(fileUrl)
      .then((res) => {
        if (!res.ok) throw new Error('File not found');
        return res.text();
      })
      .then((text) => {
        let cleanText = text;
        if (text.startsWith('---')) {
          const parts = text.split('---');
          if (parts.length >= 3) {
            cleanText = parts.slice(2).join('---').trim();
          }
        }
        setContent(cleanText);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Failed to load markdown, using fallback raw fetch:', err);
        fetch(`${VAULT_REPO_URL}/${node.path}`)
          .then(res => {
            if (!res.ok) throw new Error('Fallback failed');
            return res.text();
          })
          .then(text => {
            let cleanText = text;
            if (text.startsWith('---')) {
              const parts = text.split('---');
              if (parts.length >= 3) {
                cleanText = parts.slice(2).join('---').trim();
              }
            }
            setContent(cleanText);
            setLoading(false);
          })
          .catch(() => {
            setContent('# ⚠️ INTEL EXTRACTION FAILED\nCould not retrieve intelligence file from vault matrix.');
            setLoading(false);
          });
      });
  }, [node]);

  if (!node) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleInject = () => {
    fetch('http://localhost:3456/orchestrate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        action: 'inject',
        parameters: { path: node.path }
      })
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.content) {
          navigator.clipboard.writeText(data.content);
          setInjected(true);
        }
      })
      .catch((err) => {
        console.warn('Orchestrator bridge offline. Falling back to clipboard injection.', err);
        const fallbackPrompt = `=== VAULT ENTRY: ${node.title} (${node.path}) ===\n\n${content}\n\n=== END VAULT ENTRY ===`;
        navigator.clipboard.writeText(fallbackPrompt);
        setInjected(true);
      })
      .finally(() => {
        setTimeout(() => setInjected(false), 2000);
      });
  };

  const connectedNeighbors = indexData?.edges
    ? indexData.edges
        .filter((e) => e.source === node.path || e.target === node.path)
        .map((e) => {
          const neighborPath = e.source === node.path ? e.target : e.source;
          return indexData.nodes.find((n) => n.path === neighborPath);
        })
        .filter(Boolean)
    : [];

  const githubUrl = `https://github.com/sairaman436/vybe-intelligence-vault/blob/main/${node.path}`;

  return (
    <div className="flex flex-col h-full bg-white border-4 border-black neo-shadow-xl overflow-hidden">
      
      {/* Top Hazard Bar */}
      <div className="h-3 hazard-stripes border-b-2 border-black" />

      {/* Header */}
      <div className="p-4 bg-[#FFE600] border-b-4 border-black flex items-center justify-between gap-4">
        <div className="min-w-0 flex-1">
          <div className="inline-block bg-black text-[#D4FF00] px-2 py-0.5 font-mono text-[10px] font-extrabold uppercase mb-1">
            DOSSIER :: {node.path}
          </div>
          <h2 className="text-lg font-black text-black uppercase tracking-tight truncate">
            {node.title}
          </h2>
        </div>

        <button 
          onClick={onClose}
          className="p-2 bg-black text-white hover:bg-[#FF2A85] border-2 border-black neo-shadow transition-transform active:translate-x-0.5 active:translate-y-0.5 cursor-pointer shrink-0"
        >
          <X size={18} />
        </button>
      </div>

      {/* Badges / Signal Row */}
      <div className="p-3 bg-[#F4EFE6] border-b-3 border-black flex flex-wrap items-center gap-2 text-xs font-mono font-bold">
        <div className="bg-[#00F0FF] text-black px-2.5 py-1 border-2 border-black neo-shadow">
          CATEGORY: {node.category?.toUpperCase()}
        </div>

        {node.quality_score > 0 && (
          <div className="bg-[#00FF66] text-black px-2.5 py-1 border-2 border-black neo-shadow">
            QUALITY: {formatQualityScore(node.quality_score)}/10
          </div>
        )}

        {node.rag_relevance > 0 && (
          <div className="bg-[#FF2A85] text-white px-2.5 py-1 border-2 border-black neo-shadow">
            RAG SIGNAL: {node.rag_relevance}/10
          </div>
        )}

        {node.last_modified && (
          <div className="bg-white text-black px-2 py-1 border-2 border-black ml-auto text-[10px]">
            {node.last_modified.substring(0, 10)}
          </div>
        )}
      </div>

      {/* Action Buttons */}
      <div className="p-3 bg-white border-b-3 border-black grid grid-cols-2 gap-3">
        <button
          onClick={handleCopy}
          className={`neo-btn py-2.5 px-4 flex items-center justify-center gap-2 text-xs cursor-pointer ${
            copied ? 'bg-[#00FF66] text-black' : 'bg-white hover:bg-[#FFE600] text-black'
          }`}
        >
          {copied ? <Check size={16} /> : <Copy size={16} />}
          <span>{copied ? 'RAW COPIED!' : 'COPY RAW INTEL'}</span>
        </button>

        <button
          onClick={handleInject}
          className={`neo-btn py-2.5 px-4 flex items-center justify-center gap-2 text-xs cursor-pointer ${
            injected ? 'bg-[#00FF66] text-black' : 'bg-[#00F0FF] hover:bg-[#FF2A85] hover:text-white text-black'
          }`}
        >
          <Zap size={16} />
          <span>{injected ? 'INJECTED TO MCP!' : 'MCP CONTEXT INJECT'}</span>
        </button>
      </div>

      {/* Markdown Document Content */}
      <div className="flex-1 overflow-y-auto p-6 bg-white">
        {loading ? (
          <div className="h-full flex flex-col items-center justify-center text-center p-8">
            <div className="w-12 h-12 border-4 border-black border-t-[#FF2A85] animate-spin mb-4" />
            <div className="font-mono font-black text-sm uppercase bg-[#FFE600] border-2 border-black px-3 py-1">
              EXTRACTING INTELLIGENCE MATRIX...
            </div>
          </div>
        ) : (
          <div className="markdown-body">
            <ReactMarkdown>{content}</ReactMarkdown>
          </div>
        )}
      </div>

      {/* Connected Graph Nodes */}
      {connectedNeighbors.length > 0 && (
        <div className="p-4 border-t-3 border-black bg-[#FFE600]">
          <div className="font-mono font-black text-[11px] uppercase tracking-wider text-black mb-2 flex items-center gap-1.5">
            <Zap size={13} className="text-black" />
            SYNAPTIC GRAPH CONNECTIONS ({connectedNeighbors.length})
          </div>
          <div className="flex gap-2.5 overflow-x-auto pb-1">
            {connectedNeighbors.map((neighbor) => (
              <button
                key={neighbor.path}
                onClick={() => onSelectNode(neighbor)}
                className="shrink-0 p-2 bg-white hover:bg-[#FF2A85] hover:text-white border-2 border-black neo-shadow text-left cursor-pointer transition-all max-w-[170px]"
              >
                <div className="font-bold text-xs truncate uppercase">{neighbor.title}</div>
                <div className="text-[9px] font-mono opacity-80 uppercase mt-0.5">{neighbor.category}</div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Footer bar */}
      <div className="p-3 bg-black text-white border-t-3 border-black flex items-center justify-between text-xs font-mono font-bold">
        <a 
          href={githubUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-[#D4FF00] hover:text-[#00F0FF] hover:underline"
        >
          <span>VIEW RAW REPO SOURCE</span>
          <ExternalLink size={13} />
        </a>

        <div className="flex gap-1.5">
          {(node.tags || []).slice(0, 3).map((tag) => (
            <span key={tag} className="px-2 py-0.5 bg-[#FF2A85] text-white border border-white text-[9px] uppercase">
              #{tag}
            </span>
          ))}
        </div>
      </div>

    </div>
  );
}
