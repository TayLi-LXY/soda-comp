import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';

/**
 * 入参明细:
 * userInformation 用户信息
 */
export interface FlowProjectNameIntelligentAgentCallParams {
  userInformation?: string;
}

/**
 * 出参明细:
 * projectName 项目名称
 */
export interface FlowProjectNameIntelligentAgentCallResults {
  projectName?: string;
}

/**
 * 项目名称智能体调用
 * @com.horsecoder.platform.mall.aiMarketing/FLOW_PROJECT_NAME_INTELLIGENT_AGENT_CALL
 */
export const flowProjectNameIntelligentAgentCall = async (params: FlowProjectNameIntelligentAgentCallParams): StandardPromise<FlowProjectNameIntelligentAgentCallResults> => {
  return request('/mall-aiMarketing/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.platform.mall.aiMarketing/FLOW_PROJECT_NAME_INTELLIGENT_AGENT_CALL',
      params: { ...params },
    },
  });
};


export const flowProjectNameIntelligentAgentCallFacade = async (params: FlowProjectNameIntelligentAgentCallParams): Promise<FlowProjectNameIntelligentAgentCallResults> => {
  const { data: { value } } =  await flowProjectNameIntelligentAgentCall(params);
  return value;
};