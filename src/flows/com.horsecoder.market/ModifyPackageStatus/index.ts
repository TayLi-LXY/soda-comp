import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';

/**
 * 入参明细:
 * packageId 套餐ID
 * modifiedStatus 修改后状态
 */
export interface FlowModifyPackageStatusParams {
  packageId: string;
  modifiedStatus: string;
}

/**
 * 出参明细:
 */
export interface FlowModifyPackageStatusResults {
}

/**
 * 修改套餐状态
 * @com.horsecoder.market/FLOW_MODIFY_PACKAGE_STATUS
 */
export const flowModifyPackageStatus = async (params: FlowModifyPackageStatusParams): StandardPromise<FlowModifyPackageStatusResults> => {
  return request('/horsecoder-market/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.market/FLOW_MODIFY_PACKAGE_STATUS',
      params: { ...params },
    },
  });
};


export const flowModifyPackageStatusFacade = async (params: FlowModifyPackageStatusParams): Promise<FlowModifyPackageStatusResults> => {
  const { data: { value } } =  await flowModifyPackageStatus(params);
  return value;
};