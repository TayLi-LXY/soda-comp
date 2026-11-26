import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';

/**
 * 入参明细:
 * organizeId 组织ID
 * parentOrganizeId 父组织ID
 */
export interface FlowUpdateOrganizeParentOrganizeParams {
  organizeId: string;
  parentOrganizeId: string;
}

/**
 * 出参明细:
 */
export interface FlowUpdateOrganizeParentOrganizeResults {
}

/**
 * 更新组织父组织
 * @com.horsecoder.platform.permission/FLOW_UPDATE_ORGANIZE_PARENT_ORGANIZE
 */
export const flowUpdateOrganizeParentOrganize = async (params: FlowUpdateOrganizeParentOrganizeParams): StandardPromise<FlowUpdateOrganizeParentOrganizeResults> => {
  return request('/horsecoder-platform-permission/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.platform.permission/FLOW_UPDATE_ORGANIZE_PARENT_ORGANIZE',
      params: { ...params },
    },
  });
};


export const flowUpdateOrganizeParentOrganizeFacade = async (params: FlowUpdateOrganizeParentOrganizeParams): Promise<FlowUpdateOrganizeParentOrganizeResults> => {
  const { data: { value } } =  await flowUpdateOrganizeParentOrganize(params);
  return value;
};