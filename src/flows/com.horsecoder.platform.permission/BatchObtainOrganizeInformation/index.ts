import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';
import type { OrganizeInformation } from '@/flows/com.horsecoder.platform.permission/BatchObtainOrganizeInformation/types/OrganizeInformation';

/**
 * 入参明细:
 * organizeIdList 组织ID列表
 */
export interface FlowBatchObtainOrganizeInformationParams {
  organizeIdList: string[];
}

/**
 * 出参明细:
 * organizeInformationMap 组织信息Map
 */
export interface FlowBatchObtainOrganizeInformationResults {
  organizeInformationMap: any;
}

/**
 * 批量获取组织信息
 * @com.horsecoder.platform.permission/FLOW_BATCH_OBTAIN_ORGANIZE_INFORMATION
 */
export const flowBatchObtainOrganizeInformation = async (params: FlowBatchObtainOrganizeInformationParams): StandardPromise<FlowBatchObtainOrganizeInformationResults> => {
  return request('/horsecoder-platform-permission/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.platform.permission/FLOW_BATCH_OBTAIN_ORGANIZE_INFORMATION',
      params: { ...params },
    },
  });
};


export const flowBatchObtainOrganizeInformationFacade = async (params: FlowBatchObtainOrganizeInformationParams): Promise<FlowBatchObtainOrganizeInformationResults> => {
  const { data: { value } } =  await flowBatchObtainOrganizeInformation(params);
  return value;
};