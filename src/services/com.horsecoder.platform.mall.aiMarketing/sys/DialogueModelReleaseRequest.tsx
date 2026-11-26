import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';
import type { DialogueModelRelease } from '@/types/com.horsecoder.platform.mall.aiMarketing/sys/DialogueModelRelease';

export interface DialogueModelReleaseFilterMapper {
  id?: string;
  previewUrl?: string;
  status?: string;
  statusIn?: string[];
  dialogueModelId?: string;
  dialogueModelIdIn?: string[];
  releaseTimeFrom?: number;
  releaseTimeTo?: number;
  shareUrl?: string;
  gmtUpdateFrom?: number;
  gmtUpdateTo?: number;
  gmtCreateFrom?: number;
  gmtCreateTo?: number;
  page?: number;
  rows?: number;
  orderBy?: string[];
}

export interface DialogueModelReleasePostMapper {
  previewUrl?: string;
  status?: string;
  dialogueModelId: string;
  releaseTime?: number;
  shareUrl?: string;
}

export interface DialogueModelReleaseUpdateMapper {
  id: string;
  previewUrl?: string;
  status?: string;
  dialogueModelId?: string;
  releaseTime?: number;
  shareUrl?: string;
}

export const getDialogueModelReleaseSimple = async (id: string): StandardPromise<DialogueModelRelease> => {
  return request('/mall-aiMarketing/api/sys/dialogue/model/release/single/simple', {
    params: { id },
  });
};

export const getDialogueModelRelease = async (id: string): StandardPromise<DialogueModelRelease> => {
  return request('/mall-aiMarketing/api/sys/dialogue/model/release/single', {
    params: { id },
  });
};

export const getDialogueModelReleaseList = async (params: DialogueModelReleaseFilterMapper): StandardPromise<DialogueModelRelease[]> => {
  return request('/mall-aiMarketing/api/sys/dialogue/model/release/filter', { params });
};

export const getDialogueModelReleaseDetailList = async (params: DialogueModelReleaseFilterMapper): StandardPromise<DialogueModelRelease[]> => {
  return request('/mall-aiMarketing/api/sys/dialogue/model/release/filter/detail', { params });
};

export const postDialogueModelRelease = async (params: DialogueModelReleasePostMapper): StandardPromise<DialogueModelRelease> => {
  return request('/mall-aiMarketing/api/sys/dialogue/model/release', {
    method: 'POST',
    data: { ...params },
  });
};

export const postDialogueModelReleaseBatch = async (params: DialogueModelReleasePostMapper[]): StandardPromise<DialogueModelRelease[]> => {
  return request('/mall-aiMarketing/api/sys/dialogue/model/release/batch', {
    method: 'POST',
    data: params,
  });
};

export const updateDialogueModelRelease = async (params: DialogueModelReleaseUpdateMapper): StandardPromise<DialogueModelRelease> => {
  return request('/mall-aiMarketing/api/sys/dialogue/model/release', {
    method: 'PATCH',
    data: { ...params },
  });
};

export const updateDialogueModelReleaseBatch = async (params: DialogueModelReleaseUpdateMapper[]): StandardPromise<DialogueModelRelease[]> => {
  return request('/mall-aiMarketing/api/sys/dialogue/model/release/batch', {
    method: 'PATCH',
    data: params,
  });
};

export const putDialogueModelRelease = async (params: DialogueModelReleaseUpdateMapper): StandardPromise<DialogueModelRelease> => {
  return request('/mall-aiMarketing/api/sys/dialogue/model/release', {
    method: 'PUT',
    data: { ...params },
  });
};

export const putDialogueModelReleaseBatch = async (params: DialogueModelReleaseUpdateMapper[]): StandardPromise<DialogueModelRelease[]> => {
  return request('/mall-aiMarketing/api/sys/dialogue/model/release/batch', {
    method: 'PUT',
    data: params,
  });
};

export const deleteDialogueModelRelease = async (id: string): StandardPromise<number> => {
  return request('/mall-aiMarketing/api/sys/dialogue/model/release', {
    method: 'DELETE',
    params: { id },
  });
};

export const deleteDialogueModelReleaseBatch = async (idList: string[]): StandardPromise<number> => {
  return request('/mall-aiMarketing/api/sys/dialogue/model/release/batch', {
    method: 'DELETE',
    params: { idList },
  });
};
