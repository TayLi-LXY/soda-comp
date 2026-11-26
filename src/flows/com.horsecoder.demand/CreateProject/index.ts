import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';
import type { OrganizeReturn } from '@/flows/com.horsecoder.platform.permission/FilterOrganizeList/types/OrganizeReturn';

/**
 * 入参明细:
 * userId 用户ID
 * spaceId 空间ID
 * name 名称
 * description 描述
 */
export interface FlowCreateProjectParams {
  userId: string;
  spaceId: string;
  name: string;
  description: string;
}

/**
 * 出参明细:
 * projectId 项目ID
 * organizeReturn 组织返回
 */
export interface FlowCreateProjectResults {
  projectId: string;
  organizeReturn: OrganizeReturn;
}

/**
 * 创建项目
 * @com.horsecoder.demand/FLOW_CREATE_PROJECT
 */
export const flowCreateProject = async (params: FlowCreateProjectParams): StandardPromise<FlowCreateProjectResults> => {
  return request('/horsecoder-demand/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.demand/FLOW_CREATE_PROJECT',
      params: { ...params },
    },
  });
};


export const flowCreateProjectFacade = async (params: FlowCreateProjectParams): Promise<FlowCreateProjectResults> => {
  const { data: { value } } =  await flowCreateProject(params);
  return value;
};