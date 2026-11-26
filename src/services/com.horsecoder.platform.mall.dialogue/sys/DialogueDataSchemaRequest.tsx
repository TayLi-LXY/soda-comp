import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';
import type { DialogueDataSchema } from '@/types/com.horsecoder.platform.mall.dialogue/sys/DialogueDataSchema';

export interface DialogueDataSchemaFilterMapper {
  id?: string;
  dialogueId?: string;
  dialogueIdIn?: string[];
  schemaName?: string;
  schemaNameLike?: string;
  schemaUrl?: string;
  schemaDefinition?: string;
  gmtUpdateFrom?: number;
  gmtUpdateTo?: number;
  gmtCreateFrom?: number;
  gmtCreateTo?: number;
  page?: number;
  rows?: number;
  orderBy?: string[];
}

export interface DialogueDataSchemaPostMapper {
  dialogueId: string;
  schemaName: string;
  schemaUrl: string;
  schemaDefinition: string;
}

export interface DialogueDataSchemaUpdateMapper {
  id: string;
  dialogueId?: string;
  schemaName?: string;
  schemaUrl?: string;
  schemaDefinition?: string;
}

export const getDialogueDataSchemaSimple = async (id: string): StandardPromise<DialogueDataSchema> => {
  return request('/mall-dialogue/api/sys/dialogue/data/schema/single/simple', {
    params: { id },
  });
};

export const getDialogueDataSchema = async (id: string): StandardPromise<DialogueDataSchema> => {
  return request('/mall-dialogue/api/sys/dialogue/data/schema/single', {
    params: { id },
  });
};

export const getDialogueDataSchemaList = async (params: DialogueDataSchemaFilterMapper): StandardPromise<DialogueDataSchema[]> => {
  return request('/mall-dialogue/api/sys/dialogue/data/schema/filter', { params });
};

export const getDialogueDataSchemaDetailList = async (params: DialogueDataSchemaFilterMapper): StandardPromise<DialogueDataSchema[]> => {
  return request('/mall-dialogue/api/sys/dialogue/data/schema/filter/detail', { params });
};

export const postDialogueDataSchema = async (params: DialogueDataSchemaPostMapper): StandardPromise<DialogueDataSchema> => {
  return request('/mall-dialogue/api/sys/dialogue/data/schema', {
    method: 'POST',
    data: { ...params },
  });
};

export const postDialogueDataSchemaBatch = async (params: DialogueDataSchemaPostMapper[]): StandardPromise<DialogueDataSchema[]> => {
  return request('/mall-dialogue/api/sys/dialogue/data/schema/batch', {
    method: 'POST',
    data: params,
  });
};

export const updateDialogueDataSchema = async (params: DialogueDataSchemaUpdateMapper): StandardPromise<DialogueDataSchema> => {
  return request('/mall-dialogue/api/sys/dialogue/data/schema', {
    method: 'PATCH',
    data: { ...params },
  });
};

export const updateDialogueDataSchemaBatch = async (params: DialogueDataSchemaUpdateMapper[]): StandardPromise<DialogueDataSchema[]> => {
  return request('/mall-dialogue/api/sys/dialogue/data/schema/batch', {
    method: 'PATCH',
    data: params,
  });
};

export const putDialogueDataSchema = async (params: DialogueDataSchemaUpdateMapper): StandardPromise<DialogueDataSchema> => {
  return request('/mall-dialogue/api/sys/dialogue/data/schema', {
    method: 'PUT',
    data: { ...params },
  });
};

export const putDialogueDataSchemaBatch = async (params: DialogueDataSchemaUpdateMapper[]): StandardPromise<DialogueDataSchema[]> => {
  return request('/mall-dialogue/api/sys/dialogue/data/schema/batch', {
    method: 'PUT',
    data: params,
  });
};

export const deleteDialogueDataSchema = async (id: string): StandardPromise<number> => {
  return request('/mall-dialogue/api/sys/dialogue/data/schema', {
    method: 'DELETE',
    params: { id },
  });
};

export const deleteDialogueDataSchemaBatch = async (idList: string[]): StandardPromise<number> => {
  return request('/mall-dialogue/api/sys/dialogue/data/schema/batch', {
    method: 'DELETE',
    params: { idList },
  });
};
