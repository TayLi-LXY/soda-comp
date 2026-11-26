import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';
import type { AddOrganizeEntity } from '@/flows/com.horsecoder.platform.permission/BatchAddOrganizeAndSpecifyAdministrator/types/AddOrganizeEntity';
import type { OrganizeTO } from '@/flows/com.horsecoder.platform.permission/BuildAnOrganizeTreeBasedOnOrganizeList/types/OrganizeTO';

/**
 * 入参明细:
 * addOrganizeEntityList 新增组织实体列表
 */
export interface FlowBatchAddOrganizeAndSpecifyAdministratorParams {
  addOrganizeEntityList: AddOrganizeEntity[];
}

/**
 * 出参明细:
 * addOrganizeMap 新增组织Map
 */
export interface FlowBatchAddOrganizeAndSpecifyAdministratorResults {
  addOrganizeMap: any;
}

/**
 * 批量新增组织并指定管理员
 * @com.horsecoder.platform.permission/FLOW_BATCH_ADD_ORGANIZE_AND_SPECIFY_ADMINISTRATOR
 */
export const flowBatchAddOrganizeAndSpecifyAdministrator = async (params: FlowBatchAddOrganizeAndSpecifyAdministratorParams): StandardPromise<FlowBatchAddOrganizeAndSpecifyAdministratorResults> => {
  return request('/horsecoder-platform-permission/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.platform.permission/FLOW_BATCH_ADD_ORGANIZE_AND_SPECIFY_ADMINISTRATOR',
      params: { ...params },
    },
  });
};


export const flowBatchAddOrganizeAndSpecifyAdministratorFacade = async (params: FlowBatchAddOrganizeAndSpecifyAdministratorParams): Promise<FlowBatchAddOrganizeAndSpecifyAdministratorResults> => {
  const { data: { value } } =  await flowBatchAddOrganizeAndSpecifyAdministrator(params);
  return value;
};