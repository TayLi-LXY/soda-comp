import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';

/**
 * 入参明细:
 * accountId 账户ID
 */
export interface FlowGetLatestSpaceParams {
  accountId: string;
}

/**
 * 出参明细:
 * latestSpace 最新空间
 */
export interface FlowGetLatestSpaceResults {
  latestSpace?: any;
}

/**
 * 获取最新空间
 * @com.horsecoder.platform.mall.aiMarketing/FLOW_GET_LATEST_SPACE
 */
export const flowGetLatestSpace = async (params: FlowGetLatestSpaceParams): StandardPromise<FlowGetLatestSpaceResults> => {
  return request('/mall-aiMarketing/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.platform.mall.aiMarketing/FLOW_GET_LATEST_SPACE',
      params: { ...params },
    },
  });
};


export const flowGetLatestSpaceFacade = async (params: FlowGetLatestSpaceParams): Promise<FlowGetLatestSpaceResults> => {
  const { data: { value } } =  await flowGetLatestSpace(params);
  return value;
};