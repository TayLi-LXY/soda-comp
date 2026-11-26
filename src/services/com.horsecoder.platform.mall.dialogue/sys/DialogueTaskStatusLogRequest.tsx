import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';
import type { DialogueTaskStatusLog } from '@/types/com.horsecoder.platform.mall.dialogue/sys/DialogueTaskStatusLog';

export interface DialogueTaskStatusLogFilterMapper {
  id?: string;
  dialogueTaskId?: string;
  dialogueTaskIdIn?: string[];
  status?: string;
  statusIn?: string[];
  log?: string;
  logLike?: string;
  gmtUpdateFrom?: number;
  gmtUpdateTo?: number;
  gmtCreateFrom?: number;
  gmtCreateTo?: number;
  page?: number;
  rows?: number;
  orderBy?: string[];
}

export interface DialogueTaskStatusLogPostMapper {
  dialogueTaskId: string;
  status: string;
  log: string;
}

export interface DialogueTaskStatusLogUpdateMapper {
  id: string;
  dialogueTaskId?: string;
  status?: string;
  log?: string;
}

export const getDialogueTaskStatusLogSimple = async (id: string): StandardPromise<DialogueTaskStatusLog> => {
  return request('/mall-dialogue/api/sys/dialogue/task/status/log/single/simple', {
    params: { id },
  });
};

export const getDialogueTaskStatusLog = async (id: string): StandardPromise<DialogueTaskStatusLog> => {
  return request('/mall-dialogue/api/sys/dialogue/task/status/log/single', {
    params: { id },
  });
};

export const getDialogueTaskStatusLogList = async (params: DialogueTaskStatusLogFilterMapper): StandardPromise<DialogueTaskStatusLog[]> => {
  return request('/mall-dialogue/api/sys/dialogue/task/status/log/filter', { params });
};

export const getDialogueTaskStatusLogDetailList = async (params: DialogueTaskStatusLogFilterMapper): StandardPromise<DialogueTaskStatusLog[]> => {
  return request('/mall-dialogue/api/sys/dialogue/task/status/log/filter/detail', { params });
};

export const postDialogueTaskStatusLog = async (params: DialogueTaskStatusLogPostMapper): StandardPromise<DialogueTaskStatusLog> => {
  return request('/mall-dialogue/api/sys/dialogue/task/status/log', {
    method: 'POST',
    data: { ...params },
  });
};

export const postDialogueTaskStatusLogBatch = async (params: DialogueTaskStatusLogPostMapper[]): StandardPromise<DialogueTaskStatusLog[]> => {
  return request('/mall-dialogue/api/sys/dialogue/task/status/log/batch', {
    method: 'POST',
    data: params,
  });
};

export const updateDialogueTaskStatusLog = async (params: DialogueTaskStatusLogUpdateMapper): StandardPromise<DialogueTaskStatusLog> => {
  return request('/mall-dialogue/api/sys/dialogue/task/status/log', {
    method: 'PATCH',
    data: { ...params },
  });
};

export const updateDialogueTaskStatusLogBatch = async (params: DialogueTaskStatusLogUpdateMapper[]): StandardPromise<DialogueTaskStatusLog[]> => {
  return request('/mall-dialogue/api/sys/dialogue/task/status/log/batch', {
    method: 'PATCH',
    data: params,
  });
};

export const putDialogueTaskStatusLog = async (params: DialogueTaskStatusLogUpdateMapper): StandardPromise<DialogueTaskStatusLog> => {
  return request('/mall-dialogue/api/sys/dialogue/task/status/log', {
    method: 'PUT',
    data: { ...params },
  });
};

export const putDialogueTaskStatusLogBatch = async (params: DialogueTaskStatusLogUpdateMapper[]): StandardPromise<DialogueTaskStatusLog[]> => {
  return request('/mall-dialogue/api/sys/dialogue/task/status/log/batch', {
    method: 'PUT',
    data: params,
  });
};

export const deleteDialogueTaskStatusLog = async (id: string): StandardPromise<number> => {
  return request('/mall-dialogue/api/sys/dialogue/task/status/log', {
    method: 'DELETE',
    params: { id },
  });
};

export const deleteDialogueTaskStatusLogBatch = async (idList: string[]): StandardPromise<number> => {
  return request('/mall-dialogue/api/sys/dialogue/task/status/log/batch', {
    method: 'DELETE',
    params: { idList },
  });
};
