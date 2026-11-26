import type { Agent, Scenario } from './types';

/**
 * 协作流程组件配置器
 * 用于低代码平台的属性面板配置
 */
export type Setter = {
  /** 自定义智能体列表（覆盖内置默认值） */
  customAgents?: Record<string, Agent>;
  /** 自定义场景列表（覆盖内置默认值） */
  customScenarios?: Scenario[];
  /** 自动播放（组件加载后自动开始播放协作流程） */
  autoPlay?: boolean;
  /** 播放速度（毫秒/步，默认 1800） */
  playSpeed?: number;
  /** 隐藏左侧面板 */
  hidePanel?: boolean;
  /** 隐藏底部统计栏 */
  hideStats?: boolean;
  /** 隐藏推荐库区域 */
  hideLibRecommend?: boolean;
  /** Canvas 背景色 */
  canvasBgColor?: string;
  /** 粒子数量倍率（默认 1） */
  particleDensity?: number;
};
