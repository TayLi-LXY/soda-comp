import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';
import type { UserInformation } from '@/flows/com.horsecoder.identity/ObtainBusinessDesignAccountInformationBasedOnId/types/UserInformation';

/**
 * 入参明细:
 * userId 用户ID
 */
export interface FlowObtainBusinessDesignAccountInformationBasedOnIdParams {
  userId: string;
}

/**
 * 出参明细:
 * userInformation 用户信息
 */
export interface FlowObtainBusinessDesignAccountInformationBasedOnIdResults {
  userInformation: UserInformation;
}

/**
 * 根据ID获取业务设计账户信息
 * @com.horsecoder.identity/FLOW_OBTAIN_BUSINESS_DESIGN_ACCOUNT_INFORMATION_BASED_ON_ID
 */
export const flowObtainBusinessDesignAccountInformationBasedOnId = async (params: FlowObtainBusinessDesignAccountInformationBasedOnIdParams): StandardPromise<FlowObtainBusinessDesignAccountInformationBasedOnIdResults> => {
  return request('/horsecoder-identity/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.identity/FLOW_OBTAIN_BUSINESS_DESIGN_ACCOUNT_INFORMATION_BASED_ON_ID',
      params: { ...params },
    },
  });
};


export const flowObtainBusinessDesignAccountInformationBasedOnIdFacade = async (params: FlowObtainBusinessDesignAccountInformationBasedOnIdParams): Promise<FlowObtainBusinessDesignAccountInformationBasedOnIdResults> => {
  const { data: { value } } =  await flowObtainBusinessDesignAccountInformationBasedOnId(params);
  return value;
};