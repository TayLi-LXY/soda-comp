import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';

/**
 * 入参明细:
 * userId 用户ID
 */
export interface FlowUnlockGitUsersParams {
  userId: string;
}

/**
 * 出参明细:
 */
export interface FlowUnlockGitUsersResults {
}

/**
 * 解禁git用户
 * @com.horsecoder.demand/FLOW_UNLOCK_GIT_USERS
 */
export const flowUnlockGitUsers = async (params: FlowUnlockGitUsersParams): StandardPromise<FlowUnlockGitUsersResults> => {
  return request('/horsecoder-demand/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.demand/FLOW_UNLOCK_GIT_USERS',
      params: { ...params },
    },
  });
};


export const flowUnlockGitUsersFacade = async (params: FlowUnlockGitUsersParams): Promise<FlowUnlockGitUsersResults> => {
  const { data: { value } } =  await flowUnlockGitUsers(params);
  return value;
};