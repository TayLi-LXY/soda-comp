import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';
import type { AddTemporaryMessage } from '@/flows/com.horsecoder.platform.mall.aiMarketing/AddTemporaryMessage/types/AddTemporaryMessage';

/**
 * 入参明细:
 * addTemporaryMessage 新增临时消息
 */
export interface FlowAddTemporaryMessageParams {
  addTemporaryMessage?: AddTemporaryMessage;
}

/**
 * 出参明细:
 * temporaryMessageId 临时消息ID
 */
export interface FlowAddTemporaryMessageResults {
  temporaryMessageId?: string;
}

/**
 * 新增临时消息
 * @com.horsecoder.platform.mall.aiMarketing/FLOW_ADD_TEMPORARY_MESSAGE
 */
export const flowAddTemporaryMessage = async (params: FlowAddTemporaryMessageParams): StandardPromise<FlowAddTemporaryMessageResults> => {
  return request('/mall-aiMarketing/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.platform.mall.aiMarketing/FLOW_ADD_TEMPORARY_MESSAGE',
      params: { ...params },
    },
  });
};


export const flowAddTemporaryMessageFacade = async (params: FlowAddTemporaryMessageParams): Promise<FlowAddTemporaryMessageResults> => {
  const { data: { value } } =  await flowAddTemporaryMessage(params);
  return value;
};