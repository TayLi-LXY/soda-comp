import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';
import type { CreateADialogueAccountEntity } from '@/flows/com.horsecoder.platform.mall.aiMarketing/DialogueAccountRegistration/types/CreateADialogueAccountEntity';

/**
 * 入参明细:
 * createADialogueAccountEntity 创建对话账户实体
 */
export interface FlowDialogueAccountRegistrationParams {
  createADialogueAccountEntity?: CreateADialogueAccountEntity;
}

/**
 * 出参明细:
 * result 注册结果
 */
export interface FlowDialogueAccountRegistrationResults {
  result: any;
}

/**
 * 对话账户注册
 * @com.horsecoder.platform.mall.aiMarketing/FLOW_DIALOGUE_ACCOUNT_REGISTRATION
 */
export const flowDialogueAccountRegistration = async (params: FlowDialogueAccountRegistrationParams): StandardPromise<FlowDialogueAccountRegistrationResults> => {
  return request('/mall-aiMarketing/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.platform.mall.aiMarketing/FLOW_DIALOGUE_ACCOUNT_REGISTRATION',
      params: { ...params },
    },
  });
};


export const flowDialogueAccountRegistrationFacade = async (params: FlowDialogueAccountRegistrationParams): Promise<FlowDialogueAccountRegistrationResults> => {
  const { data: { value } } =  await flowDialogueAccountRegistration(params);
  return value;
};