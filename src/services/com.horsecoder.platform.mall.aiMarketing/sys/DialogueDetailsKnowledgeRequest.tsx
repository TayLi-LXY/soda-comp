import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';
import type { DialogueDetailsKnowledge } from '@/types/com.horsecoder.platform.mall.aiMarketing/sys/DialogueDetailsKnowledge';

export interface DialogueDetailsKnowledgeFilterMapper {
  id?: string;
  knowledgeType?: string;
  knowledgeTypeIn?: string[];
  knowledgeUrl?: string;
  knowledgeName?: string;
  knowledgeNameLike?: string;
  dialogueDetailsId?: string;
  dialogueDetailsIdIn?: string[];
  dialogueModelId?: string;
  dialogueModelIdIn?: string[];
  gmtUpdateFrom?: number;
  gmtUpdateTo?: number;
  gmtCreateFrom?: number;
  gmtCreateTo?: number;
  page?: number;
  rows?: number;
  orderBy?: string[];
}

export interface DialogueDetailsKnowledgePostMapper {
  knowledgeType: string;
  knowledgeUrl: string;
  knowledgeName: string;
  dialogueDetailsId: string;
  dialogueModelId: string;
}

export interface DialogueDetailsKnowledgeUpdateMapper {
  id: string;
  knowledgeType?: string;
  knowledgeUrl?: string;
  knowledgeName?: string;
  dialogueDetailsId?: string;
  dialogueModelId?: string;
}

export const getDialogueDetailsKnowledgeSimple = async (id: string): StandardPromise<DialogueDetailsKnowledge> => {
  return request('/mall-aiMarketing/api/sys/dialogue/details/knowledge/single/simple', {
    params: { id },
  });
};

export const getDialogueDetailsKnowledge = async (id: string): StandardPromise<DialogueDetailsKnowledge> => {
  return request('/mall-aiMarketing/api/sys/dialogue/details/knowledge/single', {
    params: { id },
  });
};

export const getDialogueDetailsKnowledgeList = async (params: DialogueDetailsKnowledgeFilterMapper): StandardPromise<DialogueDetailsKnowledge[]> => {
  return request('/mall-aiMarketing/api/sys/dialogue/details/knowledge/filter', { params });
};

export const getDialogueDetailsKnowledgeDetailList = async (params: DialogueDetailsKnowledgeFilterMapper): StandardPromise<DialogueDetailsKnowledge[]> => {
  return request('/mall-aiMarketing/api/sys/dialogue/details/knowledge/filter/detail', { params });
};

export const postDialogueDetailsKnowledge = async (params: DialogueDetailsKnowledgePostMapper): StandardPromise<DialogueDetailsKnowledge> => {
  return request('/mall-aiMarketing/api/sys/dialogue/details/knowledge', {
    method: 'POST',
    data: { ...params },
  });
};

export const postDialogueDetailsKnowledgeBatch = async (params: DialogueDetailsKnowledgePostMapper[]): StandardPromise<DialogueDetailsKnowledge[]> => {
  return request('/mall-aiMarketing/api/sys/dialogue/details/knowledge/batch', {
    method: 'POST',
    data: params,
  });
};

export const updateDialogueDetailsKnowledge = async (params: DialogueDetailsKnowledgeUpdateMapper): StandardPromise<DialogueDetailsKnowledge> => {
  return request('/mall-aiMarketing/api/sys/dialogue/details/knowledge', {
    method: 'PATCH',
    data: { ...params },
  });
};

export const updateDialogueDetailsKnowledgeBatch = async (params: DialogueDetailsKnowledgeUpdateMapper[]): StandardPromise<DialogueDetailsKnowledge[]> => {
  return request('/mall-aiMarketing/api/sys/dialogue/details/knowledge/batch', {
    method: 'PATCH',
    data: params,
  });
};

export const putDialogueDetailsKnowledge = async (params: DialogueDetailsKnowledgeUpdateMapper): StandardPromise<DialogueDetailsKnowledge> => {
  return request('/mall-aiMarketing/api/sys/dialogue/details/knowledge', {
    method: 'PUT',
    data: { ...params },
  });
};

export const putDialogueDetailsKnowledgeBatch = async (params: DialogueDetailsKnowledgeUpdateMapper[]): StandardPromise<DialogueDetailsKnowledge[]> => {
  return request('/mall-aiMarketing/api/sys/dialogue/details/knowledge/batch', {
    method: 'PUT',
    data: params,
  });
};

export const deleteDialogueDetailsKnowledge = async (id: string): StandardPromise<number> => {
  return request('/mall-aiMarketing/api/sys/dialogue/details/knowledge', {
    method: 'DELETE',
    params: { id },
  });
};

export const deleteDialogueDetailsKnowledgeBatch = async (idList: string[]): StandardPromise<number> => {
  return request('/mall-aiMarketing/api/sys/dialogue/details/knowledge/batch', {
    method: 'DELETE',
    params: { idList },
  });
};
