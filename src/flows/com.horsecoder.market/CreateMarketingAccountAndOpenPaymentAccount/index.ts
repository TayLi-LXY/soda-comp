import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';

/**
 * 入参明细:
 * name 名称
 * type 类型
 * marketingAccountId 营销账户ID
 */
export interface FlowCreateMarketingAccountAndOpenPaymentAccountParams {
  name: string;
  type: number;
  marketingAccountId?: string;
}

/**
 * 出参明细:
 * paymentAccountEntity 支付账户实体
 * marketAccountEntity 营销账户实体
 */
export interface FlowCreateMarketingAccountAndOpenPaymentAccountResults {
  paymentAccountEntity: any;
  marketAccountEntity: any;
}

/**
 * 创建营销账户并开通支付账户
 * @com.horsecoder.market/FLOW_CREATE_MARKETING_ACCOUNT_AND_OPEN_PAYMENT_ACCOUNT
 */
export const flowCreateMarketingAccountAndOpenPaymentAccount = async (params: FlowCreateMarketingAccountAndOpenPaymentAccountParams): StandardPromise<FlowCreateMarketingAccountAndOpenPaymentAccountResults> => {
  return request('/horsecoder-market/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.market/FLOW_CREATE_MARKETING_ACCOUNT_AND_OPEN_PAYMENT_ACCOUNT',
      params: { ...params },
    },
  });
};


export const flowCreateMarketingAccountAndOpenPaymentAccountFacade = async (params: FlowCreateMarketingAccountAndOpenPaymentAccountParams): Promise<FlowCreateMarketingAccountAndOpenPaymentAccountResults> => {
  const { data: { value } } =  await flowCreateMarketingAccountAndOpenPaymentAccount(params);
  return value;
};