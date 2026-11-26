import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';
import type { DialogueDatabase } from '@/types/com.horsecoder.platform.mall.dialogue/sys/DialogueDatabase';

export interface DialogueDatabaseFilterMapper {
  id?: string;
  name?: string;
  nameLike?: string;
  dialogueDataSchemaId?: string;
  dialogueDataSchemaIdIn?: string[];
  type?: string;
  typeIn?: string[];
  fileUrl?: string;
  gmtUpdateFrom?: number;
  gmtUpdateTo?: number;
  gmtCreateFrom?: number;
  gmtCreateTo?: number;
  page?: number;
  rows?: number;
  orderBy?: string[];
}

export interface DialogueDatabasePostMapper {
  name: string;
  dialogueDataSchemaId: string;
  type?: string;
  fileUrl: string;
}

export interface DialogueDatabaseUpdateMapper {
  id: string;
  name?: string;
  dialogueDataSchemaId?: string;
  type?: string;
  fileUrl?: string;
}

export const getDialogueDatabaseSimple = async (id: string): StandardPromise<DialogueDatabase> => {
  return request('/mall-dialogue/api/sys/dialogue/database/single/simple', {
    params: { id },
  });
};

export const getDialogueDatabase = async (id: string): StandardPromise<DialogueDatabase> => {
  return request('/mall-dialogue/api/sys/dialogue/database/single', {
    params: { id },
  });
};

export const getDialogueDatabaseList = async (params: DialogueDatabaseFilterMapper): StandardPromise<DialogueDatabase[]> => {
  return request('/mall-dialogue/api/sys/dialogue/database/filter', { params });
};

export const getDialogueDatabaseDetailList = async (params: DialogueDatabaseFilterMapper): StandardPromise<DialogueDatabase[]> => {
  return request('/mall-dialogue/api/sys/dialogue/database/filter/detail', { params });
};

export const postDialogueDatabase = async (params: DialogueDatabasePostMapper): StandardPromise<DialogueDatabase> => {
  return request('/mall-dialogue/api/sys/dialogue/database', {
    method: 'POST',
    data: { ...params },
  });
};

export const postDialogueDatabaseBatch = async (params: DialogueDatabasePostMapper[]): StandardPromise<DialogueDatabase[]> => {
  return request('/mall-dialogue/api/sys/dialogue/database/batch', {
    method: 'POST',
    data: params,
  });
};

export const updateDialogueDatabase = async (params: DialogueDatabaseUpdateMapper): StandardPromise<DialogueDatabase> => {
  return request('/mall-dialogue/api/sys/dialogue/database', {
    method: 'PATCH',
    data: { ...params },
  });
};

export const updateDialogueDatabaseBatch = async (params: DialogueDatabaseUpdateMapper[]): StandardPromise<DialogueDatabase[]> => {
  return request('/mall-dialogue/api/sys/dialogue/database/batch', {
    method: 'PATCH',
    data: params,
  });
};

export const putDialogueDatabase = async (params: DialogueDatabaseUpdateMapper): StandardPromise<DialogueDatabase> => {
  return request('/mall-dialogue/api/sys/dialogue/database', {
    method: 'PUT',
    data: { ...params },
  });
};

export const putDialogueDatabaseBatch = async (params: DialogueDatabaseUpdateMapper[]): StandardPromise<DialogueDatabase[]> => {
  return request('/mall-dialogue/api/sys/dialogue/database/batch', {
    method: 'PUT',
    data: params,
  });
};

export const deleteDialogueDatabase = async (id: string): StandardPromise<number> => {
  return request('/mall-dialogue/api/sys/dialogue/database', {
    method: 'DELETE',
    params: { id },
  });
};

export const deleteDialogueDatabaseBatch = async (idList: string[]): StandardPromise<number> => {
  return request('/mall-dialogue/api/sys/dialogue/database/batch', {
    method: 'DELETE',
    params: { idList },
  });
};
