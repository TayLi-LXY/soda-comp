import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';
import type { OrganizeAccountAccess } from '@/types/com.horsecoder.platform.permission/sys/OrganizeAccountAccess';

export interface OrganizeAccountAccessFilterMapper {
  id?: string;
  organizeAccountId?: string;
  organizeAccountIdIn?: string[];
  permissionId?: string;
  permissionIdIn?: string[];
  accessType?: number;
  accessTypeIn?: number[];
  gmtUpdateFrom?: number;
  gmtUpdateTo?: number;
  gmtCreateFrom?: number;
  gmtCreateTo?: number;
  page?: number;
  rows?: number;
  orderBy?: string[];
}

export interface OrganizeAccountAccessPostMapper {
  organizeAccountId: string;
  permissionId: string;
  accessType: number;
}

export interface OrganizeAccountAccessUpdateMapper {
  id: string;
  organizeAccountId?: string;
  permissionId?: string;
  accessType?: number;
}

export const getOrganizeAccountAccessSimple = async (id: string): StandardPromise<OrganizeAccountAccess> => {
  return request('/horsecoder-platform-permission/api/sys/organize/account/access/single/simple', {
    params: { id },
  });
};

export const getOrganizeAccountAccess = async (id: string): StandardPromise<OrganizeAccountAccess> => {
  return request('/horsecoder-platform-permission/api/sys/organize/account/access/single', {
    params: { id },
  });
};

export const getOrganizeAccountAccessList = async (params: OrganizeAccountAccessFilterMapper): StandardPromise<OrganizeAccountAccess[]> => {
  return request('/horsecoder-platform-permission/api/sys/organize/account/access/filter', { params });
};

export const getOrganizeAccountAccessDetailList = async (params: OrganizeAccountAccessFilterMapper): StandardPromise<OrganizeAccountAccess[]> => {
  return request('/horsecoder-platform-permission/api/sys/organize/account/access/filter/detail', { params });
};

export const postOrganizeAccountAccess = async (params: OrganizeAccountAccessPostMapper): StandardPromise<OrganizeAccountAccess> => {
  return request('/horsecoder-platform-permission/api/sys/organize/account/access', {
    method: 'POST',
    data: { ...params },
  });
};

export const postOrganizeAccountAccessBatch = async (params: OrganizeAccountAccessPostMapper[]): StandardPromise<OrganizeAccountAccess[]> => {
  return request('/horsecoder-platform-permission/api/sys/organize/account/access/batch', {
    method: 'POST',
    data: params,
  });
};

export const updateOrganizeAccountAccess = async (params: OrganizeAccountAccessUpdateMapper): StandardPromise<OrganizeAccountAccess> => {
  return request('/horsecoder-platform-permission/api/sys/organize/account/access', {
    method: 'PATCH',
    data: { ...params },
  });
};

export const updateOrganizeAccountAccessBatch = async (params: OrganizeAccountAccessUpdateMapper[]): StandardPromise<OrganizeAccountAccess[]> => {
  return request('/horsecoder-platform-permission/api/sys/organize/account/access/batch', {
    method: 'PATCH',
    data: params,
  });
};

export const putOrganizeAccountAccess = async (params: OrganizeAccountAccessUpdateMapper): StandardPromise<OrganizeAccountAccess> => {
  return request('/horsecoder-platform-permission/api/sys/organize/account/access', {
    method: 'PUT',
    data: { ...params },
  });
};

export const putOrganizeAccountAccessBatch = async (params: OrganizeAccountAccessUpdateMapper[]): StandardPromise<OrganizeAccountAccess[]> => {
  return request('/horsecoder-platform-permission/api/sys/organize/account/access/batch', {
    method: 'PUT',
    data: params,
  });
};

export const deleteOrganizeAccountAccess = async (id: string): StandardPromise<number> => {
  return request('/horsecoder-platform-permission/api/sys/organize/account/access', {
    method: 'DELETE',
    params: { id },
  });
};

export const deleteOrganizeAccountAccessBatch = async (idList: string[]): StandardPromise<number> => {
  return request('/horsecoder-platform-permission/api/sys/organize/account/access/batch', {
    method: 'DELETE',
    params: { idList },
  });
};
