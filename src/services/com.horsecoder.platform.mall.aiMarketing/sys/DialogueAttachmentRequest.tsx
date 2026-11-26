import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';
import type { DialogueAttachment } from '@/types/com.horsecoder.platform.mall.aiMarketing/sys/DialogueAttachment';

export interface DialogueAttachmentFilterMapper {
  id?: string;
  attachmentType?: string;
  attachmentTypeIn?: string[];
  attachmentUrl?: string;
  dialogueId?: string;
  dialogueIdIn?: string[];
  gmtUpdateFrom?: number;
  gmtUpdateTo?: number;
  gmtCreateFrom?: number;
  gmtCreateTo?: number;
  page?: number;
  rows?: number;
  orderBy?: string[];
}

export interface DialogueAttachmentPostMapper {
  attachmentType: string;
  attachmentUrl: string;
  dialogueId: string;
}

export interface DialogueAttachmentUpdateMapper {
  id: string;
  attachmentType?: string;
  attachmentUrl?: string;
  dialogueId?: string;
}

export const getDialogueAttachmentSimple = async (id: string): StandardPromise<DialogueAttachment> => {
  return request('/mall-aiMarketing/api/sys/dialogue/attachment/single/simple', {
    params: { id },
  });
};

export const getDialogueAttachment = async (id: string): StandardPromise<DialogueAttachment> => {
  return request('/mall-aiMarketing/api/sys/dialogue/attachment/single', {
    params: { id },
  });
};

export const getDialogueAttachmentList = async (params: DialogueAttachmentFilterMapper): StandardPromise<DialogueAttachment[]> => {
  return request('/mall-aiMarketing/api/sys/dialogue/attachment/filter', { params });
};

export const getDialogueAttachmentDetailList = async (params: DialogueAttachmentFilterMapper): StandardPromise<DialogueAttachment[]> => {
  return request('/mall-aiMarketing/api/sys/dialogue/attachment/filter/detail', { params });
};

export const postDialogueAttachment = async (params: DialogueAttachmentPostMapper): StandardPromise<DialogueAttachment> => {
  return request('/mall-aiMarketing/api/sys/dialogue/attachment', {
    method: 'POST',
    data: { ...params },
  });
};

export const postDialogueAttachmentBatch = async (params: DialogueAttachmentPostMapper[]): StandardPromise<DialogueAttachment[]> => {
  return request('/mall-aiMarketing/api/sys/dialogue/attachment/batch', {
    method: 'POST',
    data: params,
  });
};

export const updateDialogueAttachment = async (params: DialogueAttachmentUpdateMapper): StandardPromise<DialogueAttachment> => {
  return request('/mall-aiMarketing/api/sys/dialogue/attachment', {
    method: 'PATCH',
    data: { ...params },
  });
};

export const updateDialogueAttachmentBatch = async (params: DialogueAttachmentUpdateMapper[]): StandardPromise<DialogueAttachment[]> => {
  return request('/mall-aiMarketing/api/sys/dialogue/attachment/batch', {
    method: 'PATCH',
    data: params,
  });
};

export const putDialogueAttachment = async (params: DialogueAttachmentUpdateMapper): StandardPromise<DialogueAttachment> => {
  return request('/mall-aiMarketing/api/sys/dialogue/attachment', {
    method: 'PUT',
    data: { ...params },
  });
};

export const putDialogueAttachmentBatch = async (params: DialogueAttachmentUpdateMapper[]): StandardPromise<DialogueAttachment[]> => {
  return request('/mall-aiMarketing/api/sys/dialogue/attachment/batch', {
    method: 'PUT',
    data: params,
  });
};

export const deleteDialogueAttachment = async (id: string): StandardPromise<number> => {
  return request('/mall-aiMarketing/api/sys/dialogue/attachment', {
    method: 'DELETE',
    params: { id },
  });
};

export const deleteDialogueAttachmentBatch = async (idList: string[]): StandardPromise<number> => {
  return request('/mall-aiMarketing/api/sys/dialogue/attachment/batch', {
    method: 'DELETE',
    params: { idList },
  });
};
