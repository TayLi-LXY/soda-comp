import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';

/**
 * 入参明细:
 */
export interface FlowVerifyPaymentAccountParams {
}

/**
 * 出参明细:
 */
export interface FlowVerifyPaymentAccountResults {
}

/**
 * 验证支付账户
 * @com.horsecoder.platform.mall.dialogue/FLOW_VERIFY_PAYMENT_ACCOUNT
 */
export const flowVerifyPaymentAccount = async (params: FlowVerifyPaymentAccountParams): StandardPromise<FlowVerifyPaymentAccountResults> => {
  return request('/mall-dialogue/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.platform.mall.dialogue/FLOW_VERIFY_PAYMENT_ACCOUNT',
      params: { ...params },
    },
  });
};


export const flowVerifyPaymentAccountFacade = async (params: FlowVerifyPaymentAccountParams): Promise<FlowVerifyPaymentAccountResults> => {
  const { data: { value } } =  await flowVerifyPaymentAccount(params);
  return value;
};