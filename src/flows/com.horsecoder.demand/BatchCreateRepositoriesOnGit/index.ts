import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';
import type { RepositoryInformation } from '@/flows/com.horsecoder.demand/CreateRepositoryOnGit/types/RepositoryInformation';

/**
 * 入参明细:
 * projectId 项目ID
 * userId 用户ID
 * repositoryInformationList 仓库信息列表
 */
export interface FlowBatchCreateRepositoriesOnGitParams {
  projectId: string;
  userId: string;
  repositoryInformationList: RepositoryInformation[];
}

/**
 * 出参明细:
 * repositoryUrlMap 仓库url字典
 */
export interface FlowBatchCreateRepositoriesOnGitResults {
  repositoryUrlMap: any;
}

/**
 * 批量创建git上的仓库
 * @com.horsecoder.demand/FLOW_BATCH_CREATE_REPOSITORIES_ON_GIT
 */
export const flowBatchCreateRepositoriesOnGit = async (params: FlowBatchCreateRepositoriesOnGitParams): StandardPromise<FlowBatchCreateRepositoriesOnGitResults> => {
  return request('/horsecoder-demand/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.demand/FLOW_BATCH_CREATE_REPOSITORIES_ON_GIT',
      params: { ...params },
    },
  });
};


export const flowBatchCreateRepositoriesOnGitFacade = async (params: FlowBatchCreateRepositoriesOnGitParams): Promise<FlowBatchCreateRepositoriesOnGitResults> => {
  const { data: { value } } =  await flowBatchCreateRepositoriesOnGit(params);
  return value;
};