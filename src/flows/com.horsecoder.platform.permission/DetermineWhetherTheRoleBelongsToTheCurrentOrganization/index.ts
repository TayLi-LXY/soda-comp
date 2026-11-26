import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';

/**
 * 入参明细:
 * roleId 角色ID
 * organizeId 组织ID
 */
export interface FlowDetermineWhetherTheRoleBelongsToTheCurrentOrganizationParams {
  roleId: string;
  organizeId: string;
}

/**
 * 出参明细:
 * isRoleBelongToOrganization 角色是否属于组织
 */
export interface FlowDetermineWhetherTheRoleBelongsToTheCurrentOrganizationResults {
  isRoleBelongToOrganization: any;
}

/**
 * 判断角色是否属于当前组织
 * @com.horsecoder.platform.permission/FLOW_DETERMINE_WHETHER_THE_ROLE_BELONGS_TO_THE_CURRENT_ORGANIZATION
 */
export const flowDetermineWhetherTheRoleBelongsToTheCurrentOrganization = async (params: FlowDetermineWhetherTheRoleBelongsToTheCurrentOrganizationParams): StandardPromise<FlowDetermineWhetherTheRoleBelongsToTheCurrentOrganizationResults> => {
  return request('/horsecoder-platform-permission/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.platform.permission/FLOW_DETERMINE_WHETHER_THE_ROLE_BELONGS_TO_THE_CURRENT_ORGANIZATION',
      params: { ...params },
    },
  });
};


export const flowDetermineWhetherTheRoleBelongsToTheCurrentOrganizationFacade = async (params: FlowDetermineWhetherTheRoleBelongsToTheCurrentOrganizationParams): Promise<FlowDetermineWhetherTheRoleBelongsToTheCurrentOrganizationResults> => {
  const { data: { value } } =  await flowDetermineWhetherTheRoleBelongsToTheCurrentOrganization(params);
  return value;
};