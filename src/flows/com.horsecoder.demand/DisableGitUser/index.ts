import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';

/**
 * 入参明细:
 * userId 用户ID
 */
export interface FlowDisableGitUserParams {
  userId: string;
}

/**
 * 出参明细:
 */
export interface FlowDisableGitUserResults {
}

/**
 * 禁用git用户
 * @com.horsecoder.demand/FLOW_DISABLE_GIT_USER
 */
export const flowDisableGitUser = async (params: FlowDisableGitUserParams): StandardPromise<FlowDisableGitUserResults> => {
  return request('/horsecoder-demand/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.demand/FLOW_DISABLE_GIT_USER',
      params: { ...params },
    },
  });
};


export const flowDisableGitUserFacade = async (params: FlowDisableGitUserParams): Promise<FlowDisableGitUserResults> => {
  const { data: { value } } =  await flowDisableGitUser(params);
  return value;
};