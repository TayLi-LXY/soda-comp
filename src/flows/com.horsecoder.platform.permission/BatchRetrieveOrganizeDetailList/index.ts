import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';
import type { OrganizeFiltering } from '@/flows/com.horsecoder.platform.permission/GetOrganizeViewAndOrganizeListByDepth/types/OrganizeFiltering';
import type { OrganizeDetail } from '@/flows/com.horsecoder.platform.permission/BatchRetrieveOrganizeDetailList/types/OrganizeDetail';

/**
 * 入参明细:
 * organizeFiltering 组织筛选实体
 */
export interface FlowBatchRetrieveOrganizeDetailListParams {
  organizeFiltering: OrganizeFiltering;
}

/**
 * 出参明细:
 * organizeDetailList 组织详情列表
 */
export interface FlowBatchRetrieveOrganizeDetailListResults {
  organizeDetailList: OrganizeDetail[];
}

/**
 * 批量获取组织详情列表
 * @com.horsecoder.platform.permission/FLOW_BATCH_RETRIEVE_ORGANIZE_DETAIL_LIST
 */
export const flowBatchRetrieveOrganizeDetailList = async (params: FlowBatchRetrieveOrganizeDetailListParams): StandardPromise<FlowBatchRetrieveOrganizeDetailListResults> => {
  return request('/horsecoder-platform-permission/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.platform.permission/FLOW_BATCH_RETRIEVE_ORGANIZE_DETAIL_LIST',
      params: { ...params },
    },
  });
};


export const flowBatchRetrieveOrganizeDetailListFacade = async (params: FlowBatchRetrieveOrganizeDetailListParams): Promise<FlowBatchRetrieveOrganizeDetailListResults> => {
  const { data: { value } } =  await flowBatchRetrieveOrganizeDetailList(params);
  return value;
};