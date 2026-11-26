import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';
import type { OrganizeAccountPermission } from '@/types/com.horsecoder.platform.permission/sys/OrganizeAccountPermission';

export interface OrganizeAccountPermissionFilterMapper {
  id?: string;
  organizeAccountId?: string;
  organizeAccountIdIn?: string[];
  permissionId?: string;
  permissionIdIn?: string[];
  gmtUpdateFrom?: number;
  gmtUpdateTo?: number;
  gmtCreateFrom?: number;
  gmtCreateTo?: number;
  page?: number;
  rows?: number;
  orderBy?: string[];
}

export interface OrganizeAccountPermissionPostMapper {
  organizeAccountId: string;
  permissionId: string;
}

export interface OrganizeAccountPermissionUpdateMapper {
  id: string;
  organizeAccountId?: string;
  permissionId?: string;
}

export const getOrganizeAccountPermissionSimple = async (id: string): StandardPromise<OrganizeAccountPermission> => {
  return request('/horsecoder-platform-permission/api/sys/organize/account/permission/single/simple', {
    params: { id },
  });
};

export const getOrganizeAccountPermission = async (id: string): StandardPromise<OrganizeAccountPermission> => {
  return request('/horsecoder-platform-permission/api/sys/organize/account/permission/single', {
    params: { id },
  });
};

export const getOrganizeAccountPermissionList = async (params: OrganizeAccountPermissionFilterMapper): StandardPromise<OrganizeAccountPermission[]> => {
  return request('/horsecoder-platform-permission/api/sys/organize/account/permission/filter', { params });
};

export const getOrganizeAccountPermissionDetailList = async (params: OrganizeAccountPermissionFilterMapper): StandardPromise<OrganizeAccountPermission[]> => {
  return request('/horsecoder-platform-permission/api/sys/organize/account/permission/filter/detail', { params });
};

export const postOrganizeAccountPermission = async (params: OrganizeAccountPermissionPostMapper): StandardPromise<OrganizeAccountPermission> => {
  return request('/horsecoder-platform-permission/api/sys/organize/account/permission', {
    method: 'POST',
    data: { ...params },
  });
};

export const postOrganizeAccountPermissionBatch = async (params: OrganizeAccountPermissionPostMapper[]): StandardPromise<OrganizeAccountPermission[]> => {
  return request('/horsecoder-platform-permission/api/sys/organize/account/permission/batch', {
    method: 'POST',
    data: params,
  });
};

export const updateOrganizeAccountPermission = async (params: OrganizeAccountPermissionUpdateMapper): StandardPromise<OrganizeAccountPermission> => {
  return request('/horsecoder-platform-permission/api/sys/organize/account/permission', {
    method: 'PATCH',
    data: { ...params },
  });
};

export const updateOrganizeAccountPermissionBatch = async (params: OrganizeAccountPermissionUpdateMapper[]): StandardPromise<OrganizeAccountPermission[]> => {
  return request('/horsecoder-platform-permission/api/sys/organize/account/permission/batch', {
    method: 'PATCH',
    data: params,
  });
};

export const putOrganizeAccountPermission = async (params: OrganizeAccountPermissionUpdateMapper): StandardPromise<OrganizeAccountPermission> => {
  return request('/horsecoder-platform-permission/api/sys/organize/account/permission', {
    method: 'PUT',
    data: { ...params },
  });
};

export const putOrganizeAccountPermissionBatch = async (params: OrganizeAccountPermissionUpdateMapper[]): StandardPromise<OrganizeAccountPermission[]> => {
  return request('/horsecoder-platform-permission/api/sys/organize/account/permission/batch', {
    method: 'PUT',
    data: params,
  });
};

export const deleteOrganizeAccountPermission = async (id: string): StandardPromise<number> => {
  return request('/horsecoder-platform-permission/api/sys/organize/account/permission', {
    method: 'DELETE',
    params: { id },
  });
};

export const deleteOrganizeAccountPermissionBatch = async (idList: string[]): StandardPromise<number> => {
  return request('/horsecoder-platform-permission/api/sys/organize/account/permission/batch', {
    method: 'DELETE',
    params: { idList },
  });
};
