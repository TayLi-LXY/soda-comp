import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';
import type { InvitationLinkForm } from '@/types/com.horsecoder.platform.mall.aiMarketing/sys/InvitationLinkForm';

export interface InvitationLinkFormFilterMapper {
  id?: string;
  userId?: string;
  userIdLike?: string;
  conversationId?: string;
  conversationIdLike?: string;
  spaceId?: string;
  spaceIdLike?: string;
  codeCode?: string;
  codeCodeLike?: string;
  expirationDateFrom?: number;
  expirationDateTo?: number;
  expirationDateLike?: number;
  gmtUpdateFrom?: number;
  gmtUpdateTo?: number;
  gmtCreateFrom?: number;
  gmtCreateTo?: number;
  page?: number;
  rows?: number;
  orderBy?: string[];
}

export interface InvitationLinkFormPostMapper {
  userId?: string;
  conversationId?: string;
  spaceId?: string;
  codeCode?: string;
  expirationDate?: number;
}

export interface InvitationLinkFormUpdateMapper {
  id: string;
  userId?: string;
  conversationId?: string;
  spaceId?: string;
  codeCode?: string;
  expirationDate?: number;
}

export const getInvitationLinkFormSimple = async (id: string): StandardPromise<InvitationLinkForm> => {
  return request('/mall-aiMarketing/api/sys/invitation/link/form/single/simple', {
    params: { id },
  });
};

export const getInvitationLinkForm = async (id: string): StandardPromise<InvitationLinkForm> => {
  return request('/mall-aiMarketing/api/sys/invitation/link/form/single', {
    params: { id },
  });
};

export const getInvitationLinkFormList = async (params: InvitationLinkFormFilterMapper): StandardPromise<InvitationLinkForm[]> => {
  return request('/mall-aiMarketing/api/sys/invitation/link/form/filter', { params });
};

export const getInvitationLinkFormDetailList = async (params: InvitationLinkFormFilterMapper): StandardPromise<InvitationLinkForm[]> => {
  return request('/mall-aiMarketing/api/sys/invitation/link/form/filter/detail', { params });
};

export const postInvitationLinkForm = async (params: InvitationLinkFormPostMapper): StandardPromise<InvitationLinkForm> => {
  return request('/mall-aiMarketing/api/sys/invitation/link/form', {
    method: 'POST',
    data: { ...params },
  });
};

export const postInvitationLinkFormBatch = async (params: InvitationLinkFormPostMapper[]): StandardPromise<InvitationLinkForm[]> => {
  return request('/mall-aiMarketing/api/sys/invitation/link/form/batch', {
    method: 'POST',
    data: params,
  });
};

export const updateInvitationLinkForm = async (params: InvitationLinkFormUpdateMapper): StandardPromise<InvitationLinkForm> => {
  return request('/mall-aiMarketing/api/sys/invitation/link/form', {
    method: 'PATCH',
    data: { ...params },
  });
};

export const updateInvitationLinkFormBatch = async (params: InvitationLinkFormUpdateMapper[]): StandardPromise<InvitationLinkForm[]> => {
  return request('/mall-aiMarketing/api/sys/invitation/link/form/batch', {
    method: 'PATCH',
    data: params,
  });
};

export const putInvitationLinkForm = async (params: InvitationLinkFormUpdateMapper): StandardPromise<InvitationLinkForm> => {
  return request('/mall-aiMarketing/api/sys/invitation/link/form', {
    method: 'PUT',
    data: { ...params },
  });
};

export const putInvitationLinkFormBatch = async (params: InvitationLinkFormUpdateMapper[]): StandardPromise<InvitationLinkForm[]> => {
  return request('/mall-aiMarketing/api/sys/invitation/link/form/batch', {
    method: 'PUT',
    data: params,
  });
};

export const deleteInvitationLinkForm = async (id: string): StandardPromise<number> => {
  return request('/mall-aiMarketing/api/sys/invitation/link/form', {
    method: 'DELETE',
    params: { id },
  });
};

export const deleteInvitationLinkFormBatch = async (idList: string[]): StandardPromise<number> => {
  return request('/mall-aiMarketing/api/sys/invitation/link/form/batch', {
    method: 'DELETE',
    params: { idList },
  });
};
