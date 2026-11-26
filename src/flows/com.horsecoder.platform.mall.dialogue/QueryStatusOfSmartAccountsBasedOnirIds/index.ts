import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';
import type { DataSmartAccountMember } from '@/flows/com.horsecoder.platform.mall.dialogue/CreateDataSmartAccountMembership/types/DataSmartAccountMember';

/**
 * 入参明细:
 * userId 用户ID
 */
export interface FlowQueryStatusOfSmartAccountsBasedOnirIdsParams {
  userId: string;
}

/**
 * 出参明细:
 * dataSmartAccountMember 数据智能账户
 */
export interface FlowQueryStatusOfSmartAccountsBasedOnirIdsResults {
  dataSmartAccountMember?: DataSmartAccountMember;
}

/**
 * 根据ID查询数据智能账户状态
 * @com.horsecoder.platform.mall.dialogue/FLOW_QUERY_STATUS_OF_SMART_ACCOUNTS_BASED_ONIR_IDS
 */
export const flowQueryStatusOfSmartAccountsBasedOnirIds = async (params: FlowQueryStatusOfSmartAccountsBasedOnirIdsParams): StandardPromise<FlowQueryStatusOfSmartAccountsBasedOnirIdsResults> => {
  return request('/mall-dialogue/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.platform.mall.dialogue/FLOW_QUERY_STATUS_OF_SMART_ACCOUNTS_BASED_ONIR_IDS',
      params: { ...params },
    },
  });
};


export const flowQueryStatusOfSmartAccountsBasedOnirIdsFacade = async (params: FlowQueryStatusOfSmartAccountsBasedOnirIdsParams): Promise<FlowQueryStatusOfSmartAccountsBasedOnirIdsResults> => {
  const { data: { value } } =  await flowQueryStatusOfSmartAccountsBasedOnirIds(params);
  return value;
};