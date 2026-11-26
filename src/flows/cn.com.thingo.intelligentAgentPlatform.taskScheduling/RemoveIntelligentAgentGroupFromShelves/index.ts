import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';

/**
 * 入参明细:
 * intelligentAgentGroupId 智能体组ID
 */
export interface FlowRemoveIntelligentAgentGroupFromShelvesParams {
  intelligentAgentGroupId: string;
}

/**
 * 出参明细:
 * returnResult 返回结果
 */
export interface FlowRemoveIntelligentAgentGroupFromShelvesResults {
  returnResult: any;
}

/**
 * 下架智能体组
 * @cn.com.thingo.intelligentAgentPlatform.taskScheduling/FLOW_REMOVE_INTELLIGENT_AGENT_GROUP_FROM_SHELVES
 */
export const flowRemoveIntelligentAgentGroupFromShelves = async (params: FlowRemoveIntelligentAgentGroupFromShelvesParams): StandardPromise<FlowRemoveIntelligentAgentGroupFromShelvesResults> => {
  return request('/intelligentAgentPlatform-taskScheduling/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@cn.com.thingo.intelligentAgentPlatform.taskScheduling/FLOW_REMOVE_INTELLIGENT_AGENT_GROUP_FROM_SHELVES',
      params: { ...params },
    },
  });
};


export const flowRemoveIntelligentAgentGroupFromShelvesFacade = async (params: FlowRemoveIntelligentAgentGroupFromShelvesParams): Promise<FlowRemoveIntelligentAgentGroupFromShelvesResults> => {
  const { data: { value } } =  await flowRemoveIntelligentAgentGroupFromShelves(params);
  return value;
};