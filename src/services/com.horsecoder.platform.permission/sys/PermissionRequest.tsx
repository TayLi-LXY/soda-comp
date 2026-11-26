import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';
import type { Permission } from '@/types/com.horsecoder.platform.permission/sys/Permission';

export interface PermissionFilterMapper {
  id?: string;
  title?: string;
  titleIn?: string[];
  sourceOrganizeId?: string;
  sourceOrganizeIdIn?: string[];
  keyword?: string;
  keywordLike?: string;
  sourceKeywordTemplate?: string;
  sourceKeywordTemplateLike?: string;
  description?: string;
  descriptionLike?: string;
  gmtUpdateFrom?: number;
  gmtUpdateTo?: number;
  gmtCreateFrom?: number;
  gmtCreateTo?: number;
  page?: number;
  rows?: number;
  orderBy?: string[];
}

export interface PermissionPostMapper {
  title: string;
  sourceOrganizeId: string;
  keyword: string;
  sourceKeywordTemplate?: string;
  description?: string;
}

export interface PermissionUpdateMapper {
  id: string;
  title?: string;
  sourceOrganizeId?: string;
  keyword?: string;
  sourceKeywordTemplate?: string;
  description?: string;
}

export const getPermissionSimple = async (id: string): StandardPromise<Permission> => {
  return request('/horsecoder-platform-permission/api/sys/permission/single/simple', {
    params: { id },
  });
};

export const getPermission = async (id: string): StandardPromise<Permission> => {
  return request('/horsecoder-platform-permission/api/sys/permission/single', {
    params: { id },
  });
};

export const getPermissionList = async (params: PermissionFilterMapper): StandardPromise<Permission[]> => {
  return request('/horsecoder-platform-permission/api/sys/permission/filter', { params });
};

export const getPermissionDetailList = async (params: PermissionFilterMapper): StandardPromise<Permission[]> => {
  return request('/horsecoder-platform-permission/api/sys/permission/filter/detail', { params });
};

export const postPermission = async (params: PermissionPostMapper): StandardPromise<Permission> => {
  return request('/horsecoder-platform-permission/api/sys/permission', {
    method: 'POST',
    data: { ...params },
  });
};

export const postPermissionBatch = async (params: PermissionPostMapper[]): StandardPromise<Permission[]> => {
  return request('/horsecoder-platform-permission/api/sys/permission/batch', {
    method: 'POST',
    data: params,
  });
};

export const updatePermission = async (params: PermissionUpdateMapper): StandardPromise<Permission> => {
  return request('/horsecoder-platform-permission/api/sys/permission', {
    method: 'PATCH',
    data: { ...params },
  });
};

export const updatePermissionBatch = async (params: PermissionUpdateMapper[]): StandardPromise<Permission[]> => {
  return request('/horsecoder-platform-permission/api/sys/permission/batch', {
    method: 'PATCH',
    data: params,
  });
};

export const putPermission = async (params: PermissionUpdateMapper): StandardPromise<Permission> => {
  return request('/horsecoder-platform-permission/api/sys/permission', {
    method: 'PUT',
    data: { ...params },
  });
};

export const putPermissionBatch = async (params: PermissionUpdateMapper[]): StandardPromise<Permission[]> => {
  return request('/horsecoder-platform-permission/api/sys/permission/batch', {
    method: 'PUT',
    data: params,
  });
};

export const deletePermission = async (id: string): StandardPromise<number> => {
  return request('/horsecoder-platform-permission/api/sys/permission', {
    method: 'DELETE',
    params: { id },
  });
};

export const deletePermissionBatch = async (idList: string[]): StandardPromise<number> => {
  return request('/horsecoder-platform-permission/api/sys/permission/batch', {
    method: 'DELETE',
    params: { idList },
  });
};
