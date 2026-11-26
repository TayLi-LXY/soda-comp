import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';

/**
 * 入参明细:
 * spaceId 空间ID
 * userId 用户id
 */
export interface FlowOpenGitRepositoryPermissionsForAllProjectsInSpaceParams {
  spaceId: string;
  userId: string;
}

/**
 * 出参明细:
 */
export interface FlowOpenGitRepositoryPermissionsForAllProjectsInSpaceResults {
}

/**
 * 开通空间所有项目的git仓库权限
 * @com.horsecoder.demand/FLOW_OPEN_GIT_REPOSITORY_PERMISSIONS_FOR_ALL_PROJECTS_IN_SPACE
 */
export const flowOpenGitRepositoryPermissionsForAllProjectsInSpace = async (params: FlowOpenGitRepositoryPermissionsForAllProjectsInSpaceParams): StandardPromise<FlowOpenGitRepositoryPermissionsForAllProjectsInSpaceResults> => {
  return request('/horsecoder-demand/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.demand/FLOW_OPEN_GIT_REPOSITORY_PERMISSIONS_FOR_ALL_PROJECTS_IN_SPACE',
      params: { ...params },
    },
  });
};


export const flowOpenGitRepositoryPermissionsForAllProjectsInSpaceFacade = async (params: FlowOpenGitRepositoryPermissionsForAllProjectsInSpaceParams): Promise<FlowOpenGitRepositoryPermissionsForAllProjectsInSpaceResults> => {
  const { data: { value } } =  await flowOpenGitRepositoryPermissionsForAllProjectsInSpace(params);
  return value;
};