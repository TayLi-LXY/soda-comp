import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';
import type { DialogueDetailsModelDesignProcess } from '@/types/com.horsecoder.platform.mall.aiMarketing/sys/DialogueDetailsModelDesignProcess';

export interface DialogueDetailsModelDesignProcessFilterMapper {
  id?: string;
  dialogueDetailsId?: string;
  dialogueDetailsIdIn?: string[];
  modelJsonId?: string;
  modelJsonIdIn?: string[];
  type?: string;
  typeIn?: string[];
  status?: string;
  statusIn?: string[];
  codeFileUrl?: string;
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

export interface DialogueDetailsModelDesignProcessPostMapper {
  dialogueDetailsId: string;
  modelJsonId: string;
  type: string;
  status?: string;
  codeFileUrl?: string;
  dialogueModelId: string;
}

export interface DialogueDetailsModelDesignProcessUpdateMapper {
  id: string;
  dialogueDetailsId?: string;
  modelJsonId?: string;
  type?: string;
  status?: string;
  codeFileUrl?: string;
  dialogueModelId?: string;
}

export const getDialogueDetailsModelDesignProcessSimple = async (id: string): StandardPromise<DialogueDetailsModelDesignProcess> => {
  return request('/mall-aiMarketing/api/sys/dialogue/details/model/design/process/single/simple', {
    params: { id },
  });
};

export const getDialogueDetailsModelDesignProcess = async (id: string): StandardPromise<DialogueDetailsModelDesignProcess> => {
  return request('/mall-aiMarketing/api/sys/dialogue/details/model/design/process/single', {
    params: { id },
  });
};

export const getDialogueDetailsModelDesignProcessList = async (params: DialogueDetailsModelDesignProcessFilterMapper): StandardPromise<DialogueDetailsModelDesignProcess[]> => {
  return request('/mall-aiMarketing/api/sys/dialogue/details/model/design/process/filter', { params });
};

export const getDialogueDetailsModelDesignProcessDetailList = async (params: DialogueDetailsModelDesignProcessFilterMapper): StandardPromise<DialogueDetailsModelDesignProcess[]> => {
  return request('/mall-aiMarketing/api/sys/dialogue/details/model/design/process/filter/detail', { params });
};

export const postDialogueDetailsModelDesignProcess = async (params: DialogueDetailsModelDesignProcessPostMapper): StandardPromise<DialogueDetailsModelDesignProcess> => {
  return request('/mall-aiMarketing/api/sys/dialogue/details/model/design/process', {
    method: 'POST',
    data: { ...params },
  });
};

export const postDialogueDetailsModelDesignProcessBatch = async (params: DialogueDetailsModelDesignProcessPostMapper[]): StandardPromise<DialogueDetailsModelDesignProcess[]> => {
  return request('/mall-aiMarketing/api/sys/dialogue/details/model/design/process/batch', {
    method: 'POST',
    data: params,
  });
};

export const updateDialogueDetailsModelDesignProcess = async (params: DialogueDetailsModelDesignProcessUpdateMapper): StandardPromise<DialogueDetailsModelDesignProcess> => {
  return request('/mall-aiMarketing/api/sys/dialogue/details/model/design/process', {
    method: 'PATCH',
    data: { ...params },
  });
};

export const updateDialogueDetailsModelDesignProcessBatch = async (params: DialogueDetailsModelDesignProcessUpdateMapper[]): StandardPromise<DialogueDetailsModelDesignProcess[]> => {
  return request('/mall-aiMarketing/api/sys/dialogue/details/model/design/process/batch', {
    method: 'PATCH',
    data: params,
  });
};

export const putDialogueDetailsModelDesignProcess = async (params: DialogueDetailsModelDesignProcessUpdateMapper): StandardPromise<DialogueDetailsModelDesignProcess> => {
  return request('/mall-aiMarketing/api/sys/dialogue/details/model/design/process', {
    method: 'PUT',
    data: { ...params },
  });
};

export const putDialogueDetailsModelDesignProcessBatch = async (params: DialogueDetailsModelDesignProcessUpdateMapper[]): StandardPromise<DialogueDetailsModelDesignProcess[]> => {
  return request('/mall-aiMarketing/api/sys/dialogue/details/model/design/process/batch', {
    method: 'PUT',
    data: params,
  });
};

export const deleteDialogueDetailsModelDesignProcess = async (id: string): StandardPromise<number> => {
  return request('/mall-aiMarketing/api/sys/dialogue/details/model/design/process', {
    method: 'DELETE',
    params: { id },
  });
};

export const deleteDialogueDetailsModelDesignProcessBatch = async (idList: string[]): StandardPromise<number> => {
  return request('/mall-aiMarketing/api/sys/dialogue/details/model/design/process/batch', {
    method: 'DELETE',
    params: { idList },
  });
};
