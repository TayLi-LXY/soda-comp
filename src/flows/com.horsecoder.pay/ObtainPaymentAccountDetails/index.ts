import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';

/**
 * 入参明细:
 * accountId 账户ID
 */
export interface FlowObtainPaymentAccountDetailsParams {
  accountId: string;
}

/**
 * 出参明细:
 * accountWallet 账户钱包
 * paymentAccount 支付账户
 */
export interface FlowObtainPaymentAccountDetailsResults {
  accountWallet: any;
  paymentAccount: any;
}

/**
 * 获取支付账户详情
 * @com.horsecoder.pay/FLOW_OBTAIN_PAYMENT_ACCOUNT_DETAILS
 */
export const flowObtainPaymentAccountDetails = async (params: FlowObtainPaymentAccountDetailsParams): StandardPromise<FlowObtainPaymentAccountDetailsResults> => {
  return request('/horsecoder-pay/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.pay/FLOW_OBTAIN_PAYMENT_ACCOUNT_DETAILS',
      params: { ...params },
    },
  });
};


export const flowObtainPaymentAccountDetailsFacade = async (params: FlowObtainPaymentAccountDetailsParams): Promise<FlowObtainPaymentAccountDetailsResults> => {
  const { data: { value } } =  await flowObtainPaymentAccountDetails(params);
  return value;
};