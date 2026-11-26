import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';
import type { OrganizeTO } from '@/flows/com.horsecoder.platform.permission/BuildAnOrganizeTreeBasedOnOrganizeList/types/OrganizeTO';

/**
 * 入参明细:
 * organize 组织
 * templateParameterMap 模板参数字典
 */
export interface FlowNewSubordinateOrganizeParams {
  organize: OrganizeTO;
  templateParameterMap?: any;
}

/**
 * 出参明细:
 * newOrganizeId 新组织ID
 * newOrganize 新组织
 */
export interface FlowNewSubordinateOrganizeResults {
  newOrganizeId?: string;
  newOrganize: OrganizeTO;
}

/**
 * 新建下级组织
 * @com.horsecoder.platform.permission/FLOW_NEW_SUBORDINATE_ORGANIZE
 */
export const flowNewSubordinateOrganize = async (params: FlowNewSubordinateOrganizeParams): StandardPromise<FlowNewSubordinateOrganizeResults> => {
  return request('/horsecoder-platform-permission/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.platform.permission/FLOW_NEW_SUBORDINATE_ORGANIZE',
      params: { ...params },
    },
  });
};


export const flowNewSubordinateOrganizeFacade = async (params: FlowNewSubordinateOrganizeParams): Promise<FlowNewSubordinateOrganizeResults> => {
  const { data: { value } } =  await flowNewSubordinateOrganize(params);
  return value;
};