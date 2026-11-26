import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';
import type { BindOrganizeModel } from '@/flows/com.horsecoder.platform.permission/BatchBindOrganizeAccounts/types/BindOrganizeModel';

/**
 * 入参明细:
 * bindOrganizeModelList 绑定组织模型列表
 */
export interface FlowBatchBindOrganizeAccountsParams {
  bindOrganizeModelList: BindOrganizeModel[];
}

/**
 * 出参明细:
 */
export interface FlowBatchBindOrganizeAccountsResults {
}

/**
 * 批量绑定组织账户
 * @com.horsecoder.platform.permission/FLOW_BATCH_BIND_ORGANIZE_ACCOUNTS
 */
export const flowBatchBindOrganizeAccounts = async (params: FlowBatchBindOrganizeAccountsParams): StandardPromise<FlowBatchBindOrganizeAccountsResults> => {
  return request('/horsecoder-platform-permission/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.platform.permission/FLOW_BATCH_BIND_ORGANIZE_ACCOUNTS',
      params: { ...params },
    },
  });
};


export const flowBatchBindOrganizeAccountsFacade = async (params: FlowBatchBindOrganizeAccountsParams): Promise<FlowBatchBindOrganizeAccountsResults> => {
  const { data: { value } } =  await flowBatchBindOrganizeAccounts(params);
  return value;
};