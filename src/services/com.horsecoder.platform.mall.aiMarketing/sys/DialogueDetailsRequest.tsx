import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';
import type { DialogueDetails } from '@/types/com.horsecoder.platform.mall.aiMarketing/sys/DialogueDetails';

export interface DialogueDetailsFilterMapper {
  id?: string;
  dialogueId?: string;
  dialogueIdIn?: string[];
  sendMessage?: string;
  replyMessage?: string;
  type?: string;
  dialogueVoiceUrl?: string;
  status?: number;
  statusIn?: number[];
  gmtUpdateFrom?: number;
  gmtUpdateTo?: number;
  gmtCreateFrom?: number;
  gmtCreateTo?: number;
  page?: number;
  rows?: number;
  orderBy?: string[];
}

export interface DialogueDetailsPostMapper {
  status?: number;
}

export interface DialogueDetailsUpdateMapper {
  id: string;
  status?: number;
}

export const getDialogueDetailsSimple = async (id: string): StandardPromise<DialogueDetails> => {
  return request('/mall-aiMarketing/api/sys/dialogue/details/single/simple', {
    params: { id },
  });
};

export const getDialogueDetails = async (id: string): StandardPromise<DialogueDetails> => {
  return request('/mall-aiMarketing/api/sys/dialogue/details/single', {
    params: { id },
  });
};

export const getDialogueDetailsList = async (params: DialogueDetailsFilterMapper): StandardPromise<DialogueDetails[]> => {
  return request('/mall-aiMarketing/api/sys/dialogue/details/filter', { params });
};

export const getDialogueDetailsDetailList = async (params: DialogueDetailsFilterMapper): StandardPromise<DialogueDetails[]> => {
  return request('/mall-aiMarketing/api/sys/dialogue/details/filter/detail', { params });
};

export const postDialogueDetails = async (params: DialogueDetailsPostMapper): StandardPromise<DialogueDetails> => {
  return request('/mall-aiMarketing/api/sys/dialogue/details', {
    method: 'POST',
    data: { ...params },
  });
};

export const postDialogueDetailsBatch = async (params: DialogueDetailsPostMapper[]): StandardPromise<DialogueDetails[]> => {
  return request('/mall-aiMarketing/api/sys/dialogue/details/batch', {
    method: 'POST',
    data: params,
  });
};

export const updateDialogueDetails = async (params: DialogueDetailsUpdateMapper): StandardPromise<DialogueDetails> => {
  return request('/mall-aiMarketing/api/sys/dialogue/details', {
    method: 'PATCH',
    data: { ...params },
  });
};

export const updateDialogueDetailsBatch = async (params: DialogueDetailsUpdateMapper[]): StandardPromise<DialogueDetails[]> => {
  return request('/mall-aiMarketing/api/sys/dialogue/details/batch', {
    method: 'PATCH',
    data: params,
  });
};

export const putDialogueDetails = async (params: DialogueDetailsUpdateMapper): StandardPromise<DialogueDetails> => {
  return request('/mall-aiMarketing/api/sys/dialogue/details', {
    method: 'PUT',
    data: { ...params },
  });
};

export const putDialogueDetailsBatch = async (params: DialogueDetailsUpdateMapper[]): StandardPromise<DialogueDetails[]> => {
  return request('/mall-aiMarketing/api/sys/dialogue/details/batch', {
    method: 'PUT',
    data: params,
  });
};

export const deleteDialogueDetails = async (id: string): StandardPromise<number> => {
  return request('/mall-aiMarketing/api/sys/dialogue/details', {
    method: 'DELETE',
    params: { id },
  });
};

export const deleteDialogueDetailsBatch = async (idList: string[]): StandardPromise<number> => {
  return request('/mall-aiMarketing/api/sys/dialogue/details/batch', {
    method: 'DELETE',
    params: { idList },
  });
};
