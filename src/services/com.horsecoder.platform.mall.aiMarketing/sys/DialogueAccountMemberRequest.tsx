import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';
import type { DialogueAccountMember } from '@/types/com.horsecoder.platform.mall.aiMarketing/sys/DialogueAccountMember';

export interface DialogueAccountMemberFilterMapper {
  id?: string;
  dialogueAccountId?: string;
  dialogueAccountIdIn?: string[];
  dialogueAccountIdLike?: string;
  memberType?: number;
  memberTypeIn?: number[];
  expirationDateFrom?: number;
  expirationDateTo?: number;
  effectiveTimeFrom?: number;
  effectiveTimeTo?: number;
  weight?: number;
  weightIn?: number[];
  gmtUpdateFrom?: number;
  gmtUpdateTo?: number;
  gmtCreateFrom?: number;
  gmtCreateTo?: number;
  page?: number;
  rows?: number;
  orderBy?: string[];
}

export interface DialogueAccountMemberPostMapper {
  dialogueAccountId?: string;
  memberType?: number;
  expirationDate?: number;
  effectiveTime?: number;
  weight?: number;
}

export interface DialogueAccountMemberUpdateMapper {
  id: string;
  dialogueAccountId?: string;
  memberType?: number;
  expirationDate?: number;
  effectiveTime?: number;
  weight?: number;
}

export const getDialogueAccountMemberSimple = async (id: string): StandardPromise<DialogueAccountMember> => {
  return request('/mall-aiMarketing/api/sys/dialogue/account/member/single/simple', {
    params: { id },
  });
};

export const getDialogueAccountMember = async (id: string): StandardPromise<DialogueAccountMember> => {
  return request('/mall-aiMarketing/api/sys/dialogue/account/member/single', {
    params: { id },
  });
};

export const getDialogueAccountMemberList = async (params: DialogueAccountMemberFilterMapper): StandardPromise<DialogueAccountMember[]> => {
  return request('/mall-aiMarketing/api/sys/dialogue/account/member/filter', { params });
};

export const getDialogueAccountMemberDetailList = async (params: DialogueAccountMemberFilterMapper): StandardPromise<DialogueAccountMember[]> => {
  return request('/mall-aiMarketing/api/sys/dialogue/account/member/filter/detail', { params });
};

export const postDialogueAccountMember = async (params: DialogueAccountMemberPostMapper): StandardPromise<DialogueAccountMember> => {
  return request('/mall-aiMarketing/api/sys/dialogue/account/member', {
    method: 'POST',
    data: { ...params },
  });
};

export const postDialogueAccountMemberBatch = async (params: DialogueAccountMemberPostMapper[]): StandardPromise<DialogueAccountMember[]> => {
  return request('/mall-aiMarketing/api/sys/dialogue/account/member/batch', {
    method: 'POST',
    data: params,
  });
};

export const updateDialogueAccountMember = async (params: DialogueAccountMemberUpdateMapper): StandardPromise<DialogueAccountMember> => {
  return request('/mall-aiMarketing/api/sys/dialogue/account/member', {
    method: 'PATCH',
    data: { ...params },
  });
};

export const updateDialogueAccountMemberBatch = async (params: DialogueAccountMemberUpdateMapper[]): StandardPromise<DialogueAccountMember[]> => {
  return request('/mall-aiMarketing/api/sys/dialogue/account/member/batch', {
    method: 'PATCH',
    data: params,
  });
};

export const putDialogueAccountMember = async (params: DialogueAccountMemberUpdateMapper): StandardPromise<DialogueAccountMember> => {
  return request('/mall-aiMarketing/api/sys/dialogue/account/member', {
    method: 'PUT',
    data: { ...params },
  });
};

export const putDialogueAccountMemberBatch = async (params: DialogueAccountMemberUpdateMapper[]): StandardPromise<DialogueAccountMember[]> => {
  return request('/mall-aiMarketing/api/sys/dialogue/account/member/batch', {
    method: 'PUT',
    data: params,
  });
};

export const deleteDialogueAccountMember = async (id: string): StandardPromise<number> => {
  return request('/mall-aiMarketing/api/sys/dialogue/account/member', {
    method: 'DELETE',
    params: { id },
  });
};

export const deleteDialogueAccountMemberBatch = async (idList: string[]): StandardPromise<number> => {
  return request('/mall-aiMarketing/api/sys/dialogue/account/member/batch', {
    method: 'DELETE',
    params: { idList },
  });
};
