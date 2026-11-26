import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';
import type { DialogueTask } from '@/types/com.horsecoder.platform.mall.dialogue/sys/DialogueTask';

export interface DialogueTaskFilterMapper {
  id?: string;
  dialogueId?: string;
  dialogueIdIn?: string[];
  initiatorId?: string;
  initiatorIdIn?: string[];
  input?: string;
  output?: string;
  state?: string;
  stateIn?: string[];
  gmtUpdateFrom?: number;
  gmtUpdateTo?: number;
  gmtCreateFrom?: number;
  gmtCreateTo?: number;
  page?: number;
  rows?: number;
  orderBy?: string[];
}

export interface DialogueTaskPostMapper {
  dialogueId: string;
  initiatorId: string;
  input: string;
  output?: string;
  state?: string;
}

export interface DialogueTaskUpdateMapper {
  id: string;
  dialogueId?: string;
  initiatorId?: string;
  input?: string;
  output?: string;
  state?: string;
}

export const getDialogueTaskSimple = async (id: string): StandardPromise<DialogueTask> => {
  return request('/mall-dialogue/api/sys/dialogue/task/single/simple', {
    params: { id },
  });
};

export const getDialogueTask = async (id: string): StandardPromise<DialogueTask> => {
  return request('/mall-dialogue/api/sys/dialogue/task/single', {
    params: { id },
  });
};

export const getDialogueTaskList = async (params: DialogueTaskFilterMapper): StandardPromise<DialogueTask[]> => {
  return request('/mall-dialogue/api/sys/dialogue/task/filter', { params });
};

export const getDialogueTaskDetailList = async (params: DialogueTaskFilterMapper): StandardPromise<DialogueTask[]> => {
  return request('/mall-dialogue/api/sys/dialogue/task/filter/detail', { params });
};

export const postDialogueTask = async (params: DialogueTaskPostMapper): StandardPromise<DialogueTask> => {
  return request('/mall-dialogue/api/sys/dialogue/task', {
    method: 'POST',
    data: { ...params },
  });
};

export const postDialogueTaskBatch = async (params: DialogueTaskPostMapper[]): StandardPromise<DialogueTask[]> => {
  return request('/mall-dialogue/api/sys/dialogue/task/batch', {
    method: 'POST',
    data: params,
  });
};

export const updateDialogueTask = async (params: DialogueTaskUpdateMapper): StandardPromise<DialogueTask> => {
  return request('/mall-dialogue/api/sys/dialogue/task', {
    method: 'PATCH',
    data: { ...params },
  });
};

export const updateDialogueTaskBatch = async (params: DialogueTaskUpdateMapper[]): StandardPromise<DialogueTask[]> => {
  return request('/mall-dialogue/api/sys/dialogue/task/batch', {
    method: 'PATCH',
    data: params,
  });
};

export const putDialogueTask = async (params: DialogueTaskUpdateMapper): StandardPromise<DialogueTask> => {
  return request('/mall-dialogue/api/sys/dialogue/task', {
    method: 'PUT',
    data: { ...params },
  });
};

export const putDialogueTaskBatch = async (params: DialogueTaskUpdateMapper[]): StandardPromise<DialogueTask[]> => {
  return request('/mall-dialogue/api/sys/dialogue/task/batch', {
    method: 'PUT',
    data: params,
  });
};

export const deleteDialogueTask = async (id: string): StandardPromise<number> => {
  return request('/mall-dialogue/api/sys/dialogue/task', {
    method: 'DELETE',
    params: { id },
  });
};

export const deleteDialogueTaskBatch = async (idList: string[]): StandardPromise<number> => {
  return request('/mall-dialogue/api/sys/dialogue/task/batch', {
    method: 'DELETE',
    params: { idList },
  });
};
