import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';
import type { SpaceModel } from '@/flows/com.horsecoder.identity/GetUserSpaceList/types/SpaceModel';

/**
 * 入参明细:
 * userId 用户Id
 */
export interface FlowGetUserSpaceListParams {
  userId: string;
}

/**
 * 出参明细:
 * spaceList 空间列表
 */
export interface FlowGetUserSpaceListResults {
  spaceList: SpaceModel[];
}

/**
 * 获取用户空间列表
 * @com.horsecoder.identity/FLOW_GET_USER_SPACE_LIST
 */
export const flowGetUserSpaceList = async (params: FlowGetUserSpaceListParams): StandardPromise<FlowGetUserSpaceListResults> => {
  return request('/horsecoder-identity/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.identity/FLOW_GET_USER_SPACE_LIST',
      params: { ...params },
    },
  });
};


export const flowGetUserSpaceListFacade = async (params: FlowGetUserSpaceListParams): Promise<FlowGetUserSpaceListResults> => {
  const { data: { value } } =  await flowGetUserSpaceList(params);
  return value;
};