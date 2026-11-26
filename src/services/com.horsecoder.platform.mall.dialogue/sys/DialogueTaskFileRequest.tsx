import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';
import type { DialogueTaskFile } from '@/types/com.horsecoder.platform.mall.dialogue/sys/DialogueTaskFile';

export interface DialogueTaskFileFilterMapper {
  id?: string;
  dialogueTaskId?: string;
  dialogueTaskIdIn?: string[];
  fileUrl?: string;
  fileName?: string;
  fileNameLike?: string;
  fileType?: string;
  fileSize?: string;
  gmtUpdateFrom?: number;
  gmtUpdateTo?: number;
  gmtCreateFrom?: number;
  gmtCreateTo?: number;
  page?: number;
  rows?: number;
  orderBy?: string[];
}

export interface DialogueTaskFilePostMapper {
  dialogueTaskId: string;
  fileUrl: string;
  fileName: string;
  fileType: string;
  fileSize: string;
}

export interface DialogueTaskFileUpdateMapper {
  id: string;
  dialogueTaskId?: string;
  fileUrl?: string;
  fileName?: string;
  fileType?: string;
  fileSize?: string;
}

export const getDialogueTaskFileSimple = async (id: string): StandardPromise<DialogueTaskFile> => {
  return request('/mall-dialogue/api/sys/dialogue/task/file/single/simple', {
    params: { id },
  });
};

export const getDialogueTaskFile = async (id: string): StandardPromise<DialogueTaskFile> => {
  return request('/mall-dialogue/api/sys/dialogue/task/file/single', {
    params: { id },
  });
};

export const getDialogueTaskFileList = async (params: DialogueTaskFileFilterMapper): StandardPromise<DialogueTaskFile[]> => {
  return request('/mall-dialogue/api/sys/dialogue/task/file/filter', { params });
};

export const getDialogueTaskFileDetailList = async (params: DialogueTaskFileFilterMapper): StandardPromise<DialogueTaskFile[]> => {
  return request('/mall-dialogue/api/sys/dialogue/task/file/filter/detail', { params });
};

export const postDialogueTaskFile = async (params: DialogueTaskFilePostMapper): StandardPromise<DialogueTaskFile> => {
  return request('/mall-dialogue/api/sys/dialogue/task/file', {
    method: 'POST',
    data: { ...params },
  });
};

export const postDialogueTaskFileBatch = async (params: DialogueTaskFilePostMapper[]): StandardPromise<DialogueTaskFile[]> => {
  return request('/mall-dialogue/api/sys/dialogue/task/file/batch', {
    method: 'POST',
    data: params,
  });
};

export const updateDialogueTaskFile = async (params: DialogueTaskFileUpdateMapper): StandardPromise<DialogueTaskFile> => {
  return request('/mall-dialogue/api/sys/dialogue/task/file', {
    method: 'PATCH',
    data: { ...params },
  });
};

export const updateDialogueTaskFileBatch = async (params: DialogueTaskFileUpdateMapper[]): StandardPromise<DialogueTaskFile[]> => {
  return request('/mall-dialogue/api/sys/dialogue/task/file/batch', {
    method: 'PATCH',
    data: params,
  });
};

export const putDialogueTaskFile = async (params: DialogueTaskFileUpdateMapper): StandardPromise<DialogueTaskFile> => {
  return request('/mall-dialogue/api/sys/dialogue/task/file', {
    method: 'PUT',
    data: { ...params },
  });
};

export const putDialogueTaskFileBatch = async (params: DialogueTaskFileUpdateMapper[]): StandardPromise<DialogueTaskFile[]> => {
  return request('/mall-dialogue/api/sys/dialogue/task/file/batch', {
    method: 'PUT',
    data: params,
  });
};

export const deleteDialogueTaskFile = async (id: string): StandardPromise<number> => {
  return request('/mall-dialogue/api/sys/dialogue/task/file', {
    method: 'DELETE',
    params: { id },
  });
};

export const deleteDialogueTaskFileBatch = async (idList: string[]): StandardPromise<number> => {
  return request('/mall-dialogue/api/sys/dialogue/task/file/batch', {
    method: 'DELETE',
    params: { idList },
  });
};
