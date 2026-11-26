import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';
import type { OrganizeAdd } from '@/flows/com.horsecoder.platform.permission/AddOrganize/types/OrganizeAdd';
import type { OrganizeReturn } from '@/flows/com.horsecoder.platform.permission/FilterOrganizeList/types/OrganizeReturn';

/**
 * 入参明细:
 * organizeAdd 组织新增
 * templateParameterMap 模板参数字典
 */
export interface FlowAddOrganizeParams {
  organizeAdd: OrganizeAdd;
  templateParameterMap?: any;
}

/**
 * 出参明细:
 * organizeReturn 组织返回
 */
export interface FlowAddOrganizeResults {
  organizeReturn: OrganizeReturn;
}

/**
 * 新增组织
 * @com.horsecoder.platform.permission/FLOW_ADD_ORGANIZE
 */
export const flowAddOrganize = async (params: FlowAddOrganizeParams): StandardPromise<FlowAddOrganizeResults> => {
  return request('/horsecoder-platform-permission/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.platform.permission/FLOW_ADD_ORGANIZE',
      params: { ...params },
    },
  });
};


export const flowAddOrganizeFacade = async (params: FlowAddOrganizeParams): Promise<FlowAddOrganizeResults> => {
  const { data: { value } } =  await flowAddOrganize(params);
  return value;
};