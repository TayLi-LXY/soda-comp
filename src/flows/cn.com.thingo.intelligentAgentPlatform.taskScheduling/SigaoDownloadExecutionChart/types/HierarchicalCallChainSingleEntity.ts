import type { LargeModelActionHistoricalEntity } from '@/flows/cn.com.thingo.intelligentAgentPlatform.taskScheduling/SigaoDownloadExecutionChart/types/LargeModelActionHistoricalEntity';
import type { ExecuteModelParameterEntity } from '@/flows/cn.com.thingo.intelligentAgentPlatform.taskScheduling/SigaoDownloadExecutionChart/types/ExecuteModelParameterEntity';

/**
 * 层级调用链单项实体
 */
export type HierarchicalCallChainSingleEntity = {

  /**
   * 子任务
   */
  subtask?: string;

  /**
   * 任务类型
   */
  taskType?: string;

  /**
   * 执行节点
   */
  executableNode?: string;

  /**
   * 执行状态
   */
  executionStatus?: number;

  /**
   * token消耗
   */
  tokenConsumption?: number;

  /**
   * 执行时间
   */
  executionTime?: number;

  /**
   * 金额消耗
   */
  amountConsumption?: number;

  /**
   * 交互历史
   */
  actionHistory?: LargeModelActionHistoricalEntity[];

  /**
   * 输入参数列表
   */
  inputParameterList?: ExecuteModelParameterEntity[];

  /**
   * 输出参数列表
   */
  outputParameterList?: ExecuteModelParameterEntity[];

}
