import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';
import type { UserFiltering } from '@/flows/com.horsecoder.identity/RetrieveListOfUsersOnManagementEnd/types/UserFiltering';
import type { ManageUserDetails } from '@/flows/com.horsecoder.identity/RetrieveListOfUsersOnManagementEnd/types/ManageUserDetails';

/**
 * 入参明细:
 * userFiltering 用户筛选
 */
export interface FlowRetrieveListOfUsersOnManagementEndParams {
  userFiltering?: UserFiltering;
}

/**
 * 出参明细:
 * manageUserDetailsList 管理端用户详情列表
 * userCount 用户数量
 */
export interface FlowRetrieveListOfUsersOnManagementEndResults {
  manageUserDetailsList: ManageUserDetails[];
  userCount: any;
}

/**
 * 获取管理端用户列表
 * @com.horsecoder.identity/FLOW_RETRIEVE_LIST_OF_USERS_ON_MANAGEMENT_END
 */
export const flowRetrieveListOfUsersOnManagementEnd = async (params: FlowRetrieveListOfUsersOnManagementEndParams): StandardPromise<FlowRetrieveListOfUsersOnManagementEndResults> => {
  return request('/horsecoder-identity/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.identity/FLOW_RETRIEVE_LIST_OF_USERS_ON_MANAGEMENT_END',
      params: { ...params },
    },
  });
};


export const flowRetrieveListOfUsersOnManagementEndFacade = async (params: FlowRetrieveListOfUsersOnManagementEndParams): Promise<FlowRetrieveListOfUsersOnManagementEndResults> => {
  const { data: { value } } =  await flowRetrieveListOfUsersOnManagementEnd(params);
  return value;
};