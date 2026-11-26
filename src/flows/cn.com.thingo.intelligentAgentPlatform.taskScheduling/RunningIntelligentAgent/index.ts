import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';

/**
 * 入参明细:
 * agentId 智能体ID
 * agentGroupId 智能体组ID
 * organizeId 组织ID
 * agentName 智能体名称
 * agentGroupName 智能体组名称
 */
export interface FlowRunningIntelligentAgentParams {
  agentId: string;
  agentGroupId: string;
  organizeId: string;
  agentName: string;
  agentGroupName: string;
}

/**
 * 出参明细:
 */
export interface FlowRunningIntelligentAgentResults {
}

/**
 * 运行智能体
 * @cn.com.thingo.intelligentAgentPlatform.taskScheduling/FLOW_RUNNING_INTELLIGENT_AGENT
 */
export const flowRunningIntelligentAgent = async (params: FlowRunningIntelligentAgentParams): StandardPromise<FlowRunningIntelligentAgentResults> => {
  return request('/intelligentAgentPlatform-taskScheduling/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@cn.com.thingo.intelligentAgentPlatform.taskScheduling/FLOW_RUNNING_INTELLIGENT_AGENT',
      params: { ...params },
    },
  });
};


export const flowRunningIntelligentAgentFacade = async (params: FlowRunningIntelligentAgentParams): Promise<FlowRunningIntelligentAgentResults> => {
  const { data: { value } } =  await flowRunningIntelligentAgent(params);
  return value;
};