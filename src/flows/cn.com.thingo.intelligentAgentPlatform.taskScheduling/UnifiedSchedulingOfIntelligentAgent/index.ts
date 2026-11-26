import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';
import type { SchedulingParameters } from '@/flows/cn.com.thingo.intelligentAgentPlatform.taskScheduling/UnifiedSchedulingOfIntelligentAgent/types/SchedulingParameters';

/**
 * 入参明细:
 * task 任务
 * vertex 智能体节点
 * agentService 智能体服务
 * parameterList 参数列表
 * jsonReturn json返回结构
 * organizeId 组织ID
 * userId 用户ID
 */
export interface FlowUnifiedSchedulingOfIntelligentAgentParams {
  task: string;
  vertex: string;
  agentService: string;
  parameterList?: SchedulingParameters[];
  jsonReturn?: string;
  organizeId: string;
  userId: string;
}

/**
 * 出参明细:
 * results 智能体执行结果
 */
export interface FlowUnifiedSchedulingOfIntelligentAgentResults {
  results?: string;
}

/**
 * 智能体统一调度
 * @cn.com.thingo.intelligentAgentPlatform.taskScheduling/FLOW_UNIFIED_SCHEDULING_OF_INTELLIGENT_AGENT
 */
export const flowUnifiedSchedulingOfIntelligentAgent = async (params: FlowUnifiedSchedulingOfIntelligentAgentParams): StandardPromise<FlowUnifiedSchedulingOfIntelligentAgentResults> => {
  return request('/intelligentAgentPlatform-taskScheduling/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@cn.com.thingo.intelligentAgentPlatform.taskScheduling/FLOW_UNIFIED_SCHEDULING_OF_INTELLIGENT_AGENT',
      params: { ...params },
    },
  });
};


export const flowUnifiedSchedulingOfIntelligentAgentFacade = async (params: FlowUnifiedSchedulingOfIntelligentAgentParams): Promise<FlowUnifiedSchedulingOfIntelligentAgentResults> => {
  const { data: { value } } =  await flowUnifiedSchedulingOfIntelligentAgent(params);
  return value;
};