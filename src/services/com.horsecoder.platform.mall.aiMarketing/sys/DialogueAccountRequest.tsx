import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';
import type { DialogueAccount } from '@/types/com.horsecoder.platform.mall.aiMarketing/sys/DialogueAccount';

export interface DialogueAccountFilterMapper {
  id?: string;
  userProfilePicture?: string;
  userName?: string;
  userNameLike?: string;
  customerType?: number;
  customerTypeIn?: number[];
  userMobilePhoneNumber?: string;
  userMobilePhoneNumberLike?: string;
  userNickname?: string;
  userNicknameIn?: string[];
  userNicknameLike?: string;
  email?: string;
  emailIn?: string[];
  emailLike?: string;
  password?: string;
  saltValue?: string;
  gmtUpdateFrom?: number;
  gmtUpdateTo?: number;
  gmtCreateFrom?: number;
  gmtCreateTo?: number;
  page?: number;
  rows?: number;
  orderBy?: string[];
}

export interface DialogueAccountPostMapper {
  userProfilePicture?: string;
  userName: string;
  customerType?: number;
  userMobilePhoneNumber: string;
  userNickname?: string;
  email?: string;
  password?: string;
  saltValue?: string;
}

export interface DialogueAccountUpdateMapper {
  id: string;
  userProfilePicture?: string;
  userName?: string;
  customerType?: number;
  userMobilePhoneNumber?: string;
  userNickname?: string;
  email?: string;
  password?: string;
  saltValue?: string;
}

export const getDialogueAccountSimple = async (id: string): StandardPromise<DialogueAccount> => {
  return request('/mall-aiMarketing/api/sys/dialogue/account/single/simple', {
    params: { id },
  });
};

export const getDialogueAccount = async (id: string): StandardPromise<DialogueAccount> => {
  return request('/mall-aiMarketing/api/sys/dialogue/account/single', {
    params: { id },
  });
};

export const getDialogueAccountList = async (params: DialogueAccountFilterMapper): StandardPromise<DialogueAccount[]> => {
  return request('/mall-aiMarketing/api/sys/dialogue/account/filter', { params });
};

export const getDialogueAccountDetailList = async (params: DialogueAccountFilterMapper): StandardPromise<DialogueAccount[]> => {
  return request('/mall-aiMarketing/api/sys/dialogue/account/filter/detail', { params });
};

export const postDialogueAccount = async (params: DialogueAccountPostMapper): StandardPromise<DialogueAccount> => {
  return request('/mall-aiMarketing/api/sys/dialogue/account', {
    method: 'POST',
    data: { ...params },
  });
};

export const postDialogueAccountBatch = async (params: DialogueAccountPostMapper[]): StandardPromise<DialogueAccount[]> => {
  return request('/mall-aiMarketing/api/sys/dialogue/account/batch', {
    method: 'POST',
    data: params,
  });
};

export const updateDialogueAccount = async (params: DialogueAccountUpdateMapper): StandardPromise<DialogueAccount> => {
  return request('/mall-aiMarketing/api/sys/dialogue/account', {
    method: 'PATCH',
    data: { ...params },
  });
};

export const updateDialogueAccountBatch = async (params: DialogueAccountUpdateMapper[]): StandardPromise<DialogueAccount[]> => {
  return request('/mall-aiMarketing/api/sys/dialogue/account/batch', {
    method: 'PATCH',
    data: params,
  });
};

export const putDialogueAccount = async (params: DialogueAccountUpdateMapper): StandardPromise<DialogueAccount> => {
  return request('/mall-aiMarketing/api/sys/dialogue/account', {
    method: 'PUT',
    data: { ...params },
  });
};

export const putDialogueAccountBatch = async (params: DialogueAccountUpdateMapper[]): StandardPromise<DialogueAccount[]> => {
  return request('/mall-aiMarketing/api/sys/dialogue/account/batch', {
    method: 'PUT',
    data: params,
  });
};

export const deleteDialogueAccount = async (id: string): StandardPromise<number> => {
  return request('/mall-aiMarketing/api/sys/dialogue/account', {
    method: 'DELETE',
    params: { id },
  });
};

export const deleteDialogueAccountBatch = async (idList: string[]): StandardPromise<number> => {
  return request('/mall-aiMarketing/api/sys/dialogue/account/batch', {
    method: 'DELETE',
    params: { idList },
  });
};
