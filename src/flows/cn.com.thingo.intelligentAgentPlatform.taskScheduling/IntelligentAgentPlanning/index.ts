import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';
import type { PlanningResult } from '@/flows/cn.com.thingo.intelligentAgentPlatform.taskScheduling/IntelligentAgentPlanning/types/PlanningResult';

/**
 * 入参明细:
 * taskId 任务ID
 * planningResult 规划结果
 */
export interface FlowIntelligentAgentPlanningParams {
  taskId: string;
  planningResult: PlanningResult;
}

/**
 * 出参明细:
 */
export interface FlowIntelligentAgentPlanningResults {
}

/**
 * 智能体规划
 * @cn.com.thingo.intelligentAgentPlatform.taskScheduling/FLOW_INTELLIGENT_AGENT_PLANNING
 */
export const flowIntelligentAgentPlanning = async (params: FlowIntelligentAgentPlanningParams): StandardPromise<FlowIntelligentAgentPlanningResults> => {
  return request('/intelligentAgentPlatform-taskScheduling/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@cn.com.thingo.intelligentAgentPlatform.taskScheduling/FLOW_INTELLIGENT_AGENT_PLANNING',
      params: { ...params },
    },
  });
};


export const flowIntelligentAgentPlanningFacade = async (params: FlowIntelligentAgentPlanningParams): Promise<FlowIntelligentAgentPlanningResults> => {
  const { data: { value } } =  await flowIntelligentAgentPlanning(params);
  return value;
};