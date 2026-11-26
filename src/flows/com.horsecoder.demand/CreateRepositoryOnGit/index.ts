import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';
import type { RepositoryInformation } from '@/flows/com.horsecoder.demand/CreateRepositoryOnGit/types/RepositoryInformation';

/**
 * 入参明细:
 * projectId 项目ID
 * userId 用户ID
 * repositoryInformation 仓库信息
 */
export interface FlowCreateRepositoryOnGitParams {
  projectId: string;
  userId: string;
  repositoryInformation: RepositoryInformation;
}

/**
 * 出参明细:
 * repositoryWebUrl 仓库webUrl
 */
export interface FlowCreateRepositoryOnGitResults {
  repositoryWebUrl: string;
}

/**
 * 在git上创建仓库
 * @com.horsecoder.demand/FLOW_CREATE_REPOSITORY_ON_GIT
 */
export const flowCreateRepositoryOnGit = async (params: FlowCreateRepositoryOnGitParams): StandardPromise<FlowCreateRepositoryOnGitResults> => {
  return request('/horsecoder-demand/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.demand/FLOW_CREATE_REPOSITORY_ON_GIT',
      params: { ...params },
    },
  });
};


export const flowCreateRepositoryOnGitFacade = async (params: FlowCreateRepositoryOnGitParams): Promise<FlowCreateRepositoryOnGitResults> => {
  const { data: { value } } =  await flowCreateRepositoryOnGit(params);
  return value;
};