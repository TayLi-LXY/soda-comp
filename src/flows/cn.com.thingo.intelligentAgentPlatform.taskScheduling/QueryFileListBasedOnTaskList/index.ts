import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';
import type { TaskFileEntity } from '@/flows/cn.com.thingo.intelligentAgentPlatform.taskScheduling/QueryFileListBasedOnTaskList/types/TaskFileEntity';

/**
 * 入参明细:
 * taskIdList 任务Id
 */
export interface FlowQueryFileListBasedOnTaskListParams {
  taskIdList?: string;
}

/**
 * 出参明细:
 * taskFileEntityList 任务文件实体列表
 */
export interface FlowQueryFileListBasedOnTaskListResults {
  taskFileEntityList?: TaskFileEntity[];
}

/**
 * 根据任务列表查询文件列表
 * @cn.com.thingo.intelligentAgentPlatform.taskScheduling/FLOW_QUERY_FILE_LIST_BASED_ON_TASK_LIST
 */
export const flowQueryFileListBasedOnTaskList = async (params: FlowQueryFileListBasedOnTaskListParams): StandardPromise<FlowQueryFileListBasedOnTaskListResults> => {
  return request('/intelligentAgentPlatform-taskScheduling/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@cn.com.thingo.intelligentAgentPlatform.taskScheduling/FLOW_QUERY_FILE_LIST_BASED_ON_TASK_LIST',
      params: { ...params },
    },
  });
};


export const flowQueryFileListBasedOnTaskListFacade = async (params: FlowQueryFileListBasedOnTaskListParams): Promise<FlowQueryFileListBasedOnTaskListResults> => {
  const { data: { value } } =  await flowQueryFileListBasedOnTaskList(params);
  return value;
};