import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';
import type { ModelSceneJson } from '@/types/com.horsecoder.model/auto/ModelSceneJson';

export interface ModelSceneJsonFilterMapper {
  id?: string;
  idIn?: string[];
  modelSceneId?: string;
  modelSceneIdIn?: string[];
  modelId?: string;
  modelIdIn?: string[];
  subModelId?: string;
  subModelIdIn?: string[];
  type?: string;
  subType?: string;
  version?: string;
  preVersion?: string;
  title?: string;
  titleIn?: string[];
  name?: string;
  nameLike?: string;
  jsonPath?: string;
  zipPath?: string;
  ifNewest?: number;
  status?: string;
  lockedBy?: string;
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

export interface ModelSceneJsonPostMapper {
  modelSceneId?: string;
  modelId?: string;
  subModelId: string;
  type: string;
  subType: string;
  version?: string;
  preVersion?: string;
  title?: string;
  name: string;
  jsonPath: string;
  zipPath?: string;
  ifNewest?: number;
  status?: string;
  lockedBy?: string;
  organizeId: string;
  creatorId: string;
}

export interface ModelSceneJsonUpdateMapper {
  id: string;
  modelSceneId?: string;
  modelId?: string;
  subModelId?: string;
  type?: string;
  subType?: string;
  version?: string;
  preVersion?: string;
  title?: string;
  name?: string;
  jsonPath?: string;
  zipPath?: string;
  ifNewest?: number;
  status?: string;
  lockedBy?: string;
  organizeId?: string;
  creatorId?: string;
}

export const getModelSceneJsonSimple = async (id: string): StandardPromise<ModelSceneJson> => {
  return request('/horsecoder-model/api/auto/model/scene/json/single/simple', {
    params: { id },
  });
};

export const getModelSceneJson = async (id: string): StandardPromise<ModelSceneJson> => {
  return request('/horsecoder-model/api/auto/model/scene/json/single', {
    params: { id },
  });
};

export const getModelSceneJsonList = async (params: ModelSceneJsonFilterMapper): StandardPromise<ModelSceneJson[]> => {
  return request('/horsecoder-model/api/auto/model/scene/json/filter', { params });
};

export const getModelSceneJsonDetailList = async (params: ModelSceneJsonFilterMapper): StandardPromise<ModelSceneJson[]> => {
  return request('/horsecoder-model/api/auto/model/scene/json/filter/detail', { params });
};

export const postModelSceneJson = async (params: ModelSceneJsonPostMapper): StandardPromise<ModelSceneJson> => {
  return request('/horsecoder-model/api/auto/model/scene/json', {
    method: 'POST',
    data: { ...params },
  });
};

export const postModelSceneJsonBatch = async (params: ModelSceneJsonPostMapper[]): StandardPromise<ModelSceneJson[]> => {
  return request('/horsecoder-model/api/auto/model/scene/json/batch', {
    method: 'POST',
    data: params,
  });
};

export const updateModelSceneJson = async (params: ModelSceneJsonUpdateMapper): StandardPromise<ModelSceneJson> => {
  return request('/horsecoder-model/api/auto/model/scene/json', {
    method: 'PATCH',
    data: { ...params },
  });
};

export const updateModelSceneJsonBatch = async (params: ModelSceneJsonUpdateMapper[]): StandardPromise<ModelSceneJson[]> => {
  return request('/horsecoder-model/api/auto/model/scene/json/batch', {
    method: 'PATCH',
    data: params,
  });
};

export const putModelSceneJson = async (params: ModelSceneJsonUpdateMapper): StandardPromise<ModelSceneJson> => {
  return request('/horsecoder-model/api/auto/model/scene/json', {
    method: 'PUT',
    data: { ...params },
  });
};

export const putModelSceneJsonBatch = async (params: ModelSceneJsonUpdateMapper[]): StandardPromise<ModelSceneJson[]> => {
  return request('/horsecoder-model/api/auto/model/scene/json/batch', {
    method: 'PUT',
    data: params,
  });
};

export const deleteModelSceneJson = async (id: string): StandardPromise<number> => {
  return request('/horsecoder-model/api/auto/model/scene/json', {
    method: 'DELETE',
    params: { id },
  });
};

export const deleteModelSceneJsonBatch = async (idList: string[]): StandardPromise<number> => {
  return request('/horsecoder-model/api/auto/model/scene/json/batch', {
    method: 'DELETE',
    params: { idList },
  });
};
