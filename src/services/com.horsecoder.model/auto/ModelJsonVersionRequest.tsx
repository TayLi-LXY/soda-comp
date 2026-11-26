import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';
import type { ModelJsonVersion } from '@/types/com.horsecoder.model/auto/ModelJsonVersion';

export interface ModelJsonVersionFilterMapper {
  id?: string;
  modelJsonId?: string;
  modelJsonIdIn?: string[];
  version?: string;
  versionIn?: string[];
  preVersion?: string;
  preVersionIn?: string[];
  ifNewest?: number;
  ifNewestIn?: number[];
  modelVersionId?: string;
  modelVersionIdIn?: string[];
  versionType?: string;
  versionTypeIn?: string[];
  modelId?: string;
  modelIdIn?: string[];
  subModelId?: string;
  subModelIdIn?: string[];
  type?: string;
  typeIn?: string[];
  subType?: string;
  subTypeIn?: string[];
  title?: string;
  titleIn?: string[];
  name?: string;
  nameIn?: string[];
  jsonPath?: string;
  zipPath?: string;
  demandPath?: string;
  ifOpen?: number;
  ifOpenIn?: number[];
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

export interface ModelJsonVersionPostMapper {
  modelJsonId?: string;
  version: string;
  preVersion?: string;
  ifNewest?: number;
  modelVersionId?: string;
  versionType: string;
  modelId: string;
  subModelId: string;
  type: string;
  subType: string;
  title: string;
  name: string;
  jsonPath: string;
  zipPath?: string;
  demandPath?: string;
  ifOpen?: number;
  organizeId: string;
  creatorId: string;
}

export interface ModelJsonVersionUpdateMapper {
  id: string;
  modelJsonId?: string;
  version?: string;
  preVersion?: string;
  ifNewest?: number;
  modelVersionId?: string;
  versionType?: string;
  modelId?: string;
  subModelId?: string;
  type?: string;
  subType?: string;
  title?: string;
  name?: string;
  jsonPath?: string;
  zipPath?: string;
  demandPath?: string;
  ifOpen?: number;
  organizeId?: string;
  creatorId?: string;
}

export const getModelJsonVersionSimple = async (id: string): StandardPromise<ModelJsonVersion> => {
  return request('/horsecoder-model/api/auto/model/json/version/single/simple', {
    params: { id },
  });
};

export const getModelJsonVersion = async (id: string): StandardPromise<ModelJsonVersion> => {
  return request('/horsecoder-model/api/auto/model/json/version/single', {
    params: { id },
  });
};

export const getModelJsonVersionList = async (params: ModelJsonVersionFilterMapper): StandardPromise<ModelJsonVersion[]> => {
  return request('/horsecoder-model/api/auto/model/json/version/filter', { params });
};

export const getModelJsonVersionDetailList = async (params: ModelJsonVersionFilterMapper): StandardPromise<ModelJsonVersion[]> => {
  return request('/horsecoder-model/api/auto/model/json/version/filter/detail', { params });
};

export const postModelJsonVersion = async (params: ModelJsonVersionPostMapper): StandardPromise<ModelJsonVersion> => {
  return request('/horsecoder-model/api/auto/model/json/version', {
    method: 'POST',
    data: { ...params },
  });
};

export const postModelJsonVersionBatch = async (params: ModelJsonVersionPostMapper[]): StandardPromise<ModelJsonVersion[]> => {
  return request('/horsecoder-model/api/auto/model/json/version/batch', {
    method: 'POST',
    data: params,
  });
};

export const updateModelJsonVersion = async (params: ModelJsonVersionUpdateMapper): StandardPromise<ModelJsonVersion> => {
  return request('/horsecoder-model/api/auto/model/json/version', {
    method: 'PATCH',
    data: { ...params },
  });
};

export const updateModelJsonVersionBatch = async (params: ModelJsonVersionUpdateMapper[]): StandardPromise<ModelJsonVersion[]> => {
  return request('/horsecoder-model/api/auto/model/json/version/batch', {
    method: 'PATCH',
    data: params,
  });
};

export const putModelJsonVersion = async (params: ModelJsonVersionUpdateMapper): StandardPromise<ModelJsonVersion> => {
  return request('/horsecoder-model/api/auto/model/json/version', {
    method: 'PUT',
    data: { ...params },
  });
};

export const putModelJsonVersionBatch = async (params: ModelJsonVersionUpdateMapper[]): StandardPromise<ModelJsonVersion[]> => {
  return request('/horsecoder-model/api/auto/model/json/version/batch', {
    method: 'PUT',
    data: params,
  });
};

export const deleteModelJsonVersion = async (id: string): StandardPromise<number> => {
  return request('/horsecoder-model/api/auto/model/json/version', {
    method: 'DELETE',
    params: { id },
  });
};

export const deleteModelJsonVersionBatch = async (idList: string[]): StandardPromise<number> => {
  return request('/horsecoder-model/api/auto/model/json/version/batch', {
    method: 'DELETE',
    params: { idList },
  });
};
