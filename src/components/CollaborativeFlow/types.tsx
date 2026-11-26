/** 智能体定义 */
export type Agent = {
  key: string;
  name: string;
  emoji: string;
  color: string;
  role: string;
};

/** 协作步骤定义 */
export type FlowStep = {
  from: string;
  to: string;
  label: string;
  desc: string;
};

/** 场景统计 */
export type ScenarioStats = {
  agents: number;
  steps: number;
  messages: number;
  time: string;
};

/** 场景定义 */
export type Scenario = {
  name: string;
  desc: string;
  agents: string[];
  steps: FlowStep[];
  stats: ScenarioStats;
};

/** Canvas 内部节点 */
export type CanvasNode = {
  key: string;
  name: string;
  emoji: string;
  color: string;
  role: string;
  x: number;
  y: number;
  r: number;
  active: boolean;
  pulse: number;
  targetPulse: number;
};

/** Canvas 内部边 */
export type CanvasEdge = {
  from: CanvasNode;
  to: CanvasNode;
  label: string;
  active: boolean;
  alpha: number;
  targetAlpha: number;
};

/** Canvas 粒子 */
export type Particle = {
  edge: CanvasEdge;
  t: number;
  speed: number;
  size: number;
  alpha: number;
  color: string;
};

/** Canvas 引擎内部状态 */
export type CanvasState = {
  nodes: CanvasNode[];
  edges: CanvasEdge[];
  particles: Particle[];
  bgParticles: { x: number; y: number; vx: number; vy: number; size: number; alpha: number }[];
  W: number;
  H: number;
};

/** Wrapper 组件 Props - 接收平台配置的数据 */
export type CollaborativeFlowWrapperProps = {
  /** 平台配置的智能体列表 */
  agents?: Agent[];
  /** 平台配置的场景列表 */
  scenarios?: Scenario[];
};

/** 展示组件 Props */
export type CollaborativeFlowProps = {
  /** 场景列表 */
  scenarios: Scenario[];
  /** 智能体字典 */
  agents: Record<string, Agent>;
  /** 当前场景索引 */
  scenarioIdx: number;
  /** 当前步骤索引，-1 表示未开始 */
  stepIdx: number;
  /** 是否正在播放 */
  playing: boolean;
  /** 当前活跃的智能体 key 集合 */
  activeAgentKeys: Set<string>;
  /** canvas ref */
  canvasRef: React.RefObject<HTMLCanvasElement | null>;
  /** 选择场景 */
  onSelectScenario: (idx: number) => void;
  /** 跳转到某步 */
  onSelectStep: (idx: number) => void;
  /** 播放/暂停 */
  onPlay: () => void;
  /** 重置 */
  onReset: () => void;
};
