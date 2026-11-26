import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';

/**
 * 入参明细:
 */
export interface FlowQueryPackageParams {
}

/**
 * 出参明细:
 */
export interface FlowQueryPackageResults {
}

/**
 * 查询套餐
 * @com.horsecoder.platform.mall.dialogue/FLOW_QUERY_PACKAGE
 */
export const flowQueryPackage = async (params: FlowQueryPackageParams): StandardPromise<FlowQueryPackageResults> => {
  return request('/mall-dialogue/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.platform.mall.dialogue/FLOW_QUERY_PACKAGE',
      params: { ...params },
    },
  });
};


export const flowQueryPackageFacade = async (params: FlowQueryPackageParams): Promise<FlowQueryPackageResults> => {
  const { data: { value } } =  await flowQueryPackage(params);
  return value;
};