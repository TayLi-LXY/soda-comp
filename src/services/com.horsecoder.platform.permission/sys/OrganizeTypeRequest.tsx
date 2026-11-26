import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';
import type { OrganizeType } from '@/types/com.horsecoder.platform.permission/sys/OrganizeType';

export interface OrganizeTypeFilterMapper {
  id?: string;
  title?: string;
  titleIn?: string[];
  name?: string;
  nameIn?: string[];
  gmtUpdateFrom?: number;
  gmtUpdateTo?: number;
  gmtCreateFrom?: number;
  gmtCreateTo?: number;
  page?: number;
  rows?: number;
  orderBy?: string[];
}

export interface OrganizeTypePostMapper {
  title: string;
  name: string;
}

export interface OrganizeTypeUpdateMapper {
  id: string;
  title?: string;
  name?: string;
}

export const getOrganizeTypeSimple = async (id: string): StandardPromise<OrganizeType> => {
  return request('/horsecoder-platform-permission/api/sys/organize/type/single/simple', {
    params: { id },
  });
};

export const getOrganizeType = async (id: string): StandardPromise<OrganizeType> => {
  return request('/horsecoder-platform-permission/api/sys/organize/type/single', {
    params: { id },
  });
};

export const getOrganizeTypeList = async (params: OrganizeTypeFilterMapper): StandardPromise<OrganizeType[]> => {
  return request('/horsecoder-platform-permission/api/sys/organize/type/filter', { params });
};

export const getOrganizeTypeDetailList = async (params: OrganizeTypeFilterMapper): StandardPromise<OrganizeType[]> => {
  return request('/horsecoder-platform-permission/api/sys/organize/type/filter/detail', { params });
};

export const postOrganizeType = async (params: OrganizeTypePostMapper): StandardPromise<OrganizeType> => {
  return request('/horsecoder-platform-permission/api/sys/organize/type', {
    method: 'POST',
    data: { ...params },
  });
};

export const postOrganizeTypeBatch = async (params: OrganizeTypePostMapper[]): StandardPromise<OrganizeType[]> => {
  return request('/horsecoder-platform-permission/api/sys/organize/type/batch', {
    method: 'POST',
    data: params,
  });
};

export const updateOrganizeType = async (params: OrganizeTypeUpdateMapper): StandardPromise<OrganizeType> => {
  return request('/horsecoder-platform-permission/api/sys/organize/type', {
    method: 'PATCH',
    data: { ...params },
  });
};

export const updateOrganizeTypeBatch = async (params: OrganizeTypeUpdateMapper[]): StandardPromise<OrganizeType[]> => {
  return request('/horsecoder-platform-permission/api/sys/organize/type/batch', {
    method: 'PATCH',
    data: params,
  });
};

export const putOrganizeType = async (params: OrganizeTypeUpdateMapper): StandardPromise<OrganizeType> => {
  return request('/horsecoder-platform-permission/api/sys/organize/type', {
    method: 'PUT',
    data: { ...params },
  });
};

export const putOrganizeTypeBatch = async (params: OrganizeTypeUpdateMapper[]): StandardPromise<OrganizeType[]> => {
  return request('/horsecoder-platform-permission/api/sys/organize/type/batch', {
    method: 'PUT',
    data: params,
  });
};

export const deleteOrganizeType = async (id: string): StandardPromise<number> => {
  return request('/horsecoder-platform-permission/api/sys/organize/type', {
    method: 'DELETE',
    params: { id },
  });
};

export const deleteOrganizeTypeBatch = async (idList: string[]): StandardPromise<number> => {
  return request('/horsecoder-platform-permission/api/sys/organize/type/batch', {
    method: 'DELETE',
    params: { idList },
  });
};
