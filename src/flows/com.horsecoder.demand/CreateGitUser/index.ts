import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';

/**
 * 入参明细:
 * email 邮箱
 * userName 用户名
 * password 密码
 * nickname 昵称
 * userId 用户id
 * baseUrl 仓库baseurl
 * gitToken 仓库token
 */
export interface FlowCreateGitUserParams {
  email: string;
  userName: string;
  password: string;
  nickname: string;
  userId: string;
  baseUrl?: string;
  gitToken?: string;
}

/**
 * 出参明细:
 */
export interface FlowCreateGitUserResults {
}

/**
 * 新建git用户流程
 * @com.horsecoder.demand/FLOW_CREATE_GIT_USER
 */
export const flowCreateGitUser = async (params: FlowCreateGitUserParams): StandardPromise<FlowCreateGitUserResults> => {
  return request('/horsecoder-demand/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.demand/FLOW_CREATE_GIT_USER',
      params: { ...params },
    },
  });
};


export const flowCreateGitUserFacade = async (params: FlowCreateGitUserParams): Promise<FlowCreateGitUserResults> => {
  const { data: { value } } =  await flowCreateGitUser(params);
  return value;
};