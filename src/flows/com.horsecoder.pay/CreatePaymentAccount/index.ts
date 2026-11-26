import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';

/**
 * 入参明细:
 * name 名称
 * type 类型
 * paymentAccountId 支付账户ID
 */
export interface FlowCreatePaymentAccountParams {
  name: string;
  type: number;
  paymentAccountId?: string;
}

/**
 * 出参明细:
 * paymentAccountEntity 支付账户实体
 */
export interface FlowCreatePaymentAccountResults {
  paymentAccountEntity: any;
}

/**
 * 创建支付账户
 * @com.horsecoder.pay/FLOW_CREATE_PAYMENT_ACCOUNT
 */
export const flowCreatePaymentAccount = async (params: FlowCreatePaymentAccountParams): StandardPromise<FlowCreatePaymentAccountResults> => {
  return request('/horsecoder-pay/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.pay/FLOW_CREATE_PAYMENT_ACCOUNT',
      params: { ...params },
    },
  });
};


export const flowCreatePaymentAccountFacade = async (params: FlowCreatePaymentAccountParams): Promise<FlowCreatePaymentAccountResults> => {
  const { data: { value } } =  await flowCreatePaymentAccount(params);
  return value;
};