import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';
import type { DialogueModel } from '@/types/com.horsecoder.platform.mall.aiMarketing/sys/DialogueModel';

export interface DialogueModelFilterMapper {
  id?: string;
  dialogueId?: string;
  dialogueIdIn?: string[];
  modelId?: string;
  modelIdIn?: string[];
  projectId?: string;
  projectIdIn?: string[];
  gmtUpdateFrom?: number;
  gmtUpdateTo?: number;
  gmtCreateFrom?: number;
  gmtCreateTo?: number;
  page?: number;
  rows?: number;
  orderBy?: string[];
}

export interface DialogueModelPostMapper {
  dialogueId: string;
  modelId: string;
  projectId: string;
}

export interface DialogueModelUpdateMapper {
  id: string;
  dialogueId?: string;
  modelId?: string;
  projectId?: string;
}

export const getDialogueModelSimple = async (id: string): StandardPromise<DialogueModel> => {
  return request('/mall-aiMarketing/api/sys/dialogue/model/single/simple', {
    params: { id },
  });
};

export const getDialogueModel = async (id: string): StandardPromise<DialogueModel> => {
  return request('/mall-aiMarketing/api/sys/dialogue/model/single', {
    params: { id },
  });
};

export const getDialogueModelList = async (params: DialogueModelFilterMapper): StandardPromise<DialogueModel[]> => {
  return request('/mall-aiMarketing/api/sys/dialogue/model/filter', { params });
};

export const getDialogueModelDetailList = async (params: DialogueModelFilterMapper): StandardPromise<DialogueModel[]> => {
  return request('/mall-aiMarketing/api/sys/dialogue/model/filter/detail', { params });
};

export const postDialogueModel = async (params: DialogueModelPostMapper): StandardPromise<DialogueModel> => {
  return request('/mall-aiMarketing/api/sys/dialogue/model', {
    method: 'POST',
    data: { ...params },
  });
};

export const postDialogueModelBatch = async (params: DialogueModelPostMapper[]): StandardPromise<DialogueModel[]> => {
  return request('/mall-aiMarketing/api/sys/dialogue/model/batch', {
    method: 'POST',
    data: params,
  });
};

export const updateDialogueModel = async (params: DialogueModelUpdateMapper): StandardPromise<DialogueModel> => {
  return request('/mall-aiMarketing/api/sys/dialogue/model', {
    method: 'PATCH',
    data: { ...params },
  });
};

export const updateDialogueModelBatch = async (params: DialogueModelUpdateMapper[]): StandardPromise<DialogueModel[]> => {
  return request('/mall-aiMarketing/api/sys/dialogue/model/batch', {
    method: 'PATCH',
    data: params,
  });
};

export const putDialogueModel = async (params: DialogueModelUpdateMapper): StandardPromise<DialogueModel> => {
  return request('/mall-aiMarketing/api/sys/dialogue/model', {
    method: 'PUT',
    data: { ...params },
  });
};

export const putDialogueModelBatch = async (params: DialogueModelUpdateMapper[]): StandardPromise<DialogueModel[]> => {
  return request('/mall-aiMarketing/api/sys/dialogue/model/batch', {
    method: 'PUT',
    data: params,
  });
};

export const deleteDialogueModel = async (id: string): StandardPromise<number> => {
  return request('/mall-aiMarketing/api/sys/dialogue/model', {
    method: 'DELETE',
    params: { id },
  });
};

export const deleteDialogueModelBatch = async (idList: string[]): StandardPromise<number> => {
  return request('/mall-aiMarketing/api/sys/dialogue/model/batch', {
    method: 'DELETE',
    params: { idList },
  });
};
