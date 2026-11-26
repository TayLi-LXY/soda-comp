import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';
import type { CreatePackageEntity } from '@/flows/com.horsecoder.market/CreateEditPackage/types/CreatePackageEntity';

/**
 * 入参明细:
 * createPackageEntity 创建套餐实体
 */
export interface FlowCreateEditPackageParams {
  createPackageEntity?: CreatePackageEntity;
}

/**
 * 出参明细:
 * packageId 套餐ID
 */
export interface FlowCreateEditPackageResults {
  packageId?: string;
}

/**
 * 创建编辑套餐
 * @com.horsecoder.market/FLOW_CREATE_EDIT_PACKAGE
 */
export const flowCreateEditPackage = async (params: FlowCreateEditPackageParams): StandardPromise<FlowCreateEditPackageResults> => {
  return request('/horsecoder-market/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.market/FLOW_CREATE_EDIT_PACKAGE',
      params: { ...params },
    },
  });
};


export const flowCreateEditPackageFacade = async (params: FlowCreateEditPackageParams): Promise<FlowCreateEditPackageResults> => {
  const { data: { value } } =  await flowCreateEditPackage(params);
  return value;
};