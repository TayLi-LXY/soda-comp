import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';
import type { HistoricalRecordEntity } from '@/flows/com.horsecoder.platform.mall.aiMarketing/QueryConversationHistory/types/HistoricalRecordEntity';

/**
 * 入参明细:
 * accountId 账户ID
 */
export interface FlowQueryConversationHistoryParams {
  accountId: string;
}

/**
 * 出参明细:
 * historicalRecordEntity 历史记录实体
 */
export interface FlowQueryConversationHistoryResults {
  historicalRecordEntity?: HistoricalRecordEntity[];
}

/**
 * 查询对话历史
 * @com.horsecoder.platform.mall.aiMarketing/FLOW_QUERY_CONVERSATION_HISTORY
 */
export const flowQueryConversationHistory = async (params: FlowQueryConversationHistoryParams): StandardPromise<FlowQueryConversationHistoryResults> => {
  return request('/mall-aiMarketing/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.platform.mall.aiMarketing/FLOW_QUERY_CONVERSATION_HISTORY',
      params: { ...params },
    },
  });
};


export const flowQueryConversationHistoryFacade = async (params: FlowQueryConversationHistoryParams): Promise<FlowQueryConversationHistoryResults> => {
  const { data: { value } } =  await flowQueryConversationHistory(params);
  return value;
};