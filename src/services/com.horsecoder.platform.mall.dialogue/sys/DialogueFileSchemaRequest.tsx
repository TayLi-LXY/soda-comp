import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';
import type { DialogueFileSchema } from '@/types/com.horsecoder.platform.mall.dialogue/sys/DialogueFileSchema';

export interface DialogueFileSchemaFilterMapper {
  id?: string;
  dialogueFileId?: string;
  dialogueFileIdIn?: string[];
  dialogueSchemaId?: string;
  dialogueSchemaIdIn?: string[];
  gmtUpdateFrom?: number;
  gmtUpdateTo?: number;
  gmtCreateFrom?: number;
  gmtCreateTo?: number;
  page?: number;
  rows?: number;
  orderBy?: string[];
}

export interface DialogueFileSchemaPostMapper {
  dialogueFileId: string;
  dialogueSchemaId: string;
}

export interface DialogueFileSchemaUpdateMapper {
  id: string;
  dialogueFileId?: string;
  dialogueSchemaId?: string;
}

export const getDialogueFileSchemaSimple = async (id: string): StandardPromise<DialogueFileSchema> => {
  return request('/mall-dialogue/api/sys/dialogue/file/schema/single/simple', {
    params: { id },
  });
};

export const getDialogueFileSchema = async (id: string): StandardPromise<DialogueFileSchema> => {
  return request('/mall-dialogue/api/sys/dialogue/file/schema/single', {
    params: { id },
  });
};

export const getDialogueFileSchemaList = async (params: DialogueFileSchemaFilterMapper): StandardPromise<DialogueFileSchema[]> => {
  return request('/mall-dialogue/api/sys/dialogue/file/schema/filter', { params });
};

export const getDialogueFileSchemaDetailList = async (params: DialogueFileSchemaFilterMapper): StandardPromise<DialogueFileSchema[]> => {
  return request('/mall-dialogue/api/sys/dialogue/file/schema/filter/detail', { params });
};

export const postDialogueFileSchema = async (params: DialogueFileSchemaPostMapper): StandardPromise<DialogueFileSchema> => {
  return request('/mall-dialogue/api/sys/dialogue/file/schema', {
    method: 'POST',
    data: { ...params },
  });
};

export const postDialogueFileSchemaBatch = async (params: DialogueFileSchemaPostMapper[]): StandardPromise<DialogueFileSchema[]> => {
  return request('/mall-dialogue/api/sys/dialogue/file/schema/batch', {
    method: 'POST',
    data: params,
  });
};

export const updateDialogueFileSchema = async (params: DialogueFileSchemaUpdateMapper): StandardPromise<DialogueFileSchema> => {
  return request('/mall-dialogue/api/sys/dialogue/file/schema', {
    method: 'PATCH',
    data: { ...params },
  });
};

export const updateDialogueFileSchemaBatch = async (params: DialogueFileSchemaUpdateMapper[]): StandardPromise<DialogueFileSchema[]> => {
  return request('/mall-dialogue/api/sys/dialogue/file/schema/batch', {
    method: 'PATCH',
    data: params,
  });
};

export const putDialogueFileSchema = async (params: DialogueFileSchemaUpdateMapper): StandardPromise<DialogueFileSchema> => {
  return request('/mall-dialogue/api/sys/dialogue/file/schema', {
    method: 'PUT',
    data: { ...params },
  });
};

export const putDialogueFileSchemaBatch = async (params: DialogueFileSchemaUpdateMapper[]): StandardPromise<DialogueFileSchema[]> => {
  return request('/mall-dialogue/api/sys/dialogue/file/schema/batch', {
    method: 'PUT',
    data: params,
  });
};

export const deleteDialogueFileSchema = async (id: string): StandardPromise<number> => {
  return request('/mall-dialogue/api/sys/dialogue/file/schema', {
    method: 'DELETE',
    params: { id },
  });
};

export const deleteDialogueFileSchemaBatch = async (idList: string[]): StandardPromise<number> => {
  return request('/mall-dialogue/api/sys/dialogue/file/schema/batch', {
    method: 'DELETE',
    params: { idList },
  });
};
