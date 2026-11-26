import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';
import type { ModelScene } from '@/types/com.horsecoder.model/auto/ModelScene';

export interface ModelSceneFilterMapper {
  id?: string;
  title?: string;
  titleLike?: string;
  name?: string;
  nameIn?: string[];
  description?: string;
  cover?: string;
  sourceModelId?: string;
  sourceModelIdIn?: string[];
  type?: string;
  typeIn?: string[];
  subType?: string;
  subTypeIn?: string[];
  ifNewest?: number;
  ifNewestIn?: number[];
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

export interface ModelScenePostMapper {
  title?: string;
  name: string;
  description?: string;
  cover?: string;
  sourceModelId?: string;
  type?: string;
  subType?: string;
  ifNewest?: number;
  organizeId: string;
  creatorId: string;
}

export interface ModelSceneUpdateMapper {
  id: string;
  title?: string;
  name?: string;
  description?: string;
  cover?: string;
  sourceModelId?: string;
  type?: string;
  subType?: string;
  ifNewest?: number;
  organizeId?: string;
  creatorId?: string;
}

export const getModelSceneSimple = async (id: string): StandardPromise<ModelScene> => {
  return request('/horsecoder-model/api/auto/model/scene/single/simple', {
    params: { id },
  });
};

export const getModelScene = async (id: string): StandardPromise<ModelScene> => {
  return request('/horsecoder-model/api/auto/model/scene/single', {
    params: { id },
  });
};

export const getModelSceneList = async (params: ModelSceneFilterMapper): StandardPromise<ModelScene[]> => {
  return request('/horsecoder-model/api/auto/model/scene/filter', { params });
};

export const getModelSceneDetailList = async (params: ModelSceneFilterMapper): StandardPromise<ModelScene[]> => {
  return request('/horsecoder-model/api/auto/model/scene/filter/detail', { params });
};

export const postModelScene = async (params: ModelScenePostMapper): StandardPromise<ModelScene> => {
  return request('/horsecoder-model/api/auto/model/scene', {
    method: 'POST',
    data: { ...params },
  });
};

export const postModelSceneBatch = async (params: ModelScenePostMapper[]): StandardPromise<ModelScene[]> => {
  return request('/horsecoder-model/api/auto/model/scene/batch', {
    method: 'POST',
    data: params,
  });
};

export const updateModelScene = async (params: ModelSceneUpdateMapper): StandardPromise<ModelScene> => {
  return request('/horsecoder-model/api/auto/model/scene', {
    method: 'PATCH',
    data: { ...params },
  });
};

export const updateModelSceneBatch = async (params: ModelSceneUpdateMapper[]): StandardPromise<ModelScene[]> => {
  return request('/horsecoder-model/api/auto/model/scene/batch', {
    method: 'PATCH',
    data: params,
  });
};

export const putModelScene = async (params: ModelSceneUpdateMapper): StandardPromise<ModelScene> => {
  return request('/horsecoder-model/api/auto/model/scene', {
    method: 'PUT',
    data: { ...params },
  });
};

export const putModelSceneBatch = async (params: ModelSceneUpdateMapper[]): StandardPromise<ModelScene[]> => {
  return request('/horsecoder-model/api/auto/model/scene/batch', {
    method: 'PUT',
    data: params,
  });
};

export const deleteModelScene = async (id: string): StandardPromise<number> => {
  return request('/horsecoder-model/api/auto/model/scene', {
    method: 'DELETE',
    params: { id },
  });
};

export const deleteModelSceneBatch = async (idList: string[]): StandardPromise<number> => {
  return request('/horsecoder-model/api/auto/model/scene/batch', {
    method: 'DELETE',
    params: { idList },
  });
};
