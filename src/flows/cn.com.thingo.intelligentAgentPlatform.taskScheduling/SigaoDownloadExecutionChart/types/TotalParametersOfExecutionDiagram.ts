import type { ExecuteASingleEntityForSubTaskOfGraph } from '@/flows/cn.com.thingo.intelligentAgentPlatform.taskScheduling/SigaoDownloadExecutionChart/types/ExecuteASingleEntityForSubTaskOfGraph';
import type { SingleLayerDisplayOfEntitiesInExecutionDiagram } from '@/flows/cn.com.thingo.intelligentAgentPlatform.taskScheduling/SigaoDownloadExecutionChart/types/SingleLayerDisplayOfEntitiesInExecutionDiagram';

/**
 * 执行图总参数
 */
export type TotalParametersOfExecutionDiagram = {

  /**
   * 总层级
   */
  overallLevel?: number;

  /**
   * 总任务
   */
  totalTask?: string;

  /**
   * token消耗
   */
  tokenConsumption?: number;

  /**
   * 金额消耗
   */
  amountConsumption?: number;

  /**
   * 执行时间
   */
  executionTime?: number;

  /**
   * 参与智能体列表
   */
  listOfParticipatingIntelligentAgents?: string;

  /**
   * 子任务计划
   */
  subtaskPlan?: string;

  /**
   * 当前进度
   */
  currentProgress?: number;

  /**
   * 子任务列表
   */
  subtaskList?: ExecuteASingleEntityForSubTaskOfGraph[];

  /**
   * 执行图单层展示实体
   */
  singleLayerDisplayOfEntitiesInExecutionDiagram?: SingleLayerDisplayOfEntitiesInExecutionDiagram[];

}
