import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';
import type { DialogueModelKnowledge } from '@/types/com.horsecoder.platform.mall.aiMarketing/sys/DialogueModelKnowledge';

export interface DialogueModelKnowledgeFilterMapper {
  id?: string;
  knowledgeType?: string;
  knowledgeTypeIn?: string[];
  knowledgeUrl?: string;
  knowledgeName?: string;
  knowledgeNameLike?: string;
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

export interface DialogueModelKnowledgePostMapper {
  knowledgeType: string;
  knowledgeUrl: string;
  knowledgeName: string;
  dialogueModelId: string;
}

export interface DialogueModelKnowledgeUpdateMapper {
  id: string;
  knowledgeType?: string;
  knowledgeUrl?: string;
  knowledgeName?: string;
  dialogueModelId?: string;
}

export const getDialogueModelKnowledgeSimple = async (id: string): StandardPromise<DialogueModelKnowledge> => {
  return request('/mall-aiMarketing/api/sys/dialogue/model/knowledge/single/simple', {
    params: { id },
  });
};

export const getDialogueModelKnowledge = async (id: string): StandardPromise<DialogueModelKnowledge> => {
  return request('/mall-aiMarketing/api/sys/dialogue/model/knowledge/single', {
    params: { id },
  });
};

export const getDialogueModelKnowledgeList = async (params: DialogueModelKnowledgeFilterMapper): StandardPromise<DialogueModelKnowledge[]> => {
  return request('/mall-aiMarketing/api/sys/dialogue/model/knowledge/filter', { params });
};

export const getDialogueModelKnowledgeDetailList = async (params: DialogueModelKnowledgeFilterMapper): StandardPromise<DialogueModelKnowledge[]> => {
  return request('/mall-aiMarketing/api/sys/dialogue/model/knowledge/filter/detail', { params });
};

export const postDialogueModelKnowledge = async (params: DialogueModelKnowledgePostMapper): StandardPromise<DialogueModelKnowledge> => {
  return request('/mall-aiMarketing/api/sys/dialogue/model/knowledge', {
    method: 'POST',
    data: { ...params },
  });
};

export const postDialogueModelKnowledgeBatch = async (params: DialogueModelKnowledgePostMapper[]): StandardPromise<DialogueModelKnowledge[]> => {
  return request('/mall-aiMarketing/api/sys/dialogue/model/knowledge/batch', {
    method: 'POST',
    data: params,
  });
};

export const updateDialogueModelKnowledge = async (params: DialogueModelKnowledgeUpdateMapper): StandardPromise<DialogueModelKnowledge> => {
  return request('/mall-aiMarketing/api/sys/dialogue/model/knowledge', {
    method: 'PATCH',
    data: { ...params },
  });
};

export const updateDialogueModelKnowledgeBatch = async (params: DialogueModelKnowledgeUpdateMapper[]): StandardPromise<DialogueModelKnowledge[]> => {
  return request('/mall-aiMarketing/api/sys/dialogue/model/knowledge/batch', {
    method: 'PATCH',
    data: params,
  });
};

export const putDialogueModelKnowledge = async (params: DialogueModelKnowledgeUpdateMapper): StandardPromise<DialogueModelKnowledge> => {
  return request('/mall-aiMarketing/api/sys/dialogue/model/knowledge', {
    method: 'PUT',
    data: { ...params },
  });
};

export const putDialogueModelKnowledgeBatch = async (params: DialogueModelKnowledgeUpdateMapper[]): StandardPromise<DialogueModelKnowledge[]> => {
  return request('/mall-aiMarketing/api/sys/dialogue/model/knowledge/batch', {
    method: 'PUT',
    data: params,
  });
};

export const deleteDialogueModelKnowledge = async (id: string): StandardPromise<number> => {
  return request('/mall-aiMarketing/api/sys/dialogue/model/knowledge', {
    method: 'DELETE',
    params: { id },
  });
};

export const deleteDialogueModelKnowledgeBatch = async (idList: string[]): StandardPromise<number> => {
  return request('/mall-aiMarketing/api/sys/dialogue/model/knowledge/batch', {
    method: 'DELETE',
    params: { idList },
  });
};
