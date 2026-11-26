import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';
import type { Account } from '@/types/com.horsecoder.pay/exp/Account';

export interface AccountFilterMapper {
  id?: string;
  accountType?: number;
  accountTypeIn?: number[];
  name?: string;
  nameLike?: string;
  gmtUpdateFrom?: number;
  gmtUpdateTo?: number;
  gmtCreateFrom?: number;
  gmtCreateTo?: number;
  page?: number;
  rows?: number;
  orderBy?: string[];
}

export interface AccountPostMapper {
  accountType: number;
  name: string;
}

export interface AccountUpdateMapper {
  id: string;
  accountType?: number;
  name?: string;
}

export const getAccountSimple = async (id: string): StandardPromise<Account> => {
  return request('/horsecoder-pay/api/exp/account/single/simple', {
    params: { id },
  });
};

export const getAccount = async (id: string): StandardPromise<Account> => {
  return request('/horsecoder-pay/api/exp/account/single', {
    params: { id },
  });
};

export const getAccountList = async (params: AccountFilterMapper): StandardPromise<Account[]> => {
  return request('/horsecoder-pay/api/exp/account/filter', { params });
};

export const getAccountDetailList = async (params: AccountFilterMapper): StandardPromise<Account[]> => {
  return request('/horsecoder-pay/api/exp/account/filter/detail', { params });
};

export const postAccount = async (params: AccountPostMapper): StandardPromise<Account> => {
  return request('/horsecoder-pay/api/exp/account', {
    method: 'POST',
    data: { ...params },
  });
};

export const postAccountBatch = async (params: AccountPostMapper[]): StandardPromise<Account[]> => {
  return request('/horsecoder-pay/api/exp/account/batch', {
    method: 'POST',
    data: params,
  });
};

export const updateAccount = async (params: AccountUpdateMapper): StandardPromise<Account> => {
  return request('/horsecoder-pay/api/exp/account', {
    method: 'PATCH',
    data: { ...params },
  });
};

export const updateAccountBatch = async (params: AccountUpdateMapper[]): StandardPromise<Account[]> => {
  return request('/horsecoder-pay/api/exp/account/batch', {
    method: 'PATCH',
    data: params,
  });
};

export const putAccount = async (params: AccountUpdateMapper): StandardPromise<Account> => {
  return request('/horsecoder-pay/api/exp/account', {
    method: 'PUT',
    data: { ...params },
  });
};

export const putAccountBatch = async (params: AccountUpdateMapper[]): StandardPromise<Account[]> => {
  return request('/horsecoder-pay/api/exp/account/batch', {
    method: 'PUT',
    data: params,
  });
};

export const deleteAccount = async (id: string): StandardPromise<number> => {
  return request('/horsecoder-pay/api/exp/account', {
    method: 'DELETE',
    params: { id },
  });
};

export const deleteAccountBatch = async (idList: string[]): StandardPromise<number> => {
  return request('/horsecoder-pay/api/exp/account/batch', {
    method: 'DELETE',
    params: { idList },
  });
};
