import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';

/**
 * 入参明细:
 * packageId 套餐ID
 */
export interface FlowDeletePackageBasedOnIdParams {
  packageId: string;
}

/**
 * 出参明细:
 */
export interface FlowDeletePackageBasedOnIdResults {
}

/**
 * 根据Id删除套餐
 * @com.horsecoder.market/FLOW_DELETE_PACKAGE_BASED_ON_ID
 */
export const flowDeletePackageBasedOnId = async (params: FlowDeletePackageBasedOnIdParams): StandardPromise<FlowDeletePackageBasedOnIdResults> => {
  return request('/horsecoder-market/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.market/FLOW_DELETE_PACKAGE_BASED_ON_ID',
      params: { ...params },
    },
  });
};


export const flowDeletePackageBasedOnIdFacade = async (params: FlowDeletePackageBasedOnIdParams): Promise<FlowDeletePackageBasedOnIdResults> => {
  const { data: { value } } =  await flowDeletePackageBasedOnId(params);
  return value;
};