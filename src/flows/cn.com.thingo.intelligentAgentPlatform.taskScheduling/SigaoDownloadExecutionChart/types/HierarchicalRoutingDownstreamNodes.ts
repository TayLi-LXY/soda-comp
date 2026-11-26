import type { ExecuteModelParameterEntity } from '@/flows/cn.com.thingo.intelligentAgentPlatform.taskScheduling/SigaoDownloadExecutionChart/types/ExecuteModelParameterEntity';

/**
 * 层级路由下游节点
 */
export type HierarchicalRoutingDownstreamNodes = {

  /**
   * 下游任务
   */
  downstreamTasks?: string;

  /**
   * 执行节点类型
   */
  executeNodeType?: string;

  /**
   * 执行节点
   */
  executableNode?: string;

  /**
   * 传递参数列表
   */
  passingParameterList?: ExecuteModelParameterEntity[];

}
