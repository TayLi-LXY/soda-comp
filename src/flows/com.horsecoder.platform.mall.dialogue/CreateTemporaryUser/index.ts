import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';
import type { RegisterIMUserInformationEntity } from '@/flows/com.horsecoder.im/RegisterAndSaveIMUserInformation/types/RegisterIMUserInformationEntity';
import type { RegisterReturnUserEntity } from '@/flows/com.horsecoder.im/RegisterAndSaveIMUserInformation/types/RegisterReturnUserEntity';

/**
 * 入参明细:
 * registerIMUserInformationEntity 注册IM用户信息实体
 */
export interface FlowCreateTemporaryUserParams {
  registerIMUserInformationEntity: RegisterIMUserInformationEntity;
}

/**
 * 出参明细:
 * returnIMAccount 返回IM账户
 */
export interface FlowCreateTemporaryUserResults {
  returnIMAccount: RegisterReturnUserEntity;
}

/**
 * 创建临时用户
 * @com.horsecoder.platform.mall.dialogue/FLOW_CREATE_TEMPORARY_USER
 */
export const flowCreateTemporaryUser = async (params: FlowCreateTemporaryUserParams): StandardPromise<FlowCreateTemporaryUserResults> => {
  return request('/mall-dialogue/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.platform.mall.dialogue/FLOW_CREATE_TEMPORARY_USER',
      params: { ...params },
    },
  });
};


export const flowCreateTemporaryUserFacade = async (params: FlowCreateTemporaryUserParams): Promise<FlowCreateTemporaryUserResults> => {
  const { data: { value } } =  await flowCreateTemporaryUser(params);
  return value;
};