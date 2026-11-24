import { useRef, useEffect, useState } from 'react';
import { formatQualityScore } from '../utils';

const CATEGORY_COLORS = {
  'maps': '#FFE600',
  'skills': '#00F0FF',
  'daily-digests': '#FF2A85',
  'prompts': '#00FF66',
  'ai': '#A855F7',
  'web-development': '#FF5500',
  'workspace-archive': '#FFFFFF'
};

export default function WebGLGraph({ nodes, onSelectNode }) {
  const canvasRef = useRef(null);
  const [hoveredNode, setHoveredNode] = useState(null);
  const [autoRotate, setAutoRotate] = useState(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = canvas.width = canvas.parentElement.clientWidth;
    let height = canvas.height = canvas.parentElement.clientHeight || 600;

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight || 600;
    };
    window.addEventListener('resize', handleResize);

    // Initialize 3D positions in a spherical Fibonacci lattice
    const displayNodes = (nodes || []).slice(0, 150);
    const count = displayNodes.length;
    const radius = Math.min(width, height) * 0.35;

    const points = displayNodes.map((node, i) => {
      const phi = Math.acos(1 - 2 * (i + 0.5) / count);
      const theta = Math.PI * (1 + Math.sqrt(5)) * (i + 0.5);

      return {
        node,
        x: radius * Math.sin(phi) * Math.cos(theta),
        y: radius * Math.sin(phi) * Math.sin(theta),
        z: radius * Math.cos(phi),
        baseColor: CATEGORY_COLORS[node.category] || '#00F0FF',
        screenX: 0,
        screenY: 0,
        scale: 1
      };
    });

    // Create random relational links
    const links = [];
    for (let i = 0; i < points.length; i++) {
      for (let j = i + 1; j < points.length; j++) {
        if (points[i].node.category === points[j].node.category && Math.random() > 0.88) {
          links.push([i, j]);
        }
      }
    }

    // Camera and interaction angles
    let rotX = 0.2;
    let rotY = 0;
    let zoom = 1;
    let isDragging = false;
    let lastMouseX = 0;
    let lastMouseY = 0;

    const onMouseDown = (e) => {
      isDragging = true;
      lastMouseX = e.clientX;
      lastMouseY = e.clientY;
    };

    const onMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      if (isDragging) {
        const dx = e.clientX - lastMouseX;
        const dy = e.clientY - lastMouseY;
        rotY += dx * 0.005;
        rotX += dy * 0.005;
        lastMouseX = e.clientX;
        lastMouseY = e.clientY;
      }

      // Hit testing for hover
      let found = null;
      for (let i = points.length - 1; i >= 0; i--) {
        const p = points[i];
        const dist = Math.hypot(p.screenX - mouseX, p.screenY - mouseY);
        if (dist < 12 * p.scale) {
          found = p.node;
          break;
        }
      }
      setHoveredNode(found);
      canvas.style.cursor = found ? 'pointer' : (isDragging ? 'grabbing' : 'grab');
    };

    const onMouseUp = (e) => {
      if (!isDragging) return;
      isDragging = false;
      const dx = Math.abs(e.clientX - lastMouseX);
      const dy = Math.abs(e.clientY - lastMouseY);
      if (dx < 3 && dy < 3 && hoveredNode) {
        onSelectNode(hoveredNode);
      }
    };

    const onClick = (e) => {
      const rect = canvas.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      for (let i = points.length - 1; i >= 0; i--) {
        const p = points[i];
        const dist = Math.hypot(p.screenX - mouseX, p.screenY - mouseY);
        if (dist < 14 * p.scale) {
          onSelectNode(p.node);
          break;
        }
      }
    };

    const onWheel = (e) => {
      e.preventDefault();
      zoom += e.deltaY * -0.001;
      zoom = Math.min(Math.max(0.4, zoom), 2.5);
    };

    canvas.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
    canvas.addEventListener('click', onClick);
    canvas.addEventListener('wheel', onWheel, { passive: false });

    // Main 3D Render Loop
    const render = () => {
      if (autoRotate && !isDragging) {
        rotY += 0.003;
      }

      ctx.fillStyle = '#0a0a0f';
      ctx.fillRect(0, 0, width, height);

      // Draw faint background spatial grid
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.04)';
      ctx.lineWidth = 1;
      const gridSize = 40;
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      const fov = 400;
      const cx = width / 2;
      const cy = height / 2;

      // Project 3D points to 2D
      const cosX = Math.cos(rotX);
      const sinX = Math.sin(rotX);
      const cosY = Math.cos(rotY);
      const sinY = Math.sin(rotY);

      points.forEach(p => {
        // Rotate around Y axis
        let x1 = p.x * cosY - p.z * sinY;
        let z1 = p.z * cosY + p.x * sinY;

        // Rotate around X axis
        let y2 = p.y * cosX - z1 * sinX;
        let z2 = z1 * cosX + p.y * sinX;

        // Perspective projection
        const depth = (z2 * zoom) + fov;
        const scale = fov / Math.max(depth, 1);

        p.screenX = cx + x1 * zoom * scale;
        p.screenY = cy + y2 * zoom * scale;
        p.scale = scale;
        p.depth = z2;
      });

      // Sort points by depth for painters algorithm
      const sortedPoints = [...points].sort((a, b) => a.depth - b.depth);

      // Draw connecting neural edges
      links.forEach(([i, j]) => {
        const p1 = points[i];
        const p2 = points[j];
        if (p1.depth < -100 && p2.depth < -100) return;

        const alpha = Math.max(0.05, Math.min(0.4, (p1.scale + p2.scale) * 0.15));
        ctx.strokeStyle = `rgba(0, 240, 255, ${alpha})`;
        ctx.lineWidth = Math.max(0.5, p1.scale);
        ctx.beginPath();
        ctx.moveTo(p1.screenX, p1.screenY);
        ctx.lineTo(p2.screenX, p2.screenY);
        ctx.stroke();
      });

      // Draw nodes
      sortedPoints.forEach(p => {
        const isHovered = hoveredNode && hoveredNode.path === p.node.path;
        const nodeRadius = Math.max(3, (isHovered ? 8 : 4.5) * p.scale);

        // Outer glow
        if (p.scale > 0.8 || isHovered) {
          ctx.beginPath();
          ctx.arc(p.screenX, p.screenY, nodeRadius * 2, 0, Math.PI * 2);
          ctx.fillStyle = isHovered ? 'rgba(255, 42, 133, 0.4)' : `${p.baseColor}22`;
          ctx.fill();
        }

        // Inner node
        ctx.beginPath();
        ctx.arc(p.screenX, p.screenY, nodeRadius, 0, Math.PI * 2);
        ctx.fillStyle = isHovered ? '#FF2A85' : p.baseColor;
        ctx.fill();
        ctx.strokeStyle = '#000000';
        ctx.lineWidth = 1.5;
        ctx.stroke();

        // Node label if close enough or hovered
        if (p.scale > 0.95 || isHovered) {
          ctx.font = `${isHovered ? 'bold 11px' : '9px'} monospace`;
          ctx.fillStyle = isHovered ? '#FFFFFF' : '#D4FF00';
          ctx.textAlign = 'center';
          const label = p.node.title.length > 22 ? p.node.title.slice(0, 20) + '..' : p.node.title;
          ctx.fillText(label.toUpperCase(), p.screenX, p.screenY - nodeRadius - 4);
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      canvas.removeEventListener('click', onClick);
      canvas.removeEventListener('wheel', onWheel);
    };
  }, [nodes, autoRotate, hoveredNode, onSelectNode]);

  return (
    <div className="relative w-full h-[650px] bg-[#0a0a0f] border-4 border-black neo-shadow-lg overflow-hidden">
      {/* 3D Canvas */}
      <canvas ref={canvasRef} className="w-full h-full block" />

      {/* Floating HUD Controls */}
      <div className="absolute top-4 left-4 z-10 flex flex-wrap gap-2 pointer-events-auto">
        <div className="bg-black/80 backdrop-blur text-[#00FF66] border-2 border-black px-3 py-1 font-mono text-xs font-black">
          3D SPATIAL GRAPH // WEBGL PERSPECTIVE
        </div>
        <button
          onClick={() => setAutoRotate(!autoRotate)}
          className={`border-2 border-black px-3 py-1 font-mono text-xs font-black transition-all ${
            autoRotate ? 'bg-[#FFE600] text-black' : 'bg-black text-white'
          }`}
        >
          {autoRotate ? 'AUTO-ROTATE: ON' : 'AUTO-ROTATE: OFF'}
        </button>
      </div>

      {/* Interactive Helper Overlay */}
      <div className="absolute bottom-4 left-4 z-10 pointer-events-none text-neutral-400 font-mono text-[10px] space-y-0.5 bg-black/60 p-2 border border-neutral-800">
        <div>[DRAG] Rotate 3D Axis</div>
        <div>[SCROLL] Zoom Camera</div>
        <div>[CLICK] Inspect Dossier</div>
      </div>

      {/* Hovered Node Preview Tooltip */}
      {hoveredNode && (
        <div className="absolute bottom-4 right-4 z-10 bg-black text-white border-3 border-[#00F0FF] p-3 max-w-sm font-mono text-xs shadow-[4px_4px_0px_#00F0FF] pointer-events-none">
          <div className="text-[#FFE600] font-black truncate">{hoveredNode.title.toUpperCase()}</div>
          <div className="flex gap-2 text-[10px] mt-1 text-[#00FF66]">
            <span>CATEGORY: {hoveredNode.category}</span>
            {hoveredNode.quality_score > 0 && <span>QUALITY: {formatQualityScore(hoveredNode.quality_score)}/10</span>}
          </div>
          <div className="text-neutral-400 text-[10px] mt-1 line-clamp-2">
            {hoveredNode.summary || 'Verified intelligence node.'}
          </div>
        </div>
      )}
    </div>
  );
}
