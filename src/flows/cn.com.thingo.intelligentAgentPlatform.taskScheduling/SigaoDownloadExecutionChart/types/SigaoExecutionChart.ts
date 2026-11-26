import type { IntelligentEntity } from '@/flows/cn.com.thingo.intelligentAgentPlatform.taskScheduling/SigaoDownloadExecutionChart/types/IntelligentEntity';
import type { TotalParametersOfExecutionDiagram } from '@/flows/cn.com.thingo.intelligentAgentPlatform.taskScheduling/SigaoDownloadExecutionChart/types/TotalParametersOfExecutionDiagram';

/**
 * 思高执行图
 */
export type SigaoExecutionChart = {

  /**
   * 执行图
   */
  executionGraph?: string;

  /**
   * 智能体实体
   */
  intelligentEntity?: IntelligentEntity[];

  /**
   * 执行图解
   */
  executionDiagram?: string;

  /**
   * 执行图总参数
   */
  totalParametersOfExecutionDiagram?: TotalParametersOfExecutionDiagram;

  /**
   * 当前执行阶段
   */
  currentExecutionStage?: number;

}
