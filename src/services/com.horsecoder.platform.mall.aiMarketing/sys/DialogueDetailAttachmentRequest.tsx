import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';
import type { DialogueDetailAttachment } from '@/types/com.horsecoder.platform.mall.aiMarketing/sys/DialogueDetailAttachment';

export interface DialogueDetailAttachmentFilterMapper {
  id?: string;
  dialogueDetailId?: string;
  dialogueDetailIdIn?: string[];
  attachmentType?: string;
  attachmentTypeIn?: string[];
  attachmentUrl?: string;
  gmtUpdateFrom?: number;
  gmtUpdateTo?: number;
  gmtCreateFrom?: number;
  gmtCreateTo?: number;
  page?: number;
  rows?: number;
  orderBy?: string[];
}

export interface DialogueDetailAttachmentPostMapper {
  dialogueDetailId: string;
  attachmentType: string;
  attachmentUrl: string;
}

export interface DialogueDetailAttachmentUpdateMapper {
  id: string;
  dialogueDetailId?: string;
  attachmentType?: string;
  attachmentUrl?: string;
}

export const getDialogueDetailAttachmentSimple = async (id: string): StandardPromise<DialogueDetailAttachment> => {
  return request('/mall-aiMarketing/api/sys/dialogue/detail/attachment/single/simple', {
    params: { id },
  });
};

export const getDialogueDetailAttachment = async (id: string): StandardPromise<DialogueDetailAttachment> => {
  return request('/mall-aiMarketing/api/sys/dialogue/detail/attachment/single', {
    params: { id },
  });
};

export const getDialogueDetailAttachmentList = async (params: DialogueDetailAttachmentFilterMapper): StandardPromise<DialogueDetailAttachment[]> => {
  return request('/mall-aiMarketing/api/sys/dialogue/detail/attachment/filter', { params });
};

export const getDialogueDetailAttachmentDetailList = async (params: DialogueDetailAttachmentFilterMapper): StandardPromise<DialogueDetailAttachment[]> => {
  return request('/mall-aiMarketing/api/sys/dialogue/detail/attachment/filter/detail', { params });
};

export const postDialogueDetailAttachment = async (params: DialogueDetailAttachmentPostMapper): StandardPromise<DialogueDetailAttachment> => {
  return request('/mall-aiMarketing/api/sys/dialogue/detail/attachment', {
    method: 'POST',
    data: { ...params },
  });
};

export const postDialogueDetailAttachmentBatch = async (params: DialogueDetailAttachmentPostMapper[]): StandardPromise<DialogueDetailAttachment[]> => {
  return request('/mall-aiMarketing/api/sys/dialogue/detail/attachment/batch', {
    method: 'POST',
    data: params,
  });
};

export const updateDialogueDetailAttachment = async (params: DialogueDetailAttachmentUpdateMapper): StandardPromise<DialogueDetailAttachment> => {
  return request('/mall-aiMarketing/api/sys/dialogue/detail/attachment', {
    method: 'PATCH',
    data: { ...params },
  });
};

export const updateDialogueDetailAttachmentBatch = async (params: DialogueDetailAttachmentUpdateMapper[]): StandardPromise<DialogueDetailAttachment[]> => {
  return request('/mall-aiMarketing/api/sys/dialogue/detail/attachment/batch', {
    method: 'PATCH',
    data: params,
  });
};

export const putDialogueDetailAttachment = async (params: DialogueDetailAttachmentUpdateMapper): StandardPromise<DialogueDetailAttachment> => {
  return request('/mall-aiMarketing/api/sys/dialogue/detail/attachment', {
    method: 'PUT',
    data: { ...params },
  });
};

export const putDialogueDetailAttachmentBatch = async (params: DialogueDetailAttachmentUpdateMapper[]): StandardPromise<DialogueDetailAttachment[]> => {
  return request('/mall-aiMarketing/api/sys/dialogue/detail/attachment/batch', {
    method: 'PUT',
    data: params,
  });
};

export const deleteDialogueDetailAttachment = async (id: string): StandardPromise<number> => {
  return request('/mall-aiMarketing/api/sys/dialogue/detail/attachment', {
    method: 'DELETE',
    params: { id },
  });
};

export const deleteDialogueDetailAttachmentBatch = async (idList: string[]): StandardPromise<number> => {
  return request('/mall-aiMarketing/api/sys/dialogue/detail/attachment/batch', {
    method: 'DELETE',
    params: { idList },
  });
};
