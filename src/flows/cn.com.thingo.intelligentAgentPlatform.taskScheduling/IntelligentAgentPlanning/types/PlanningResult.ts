import type { Subtask } from '@/flows/cn.com.thingo.intelligentAgentPlatform.taskScheduling/IntelligentAgentPlanning/types/Subtask';

/**
 * 规划结果
 */
export type PlanningResult = {

  /**
   * 子任务列表
   */
  subtasks: Subtask[];

  /**
   * step
   */
  step: number;

  /**
   * 回滚步骤
   */
  rollbackStep?: number;

}
