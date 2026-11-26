import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';
import type { OrganizeTO } from '@/flows/com.horsecoder.platform.permission/BuildAnOrganizeTreeBasedOnOrganizeList/types/OrganizeTO';

/**
 * 入参明细:
 * organize 组织
 * assignPersonAccountId 分配人账户ID
 * targetOrganizeId 目标组织ID
 * templateParameterMap 模板参数字典
 */
export interface FlowCreateSubordinateOrganizeWithAdministratorParams {
  organize: OrganizeTO;
  assignPersonAccountId: string;
  targetOrganizeId: string;
  templateParameterMap?: any;
}

/**
 * 出参明细:
 * newOrganizeId 新组织ID
 */
export interface FlowCreateSubordinateOrganizeWithAdministratorResults {
  newOrganizeId?: string;
}

/**
 * 新建下级组织并指定管理员
 * @com.horsecoder.platform.permission/FLOW_CREATE_SUBORDINATE_ORGANIZE_WITH_ADMINISTRATOR
 */
export const flowCreateSubordinateOrganizeWithAdministrator = async (params: FlowCreateSubordinateOrganizeWithAdministratorParams): StandardPromise<FlowCreateSubordinateOrganizeWithAdministratorResults> => {
  return request('/horsecoder-platform-permission/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.platform.permission/FLOW_CREATE_SUBORDINATE_ORGANIZE_WITH_ADMINISTRATOR',
      params: { ...params },
    },
  });
};


export const flowCreateSubordinateOrganizeWithAdministratorFacade = async (params: FlowCreateSubordinateOrganizeWithAdministratorParams): Promise<FlowCreateSubordinateOrganizeWithAdministratorResults> => {
  const { data: { value } } =  await flowCreateSubordinateOrganizeWithAdministrator(params);
  return value;
};