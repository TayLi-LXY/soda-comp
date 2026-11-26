import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';
import type { ProductStandard } from '@/flows/com.horsecoder.model/CreateModelsAndProducts/types/ProductStandard';

/**
 * 入参明细:
 * applicationTitle 应用标题
 * spaceId 空间id
 * userId 用户id
 * conversationId 对话ID
 * knowledgeType 知识类型
 * knowledgeUrl 知识Url
 * dialogueDetailsId 对话详情ID
 * knowledgeName 知识名称
 */
export interface FlowCreateADialogueModelParams {
  applicationTitle: string;
  spaceId: string;
  userId: string;
  conversationId: string;
  knowledgeType: string;
  knowledgeUrl: string;
  dialogueDetailsId: string;
  knowledgeName: string;
}

/**
 * 出参明细:
 * projectId 项目ID
 * dialogueModelId 对话模型ID
 * appId 应用id
 * productId 产品ID
 * targetProduct 目标产品
 */
export interface FlowCreateADialogueModelResults {
  projectId: string;
  dialogueModelId?: string;
  appId: string;
  productId: string;
  targetProduct: ProductStandard;
}

/**
 * 创建对话模型
 * @com.horsecoder.platform.mall.aiMarketing/FLOW_CREATE_A_DIALOGUE_MODEL
 */
export const flowCreateADialogueModel = async (params: FlowCreateADialogueModelParams): StandardPromise<FlowCreateADialogueModelResults> => {
  return request('/mall-aiMarketing/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.platform.mall.aiMarketing/FLOW_CREATE_A_DIALOGUE_MODEL',
      params: { ...params },
    },
  });
};


export const flowCreateADialogueModelFacade = async (params: FlowCreateADialogueModelParams): Promise<FlowCreateADialogueModelResults> => {
  const { data: { value } } =  await flowCreateADialogueModel(params);
  return value;
};