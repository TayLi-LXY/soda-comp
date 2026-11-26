import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';
import type { User } from '@/types/com.horsecoder.identity/sys/User';

export interface UserFilterMapper {
  id?: string;
  idIn?: string[];
  userName?: string;
  userNameIn?: string[];
  userNameLike?: string;
  nickname?: string;
  nicknameLike?: string;
  phone?: string;
  phoneLike?: string;
  email?: string;
  password?: string;
  salt?: string;
  userType?: number;
  userTypeIn?: number[];
  gmtUpdateFrom?: number;
  gmtUpdateTo?: number;
  gmtCreateFrom?: number;
  gmtCreateTo?: number;
  page?: number;
  rows?: number;
  orderBy?: string[];
}

export interface UserPostMapper {
  userName: string;
  nickname: string;
  phone: string;
  email: string;
  password?: string;
  userType?: number;
}

export interface UserUpdateMapper {
  id: string;
  userName?: string;
  nickname?: string;
  phone?: string;
  email?: string;
  password?: string;
  userType?: number;
}

export const getUserSimple = async (id: string): StandardPromise<User> => {
  return request('/horsecoder-identity/api/sys/user/single/simple', {
    params: { id },
  });
};

export const getUser = async (id: string): StandardPromise<User> => {
  return request('/horsecoder-identity/api/sys/user/single', {
    params: { id },
  });
};

export const getUserList = async (params: UserFilterMapper): StandardPromise<User[]> => {
  return request('/horsecoder-identity/api/sys/user/filter', { params });
};

export const getUserDetailList = async (params: UserFilterMapper): StandardPromise<User[]> => {
  return request('/horsecoder-identity/api/sys/user/filter/detail', { params });
};

export const postUser = async (params: UserPostMapper): StandardPromise<User> => {
  return request('/horsecoder-identity/api/sys/user', {
    method: 'POST',
    data: { ...params },
  });
};

export const postUserBatch = async (params: UserPostMapper[]): StandardPromise<User[]> => {
  return request('/horsecoder-identity/api/sys/user/batch', {
    method: 'POST',
    data: params,
  });
};

export const updateUser = async (params: UserUpdateMapper): StandardPromise<User> => {
  return request('/horsecoder-identity/api/sys/user', {
    method: 'PATCH',
    data: { ...params },
  });
};

export const updateUserBatch = async (params: UserUpdateMapper[]): StandardPromise<User[]> => {
  return request('/horsecoder-identity/api/sys/user/batch', {
    method: 'PATCH',
    data: params,
  });
};

export const putUser = async (params: UserUpdateMapper): StandardPromise<User> => {
  return request('/horsecoder-identity/api/sys/user', {
    method: 'PUT',
    data: { ...params },
  });
};

export const putUserBatch = async (params: UserUpdateMapper[]): StandardPromise<User[]> => {
  return request('/horsecoder-identity/api/sys/user/batch', {
    method: 'PUT',
    data: params,
  });
};

export const deleteUser = async (id: string): StandardPromise<number> => {
  return request('/horsecoder-identity/api/sys/user', {
    method: 'DELETE',
    params: { id },
  });
};

export const deleteUserBatch = async (idList: string[]): StandardPromise<number> => {
  return request('/horsecoder-identity/api/sys/user/batch', {
    method: 'DELETE',
    params: { idList },
  });
};
