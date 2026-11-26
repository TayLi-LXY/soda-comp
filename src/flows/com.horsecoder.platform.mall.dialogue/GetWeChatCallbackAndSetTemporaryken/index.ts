import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';

/**
 * 入参明细:
 * code code
 */
export interface FlowGetWeChatCallbackAndSetTemporarykenParams {
  code: string;
}

/**
 * 出参明细:
 * ifRegistered 是否注册过
 */
export interface FlowGetWeChatCallbackAndSetTemporarykenResults {
  ifRegistered: any;
}

/**
 * 获取微信回调并设置临时token
 * @com.horsecoder.platform.mall.dialogue/FLOW_GET_WE_CHAT_CALLBACK_AND_SET_TEMPORARYKEN
 */
export const flowGetWeChatCallbackAndSetTemporaryken = async (params: FlowGetWeChatCallbackAndSetTemporarykenParams): StandardPromise<FlowGetWeChatCallbackAndSetTemporarykenResults> => {
  return request('/mall-dialogue/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.platform.mall.dialogue/FLOW_GET_WE_CHAT_CALLBACK_AND_SET_TEMPORARYKEN',
      params: { ...params },
    },
  });
};


export const flowGetWeChatCallbackAndSetTemporarykenFacade = async (params: FlowGetWeChatCallbackAndSetTemporarykenParams): Promise<FlowGetWeChatCallbackAndSetTemporarykenResults> => {
  const { data: { value } } =  await flowGetWeChatCallbackAndSetTemporaryken(params);
  return value;
};