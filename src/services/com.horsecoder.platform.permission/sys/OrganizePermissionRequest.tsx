import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';
import type { OrganizePermission } from '@/types/com.horsecoder.platform.permission/sys/OrganizePermission';

export interface OrganizePermissionFilterMapper {
  id?: string;
  organizeId?: string;
  organizeIdIn?: string[];
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

export interface OrganizePermissionPostMapper {
  organizeId: string;
  permissionId: string;
}

export interface OrganizePermissionUpdateMapper {
  id: string;
  organizeId?: string;
  permissionId?: string;
}

export const getOrganizePermissionSimple = async (id: string): StandardPromise<OrganizePermission> => {
  return request('/horsecoder-platform-permission/api/sys/organize/permission/single/simple', {
    params: { id },
  });
};

export const getOrganizePermission = async (id: string): StandardPromise<OrganizePermission> => {
  return request('/horsecoder-platform-permission/api/sys/organize/permission/single', {
    params: { id },
  });
};

export const getOrganizePermissionList = async (params: OrganizePermissionFilterMapper): StandardPromise<OrganizePermission[]> => {
  return request('/horsecoder-platform-permission/api/sys/organize/permission/filter', { params });
};

export const getOrganizePermissionDetailList = async (params: OrganizePermissionFilterMapper): StandardPromise<OrganizePermission[]> => {
  return request('/horsecoder-platform-permission/api/sys/organize/permission/filter/detail', { params });
};

export const postOrganizePermission = async (params: OrganizePermissionPostMapper): StandardPromise<OrganizePermission> => {
  return request('/horsecoder-platform-permission/api/sys/organize/permission', {
    method: 'POST',
    data: { ...params },
  });
};

export const postOrganizePermissionBatch = async (params: OrganizePermissionPostMapper[]): StandardPromise<OrganizePermission[]> => {
  return request('/horsecoder-platform-permission/api/sys/organize/permission/batch', {
    method: 'POST',
    data: params,
  });
};

export const updateOrganizePermission = async (params: OrganizePermissionUpdateMapper): StandardPromise<OrganizePermission> => {
  return request('/horsecoder-platform-permission/api/sys/organize/permission', {
    method: 'PATCH',
    data: { ...params },
  });
};

export const updateOrganizePermissionBatch = async (params: OrganizePermissionUpdateMapper[]): StandardPromise<OrganizePermission[]> => {
  return request('/horsecoder-platform-permission/api/sys/organize/permission/batch', {
    method: 'PATCH',
    data: params,
  });
};

export const putOrganizePermission = async (params: OrganizePermissionUpdateMapper): StandardPromise<OrganizePermission> => {
  return request('/horsecoder-platform-permission/api/sys/organize/permission', {
    method: 'PUT',
    data: { ...params },
  });
};

export const putOrganizePermissionBatch = async (params: OrganizePermissionUpdateMapper[]): StandardPromise<OrganizePermission[]> => {
  return request('/horsecoder-platform-permission/api/sys/organize/permission/batch', {
    method: 'PUT',
    data: params,
  });
};

export const deleteOrganizePermission = async (id: string): StandardPromise<number> => {
  return request('/horsecoder-platform-permission/api/sys/organize/permission', {
    method: 'DELETE',
    params: { id },
  });
};

export const deleteOrganizePermissionBatch = async (idList: string[]): StandardPromise<number> => {
  return request('/horsecoder-platform-permission/api/sys/organize/permission/batch', {
    method: 'DELETE',
    params: { idList },
  });
};
