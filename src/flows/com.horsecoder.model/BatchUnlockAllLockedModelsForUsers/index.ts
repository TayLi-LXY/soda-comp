import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';

/**
 * 入参明细:
 * userId 用户ID
 */
export interface FlowBatchUnlockAllLockedModelsForUsersParams {
  userId: string;
}

/**
 * 出参明细:
 */
export interface FlowBatchUnlockAllLockedModelsForUsersResults {
}

/**
 * 批量解锁用户所有锁定模型
 * @com.horsecoder.model/FLOW_BATCH_UNLOCK_ALL_LOCKED_MODELS_FOR_USERS
 */
export const flowBatchUnlockAllLockedModelsForUsers = async (params: FlowBatchUnlockAllLockedModelsForUsersParams): StandardPromise<FlowBatchUnlockAllLockedModelsForUsersResults> => {
  return request('/horsecoder-model/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.model/FLOW_BATCH_UNLOCK_ALL_LOCKED_MODELS_FOR_USERS',
      params: { ...params },
    },
  });
};


export const flowBatchUnlockAllLockedModelsForUsersFacade = async (params: FlowBatchUnlockAllLockedModelsForUsersParams): Promise<FlowBatchUnlockAllLockedModelsForUsersResults> => {
  const { data: { value } } =  await flowBatchUnlockAllLockedModelsForUsers(params);
  return value;
};