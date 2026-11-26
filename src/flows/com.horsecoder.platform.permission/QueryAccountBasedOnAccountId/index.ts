import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';
import type { AccountResult } from '@/flows/com.horsecoder.platform.permission/QueryAccountBasedOnAccountId/types/AccountResult';

/**
 * 入参明细:
 * accountId 账户ID
 */
export interface FlowQueryAccountBasedOnAccountIdParams {
  accountId: string;
}

/**
 * 出参明细:
 * accountResult 账户结果
 */
export interface FlowQueryAccountBasedOnAccountIdResults {
  accountResult: AccountResult;
}

/**
 * 根据账户ID查询账户
 * @com.horsecoder.platform.permission/FLOW_QUERY_ACCOUNT_BASED_ON_ACCOUNT_ID
 */
export const flowQueryAccountBasedOnAccountId = async (params: FlowQueryAccountBasedOnAccountIdParams): StandardPromise<FlowQueryAccountBasedOnAccountIdResults> => {
  return request('/horsecoder-platform-permission/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.platform.permission/FLOW_QUERY_ACCOUNT_BASED_ON_ACCOUNT_ID',
      params: { ...params },
    },
  });
};


export const flowQueryAccountBasedOnAccountIdFacade = async (params: FlowQueryAccountBasedOnAccountIdParams): Promise<FlowQueryAccountBasedOnAccountIdResults> => {
  const { data: { value } } =  await flowQueryAccountBasedOnAccountId(params);
  return value;
};