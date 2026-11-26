import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';
import type { Account } from '@/types/com.horsecoder.platform.permission/sys/Account';

export interface AccountFilterMapper {
  id?: string;
  idIn?: string[];
  title?: string;
  titleLike?: string;
  gmtUpdateFrom?: number;
  gmtUpdateTo?: number;
  gmtCreateFrom?: number;
  gmtCreateTo?: number;
  page?: number;
  rows?: number;
  orderBy?: string[];
}

export interface AccountPostMapper {
  title: string;
}

export interface AccountUpdateMapper {
  id: string;
  title?: string;
}

export const getAccountSimple = async (id: string): StandardPromise<Account> => {
  return request('/horsecoder-platform-permission/api/sys/account/single/simple', {
    params: { id },
  });
};

export const getAccount = async (id: string): StandardPromise<Account> => {
  return request('/horsecoder-platform-permission/api/sys/account/single', {
    params: { id },
  });
};

export const getAccountList = async (params: AccountFilterMapper): StandardPromise<Account[]> => {
  return request('/horsecoder-platform-permission/api/sys/account/filter', { params });
};

export const getAccountDetailList = async (params: AccountFilterMapper): StandardPromise<Account[]> => {
  return request('/horsecoder-platform-permission/api/sys/account/filter/detail', { params });
};

export const postAccount = async (params: AccountPostMapper): StandardPromise<Account> => {
  return request('/horsecoder-platform-permission/api/sys/account', {
    method: 'POST',
    data: { ...params },
  });
};

export const postAccountBatch = async (params: AccountPostMapper[]): StandardPromise<Account[]> => {
  return request('/horsecoder-platform-permission/api/sys/account/batch', {
    method: 'POST',
    data: params,
  });
};

export const updateAccount = async (params: AccountUpdateMapper): StandardPromise<Account> => {
  return request('/horsecoder-platform-permission/api/sys/account', {
    method: 'PATCH',
    data: { ...params },
  });
};

export const updateAccountBatch = async (params: AccountUpdateMapper[]): StandardPromise<Account[]> => {
  return request('/horsecoder-platform-permission/api/sys/account/batch', {
    method: 'PATCH',
    data: params,
  });
};

export const putAccount = async (params: AccountUpdateMapper): StandardPromise<Account> => {
  return request('/horsecoder-platform-permission/api/sys/account', {
    method: 'PUT',
    data: { ...params },
  });
};

export const putAccountBatch = async (params: AccountUpdateMapper[]): StandardPromise<Account[]> => {
  return request('/horsecoder-platform-permission/api/sys/account/batch', {
    method: 'PUT',
    data: params,
  });
};

export const deleteAccount = async (id: string): StandardPromise<number> => {
  return request('/horsecoder-platform-permission/api/sys/account', {
    method: 'DELETE',
    params: { id },
  });
};

export const deleteAccountBatch = async (idList: string[]): StandardPromise<number> => {
  return request('/horsecoder-platform-permission/api/sys/account/batch', {
    method: 'DELETE',
    params: { idList },
  });
};
