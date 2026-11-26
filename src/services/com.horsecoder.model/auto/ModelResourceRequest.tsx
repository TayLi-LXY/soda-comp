import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';
import type { ModelResource } from '@/types/com.horsecoder.model/auto/ModelResource';

export interface ModelResourceFilterMapper {
  id?: string;
  modelId?: string;
  modelIdIn?: string[];
  subModelId?: string;
  subModelIdIn?: string[];
  previewPath?: string;
  resourcePath?: string;
  name?: string;
  nameIn?: string[];
  title?: string;
  type?: string;
  ifOpen?: number;
  organizeId?: string;
  organizeIdIn?: string[];
  creatorId?: string;
  creatorIdIn?: string[];
  gmtUpdateFrom?: number;
  gmtUpdateTo?: number;
  gmtCreateFrom?: number;
  gmtCreateTo?: number;
  page?: number;
  rows?: number;
  orderBy?: string[];
}

export interface ModelResourcePostMapper {
  modelId?: string;
  subModelId: string;
  previewPath?: string;
  resourcePath: string;
  name: string;
  title: string;
  type: string;
  ifOpen?: number;
  organizeId: string;
  creatorId: string;
}

export interface ModelResourceUpdateMapper {
  id: string;
  modelId?: string;
  subModelId?: string;
  previewPath?: string;
  resourcePath?: string;
  name?: string;
  title?: string;
  type?: string;
  ifOpen?: number;
  organizeId?: string;
  creatorId?: string;
}

export const getModelResourceSimple = async (id: string): StandardPromise<ModelResource> => {
  return request('/horsecoder-model/api/auto/model/resource/single/simple', {
    params: { id },
  });
};

export const getModelResource = async (id: string): StandardPromise<ModelResource> => {
  return request('/horsecoder-model/api/auto/model/resource/single', {
    params: { id },
  });
};

export const getModelResourceList = async (params: ModelResourceFilterMapper): StandardPromise<ModelResource[]> => {
  return request('/horsecoder-model/api/auto/model/resource/filter', { params });
};

export const getModelResourceDetailList = async (params: ModelResourceFilterMapper): StandardPromise<ModelResource[]> => {
  return request('/horsecoder-model/api/auto/model/resource/filter/detail', { params });
};

export const postModelResource = async (params: ModelResourcePostMapper): StandardPromise<ModelResource> => {
  return request('/horsecoder-model/api/auto/model/resource', {
    method: 'POST',
    data: { ...params },
  });
};

export const postModelResourceBatch = async (params: ModelResourcePostMapper[]): StandardPromise<ModelResource[]> => {
  return request('/horsecoder-model/api/auto/model/resource/batch', {
    method: 'POST',
    data: params,
  });
};

export const updateModelResource = async (params: ModelResourceUpdateMapper): StandardPromise<ModelResource> => {
  return request('/horsecoder-model/api/auto/model/resource', {
    method: 'PATCH',
    data: { ...params },
  });
};

export const updateModelResourceBatch = async (params: ModelResourceUpdateMapper[]): StandardPromise<ModelResource[]> => {
  return request('/horsecoder-model/api/auto/model/resource/batch', {
    method: 'PATCH',
    data: params,
  });
};

export const putModelResource = async (params: ModelResourceUpdateMapper): StandardPromise<ModelResource> => {
  return request('/horsecoder-model/api/auto/model/resource', {
    method: 'PUT',
    data: { ...params },
  });
};

export const putModelResourceBatch = async (params: ModelResourceUpdateMapper[]): StandardPromise<ModelResource[]> => {
  return request('/horsecoder-model/api/auto/model/resource/batch', {
    method: 'PUT',
    data: params,
  });
};

export const deleteModelResource = async (id: string): StandardPromise<number> => {
  return request('/horsecoder-model/api/auto/model/resource', {
    method: 'DELETE',
    params: { id },
  });
};

export const deleteModelResourceBatch = async (idList: string[]): StandardPromise<number> => {
  return request('/horsecoder-model/api/auto/model/resource/batch', {
    method: 'DELETE',
    params: { idList },
  });
};
