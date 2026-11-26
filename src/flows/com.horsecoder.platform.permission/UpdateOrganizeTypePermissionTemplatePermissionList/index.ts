import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';

/**
 * 入参明细:
 * organizeId 组织ID
 * templateParameterMap 模板参数字典
 */
export interface FlowUpdateOrganizeTypePermissionTemplatePermissionListParams {
  organizeId: string;
  templateParameterMap?: any;
}

/**
 * 出参明细:
 */
export interface FlowUpdateOrganizeTypePermissionTemplatePermissionListResults {
}

/**
 * 更新组织类型权限模板权限列表
 * @com.horsecoder.platform.permission/FLOW_UPDATE_ORGANIZE_TYPE_PERMISSION_TEMPLATE_PERMISSION_LIST
 */
export const flowUpdateOrganizeTypePermissionTemplatePermissionList = async (params: FlowUpdateOrganizeTypePermissionTemplatePermissionListParams): StandardPromise<FlowUpdateOrganizeTypePermissionTemplatePermissionListResults> => {
  return request('/horsecoder-platform-permission/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.platform.permission/FLOW_UPDATE_ORGANIZE_TYPE_PERMISSION_TEMPLATE_PERMISSION_LIST',
      params: { ...params },
    },
  });
};


export const flowUpdateOrganizeTypePermissionTemplatePermissionListFacade = async (params: FlowUpdateOrganizeTypePermissionTemplatePermissionListParams): Promise<FlowUpdateOrganizeTypePermissionTemplatePermissionListResults> => {
  const { data: { value } } =  await flowUpdateOrganizeTypePermissionTemplatePermissionList(params);
  return value;
};