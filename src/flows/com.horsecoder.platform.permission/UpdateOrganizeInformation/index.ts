import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';
import type { OrganizeTO } from '@/flows/com.horsecoder.platform.permission/BuildAnOrganizeTreeBasedOnOrganizeList/types/OrganizeTO';

/**
 * 入参明细:
 * organize 组织
 */
export interface FlowUpdateOrganizeInformationParams {
  organize: OrganizeTO;
}

/**
 * 出参明细:
 */
export interface FlowUpdateOrganizeInformationResults {
}

/**
 * 更新组织信息
 * @com.horsecoder.platform.permission/FLOW_UPDATE_ORGANIZE_INFORMATION
 */
export const flowUpdateOrganizeInformation = async (params: FlowUpdateOrganizeInformationParams): StandardPromise<FlowUpdateOrganizeInformationResults> => {
  return request('/horsecoder-platform-permission/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.platform.permission/FLOW_UPDATE_ORGANIZE_INFORMATION',
      params: { ...params },
    },
  });
};


export const flowUpdateOrganizeInformationFacade = async (params: FlowUpdateOrganizeInformationParams): Promise<FlowUpdateOrganizeInformationResults> => {
  const { data: { value } } =  await flowUpdateOrganizeInformation(params);
  return value;
};