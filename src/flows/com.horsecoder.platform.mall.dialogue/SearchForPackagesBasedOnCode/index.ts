import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';
import type { SubscriptionPackage } from '@/flows/com.horsecoder.platform.mall.dialogue/SearchForPackagesBasedOnCode/types/SubscriptionPackage';

/**
 * 入参明细:
 * productCode 产品编码
 */
export interface FlowSearchForPackagesBasedOnCodeParams {
  productCode: string;
}

/**
 * 出参明细:
 * subscriptionPackage 订阅套餐
 */
export interface FlowSearchForPackagesBasedOnCodeResults {
  subscriptionPackage: SubscriptionPackage;
}

/**
 * 根据Code查询套餐
 * @com.horsecoder.platform.mall.dialogue/FLOW_SEARCH_FOR_PACKAGES_BASED_ON_CODE
 */
export const flowSearchForPackagesBasedOnCode = async (params: FlowSearchForPackagesBasedOnCodeParams): StandardPromise<FlowSearchForPackagesBasedOnCodeResults> => {
  return request('/mall-dialogue/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.platform.mall.dialogue/FLOW_SEARCH_FOR_PACKAGES_BASED_ON_CODE',
      params: { ...params },
    },
  });
};


export const flowSearchForPackagesBasedOnCodeFacade = async (params: FlowSearchForPackagesBasedOnCodeParams): Promise<FlowSearchForPackagesBasedOnCodeResults> => {
  const { data: { value } } =  await flowSearchForPackagesBasedOnCode(params);
  return value;
};