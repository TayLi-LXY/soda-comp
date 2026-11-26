import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';
import type { ModelJsonModel } from '@/flows/com.horsecoder.model/NewModelJson/types/ModelJsonModel';
import type { ProductStandard } from '@/flows/com.horsecoder.model/CreateModelsAndProducts/types/ProductStandard';

/**
 * 入参明细:
 * spaceId 空间id
 * title 应用标题
 * name 应用名
 * description 应用描述
 * cover 应用封面
 * userId 用户id
 * subType 子类型
 */
export interface FlowCreateModelsAndProductsParams {
  spaceId: string;
  title: string;
  name: string;
  description: string;
  cover?: string;
  userId: string;
  subType?: string;
}

/**
 * 出参明细:
 * newModelJsonModel 新模型文件模型
 * appId 应用id
 * projectId 项目ID
 * productId 产品ID
 * targetProduct 目标产品
 */
export interface FlowCreateModelsAndProductsResults {
  newModelJsonModel: ModelJsonModel;
  appId: string;
  projectId: string;
  productId: string;
  targetProduct: ProductStandard;
}

/**
 * 创建模型和产品
 * @com.horsecoder.model/FLOW_CREATE_MODELS_AND_PRODUCTS
 */
export const flowCreateModelsAndProducts = async (params: FlowCreateModelsAndProductsParams): StandardPromise<FlowCreateModelsAndProductsResults> => {
  return request('/horsecoder-model/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.model/FLOW_CREATE_MODELS_AND_PRODUCTS',
      params: { ...params },
    },
  });
};


export const flowCreateModelsAndProductsFacade = async (params: FlowCreateModelsAndProductsParams): Promise<FlowCreateModelsAndProductsResults> => {
  const { data: { value } } =  await flowCreateModelsAndProducts(params);
  return value;
};