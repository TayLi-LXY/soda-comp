import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';

/**
 * 入参明细:
 * dialogueAccountId 对话账户ID
 */
export interface FlowUpdateCurrentConversationAccountTypeParams {
  dialogueAccountId: string;
}

/**
 * 出参明细:
 */
export interface FlowUpdateCurrentConversationAccountTypeResults {
}

/**
 * 更新当前对话账户类型
 * @com.horsecoder.platform.mall.aiMarketing/FLOW_UPDATE_CURRENT_CONVERSATION_ACCOUNT_TYPE
 */
export const flowUpdateCurrentConversationAccountType = async (params: FlowUpdateCurrentConversationAccountTypeParams): StandardPromise<FlowUpdateCurrentConversationAccountTypeResults> => {
  return request('/mall-aiMarketing/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.platform.mall.aiMarketing/FLOW_UPDATE_CURRENT_CONVERSATION_ACCOUNT_TYPE',
      params: { ...params },
    },
  });
};


export const flowUpdateCurrentConversationAccountTypeFacade = async (params: FlowUpdateCurrentConversationAccountTypeParams): Promise<FlowUpdateCurrentConversationAccountTypeResults> => {
  const { data: { value } } =  await flowUpdateCurrentConversationAccountType(params);
  return value;
};