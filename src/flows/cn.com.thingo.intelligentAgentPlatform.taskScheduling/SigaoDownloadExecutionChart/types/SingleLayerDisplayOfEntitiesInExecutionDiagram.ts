import type { HierarchicalCallChainSingleEntity } from '@/flows/cn.com.thingo.intelligentAgentPlatform.taskScheduling/SigaoDownloadExecutionChart/types/HierarchicalCallChainSingleEntity';
import type { HierarchicalRoutingSingleEntity } from '@/flows/cn.com.thingo.intelligentAgentPlatform.taskScheduling/SigaoDownloadExecutionChart/types/HierarchicalRoutingSingleEntity';

/**
 * 执行图单层展示实体
 */
export type SingleLayerDisplayOfEntitiesInExecutionDiagram = {

  /**
   * 当前层级
   */
  currentLevel?: number;

  /**
   * 层级参与智能体列表
   */
  hierarchicalParticipationInIntelligentAgentList?: string;

  /**
   * 层级调用链列表
   */
  hierarchicalCallChainList?: HierarchicalCallChainSingleEntity[];

  /**
   * 层级路由单项实体
   */
  hierarchicalRoutingSingleEntity?: HierarchicalRoutingSingleEntity[];

}
