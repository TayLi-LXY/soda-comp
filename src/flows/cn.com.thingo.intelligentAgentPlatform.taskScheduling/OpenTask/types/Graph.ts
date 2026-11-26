import type { LevelDetail } from '@/flows/cn.com.thingo.intelligentAgentPlatform.taskScheduling/OpenTask/types/LevelDetail';
import type { PlanningResult } from '@/flows/cn.com.thingo.intelligentAgentPlatform.taskScheduling/IntelligentAgentPlanning/types/PlanningResult';

/**
 * 执行图
 */
export type Graph = {

  /**
   * traceId
   */
  traceId: string;

  /**
   * 总层级
   */
  totalLevel: number;

  /**
   * 参与vertexes
   */
  participated_vertexes: string[];

  /**
   * vertex数量
   */
  vertexesCount: number;

  /**
   * 层级详情列表
   */
  levelDetails: LevelDetail[];

  /**
   * 任务
   */
  task: string;

  /**
   * token
   */
  token: string;

  /**
   * cost
   */
  cost: string;

  /**
   * time
   */
  time?: number;

  /**
   * 规划结果
   */
  planningResult: PlanningResult;

}
