import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';

/**
 * 入参明细:
 * userId 用户ID
 */
export interface FlowDisabledUserParams {
  userId: string;
}

/**
 * 出参明细:
 */
export interface FlowDisabledUserResults {
}

/**
 * 禁用用户
 * @com.horsecoder.identity/FLOW_DISABLED_USER
 */
export const flowDisabledUser = async (params: FlowDisabledUserParams): StandardPromise<FlowDisabledUserResults> => {
  return request('/horsecoder-identity/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.identity/FLOW_DISABLED_USER',
      params: { ...params },
    },
  });
};


export const flowDisabledUserFacade = async (params: FlowDisabledUserParams): Promise<FlowDisabledUserResults> => {
  const { data: { value } } =  await flowDisabledUser(params);
  return value;
};