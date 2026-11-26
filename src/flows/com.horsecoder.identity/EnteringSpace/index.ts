import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';

/**
 * 入参明细:
 * accountId 账户Id
 * spaceId 空间ID
 */
export interface FlowEnteringSpaceParams {
  accountId?: string;
  spaceId: string;
}

/**
 * 出参明细:
 */
export interface FlowEnteringSpaceResults {
}

/**
 * 进入空间
 * @com.horsecoder.identity/FLOW_ENTERING_SPACE
 */
export const flowEnteringSpace = async (params: FlowEnteringSpaceParams): StandardPromise<FlowEnteringSpaceResults> => {
  return request('/horsecoder-identity/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.identity/FLOW_ENTERING_SPACE',
      params: { ...params },
    },
  });
};


export const flowEnteringSpaceFacade = async (params: FlowEnteringSpaceParams): Promise<FlowEnteringSpaceResults> => {
  const { data: { value } } =  await flowEnteringSpace(params);
  return value;
};