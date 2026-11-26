import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';

/**
 * 入参明细:
 * conversationId 会话ID
 */
export interface FlowGetAllUserIdsForSessionParams {
  conversationId: string;
}

/**
 * 出参明细:
 * userIdList 用户ID列表
 */
export interface FlowGetAllUserIdsForSessionResults {
  userIdList: string[];
}

/**
 * 获取会话所有用户ID
 * @com.horsecoder.im/FLOW_GET_ALL_USER_IDS_FOR_SESSION
 */
export const flowGetAllUserIdsForSession = async (params: FlowGetAllUserIdsForSessionParams): StandardPromise<FlowGetAllUserIdsForSessionResults> => {
  return request('/app-im/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.im/FLOW_GET_ALL_USER_IDS_FOR_SESSION',
      params: { ...params },
    },
  });
};


export const flowGetAllUserIdsForSessionFacade = async (params: FlowGetAllUserIdsForSessionParams): Promise<FlowGetAllUserIdsForSessionResults> => {
  const { data: { value } } =  await flowGetAllUserIdsForSession(params);
  return value;
};