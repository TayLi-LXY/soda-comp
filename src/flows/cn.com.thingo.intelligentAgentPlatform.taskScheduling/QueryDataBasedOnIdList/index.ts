import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';
import type { TaskEntity } from '@/flows/cn.com.thingo.intelligentAgentPlatform.taskScheduling/QueryDataBasedOnIdList/types/TaskEntity';

/**
 * 入参明细:
 * iDList id列表
 */
export interface FlowQueryDataBasedOnIdListParams {
  iDList: string[];
}

/**
 * 出参明细:
 * taskEntity 任务实体
 */
export interface FlowQueryDataBasedOnIdListResults {
  taskEntity?: TaskEntity[];
}

/**
 * 根据Id列表查询数据
 * @cn.com.thingo.intelligentAgentPlatform.taskScheduling/FLOW_QUERY_DATA_BASED_ON_ID_LIST
 */
export const flowQueryDataBasedOnIdList = async (params: FlowQueryDataBasedOnIdListParams): StandardPromise<FlowQueryDataBasedOnIdListResults> => {
  return request('/intelligentAgentPlatform-taskScheduling/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@cn.com.thingo.intelligentAgentPlatform.taskScheduling/FLOW_QUERY_DATA_BASED_ON_ID_LIST',
      params: { ...params },
    },
  });
};


export const flowQueryDataBasedOnIdListFacade = async (params: FlowQueryDataBasedOnIdListParams): Promise<FlowQueryDataBasedOnIdListResults> => {
  const { data: { value } } =  await flowQueryDataBasedOnIdList(params);
  return value;
};