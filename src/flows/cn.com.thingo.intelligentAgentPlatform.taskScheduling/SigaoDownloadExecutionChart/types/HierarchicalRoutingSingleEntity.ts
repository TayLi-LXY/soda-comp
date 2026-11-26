import type { HierarchicalRoutingDownstreamNodes } from '@/flows/cn.com.thingo.intelligentAgentPlatform.taskScheduling/SigaoDownloadExecutionChart/types/HierarchicalRoutingDownstreamNodes';

/**
 * 层级路由单项实体
 */
export type HierarchicalRoutingSingleEntity = {

  /**
   * 当前节点
   */
  currentNode?: string;

  /**
   * 下游执行列表
   */
  downstreamExecutionList?: HierarchicalRoutingDownstreamNodes[];

}
