import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';

/**
 * 入参明细:
 * userIdList 用户ID列表
 */
export interface FlowBatchObtainUserGitStatusParams {
  userIdList: string[];
}

/**
 * 出参明细:
 * userIdGitStatusMap 用户IDgit状态字典
 */
export interface FlowBatchObtainUserGitStatusResults {
  userIdGitStatusMap: any;
}

/**
 * 批量获取用户git状态
 * @com.horsecoder.demand/FLOW_BATCH_OBTAIN_USER_GIT_STATUS
 */
export const flowBatchObtainUserGitStatus = async (params: FlowBatchObtainUserGitStatusParams): StandardPromise<FlowBatchObtainUserGitStatusResults> => {
  return request('/horsecoder-demand/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.demand/FLOW_BATCH_OBTAIN_USER_GIT_STATUS',
      params: { ...params },
    },
  });
};


export const flowBatchObtainUserGitStatusFacade = async (params: FlowBatchObtainUserGitStatusParams): Promise<FlowBatchObtainUserGitStatusResults> => {
  const { data: { value } } =  await flowBatchObtainUserGitStatus(params);
  return value;
};