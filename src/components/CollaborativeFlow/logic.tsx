import { useState, useRef, useEffect, useCallback } from 'react';
import type { Agent, Scenario, CanvasState, CanvasEdge } from './types';

// ─── 智能体数据 ─────────────────────────────────────────
export const AGENTS: Record<string, Agent> = {
  butler:  { key: 'butler',  name: '智能体管家', emoji: '🧠', color: '#8b5cf6', role: 'Orchestrator' },
  sql:     { key: 'sql',     name: 'SQL 专家',   emoji: '🗄️', color: '#3b82f6', role: 'Data Query' },
  chart:   { key: 'chart',   name: '可视化专家', emoji: '📈', color: '#10b981', role: 'Visualization' },
  insight: { key: 'insight', name: '洞察分析师', emoji: '💡', color: '#f59e0b', role: 'Analytics' },
  clean:   { key: 'clean',   name: '数据清洗',   emoji: '🧹', color: '#ec4899', role: 'Data Cleaning' },
  model:   { key: 'model',   name: '建模专家',   emoji: '🔬', color: '#06b6d4', role: 'Modeling' },
};

// ─── 场景数据 ─────────────────────────────────────────
export const SCENARIOS: Scenario[] = [
  {
    name: '📊 销售趋势分析',
    desc: '查询 → 图表 → 洞察',
    agents: ['butler', 'sql', 'chart', 'insight'],
    steps: [
      { from: 'butler', to: 'sql',     label: '分发查询任务', desc: '管家将需求转化为数据查询指令' },
      { from: 'sql',    to: 'chart',   label: '传递查询结果', desc: 'SQL结果传递给可视化引擎' },
      { from: 'sql',    to: 'insight', label: '同步原始数据', desc: '原始数据同时发送给分析师' },
      { from: 'chart',  to: 'insight', label: '图表辅助分析', desc: '图表帮助分析师发现趋势' },
      { from: 'insight',to: 'butler',  label: '汇报洞察结论', desc: '分析师将最终结论返回管家' },
    ],
    stats: { agents: 4, steps: 5, messages: 5, time: '3.2s' },
  },
  {
    name: '🧹 数据清洗+分析',
    desc: '清洗 → 查询 → 可视化 → 洞察',
    agents: ['butler', 'clean', 'sql', 'chart', 'insight'],
    steps: [
      { from: 'butler', to: 'clean',   label: '分发清洗任务', desc: '管家识别数据质量问题' },
      { from: 'clean',  to: 'sql',     label: '交付清洗数据', desc: '清洗后的干净数据传给SQL' },
      { from: 'sql',    to: 'chart',   label: '聚合结果',     desc: '聚合统计传给可视化' },
      { from: 'sql',    to: 'insight', label: '明细数据',     desc: '明细同步给分析师' },
      { from: 'chart',  to: 'butler',  label: '图表结果',     desc: '可视化图表汇总' },
      { from: 'insight',to: 'butler',  label: '分析报告',     desc: '深度洞察报告' },
    ],
    stats: { agents: 5, steps: 6, messages: 6, time: '5.8s' },
  },
  {
    name: '🔬 预测建模',
    desc: '取数 → 清洗 → 建模 → 解读',
    agents: ['butler', 'sql', 'clean', 'model', 'insight'],
    steps: [
      { from: 'butler', to: 'sql',     label: '提取训练数据', desc: '查询历史数据作为训练集' },
      { from: 'sql',    to: 'clean',   label: '数据预处理',   desc: '原始数据需要清洗标准化' },
      { from: 'clean',  to: 'model',   label: '输入特征矩阵', desc: '清洗后特征传入建模引擎' },
      { from: 'model',  to: 'insight', label: '预测结果',     desc: '模型输出预测结果给分析师' },
      { from: 'insight',to: 'butler',  label: '解读报告',     desc: '分析师给出业务解读建议' },
    ],
    stats: { agents: 5, steps: 5, messages: 5, time: '8.4s' },
  },
];

// ─── 工具函数 ─────────────────────────────────────────
function hexAlpha(hex: string, a: number): string {
  return hex + Math.round(a * 255).toString(16).padStart(2, '0');
}

function getControlPoint(f: { x: number; y: number }, t: { x: number; y: number }) {
  const mx = (f.x + t.x) / 2;
  const my = (f.y + t.y) / 2;
  const dx = t.x - f.x;
  const dy = t.y - f.y;
  return { x: mx - dy * 0.2, y: my + dx * 0.2 };
}

function quadPoint(
  f: { x: number; y: number },
  cp: { x: number; y: number },
  t: { x: number; y: number },
  u: number
) {
  const v = 1 - u;
  return {
    x: v * v * f.x + 2 * v * u * cp.x + u * u * t.x,
    y: v * v * f.y + 2 * v * u * cp.y + u * u * t.y,
  };
}

// ── Canvas 渲染引擎 Hook ─────────────────────────────
export function useCanvasEngine(
  canvasRef: React.RefObject<HTMLCanvasElement | null>,
  scenarioIdx: number,
  stepIdx: number,
  agents: Record<string, Agent>,
  scenarios: Scenario[]
) {
  const stateRef = useRef<CanvasState>({
    nodes: [], edges: [], particles: [], bgParticles: [], W: 0, H: 0,
  });
  const animRef = useRef<number | null>(null);

  // 布局计算
  const layout = useCallback(() => {
    const cvs = canvasRef.current;
    if (!cvs) return;
    const parent = cvs.parentElement;
    if (!parent) return;
    const dpr = window.devicePixelRatio || 1;
    const W = parent.clientWidth;
    const H = parent.clientHeight;
    cvs.width = W * dpr;
    cvs.height = H * dpr;
    cvs.style.width = W + 'px';
    cvs.style.height = H + 'px';
    const ctx = cvs.getContext('2d');
    if (!ctx) return;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const sc = scenarios[scenarioIdx];
    const cx = W / 2;
    const cy = H / 2;
    const R = Math.min(W, H) * 0.28;
    const others = sc.agents.filter((k) => k !== 'butler');

    const nodes = sc.agents.map((key) => {
      const a = agents[key];
      const isB = key === 'butler';
      let x = cx;
      let y = cy;
      if (!isB) {
        const i = others.indexOf(key);
        const angle = -Math.PI / 2 + (i / others.length) * Math.PI * 2;
        x = cx + R * Math.cos(angle);
        y = cy + R * Math.sin(angle);
      }
      return { key, name: a.name, emoji: a.emoji, color: a.color, role: a.role, x, y, r: isB ? 44 : 36, active: false, pulse: 0, targetPulse: 0 };
    });

    const edges = sc.steps.map((s) => ({
      from: nodes.find((n) => n.key === s.from)!,
      to: nodes.find((n) => n.key === s.to)!,
      label: s.label,
      active: false,
      alpha: 0.15,
      targetAlpha: 0.15,
    }));

    const bgP: CanvasState['bgParticles'] = [];
    for (let i = 0; i < 50; i++) {
      bgP.push({
        x: Math.random() * W, y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.25, vy: (Math.random() - 0.5) * 0.25,
        size: 1 + Math.random() * 1.2, alpha: 0.08 + Math.random() * 0.12,
      });
    }

    stateRef.current = { nodes, edges, particles: [], bgParticles: bgP, W, H };
  }, [canvasRef, scenarioIdx]);

  // 粒子生成
  const spawnParticles = useCallback((edge: CanvasEdge, count: number) => {
    const st = stateRef.current;
    for (let i = 0; i < count; i++) {
      st.particles.push({
        edge,
        t: -i * 0.07,
        speed: 0.007 + Math.random() * 0.005,
        size: 2 + Math.random() * 2.5,
        alpha: 0.6 + Math.random() * 0.4,
        color: edge.from.color,
      });
    }
  }, []);

  // 步骤激活
  useEffect(() => {
    const st = stateRef.current;
    if (!st.nodes.length) return;
    const sc = scenarios[scenarioIdx];

    st.nodes.forEach((n) => { n.active = false; n.targetPulse = 0; });
    st.edges.forEach((e) => { e.active = false; e.targetAlpha = 0.15; });
    st.particles = [];

    if (stepIdx < 0) return;

    for (let i = 0; i <= Math.min(stepIdx, sc.steps.length - 1); i++) {
      const s = sc.steps[i];
      const fn = st.nodes.find((n) => n.key === s.from);
      const tn = st.nodes.find((n) => n.key === s.to);
      if (fn) { fn.active = true; fn.targetPulse = 1; }
      if (tn) { tn.active = true; tn.targetPulse = 1; }
      st.edges[i].targetAlpha = 1;
    }
    const activeIdx = Math.min(stepIdx, st.edges.length - 1);
    st.edges[activeIdx].active = true;
    spawnParticles(st.edges[activeIdx], 14);
  }, [stepIdx, scenarioIdx, spawnParticles, scenarios]);

  // 布局 + resize
  useEffect(() => {
    layout();
    const handler = () => layout();
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, [layout]);

  // 渲染循环
  useEffect(() => {
    const cvs = canvasRef.current;
    if (!cvs) return;

    function frame() {
      const ctx = cvs!.getContext('2d');
      if (!ctx) return;
      const { nodes, edges, particles, bgParticles, W, H } = stateRef.current;
      if (!W) { animRef.current = requestAnimationFrame(frame); return; }
      ctx.clearRect(0, 0, W, H);

      // 网格
      ctx.strokeStyle = 'rgba(0,0,0,0.04)';
      ctx.lineWidth = 1;
      for (let x = 0; x < W; x += 40) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke(); }
      for (let y = 0; y < H; y += 40) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke(); }

      // 背景粒子
      bgParticles.forEach((p) => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = W; if (p.x > W) p.x = 0;
        if (p.y < 0) p.y = H; if (p.y > H) p.y = 0;
        ctx.fillStyle = `rgba(100,116,139,${p.alpha})`;
        ctx.beginPath(); ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2); ctx.fill();
      });

      // 边
      edges.forEach((e) => {
        e.alpha += (e.targetAlpha - e.alpha) * 0.07;
        if (e.alpha < 0.01) return;
        const cp = getControlPoint(e.from, e.to);

        // 基础线
        ctx.beginPath(); ctx.moveTo(e.from.x, e.from.y); ctx.quadraticCurveTo(cp.x, cp.y, e.to.x, e.to.y);
        ctx.strokeStyle = `rgba(100,116,139,${0.08 + e.alpha * 0.2})`;
        ctx.lineWidth = 1.5 + e.alpha; ctx.stroke();

        // 激活光晕
        if (e.active) {
          ctx.beginPath(); ctx.moveTo(e.from.x, e.from.y); ctx.quadraticCurveTo(cp.x, cp.y, e.to.x, e.to.y);
          ctx.strokeStyle = hexAlpha(e.from.color, 0.25);
          ctx.lineWidth = 6; ctx.stroke();
        }

        // 箭头
        if (e.alpha > 0.3) {
          const at = 0.72;
          const p1 = quadPoint(e.from, cp, e.to, at);
          const p2 = quadPoint(e.from, cp, e.to, at + 0.02);
          const ang = Math.atan2(p2.y - p1.y, p2.x - p1.x);
          ctx.beginPath();
          ctx.moveTo(p1.x + 8 * Math.cos(ang - 0.4), p1.y + 8 * Math.sin(ang - 0.4));
          ctx.lineTo(p1.x, p1.y);
          ctx.lineTo(p1.x + 8 * Math.cos(ang + 0.4), p1.y + 8 * Math.sin(ang + 0.4));
          ctx.strokeStyle = `rgba(100,116,139,${e.alpha * 0.6})`;
          ctx.lineWidth = 1.5; ctx.stroke();
        }

        // 标签
        if (e.alpha > 0.5) {
          const lp = quadPoint(e.from, cp, e.to, 0.5);
          ctx.font = '600 11px -apple-system,"PingFang SC",sans-serif';
          ctx.fillStyle = `rgba(71,85,105,${e.alpha * 0.8})`;
          ctx.textAlign = 'center';
          ctx.fillText(e.label, lp.x, lp.y - 10);
        }
      });

      // 流动粒子
      particles.forEach((p) => {
        p.t += p.speed;
        if (p.t < 0 || p.t > 1) return;
        const cp = getControlPoint(p.edge.from, p.edge.to);
        const pos = quadPoint(p.edge.from, cp, p.edge.to, p.t);
        const a = p.alpha * (p.t < 0.1 ? p.t / 0.1 : p.t > 0.9 ? (1 - p.t) / 0.1 : 1);

        const grad = ctx.createRadialGradient(pos.x, pos.y, 0, pos.x, pos.y, p.size * 4);
        grad.addColorStop(0, hexAlpha(p.color, a * 0.3));
        grad.addColorStop(1, hexAlpha(p.color, 0));
        ctx.fillStyle = grad;
        ctx.beginPath(); ctx.arc(pos.x, pos.y, p.size * 4, 0, Math.PI * 2); ctx.fill();

        ctx.fillStyle = p.color;
        ctx.globalAlpha = a;
        ctx.beginPath(); ctx.arc(pos.x, pos.y, p.size, 0, Math.PI * 2); ctx.fill();
        ctx.globalAlpha = 1;
      });
      stateRef.current.particles = particles.filter((p) => p.t <= 1.1);

      // 节点
      nodes.forEach((n) => {
        n.pulse += (n.targetPulse - n.pulse) * 0.05;

        // 外层光晕
        if (n.pulse > 0.1) {
          const g = ctx.createRadialGradient(n.x, n.y, n.r, n.x, n.y, n.r + 28 + n.pulse * 18);
          g.addColorStop(0, hexAlpha(n.color, 0.18));
          g.addColorStop(1, hexAlpha(n.color, 0));
          ctx.fillStyle = g;
          ctx.beginPath(); ctx.arc(n.x, n.y, n.r + 28 + n.pulse * 18, 0, Math.PI * 2); ctx.fill();
        }

        // 脉冲环
        if (n.active) {
          const rr = n.r + 8 + Math.sin(Date.now() / 600) * 4;
          ctx.beginPath(); ctx.arc(n.x, n.y, rr, 0, Math.PI * 2);
          ctx.strokeStyle = hexAlpha(n.color, 0.25);
          ctx.lineWidth = 2; ctx.stroke();
        }

        // 节点本体
        const bg = ctx.createRadialGradient(n.x - n.r * 0.3, n.y - n.r * 0.3, 0, n.x, n.y, n.r);
        bg.addColorStop(0, '#ffffff');
        bg.addColorStop(1, '#f1f5f9');
        ctx.fillStyle = bg;
        ctx.beginPath(); ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2); ctx.fill();

        // 边框
        ctx.beginPath(); ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.strokeStyle = n.active ? n.color : 'rgba(0,0,0,0.1)';
        ctx.lineWidth = n.active ? 2.5 : 1; ctx.stroke();

        // Emoji
        ctx.font = `${n.r * 0.65}px serif`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillStyle = '#1e293b';
        ctx.fillText(n.emoji, n.x, n.y - 1);

        // 名称
        ctx.font = '600 12px -apple-system,"PingFang SC",sans-serif';
        ctx.fillStyle = n.active ? '#1e293b' : '#64748b';
        ctx.textAlign = 'center';
        ctx.fillText(n.name, n.x, n.y + n.r + 18);

        // 角色
        ctx.font = '10px -apple-system,sans-serif';
        ctx.fillStyle = n.active ? n.color : '#94a3b8';
        ctx.fillText(n.role, n.x, n.y + n.r + 32);
      });

      animRef.current = requestAnimationFrame(frame);
    }
    animRef.current = requestAnimationFrame(frame);
    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, [canvasRef, scenarioIdx]);

  // 持续粒子生成
  useEffect(() => {
    if (stepIdx < 0) return;
    const iv = setInterval(() => {
      const st = stateRef.current;
      const ei = Math.min(stepIdx, st.edges.length - 1);
      const edge = st.edges[ei];
      if (!edge || !edge.active) return;
      spawnParticles(edge, 5);
    }, 400);
    return () => clearInterval(iv);
  }, [stepIdx, scenarioIdx, spawnParticles, scenarios]);

  return { resetLayout: layout };
}

// ─── 协作流程状态管理 Hook ────────────────────────────
export function useCollaborativeFlow(agents: Record<string, Agent>, scenarios: Scenario[]) {
  const [scenarioIdx, setScenarioIdx] = useState(0);
  const [stepIdx, setStepIdx] = useState(-1);
  const [playing, setPlaying] = useState(false);
  const playRef = useRef(false);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useCanvasEngine(canvasRef, scenarioIdx, stepIdx, agents, scenarios);

  const sc = scenarios[scenarioIdx];

  // 计算当前活跃智能体
  const activeAgentKeys = new Set<string>();
  if (stepIdx >= 0) {
    for (let i = 0; i <= Math.min(stepIdx, sc.steps.length - 1); i++) {
      activeAgentKeys.add(sc.steps[i].from);
      activeAgentKeys.add(sc.steps[i].to);
    }
  }

  const selectScenario = useCallback((idx: number) => {
    playRef.current = false;
    setPlaying(false);
    setScenarioIdx(idx);
    setStepIdx(-1);
  }, []);

  const selectStep = useCallback((idx: number) => {
    playRef.current = false;
    setPlaying(false);
    setStepIdx(idx);
  }, []);

  const play = useCallback(async () => {
    if (playRef.current) {
      playRef.current = false;
      setPlaying(false);
      return;
    }
    playRef.current = true;
    setPlaying(true);
    const stepCount = scenarios[scenarioIdx].steps.length;
    for (let i = 0; i < stepCount; i++) {
      if (!playRef.current) break;
      setStepIdx(i);
      await new Promise((r) => setTimeout(r, 1800));
    }
    playRef.current = false;
    setPlaying(false);
  }, [scenarioIdx, scenarios]);

  const reset = useCallback(() => {
    playRef.current = false;
    setPlaying(false);
    setStepIdx(-1);
  }, []);

  return {
    scenarios,
    agents,
    scenarioIdx,
    stepIdx,
    playing,
    activeAgentKeys,
    canvasRef,
    onSelectScenario: selectScenario,
    onSelectStep: selectStep,
    onPlay: play,
    onReset: reset,
  };
}
