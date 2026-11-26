import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';

/**
 * 入参明细:
 * listOfDependentProductNumbers 依赖的产品编号列表
 */
export interface FlowVerifyListingStatusOfDependenciesBasedOnProductCodeListParams {
  listOfDependentProductNumbers: string[];
}

/**
 * 出参明细:
 */
export interface FlowVerifyListingStatusOfDependenciesBasedOnProductCodeListResults {
}

/**
 * 根据产品编码列表校验依赖的上架状态
 * @com.horsecoder.market/FLOW_VERIFY_LISTING_STATUS_OF_DEPENDENCIES_BASED_ON_PRODUCT_CODE_LIST
 */
export const flowVerifyListingStatusOfDependenciesBasedOnProductCodeList = async (params: FlowVerifyListingStatusOfDependenciesBasedOnProductCodeListParams): StandardPromise<FlowVerifyListingStatusOfDependenciesBasedOnProductCodeListResults> => {
  return request('/horsecoder-market/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.market/FLOW_VERIFY_LISTING_STATUS_OF_DEPENDENCIES_BASED_ON_PRODUCT_CODE_LIST',
      params: { ...params },
    },
  });
};


export const flowVerifyListingStatusOfDependenciesBasedOnProductCodeListFacade = async (params: FlowVerifyListingStatusOfDependenciesBasedOnProductCodeListParams): Promise<FlowVerifyListingStatusOfDependenciesBasedOnProductCodeListResults> => {
  const { data: { value } } =  await flowVerifyListingStatusOfDependenciesBasedOnProductCodeList(params);
  return value;
};