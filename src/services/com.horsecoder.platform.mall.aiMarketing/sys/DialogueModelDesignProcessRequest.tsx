import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';
import type { DialogueModelDesignProcess } from '@/types/com.horsecoder.platform.mall.aiMarketing/sys/DialogueModelDesignProcess';

export interface DialogueModelDesignProcessFilterMapper {
  id?: string;
  dialogueModelId?: string;
  dialogueModelIdIn?: string[];
  modelJsonId?: string;
  modelJsonIdIn?: string[];
  modelJsonType?: string;
  modelJsonTypeIn?: string[];
  status?: string;
  statusIn?: string[];
  ifFocus?: number;
  ifFocusIn?: number[];
  codeFileUrl?: string;
  gmtUpdateFrom?: number;
  gmtUpdateTo?: number;
  gmtCreateFrom?: number;
  gmtCreateTo?: number;
  page?: number;
  rows?: number;
  orderBy?: string[];
}

export interface DialogueModelDesignProcessPostMapper {
  dialogueModelId: string;
  modelJsonId: string;
  modelJsonType: string;
  status?: string;
  ifFocus?: number;
  codeFileUrl?: string;
}

export interface DialogueModelDesignProcessUpdateMapper {
  id: string;
  dialogueModelId?: string;
  modelJsonId?: string;
  modelJsonType?: string;
  status?: string;
  ifFocus?: number;
  codeFileUrl?: string;
}

export const getDialogueModelDesignProcessSimple = async (id: string): StandardPromise<DialogueModelDesignProcess> => {
  return request('/mall-aiMarketing/api/sys/dialogue/model/design/process/single/simple', {
    params: { id },
  });
};

export const getDialogueModelDesignProcess = async (id: string): StandardPromise<DialogueModelDesignProcess> => {
  return request('/mall-aiMarketing/api/sys/dialogue/model/design/process/single', {
    params: { id },
  });
};

export const getDialogueModelDesignProcessList = async (params: DialogueModelDesignProcessFilterMapper): StandardPromise<DialogueModelDesignProcess[]> => {
  return request('/mall-aiMarketing/api/sys/dialogue/model/design/process/filter', { params });
};

export const getDialogueModelDesignProcessDetailList = async (params: DialogueModelDesignProcessFilterMapper): StandardPromise<DialogueModelDesignProcess[]> => {
  return request('/mall-aiMarketing/api/sys/dialogue/model/design/process/filter/detail', { params });
};

export const postDialogueModelDesignProcess = async (params: DialogueModelDesignProcessPostMapper): StandardPromise<DialogueModelDesignProcess> => {
  return request('/mall-aiMarketing/api/sys/dialogue/model/design/process', {
    method: 'POST',
    data: { ...params },
  });
};

export const postDialogueModelDesignProcessBatch = async (params: DialogueModelDesignProcessPostMapper[]): StandardPromise<DialogueModelDesignProcess[]> => {
  return request('/mall-aiMarketing/api/sys/dialogue/model/design/process/batch', {
    method: 'POST',
    data: params,
  });
};

export const updateDialogueModelDesignProcess = async (params: DialogueModelDesignProcessUpdateMapper): StandardPromise<DialogueModelDesignProcess> => {
  return request('/mall-aiMarketing/api/sys/dialogue/model/design/process', {
    method: 'PATCH',
    data: { ...params },
  });
};

export const updateDialogueModelDesignProcessBatch = async (params: DialogueModelDesignProcessUpdateMapper[]): StandardPromise<DialogueModelDesignProcess[]> => {
  return request('/mall-aiMarketing/api/sys/dialogue/model/design/process/batch', {
    method: 'PATCH',
    data: params,
  });
};

export const putDialogueModelDesignProcess = async (params: DialogueModelDesignProcessUpdateMapper): StandardPromise<DialogueModelDesignProcess> => {
  return request('/mall-aiMarketing/api/sys/dialogue/model/design/process', {
    method: 'PUT',
    data: { ...params },
  });
};

export const putDialogueModelDesignProcessBatch = async (params: DialogueModelDesignProcessUpdateMapper[]): StandardPromise<DialogueModelDesignProcess[]> => {
  return request('/mall-aiMarketing/api/sys/dialogue/model/design/process/batch', {
    method: 'PUT',
    data: params,
  });
};

export const deleteDialogueModelDesignProcess = async (id: string): StandardPromise<number> => {
  return request('/mall-aiMarketing/api/sys/dialogue/model/design/process', {
    method: 'DELETE',
    params: { id },
  });
};

export const deleteDialogueModelDesignProcessBatch = async (idList: string[]): StandardPromise<number> => {
  return request('/mall-aiMarketing/api/sys/dialogue/model/design/process/batch', {
    method: 'DELETE',
    params: { idList },
  });
};
