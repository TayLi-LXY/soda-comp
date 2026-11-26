import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';
import type { FlowStandard } from '@/flows/cn.com.thingo.intelligentAgentPlatform.taskScheduling/GetTbotFlowInformationList/types/FlowStandard';

/**
 * 入参明细:
 * page 页数
 * rows 行数
 * organizeId 组织ID
 */
export interface FlowGetTbotFlowInformationListParams {
  page?: number;
  rows?: number;
  organizeId: string;
}

/**
 * 出参明细:
 * flows 流程标准列表
 */
export interface FlowGetTbotFlowInformationListResults {
  flows: FlowStandard[];
}

/**
 * 获取tbot流程信息列表
 * @cn.com.thingo.intelligentAgentPlatform.taskScheduling/FLOW_GET_TBOT_FLOW_INFORMATION_LIST
 */
export const flowGetTbotFlowInformationList = async (params: FlowGetTbotFlowInformationListParams): StandardPromise<FlowGetTbotFlowInformationListResults> => {
  return request('/intelligentAgentPlatform-taskScheduling/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@cn.com.thingo.intelligentAgentPlatform.taskScheduling/FLOW_GET_TBOT_FLOW_INFORMATION_LIST',
      params: { ...params },
    },
  });
};


export const flowGetTbotFlowInformationListFacade = async (params: FlowGetTbotFlowInformationListParams): Promise<FlowGetTbotFlowInformationListResults> => {
  const { data: { value } } =  await flowGetTbotFlowInformationList(params);
  return value;
};