import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';
import type { TemporaryMessage } from '@/types/com.horsecoder.platform.mall.aiMarketing/sys/TemporaryMessage';

export interface TemporaryMessageFilterMapper {
  id?: string;
  dialogueAccountId?: string;
  dialogueAccountIdIn?: string[];
  dialogueAccountIdLike?: string;
  temporaryMessageContent?: string;
  temporaryMessageContentIn?: string[];
  temporaryMessageContentLike?: string;
  fileUrl?: string;
  fileUrlIn?: string[];
  fileUrlLike?: string;
  gmtUpdateFrom?: number;
  gmtUpdateTo?: number;
  gmtCreateFrom?: number;
  gmtCreateTo?: number;
  page?: number;
  rows?: number;
  orderBy?: string[];
}

export interface TemporaryMessagePostMapper {
  dialogueAccountId?: string;
  temporaryMessageContent?: string;
  fileUrl?: string;
}

export interface TemporaryMessageUpdateMapper {
  id: string;
  dialogueAccountId?: string;
  temporaryMessageContent?: string;
  fileUrl?: string;
}

export const getTemporaryMessageSimple = async (id: string): StandardPromise<TemporaryMessage> => {
  return request('/mall-aiMarketing/api/sys/temporary/message/single/simple', {
    params: { id },
  });
};

export const getTemporaryMessage = async (id: string): StandardPromise<TemporaryMessage> => {
  return request('/mall-aiMarketing/api/sys/temporary/message/single', {
    params: { id },
  });
};

export const getTemporaryMessageList = async (params: TemporaryMessageFilterMapper): StandardPromise<TemporaryMessage[]> => {
  return request('/mall-aiMarketing/api/sys/temporary/message/filter', { params });
};

export const getTemporaryMessageDetailList = async (params: TemporaryMessageFilterMapper): StandardPromise<TemporaryMessage[]> => {
  return request('/mall-aiMarketing/api/sys/temporary/message/filter/detail', { params });
};

export const postTemporaryMessage = async (params: TemporaryMessagePostMapper): StandardPromise<TemporaryMessage> => {
  return request('/mall-aiMarketing/api/sys/temporary/message', {
    method: 'POST',
    data: { ...params },
  });
};

export const postTemporaryMessageBatch = async (params: TemporaryMessagePostMapper[]): StandardPromise<TemporaryMessage[]> => {
  return request('/mall-aiMarketing/api/sys/temporary/message/batch', {
    method: 'POST',
    data: params,
  });
};

export const updateTemporaryMessage = async (params: TemporaryMessageUpdateMapper): StandardPromise<TemporaryMessage> => {
  return request('/mall-aiMarketing/api/sys/temporary/message', {
    method: 'PATCH',
    data: { ...params },
  });
};

export const updateTemporaryMessageBatch = async (params: TemporaryMessageUpdateMapper[]): StandardPromise<TemporaryMessage[]> => {
  return request('/mall-aiMarketing/api/sys/temporary/message/batch', {
    method: 'PATCH',
    data: params,
  });
};

export const putTemporaryMessage = async (params: TemporaryMessageUpdateMapper): StandardPromise<TemporaryMessage> => {
  return request('/mall-aiMarketing/api/sys/temporary/message', {
    method: 'PUT',
    data: { ...params },
  });
};

export const putTemporaryMessageBatch = async (params: TemporaryMessageUpdateMapper[]): StandardPromise<TemporaryMessage[]> => {
  return request('/mall-aiMarketing/api/sys/temporary/message/batch', {
    method: 'PUT',
    data: params,
  });
};

export const deleteTemporaryMessage = async (id: string): StandardPromise<number> => {
  return request('/mall-aiMarketing/api/sys/temporary/message', {
    method: 'DELETE',
    params: { id },
  });
};

export const deleteTemporaryMessageBatch = async (idList: string[]): StandardPromise<number> => {
  return request('/mall-aiMarketing/api/sys/temporary/message/batch', {
    method: 'DELETE',
    params: { idList },
  });
};
