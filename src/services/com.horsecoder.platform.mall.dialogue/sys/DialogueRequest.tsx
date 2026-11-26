import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';
import type { Dialogue } from '@/types/com.horsecoder.platform.mall.dialogue/sys/Dialogue';

export interface DialogueFilterMapper {
  id?: string;
  name?: string;
  nameLike?: string;
  creatorId?: string;
  creatorIdIn?: string[];
  type?: string;
  typeIn?: string[];
  imConversationId?: string;
  imConversationIdIn?: string[];
  state?: number;
  stateIn?: number[];
  gmtUpdateFrom?: number;
  gmtUpdateTo?: number;
  gmtCreateFrom?: number;
  gmtCreateTo?: number;
  page?: number;
  rows?: number;
  orderBy?: string[];
}

export interface DialoguePostMapper {
  name: string;
  creatorId: string;
  type: string;
  imConversationId: string;
  state?: number;
}

export interface DialogueUpdateMapper {
  id: string;
  name?: string;
  creatorId?: string;
  type?: string;
  imConversationId?: string;
  state?: number;
}

export const getDialogueSimple = async (id: string): StandardPromise<Dialogue> => {
  return request('/mall-dialogue/api/sys/dialogue/single/simple', {
    params: { id },
  });
};

export const getDialogue = async (id: string): StandardPromise<Dialogue> => {
  return request('/mall-dialogue/api/sys/dialogue/single', {
    params: { id },
  });
};

export const getDialogueList = async (params: DialogueFilterMapper): StandardPromise<Dialogue[]> => {
  return request('/mall-dialogue/api/sys/dialogue/filter', { params });
};

export const getDialogueDetailList = async (params: DialogueFilterMapper): StandardPromise<Dialogue[]> => {
  return request('/mall-dialogue/api/sys/dialogue/filter/detail', { params });
};

export const postDialogue = async (params: DialoguePostMapper): StandardPromise<Dialogue> => {
  return request('/mall-dialogue/api/sys/dialogue', {
    method: 'POST',
    data: { ...params },
  });
};

export const postDialogueBatch = async (params: DialoguePostMapper[]): StandardPromise<Dialogue[]> => {
  return request('/mall-dialogue/api/sys/dialogue/batch', {
    method: 'POST',
    data: params,
  });
};

export const updateDialogue = async (params: DialogueUpdateMapper): StandardPromise<Dialogue> => {
  return request('/mall-dialogue/api/sys/dialogue', {
    method: 'PATCH',
    data: { ...params },
  });
};

export const updateDialogueBatch = async (params: DialogueUpdateMapper[]): StandardPromise<Dialogue[]> => {
  return request('/mall-dialogue/api/sys/dialogue/batch', {
    method: 'PATCH',
    data: params,
  });
};

export const putDialogue = async (params: DialogueUpdateMapper): StandardPromise<Dialogue> => {
  return request('/mall-dialogue/api/sys/dialogue', {
    method: 'PUT',
    data: { ...params },
  });
};

export const putDialogueBatch = async (params: DialogueUpdateMapper[]): StandardPromise<Dialogue[]> => {
  return request('/mall-dialogue/api/sys/dialogue/batch', {
    method: 'PUT',
    data: params,
  });
};

export const deleteDialogue = async (id: string): StandardPromise<number> => {
  return request('/mall-dialogue/api/sys/dialogue', {
    method: 'DELETE',
    params: { id },
  });
};

export const deleteDialogueBatch = async (idList: string[]): StandardPromise<number> => {
  return request('/mall-dialogue/api/sys/dialogue/batch', {
    method: 'DELETE',
    params: { idList },
  });
};
