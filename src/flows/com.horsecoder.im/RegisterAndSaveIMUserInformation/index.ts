import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';
import type { RegisterIMUserInformationEntity } from '@/flows/com.horsecoder.im/RegisterAndSaveIMUserInformation/types/RegisterIMUserInformationEntity';
import type { RegisterReturnUserEntity } from '@/flows/com.horsecoder.im/RegisterAndSaveIMUserInformation/types/RegisterReturnUserEntity';

/**
 * 入参明细:
 * registerIMUserInformationEntity 注册IM用户信息实体
 */
export interface FlowRegisterAndSaveIMUserInformationParams {
  registerIMUserInformationEntity: RegisterIMUserInformationEntity;
}

/**
 * 出参明细:
 * returnIMAccount 返回IM账户
 */
export interface FlowRegisterAndSaveIMUserInformationResults {
  returnIMAccount: RegisterReturnUserEntity;
}

/**
 * 注册保存IM用户信息
 * @com.horsecoder.im/FLOW_REGISTER_AND_SAVE_I_M_USER_INFORMATION
 */
export const flowRegisterAndSaveIMUserInformation = async (params: FlowRegisterAndSaveIMUserInformationParams): StandardPromise<FlowRegisterAndSaveIMUserInformationResults> => {
  return request('/app-im/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.im/FLOW_REGISTER_AND_SAVE_I_M_USER_INFORMATION',
      params: { ...params },
    },
  });
};


export const flowRegisterAndSaveIMUserInformationFacade = async (params: FlowRegisterAndSaveIMUserInformationParams): Promise<FlowRegisterAndSaveIMUserInformationResults> => {
  const { data: { value } } =  await flowRegisterAndSaveIMUserInformation(params);
  return value;
};