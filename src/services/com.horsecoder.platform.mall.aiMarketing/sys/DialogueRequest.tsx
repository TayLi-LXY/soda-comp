import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';
import type { Dialogue } from '@/types/com.horsecoder.platform.mall.aiMarketing/sys/Dialogue';

export interface DialogueFilterMapper {
  id?: string;
  dialogueName?: string;
  dialogueType?: string;
  dialogueAccountId?: string;
  dialogueRobotId?: string;
  dialogModel?: string;
  dialogModelIn?: string[];
  gmtUpdateFrom?: number;
  gmtUpdateTo?: number;
  gmtCreateFrom?: number;
  gmtCreateTo?: number;
  page?: number;
  rows?: number;
  orderBy?: string[];
}

export interface DialoguePostMapper {
  dialogueType?: string;
  dialogueRobotId?: string;
  dialogModel?: string;
}

export interface DialogueUpdateMapper {
  id: string;
  dialogueType?: string;
  dialogueRobotId?: string;
  dialogModel?: string;
}

export const getDialogueSimple = async (id: string): StandardPromise<Dialogue> => {
  return request('/mall-aiMarketing/api/sys/dialogue/single/simple', {
    params: { id },
  });
};

export const getDialogue = async (id: string): StandardPromise<Dialogue> => {
  return request('/mall-aiMarketing/api/sys/dialogue/single', {
    params: { id },
  });
};

export const getDialogueList = async (params: DialogueFilterMapper): StandardPromise<Dialogue[]> => {
  return request('/mall-aiMarketing/api/sys/dialogue/filter', { params });
};

export const getDialogueDetailList = async (params: DialogueFilterMapper): StandardPromise<Dialogue[]> => {
  return request('/mall-aiMarketing/api/sys/dialogue/filter/detail', { params });
};

export const postDialogue = async (params: DialoguePostMapper): StandardPromise<Dialogue> => {
  return request('/mall-aiMarketing/api/sys/dialogue', {
    method: 'POST',
    data: { ...params },
  });
};

export const postDialogueBatch = async (params: DialoguePostMapper[]): StandardPromise<Dialogue[]> => {
  return request('/mall-aiMarketing/api/sys/dialogue/batch', {
    method: 'POST',
    data: params,
  });
};

export const updateDialogue = async (params: DialogueUpdateMapper): StandardPromise<Dialogue> => {
  return request('/mall-aiMarketing/api/sys/dialogue', {
    method: 'PATCH',
    data: { ...params },
  });
};

export const updateDialogueBatch = async (params: DialogueUpdateMapper[]): StandardPromise<Dialogue[]> => {
  return request('/mall-aiMarketing/api/sys/dialogue/batch', {
    method: 'PATCH',
    data: params,
  });
};

export const putDialogue = async (params: DialogueUpdateMapper): StandardPromise<Dialogue> => {
  return request('/mall-aiMarketing/api/sys/dialogue', {
    method: 'PUT',
    data: { ...params },
  });
};

export const putDialogueBatch = async (params: DialogueUpdateMapper[]): StandardPromise<Dialogue[]> => {
  return request('/mall-aiMarketing/api/sys/dialogue/batch', {
    method: 'PUT',
    data: params,
  });
};

export const deleteDialogue = async (id: string): StandardPromise<number> => {
  return request('/mall-aiMarketing/api/sys/dialogue', {
    method: 'DELETE',
    params: { id },
  });
};

export const deleteDialogueBatch = async (idList: string[]): StandardPromise<number> => {
  return request('/mall-aiMarketing/api/sys/dialogue/batch', {
    method: 'DELETE',
    params: { idList },
  });
};
