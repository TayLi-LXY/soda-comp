import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';
import type { Role } from '@/types/com.horsecoder.platform.permission/sys/Role';

export interface RoleFilterMapper {
  id?: string;
  organizeId?: string;
  organizeIdIn?: string[];
  title?: string;
  titleIn?: string[];
  titleLike?: string;
  parentRoleId?: string;
  parentRoleIdIn?: string[];
  keyword?: string;
  keywordLike?: string;
  gmtUpdateFrom?: number;
  gmtUpdateTo?: number;
  gmtCreateFrom?: number;
  gmtCreateTo?: number;
  page?: number;
  rows?: number;
  orderBy?: string[];
}

export interface RolePostMapper {
  organizeId: string;
  title: string;
  parentRoleId?: string;
  keyword: string;
}

export interface RoleUpdateMapper {
  id: string;
  organizeId?: string;
  title?: string;
  parentRoleId?: string;
  keyword?: string;
}

export const getRoleSimple = async (id: string): StandardPromise<Role> => {
  return request('/horsecoder-platform-permission/api/sys/role/single/simple', {
    params: { id },
  });
};

export const getRole = async (id: string): StandardPromise<Role> => {
  return request('/horsecoder-platform-permission/api/sys/role/single', {
    params: { id },
  });
};

export const getRoleList = async (params: RoleFilterMapper): StandardPromise<Role[]> => {
  return request('/horsecoder-platform-permission/api/sys/role/filter', { params });
};

export const getRoleDetailList = async (params: RoleFilterMapper): StandardPromise<Role[]> => {
  return request('/horsecoder-platform-permission/api/sys/role/filter/detail', { params });
};

export const postRole = async (params: RolePostMapper): StandardPromise<Role> => {
  return request('/horsecoder-platform-permission/api/sys/role', {
    method: 'POST',
    data: { ...params },
  });
};

export const postRoleBatch = async (params: RolePostMapper[]): StandardPromise<Role[]> => {
  return request('/horsecoder-platform-permission/api/sys/role/batch', {
    method: 'POST',
    data: params,
  });
};

export const updateRole = async (params: RoleUpdateMapper): StandardPromise<Role> => {
  return request('/horsecoder-platform-permission/api/sys/role', {
    method: 'PATCH',
    data: { ...params },
  });
};

export const updateRoleBatch = async (params: RoleUpdateMapper[]): StandardPromise<Role[]> => {
  return request('/horsecoder-platform-permission/api/sys/role/batch', {
    method: 'PATCH',
    data: params,
  });
};

export const putRole = async (params: RoleUpdateMapper): StandardPromise<Role> => {
  return request('/horsecoder-platform-permission/api/sys/role', {
    method: 'PUT',
    data: { ...params },
  });
};

export const putRoleBatch = async (params: RoleUpdateMapper[]): StandardPromise<Role[]> => {
  return request('/horsecoder-platform-permission/api/sys/role/batch', {
    method: 'PUT',
    data: params,
  });
};

export const deleteRole = async (id: string): StandardPromise<number> => {
  return request('/horsecoder-platform-permission/api/sys/role', {
    method: 'DELETE',
    params: { id },
  });
};

export const deleteRoleBatch = async (idList: string[]): StandardPromise<number> => {
  return request('/horsecoder-platform-permission/api/sys/role/batch', {
    method: 'DELETE',
    params: { idList },
  });
};
