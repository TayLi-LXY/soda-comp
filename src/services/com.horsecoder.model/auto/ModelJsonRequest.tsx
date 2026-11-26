import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';
import type { ModelJson } from '@/types/com.horsecoder.model/auto/ModelJson';

export interface ModelJsonFilterMapper {
  id?: string;
  idIn?: string[];
  modelId?: string;
  modelIdIn?: string[];
  modelIdLike?: string;
  subModelId?: string;
  subModelIdIn?: string[];
  subModelIdLike?: string;
  type?: string;
  subType?: string;
  subTypeIn?: string[];
  version?: string;
  title?: string;
  titleIn?: string[];
  name?: string;
  nameLike?: string;
  jsonPath?: string;
  zipPath?: string;
  demandPath?: string;
  ifNewest?: number;
  status?: string;
  lockedBy?: string;
  lockedByIn?: string[];
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

export interface ModelJsonPostMapper {
  modelId: string;
  subModelId: string;
  type: string;
  subType: string;
  version?: string;
  title?: string;
  name: string;
  jsonPath: string;
  zipPath?: string;
  demandPath?: string;
  ifNewest?: number;
  status?: string;
  lockedBy?: string;
  ifOpen?: number;
  organizeId: string;
  creatorId: string;
}

export interface ModelJsonUpdateMapper {
  id: string;
  modelId?: string;
  subModelId?: string;
  type?: string;
  subType?: string;
  version?: string;
  title?: string;
  name?: string;
  jsonPath?: string;
  zipPath?: string;
  demandPath?: string;
  ifNewest?: number;
  status?: string;
  lockedBy?: string;
  ifOpen?: number;
  organizeId?: string;
  creatorId?: string;
}

export const getModelJsonSimple = async (id: string): StandardPromise<ModelJson> => {
  return request('/horsecoder-model/api/auto/model/json/single/simple', {
    params: { id },
  });
};

export const getModelJson = async (id: string): StandardPromise<ModelJson> => {
  return request('/horsecoder-model/api/auto/model/json/single', {
    params: { id },
  });
};

export const getModelJsonList = async (params: ModelJsonFilterMapper): StandardPromise<ModelJson[]> => {
  return request('/horsecoder-model/api/auto/model/json/filter', { params });
};

export const getModelJsonDetailList = async (params: ModelJsonFilterMapper): StandardPromise<ModelJson[]> => {
  return request('/horsecoder-model/api/auto/model/json/filter/detail', { params });
};

export const postModelJson = async (params: ModelJsonPostMapper): StandardPromise<ModelJson> => {
  return request('/horsecoder-model/api/auto/model/json', {
    method: 'POST',
    data: { ...params },
  });
};

export const postModelJsonBatch = async (params: ModelJsonPostMapper[]): StandardPromise<ModelJson[]> => {
  return request('/horsecoder-model/api/auto/model/json/batch', {
    method: 'POST',
    data: params,
  });
};

export const updateModelJson = async (params: ModelJsonUpdateMapper): StandardPromise<ModelJson> => {
  return request('/horsecoder-model/api/auto/model/json', {
    method: 'PATCH',
    data: { ...params },
  });
};

export const updateModelJsonBatch = async (params: ModelJsonUpdateMapper[]): StandardPromise<ModelJson[]> => {
  return request('/horsecoder-model/api/auto/model/json/batch', {
    method: 'PATCH',
    data: params,
  });
};

export const putModelJson = async (params: ModelJsonUpdateMapper): StandardPromise<ModelJson> => {
  return request('/horsecoder-model/api/auto/model/json', {
    method: 'PUT',
    data: { ...params },
  });
};

export const putModelJsonBatch = async (params: ModelJsonUpdateMapper[]): StandardPromise<ModelJson[]> => {
  return request('/horsecoder-model/api/auto/model/json/batch', {
    method: 'PUT',
    data: params,
  });
};

export const deleteModelJson = async (id: string): StandardPromise<number> => {
  return request('/horsecoder-model/api/auto/model/json', {
    method: 'DELETE',
    params: { id },
  });
};

export const deleteModelJsonBatch = async (idList: string[]): StandardPromise<number> => {
  return request('/horsecoder-model/api/auto/model/json/batch', {
    method: 'DELETE',
    params: { idList },
  });
};
