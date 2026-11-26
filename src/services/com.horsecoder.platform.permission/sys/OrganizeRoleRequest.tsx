import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';
import type { OrganizeRole } from '@/types/com.horsecoder.platform.permission/sys/OrganizeRole';

export interface OrganizeRoleFilterMapper {
  id?: string;
  organizeId?: string;
  organizeIdIn?: string[];
  roleId?: string;
  roleIdIn?: string[];
  gmtUpdateFrom?: number;
  gmtUpdateTo?: number;
  gmtCreateFrom?: number;
  gmtCreateTo?: number;
  page?: number;
  rows?: number;
  orderBy?: string[];
}

export interface OrganizeRolePostMapper {
  organizeId: string;
  roleId: string;
}

export interface OrganizeRoleUpdateMapper {
  id: string;
  organizeId?: string;
  roleId?: string;
}

export const getOrganizeRoleSimple = async (id: string): StandardPromise<OrganizeRole> => {
  return request('/horsecoder-platform-permission/api/sys/organize/role/single/simple', {
    params: { id },
  });
};

export const getOrganizeRole = async (id: string): StandardPromise<OrganizeRole> => {
  return request('/horsecoder-platform-permission/api/sys/organize/role/single', {
    params: { id },
  });
};

export const getOrganizeRoleList = async (params: OrganizeRoleFilterMapper): StandardPromise<OrganizeRole[]> => {
  return request('/horsecoder-platform-permission/api/sys/organize/role/filter', { params });
};

export const getOrganizeRoleDetailList = async (params: OrganizeRoleFilterMapper): StandardPromise<OrganizeRole[]> => {
  return request('/horsecoder-platform-permission/api/sys/organize/role/filter/detail', { params });
};

export const postOrganizeRole = async (params: OrganizeRolePostMapper): StandardPromise<OrganizeRole> => {
  return request('/horsecoder-platform-permission/api/sys/organize/role', {
    method: 'POST',
    data: { ...params },
  });
};

export const postOrganizeRoleBatch = async (params: OrganizeRolePostMapper[]): StandardPromise<OrganizeRole[]> => {
  return request('/horsecoder-platform-permission/api/sys/organize/role/batch', {
    method: 'POST',
    data: params,
  });
};

export const updateOrganizeRole = async (params: OrganizeRoleUpdateMapper): StandardPromise<OrganizeRole> => {
  return request('/horsecoder-platform-permission/api/sys/organize/role', {
    method: 'PATCH',
    data: { ...params },
  });
};

export const updateOrganizeRoleBatch = async (params: OrganizeRoleUpdateMapper[]): StandardPromise<OrganizeRole[]> => {
  return request('/horsecoder-platform-permission/api/sys/organize/role/batch', {
    method: 'PATCH',
    data: params,
  });
};

export const putOrganizeRole = async (params: OrganizeRoleUpdateMapper): StandardPromise<OrganizeRole> => {
  return request('/horsecoder-platform-permission/api/sys/organize/role', {
    method: 'PUT',
    data: { ...params },
  });
};

export const putOrganizeRoleBatch = async (params: OrganizeRoleUpdateMapper[]): StandardPromise<OrganizeRole[]> => {
  return request('/horsecoder-platform-permission/api/sys/organize/role/batch', {
    method: 'PUT',
    data: params,
  });
};

export const deleteOrganizeRole = async (id: string): StandardPromise<number> => {
  return request('/horsecoder-platform-permission/api/sys/organize/role', {
    method: 'DELETE',
    params: { id },
  });
};

export const deleteOrganizeRoleBatch = async (idList: string[]): StandardPromise<number> => {
  return request('/horsecoder-platform-permission/api/sys/organize/role/batch', {
    method: 'DELETE',
    params: { idList },
  });
};
