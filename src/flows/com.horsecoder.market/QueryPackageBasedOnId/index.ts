import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';
import type { PackageDetails } from '@/flows/com.horsecoder.market/QueryPackageBasedOnId/types/PackageDetails';

/**
 * 入参明细:
 * packageId 套餐ID
 */
export interface FlowQueryPackageBasedOnIdParams {
  packageId?: string;
}

/**
 * 出参明细:
 * packageDetails 套餐详情
 */
export interface FlowQueryPackageBasedOnIdResults {
  packageDetails?: PackageDetails;
}

/**
 * 根据Id查询套餐
 * @com.horsecoder.market/FLOW_QUERY_PACKAGE_BASED_ON_ID
 */
export const flowQueryPackageBasedOnId = async (params: FlowQueryPackageBasedOnIdParams): StandardPromise<FlowQueryPackageBasedOnIdResults> => {
  return request('/horsecoder-market/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.market/FLOW_QUERY_PACKAGE_BASED_ON_ID',
      params: { ...params },
    },
  });
};


export const flowQueryPackageBasedOnIdFacade = async (params: FlowQueryPackageBasedOnIdParams): Promise<FlowQueryPackageBasedOnIdResults> => {
  const { data: { value } } =  await flowQueryPackageBasedOnId(params);
  return value;
};