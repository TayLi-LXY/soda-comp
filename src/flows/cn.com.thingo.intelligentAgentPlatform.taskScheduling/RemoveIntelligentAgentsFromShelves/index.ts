import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';

/**
 * 入参明细:
 * intelligentAgentId 智能体ID
 */
export interface FlowRemoveIntelligentAgentsFromShelvesParams {
  intelligentAgentId: string;
}

/**
 * 出参明细:
 * returnResult 返回结果
 */
export interface FlowRemoveIntelligentAgentsFromShelvesResults {
  returnResult: any;
}

/**
 * 下架智能体
 * @cn.com.thingo.intelligentAgentPlatform.taskScheduling/FLOW_REMOVE_INTELLIGENT_AGENTS_FROM_SHELVES
 */
export const flowRemoveIntelligentAgentsFromShelves = async (params: FlowRemoveIntelligentAgentsFromShelvesParams): StandardPromise<FlowRemoveIntelligentAgentsFromShelvesResults> => {
  return request('/intelligentAgentPlatform-taskScheduling/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@cn.com.thingo.intelligentAgentPlatform.taskScheduling/FLOW_REMOVE_INTELLIGENT_AGENTS_FROM_SHELVES',
      params: { ...params },
    },
  });
};


export const flowRemoveIntelligentAgentsFromShelvesFacade = async (params: FlowRemoveIntelligentAgentsFromShelvesParams): Promise<FlowRemoveIntelligentAgentsFromShelvesResults> => {
  const { data: { value } } =  await flowRemoveIntelligentAgentsFromShelves(params);
  return value;
};