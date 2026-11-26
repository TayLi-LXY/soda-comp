import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';

/**
 * 入参明细:
 * userName 用户名
 */
export interface FlowDeleteGitUserParams {
  userName: string;
}

/**
 * 出参明细:
 */
export interface FlowDeleteGitUserResults {
}

/**
 * 删除git用户
 * @com.horsecoder.demand/FLOW_DELETE_GIT_USER
 */
export const flowDeleteGitUser = async (params: FlowDeleteGitUserParams): StandardPromise<FlowDeleteGitUserResults> => {
  return request('/horsecoder-demand/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.demand/FLOW_DELETE_GIT_USER',
      params: { ...params },
    },
  });
};


export const flowDeleteGitUserFacade = async (params: FlowDeleteGitUserParams): Promise<FlowDeleteGitUserResults> => {
  const { data: { value } } =  await flowDeleteGitUser(params);
  return value;
};