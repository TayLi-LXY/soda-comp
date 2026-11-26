import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';
import type { CreateCharacterEntity } from '@/flows/com.horsecoder.platform.permission/CreateRole/types/CreateCharacterEntity';

/**
 * 入参明细:
 * createCharacterEntity 创建角色实体
 */
export interface FlowCreateRoleParams {
  createCharacterEntity: CreateCharacterEntity;
}

/**
 * 出参明细:
 * newRoleId 新角色id
 */
export interface FlowCreateRoleResults {
  newRoleId: string;
}

/**
 * 创建角色流程
 * @com.horsecoder.platform.permission/FLOW_CREATE_ROLE
 */
export const flowCreateRole = async (params: FlowCreateRoleParams): StandardPromise<FlowCreateRoleResults> => {
  return request('/horsecoder-platform-permission/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.platform.permission/FLOW_CREATE_ROLE',
      params: { ...params },
    },
  });
};


export const flowCreateRoleFacade = async (params: FlowCreateRoleParams): Promise<FlowCreateRoleResults> => {
  const { data: { value } } =  await flowCreateRole(params);
  return value;
};