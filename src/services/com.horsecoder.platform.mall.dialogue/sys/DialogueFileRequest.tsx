import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';
import type { DialogueFile } from '@/types/com.horsecoder.platform.mall.dialogue/sys/DialogueFile';

export interface DialogueFileFilterMapper {
  id?: string;
  idIn?: string[];
  dialogueId?: string;
  dialogueIdIn?: string[];
  fileUrl?: string;
  fileName?: string;
  fileNameLike?: string;
  fileType?: string;
  fileTypeIn?: string[];
  fileSize?: string;
  gmtUpdateFrom?: number;
  gmtUpdateTo?: number;
  gmtCreateFrom?: number;
  gmtCreateTo?: number;
  page?: number;
  rows?: number;
  orderBy?: string[];
}

export interface DialogueFilePostMapper {
  dialogueId: string;
  fileUrl: string;
  fileName: string;
  fileType: string;
  fileSize: string;
}

export interface DialogueFileUpdateMapper {
  id: string;
  dialogueId?: string;
  fileUrl?: string;
  fileName?: string;
  fileType?: string;
  fileSize?: string;
}

export const getDialogueFileSimple = async (id: string): StandardPromise<DialogueFile> => {
  return request('/mall-dialogue/api/sys/dialogue/file/single/simple', {
    params: { id },
  });
};

export const getDialogueFile = async (id: string): StandardPromise<DialogueFile> => {
  return request('/mall-dialogue/api/sys/dialogue/file/single', {
    params: { id },
  });
};

export const getDialogueFileList = async (params: DialogueFileFilterMapper): StandardPromise<DialogueFile[]> => {
  return request('/mall-dialogue/api/sys/dialogue/file/filter', { params });
};

export const getDialogueFileDetailList = async (params: DialogueFileFilterMapper): StandardPromise<DialogueFile[]> => {
  return request('/mall-dialogue/api/sys/dialogue/file/filter/detail', { params });
};

export const postDialogueFile = async (params: DialogueFilePostMapper): StandardPromise<DialogueFile> => {
  return request('/mall-dialogue/api/sys/dialogue/file', {
    method: 'POST',
    data: { ...params },
  });
};

export const postDialogueFileBatch = async (params: DialogueFilePostMapper[]): StandardPromise<DialogueFile[]> => {
  return request('/mall-dialogue/api/sys/dialogue/file/batch', {
    method: 'POST',
    data: params,
  });
};

export const updateDialogueFile = async (params: DialogueFileUpdateMapper): StandardPromise<DialogueFile> => {
  return request('/mall-dialogue/api/sys/dialogue/file', {
    method: 'PATCH',
    data: { ...params },
  });
};

export const updateDialogueFileBatch = async (params: DialogueFileUpdateMapper[]): StandardPromise<DialogueFile[]> => {
  return request('/mall-dialogue/api/sys/dialogue/file/batch', {
    method: 'PATCH',
    data: params,
  });
};

export const putDialogueFile = async (params: DialogueFileUpdateMapper): StandardPromise<DialogueFile> => {
  return request('/mall-dialogue/api/sys/dialogue/file', {
    method: 'PUT',
    data: { ...params },
  });
};

export const putDialogueFileBatch = async (params: DialogueFileUpdateMapper[]): StandardPromise<DialogueFile[]> => {
  return request('/mall-dialogue/api/sys/dialogue/file/batch', {
    method: 'PUT',
    data: params,
  });
};

export const deleteDialogueFile = async (id: string): StandardPromise<number> => {
  return request('/mall-dialogue/api/sys/dialogue/file', {
    method: 'DELETE',
    params: { id },
  });
};

export const deleteDialogueFileBatch = async (idList: string[]): StandardPromise<number> => {
  return request('/mall-dialogue/api/sys/dialogue/file/batch', {
    method: 'DELETE',
    params: { idList },
  });
};
