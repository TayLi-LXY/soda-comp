import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';
import type { Organize } from '@/types/com.horsecoder.platform.permission/sys/Organize';

export interface OrganizeFilterMapper {
  id?: string;
  title?: string;
  titleIn?: string[];
  organizeTypeId?: string;
  organizeTypeIdIn?: string[];
  parentOrganizeId?: string;
  parentOrganizeIdIn?: string[];
  layerOrganizeId?: string;
  layerOrganizeIdIn?: string[];
  adminAccountId?: string;
  adminAccountIdIn?: string[];
  staffNum?: number;
  staffNumIn?: number[];
  remark?: string;
  remarkIn?: string[];
  remarkLike?: string;
  name?: string;
  nameIn?: string[];
  createAccountId?: string;
  createAccountIdIn?: string[];
  gmtUpdateFrom?: number;
  gmtUpdateTo?: number;
  gmtCreateFrom?: number;
  gmtCreateTo?: number;
  page?: number;
  rows?: number;
  orderBy?: string[];
}

export interface OrganizePostMapper {
  title: string;
  organizeTypeId?: string;
  parentOrganizeId?: string;
  layerOrganizeId?: string;
  adminAccountId: string;
  staffNum?: number;
  remark?: string;
  name?: string;
  createAccountId: string;
}

export interface OrganizeUpdateMapper {
  id: string;
  title?: string;
  organizeTypeId?: string;
  parentOrganizeId?: string;
  layerOrganizeId?: string;
  adminAccountId?: string;
  staffNum?: number;
  remark?: string;
  name?: string;
  createAccountId?: string;
}

export const getOrganizeSimple = async (id: string): StandardPromise<Organize> => {
  return request('/horsecoder-platform-permission/api/sys/organize/single/simple', {
    params: { id },
  });
};

export const getOrganize = async (id: string): StandardPromise<Organize> => {
  return request('/horsecoder-platform-permission/api/sys/organize/single', {
    params: { id },
  });
};

export const getOrganizeList = async (params: OrganizeFilterMapper): StandardPromise<Organize[]> => {
  return request('/horsecoder-platform-permission/api/sys/organize/filter', { params });
};

export const getOrganizeDetailList = async (params: OrganizeFilterMapper): StandardPromise<Organize[]> => {
  return request('/horsecoder-platform-permission/api/sys/organize/filter/detail', { params });
};

export const postOrganize = async (params: OrganizePostMapper): StandardPromise<Organize> => {
  return request('/horsecoder-platform-permission/api/sys/organize', {
    method: 'POST',
    data: { ...params },
  });
};

export const postOrganizeBatch = async (params: OrganizePostMapper[]): StandardPromise<Organize[]> => {
  return request('/horsecoder-platform-permission/api/sys/organize/batch', {
    method: 'POST',
    data: params,
  });
};

export const updateOrganize = async (params: OrganizeUpdateMapper): StandardPromise<Organize> => {
  return request('/horsecoder-platform-permission/api/sys/organize', {
    method: 'PATCH',
    data: { ...params },
  });
};

export const updateOrganizeBatch = async (params: OrganizeUpdateMapper[]): StandardPromise<Organize[]> => {
  return request('/horsecoder-platform-permission/api/sys/organize/batch', {
    method: 'PATCH',
    data: params,
  });
};

export const putOrganize = async (params: OrganizeUpdateMapper): StandardPromise<Organize> => {
  return request('/horsecoder-platform-permission/api/sys/organize', {
    method: 'PUT',
    data: { ...params },
  });
};

export const putOrganizeBatch = async (params: OrganizeUpdateMapper[]): StandardPromise<Organize[]> => {
  return request('/horsecoder-platform-permission/api/sys/organize/batch', {
    method: 'PUT',
    data: params,
  });
};

export const deleteOrganize = async (id: string): StandardPromise<number> => {
  return request('/horsecoder-platform-permission/api/sys/organize', {
    method: 'DELETE',
    params: { id },
  });
};

export const deleteOrganizeBatch = async (idList: string[]): StandardPromise<number> => {
  return request('/horsecoder-platform-permission/api/sys/organize/batch', {
    method: 'DELETE',
    params: { idList },
  });
};
