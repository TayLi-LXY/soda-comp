import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';
import type { IMMessageEntity } from '@/flows/com.horsecoder.im/UpdateIMCallbackInformation/types/IMMessageEntity';

/**
 * 入参明细:
 * iMMessageEntity IM消息实体
 */
export interface FlowUpdateIMCallbackInformationParams {
  iMMessageEntity: IMMessageEntity;
}

/**
 * 出参明细:
 */
export interface FlowUpdateIMCallbackInformationResults {
}

/**
 * 更新IM回调信息
 * @com.horsecoder.im/FLOW_UPDATE_I_M_CALLBACK_INFORMATION
 */
export const flowUpdateIMCallbackInformation = async (params: FlowUpdateIMCallbackInformationParams): StandardPromise<FlowUpdateIMCallbackInformationResults> => {
  return request('/app-im/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.im/FLOW_UPDATE_I_M_CALLBACK_INFORMATION',
      params: { ...params },
    },
  });
};


export const flowUpdateIMCallbackInformationFacade = async (params: FlowUpdateIMCallbackInformationParams): Promise<FlowUpdateIMCallbackInformationResults> => {
  const { data: { value } } =  await flowUpdateIMCallbackInformation(params);
  return value;
};