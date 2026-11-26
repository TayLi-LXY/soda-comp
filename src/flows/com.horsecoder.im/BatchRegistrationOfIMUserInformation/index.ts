import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';
import type { RegisterIMUserInformationEntity } from '@/flows/com.horsecoder.im/RegisterAndSaveIMUserInformation/types/RegisterIMUserInformationEntity';
import type { RegisterReturnUserEntity } from '@/flows/com.horsecoder.im/RegisterAndSaveIMUserInformation/types/RegisterReturnUserEntity';

/**
 * 入参明细:
 * registerIMUserInformationEntityList 注册IM用户信息实体列表
 */
export interface FlowBatchRegistrationOfIMUserInformationParams {
  registerIMUserInformationEntityList?: RegisterIMUserInformationEntity[];
}

/**
 * 出参明细:
 * returnIMAccountList 返回IM账户列表
 */
export interface FlowBatchRegistrationOfIMUserInformationResults {
  returnIMAccountList?: RegisterReturnUserEntity[];
}

/**
 * 批量注册IM用户信息
 * @com.horsecoder.im/FLOW_BATCH_REGISTRATION_OF_I_M_USER_INFORMATION
 */
export const flowBatchRegistrationOfIMUserInformation = async (params: FlowBatchRegistrationOfIMUserInformationParams): StandardPromise<FlowBatchRegistrationOfIMUserInformationResults> => {
  return request('/app-im/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.im/FLOW_BATCH_REGISTRATION_OF_I_M_USER_INFORMATION',
      params: { ...params },
    },
  });
};


export const flowBatchRegistrationOfIMUserInformationFacade = async (params: FlowBatchRegistrationOfIMUserInformationParams): Promise<FlowBatchRegistrationOfIMUserInformationResults> => {
  const { data: { value } } =  await flowBatchRegistrationOfIMUserInformation(params);
  return value;
};