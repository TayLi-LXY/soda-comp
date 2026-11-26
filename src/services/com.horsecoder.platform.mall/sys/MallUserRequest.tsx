import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';
import type { MallUser } from '@/types/com.horsecoder.platform.mall/sys/MallUser';

export interface MallUserFilterMapper {
  id?: string;
  phone?: string;
  phoneLike?: string;
  password?: string;
  name?: string;
  gmtUpdateFrom?: number;
  gmtUpdateTo?: number;
  gmtCreateFrom?: number;
  gmtCreateTo?: number;
  page?: number;
  rows?: number;
  orderBy?: string[];
}

export interface MallUserPostMapper {
  phone: string;
  password: string;
  name: string;
}

export interface MallUserUpdateMapper {
  id: string;
  phone?: string;
  password?: string;
  name?: string;
}

export const getMallUserSimple = async (id: string): StandardPromise<MallUser> => {
  return request('/mall-mall/api/sys/mall/user/single/simple', {
    params: { id },
  });
};

export const getMallUser = async (id: string): StandardPromise<MallUser> => {
  return request('/mall-mall/api/sys/mall/user/single', {
    params: { id },
  });
};

export const getMallUserList = async (params: MallUserFilterMapper): StandardPromise<MallUser[]> => {
  return request('/mall-mall/api/sys/mall/user/filter', { params });
};

export const getMallUserDetailList = async (params: MallUserFilterMapper): StandardPromise<MallUser[]> => {
  return request('/mall-mall/api/sys/mall/user/filter/detail', { params });
};

export const postMallUser = async (params: MallUserPostMapper): StandardPromise<MallUser> => {
  return request('/mall-mall/api/sys/mall/user', {
    method: 'POST',
    data: { ...params },
  });
};

export const postMallUserBatch = async (params: MallUserPostMapper[]): StandardPromise<MallUser[]> => {
  return request('/mall-mall/api/sys/mall/user/batch', {
    method: 'POST',
    data: params,
  });
};

export const updateMallUser = async (params: MallUserUpdateMapper): StandardPromise<MallUser> => {
  return request('/mall-mall/api/sys/mall/user', {
    method: 'PATCH',
    data: { ...params },
  });
};

export const updateMallUserBatch = async (params: MallUserUpdateMapper[]): StandardPromise<MallUser[]> => {
  return request('/mall-mall/api/sys/mall/user/batch', {
    method: 'PATCH',
    data: params,
  });
};

export const putMallUser = async (params: MallUserUpdateMapper): StandardPromise<MallUser> => {
  return request('/mall-mall/api/sys/mall/user', {
    method: 'PUT',
    data: { ...params },
  });
};

export const putMallUserBatch = async (params: MallUserUpdateMapper[]): StandardPromise<MallUser[]> => {
  return request('/mall-mall/api/sys/mall/user/batch', {
    method: 'PUT',
    data: params,
  });
};

export const deleteMallUser = async (id: string): StandardPromise<number> => {
  return request('/mall-mall/api/sys/mall/user', {
    method: 'DELETE',
    params: { id },
  });
};

export const deleteMallUserBatch = async (idList: string[]): StandardPromise<number> => {
  return request('/mall-mall/api/sys/mall/user/batch', {
    method: 'DELETE',
    params: { idList },
  });
};
