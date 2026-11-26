import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';
import type { Model } from '@/types/com.horsecoder.model/auto/Model';

export interface ModelFilterMapper {
  id?: string;
  spaceId?: string;
  projectId?: string;
  title?: string;
  titleIn?: string[];
  name?: string;
  nameLike?: string;
  description?: string;
  cover?: string;
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

export interface ModelPostMapper {
  spaceId: string;
  projectId: string;
  title?: string;
  name: string;
  description?: string;
  cover?: string;
  organizeId: string;
  creatorId: string;
}

export interface ModelUpdateMapper {
  id: string;
  spaceId?: string;
  projectId?: string;
  title?: string;
  name?: string;
  description?: string;
  cover?: string;
  organizeId?: string;
  creatorId?: string;
}

export const getModelSimple = async (id: string): StandardPromise<Model> => {
  return request('/horsecoder-model/api/auto/model/single/simple', {
    params: { id },
  });
};

export const getModel = async (id: string): StandardPromise<Model> => {
  return request('/horsecoder-model/api/auto/model/single', {
    params: { id },
  });
};

export const getModelList = async (params: ModelFilterMapper): StandardPromise<Model[]> => {
  return request('/horsecoder-model/api/auto/model/filter', { params });
};

export const getModelDetailList = async (params: ModelFilterMapper): StandardPromise<Model[]> => {
  return request('/horsecoder-model/api/auto/model/filter/detail', { params });
};

export const postModel = async (params: ModelPostMapper): StandardPromise<Model> => {
  return request('/horsecoder-model/api/auto/model', {
    method: 'POST',
    data: { ...params },
  });
};

export const postModelBatch = async (params: ModelPostMapper[]): StandardPromise<Model[]> => {
  return request('/horsecoder-model/api/auto/model/batch', {
    method: 'POST',
    data: params,
  });
};

export const updateModel = async (params: ModelUpdateMapper): StandardPromise<Model> => {
  return request('/horsecoder-model/api/auto/model', {
    method: 'PATCH',
    data: { ...params },
  });
};

export const updateModelBatch = async (params: ModelUpdateMapper[]): StandardPromise<Model[]> => {
  return request('/horsecoder-model/api/auto/model/batch', {
    method: 'PATCH',
    data: params,
  });
};

export const putModel = async (params: ModelUpdateMapper): StandardPromise<Model> => {
  return request('/horsecoder-model/api/auto/model', {
    method: 'PUT',
    data: { ...params },
  });
};

export const putModelBatch = async (params: ModelUpdateMapper[]): StandardPromise<Model[]> => {
  return request('/horsecoder-model/api/auto/model/batch', {
    method: 'PUT',
    data: params,
  });
};

export const deleteModel = async (id: string): StandardPromise<number> => {
  return request('/horsecoder-model/api/auto/model', {
    method: 'DELETE',
    params: { id },
  });
};

export const deleteModelBatch = async (idList: string[]): StandardPromise<number> => {
  return request('/horsecoder-model/api/auto/model/batch', {
    method: 'DELETE',
    params: { idList },
  });
};
