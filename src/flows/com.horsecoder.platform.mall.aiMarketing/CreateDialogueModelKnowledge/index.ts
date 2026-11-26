import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';
import type { CreateDialogueModelKnowledgeEntity } from '@/flows/com.horsecoder.platform.mall.aiMarketing/CreateDialogueModelKnowledge/types/CreateDialogueModelKnowledgeEntity';

/**
 * 入参明细:
 * createDialogueModelKnowledgeEntity 创建对话模型知识实体
 */
export interface FlowCreateDialogueModelKnowledgeParams {
  createDialogueModelKnowledgeEntity?: CreateDialogueModelKnowledgeEntity;
}

/**
 * 出参明细:
 * dialogueModelKnowledgeId 对话模型知识ID
 */
export interface FlowCreateDialogueModelKnowledgeResults {
  dialogueModelKnowledgeId?: string;
}

/**
 * 创建对话模型知识
 * @com.horsecoder.platform.mall.aiMarketing/FLOW_CREATE_DIALOGUE_MODEL_KNOWLEDGE
 */
export const flowCreateDialogueModelKnowledge = async (params: FlowCreateDialogueModelKnowledgeParams): StandardPromise<FlowCreateDialogueModelKnowledgeResults> => {
  return request('/mall-aiMarketing/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.platform.mall.aiMarketing/FLOW_CREATE_DIALOGUE_MODEL_KNOWLEDGE',
      params: { ...params },
    },
  });
};


export const flowCreateDialogueModelKnowledgeFacade = async (params: FlowCreateDialogueModelKnowledgeParams): Promise<FlowCreateDialogueModelKnowledgeResults> => {
  const { data: { value } } =  await flowCreateDialogueModelKnowledge(params);
  return value;
};