import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';
import type { MallUserAddReturned } from '@/flows/com.horsecoder.platform.mall/CreateMallUsersAndOpenMarketAndPaymentAccounts/types/MallUserAddReturned';

/**
 * 入参明细:
 * phone 手机号
 * password 密码
 * name 名称
 * mallAccountId 商城账户ID
 */
export interface FlowCreateMallUsersAndOpenMarketAndPaymentAccountsParams {
  phone: string;
  password: string;
  name?: string;
  mallAccountId?: string;
}

/**
 * 出参明细:
 * mallUser 商城用户新增返回
 */
export interface FlowCreateMallUsersAndOpenMarketAndPaymentAccountsResults {
  mallUser: MallUserAddReturned;
}

/**
 * 创建商城用户并开通营销账户和支付账户
 * @com.horsecoder.platform.mall/FLOW_CREATE_MALL_USERS_AND_OPEN_MARKET_AND_PAYMENT_ACCOUNTS
 */
export const flowCreateMallUsersAndOpenMarketAndPaymentAccounts = async (params: FlowCreateMallUsersAndOpenMarketAndPaymentAccountsParams): StandardPromise<FlowCreateMallUsersAndOpenMarketAndPaymentAccountsResults> => {
  return request('/mall-mall/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.platform.mall/FLOW_CREATE_MALL_USERS_AND_OPEN_MARKET_AND_PAYMENT_ACCOUNTS',
      params: { ...params },
    },
  });
};


export const flowCreateMallUsersAndOpenMarketAndPaymentAccountsFacade = async (params: FlowCreateMallUsersAndOpenMarketAndPaymentAccountsParams): Promise<FlowCreateMallUsersAndOpenMarketAndPaymentAccountsResults> => {
  const { data: { value } } =  await flowCreateMallUsersAndOpenMarketAndPaymentAccounts(params);
  return value;
};