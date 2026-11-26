import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';

/**
 * 入参明细:
 * listOfDependentProductNumbers 依赖的产品编号列表
 * productCode 产品编号
 */
export interface FlowCreateProductDependenciesBasedOnProductCodesParams {
  listOfDependentProductNumbers: string[];
  productCode: string;
}

/**
 * 出参明细:
 */
export interface FlowCreateProductDependenciesBasedOnProductCodesResults {
}

/**
 * 根据产品编号创建产品依赖
 * @com.horsecoder.market/FLOW_CREATE_PRODUCT_DEPENDENCIES_BASED_ON_PRODUCT_CODES
 */
export const flowCreateProductDependenciesBasedOnProductCodes = async (params: FlowCreateProductDependenciesBasedOnProductCodesParams): StandardPromise<FlowCreateProductDependenciesBasedOnProductCodesResults> => {
  return request('/horsecoder-market/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.market/FLOW_CREATE_PRODUCT_DEPENDENCIES_BASED_ON_PRODUCT_CODES',
      params: { ...params },
    },
  });
};


export const flowCreateProductDependenciesBasedOnProductCodesFacade = async (params: FlowCreateProductDependenciesBasedOnProductCodesParams): Promise<FlowCreateProductDependenciesBasedOnProductCodesResults> => {
  const { data: { value } } =  await flowCreateProductDependenciesBasedOnProductCodes(params);
  return value;
};