import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';
import type { OrganizeAccount } from '@/types/com.horsecoder.platform.permission/sys/OrganizeAccount';

export interface OrganizeAccountFilterMapper {
  id?: string;
  accountId?: string;
  accountIdIn?: string[];
  organizeId?: string;
  organizeIdIn?: string[];
  gmtUpdateFrom?: number;
  gmtUpdateTo?: number;
  gmtCreateFrom?: number;
  gmtCreateTo?: number;
  page?: number;
  rows?: number;
  orderBy?: string[];
}

export interface OrganizeAccountPostMapper {
  accountId?: string;
  organizeId?: string;
}

export interface OrganizeAccountUpdateMapper {
  id: string;
  accountId?: string;
  organizeId?: string;
}

export const getOrganizeAccountSimple = async (id: string): StandardPromise<OrganizeAccount> => {
  return request('/horsecoder-platform-permission/api/sys/organize/account/single/simple', {
    params: { id },
  });
};

export const getOrganizeAccount = async (id: string): StandardPromise<OrganizeAccount> => {
  return request('/horsecoder-platform-permission/api/sys/organize/account/single', {
    params: { id },
  });
};

export const getOrganizeAccountList = async (params: OrganizeAccountFilterMapper): StandardPromise<OrganizeAccount[]> => {
  return request('/horsecoder-platform-permission/api/sys/organize/account/filter', { params });
};

export const getOrganizeAccountDetailList = async (params: OrganizeAccountFilterMapper): StandardPromise<OrganizeAccount[]> => {
  return request('/horsecoder-platform-permission/api/sys/organize/account/filter/detail', { params });
};

export const postOrganizeAccount = async (params: OrganizeAccountPostMapper): StandardPromise<OrganizeAccount> => {
  return request('/horsecoder-platform-permission/api/sys/organize/account', {
    method: 'POST',
    data: { ...params },
  });
};

export const postOrganizeAccountBatch = async (params: OrganizeAccountPostMapper[]): StandardPromise<OrganizeAccount[]> => {
  return request('/horsecoder-platform-permission/api/sys/organize/account/batch', {
    method: 'POST',
    data: params,
  });
};

export const updateOrganizeAccount = async (params: OrganizeAccountUpdateMapper): StandardPromise<OrganizeAccount> => {
  return request('/horsecoder-platform-permission/api/sys/organize/account', {
    method: 'PATCH',
    data: { ...params },
  });
};

export const updateOrganizeAccountBatch = async (params: OrganizeAccountUpdateMapper[]): StandardPromise<OrganizeAccount[]> => {
  return request('/horsecoder-platform-permission/api/sys/organize/account/batch', {
    method: 'PATCH',
    data: params,
  });
};

export const putOrganizeAccount = async (params: OrganizeAccountUpdateMapper): StandardPromise<OrganizeAccount> => {
  return request('/horsecoder-platform-permission/api/sys/organize/account', {
    method: 'PUT',
    data: { ...params },
  });
};

export const putOrganizeAccountBatch = async (params: OrganizeAccountUpdateMapper[]): StandardPromise<OrganizeAccount[]> => {
  return request('/horsecoder-platform-permission/api/sys/organize/account/batch', {
    method: 'PUT',
    data: params,
  });
};

export const deleteOrganizeAccount = async (id: string): StandardPromise<number> => {
  return request('/horsecoder-platform-permission/api/sys/organize/account', {
    method: 'DELETE',
    params: { id },
  });
};

export const deleteOrganizeAccountBatch = async (idList: string[]): StandardPromise<number> => {
  return request('/horsecoder-platform-permission/api/sys/organize/account/batch', {
    method: 'DELETE',
    params: { idList },
  });
};
