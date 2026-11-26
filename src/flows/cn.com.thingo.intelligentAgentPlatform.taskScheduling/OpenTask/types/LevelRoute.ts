import type { Parameter } from '@/flows/cn.com.thingo.intelligentAgentPlatform.taskScheduling/OpenTask/types/Parameter';

/**
 * 层级路由
 */
export type LevelRoute = {

  /**
   * 类型
   */
  type: string;

  /**
   * 入参列表
   */
  params: Parameter[];

  /**
   * 子任务
   */
  task: string;

}
