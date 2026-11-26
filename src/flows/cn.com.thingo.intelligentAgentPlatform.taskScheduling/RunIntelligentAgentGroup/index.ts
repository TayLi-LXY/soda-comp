import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';
import type { IntelligentAgentInformation } from '@/flows/cn.com.thingo.intelligentAgentPlatform.taskScheduling/RunIntelligentAgentGroup/types/IntelligentAgentInformation';

/**
 * 入参明细:
 * intelligentAgentGroupId 智能体组ID
 * nameOfIntelligentAgentGroup 智能体组名称
 * organizeId 组织ID
 * listOfIntelligentAgents 智能体列表
 * agentGroupType 智能体组类型
 */
export interface FlowRunIntelligentAgentGroupParams {
  intelligentAgentGroupId: string;
  nameOfIntelligentAgentGroup: string;
  organizeId: string;
  listOfIntelligentAgents: IntelligentAgentInformation[];
  agentGroupType: string;
}

/**
 * 出参明细:
 */
export interface FlowRunIntelligentAgentGroupResults {
}

/**
 * 运行智能体组
 * @cn.com.thingo.intelligentAgentPlatform.taskScheduling/FLOW_RUN_INTELLIGENT_AGENT_GROUP
 */
export const flowRunIntelligentAgentGroup = async (params: FlowRunIntelligentAgentGroupParams): StandardPromise<FlowRunIntelligentAgentGroupResults> => {
  return request('/intelligentAgentPlatform-taskScheduling/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@cn.com.thingo.intelligentAgentPlatform.taskScheduling/FLOW_RUN_INTELLIGENT_AGENT_GROUP',
      params: { ...params },
    },
  });
};


export const flowRunIntelligentAgentGroupFacade = async (params: FlowRunIntelligentAgentGroupParams): Promise<FlowRunIntelligentAgentGroupResults> => {
  const { data: { value } } =  await flowRunIntelligentAgentGroup(params);
  return value;
};